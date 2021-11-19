import { useRef, useEffect, useState, useCallback } from 'react'
import mapboxgl, { Marker, Map } from 'mapbox-gl'
import { Store } from 'types/store'
import { getIconMarker } from './utils'

export type CenterMap = (lng: number, lat: number, zoom?: number) => void
export type UpdateMarkers = (stores: Store[]) => void

mapboxgl.accessToken = process.env.MAP_ACCESS_TOKEN as string

const defaultConfigs = {
  zoom: 4
}

const useMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<Map>()

  const [markers, setMarkers] = useState<Marker[]>([])

  const centerMap = useCallback<CenterMap>(
    (lng, lat, zoom = defaultConfigs.zoom) => {
      map?.resize()
      map?.flyTo({ center: [lng, lat], zoom, speed: 5 })
    },
    [map]
  )

  const createIconMarker = () => {
    const el = document.createElement('div')
    el.style.width = '40px'
    el.style.height = '40px'
    el.insertAdjacentHTML('afterbegin', getIconMarker())

    return el
  }

  const createMarker = useCallback(
    (store: Store) => {
      const marker = new mapboxgl.Marker(createIconMarker())
        .setLngLat([store.longitude, store.latitude])
        .addTo(map as Map)

      return marker
    },
    [map]
  )

  const clearMarkers = useCallback(() => {
    markers.map((marker: Marker) => marker.remove())
  }, [markers])

  const updateMarkers = useCallback<UpdateMarkers>(
    (stores) => {
      if (map) {
        clearMarkers()

        if (stores.length) {
          centerMap(stores[0].longitude, stores[0].latitude)
          setMarkers(stores.map((store: Store) => createMarker(store)))
        }
      }
    },
    [map, clearMarkers, centerMap, createMarker]
  )

  useEffect(() => {
    if (!map && mapRef.current) {
      const initMap = () => {
        const newMap = new mapboxgl.Map({
          container: mapRef.current as HTMLElement,
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: defaultConfigs.zoom
        })

        newMap.on('load', () => {
          newMap.resize()
        })

        setMap(newMap)
      }

      initMap()
    }
  }, [map])

  return { mapRef, centerMap, updateMarkers }
}

export default useMap
