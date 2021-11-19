import { RefObject, Dispatch, SetStateAction } from 'react'

import useMap from './useMap'

import IconClose from './../Icons/icon_close.svg'

import * as S from './styles'
import 'mapbox-gl/dist/mapbox-gl.css'

export type MapWrapper = {
  height: string
  mapIsVisible: boolean
}

type MapProps = MapWrapper & {
  mapRef: RefObject<HTMLDivElement>
  setMapIsVisible: Dispatch<SetStateAction<boolean>>
}

const Map = ({ mapRef, setMapIsVisible, height, mapIsVisible }: MapProps) => {
  const closeMap = () => {
    setMapIsVisible(false)
  }

  return (
    <S.Wrapper height={height} mapIsVisible={mapIsVisible}>
      <S.Bar mapIsVisible={mapIsVisible}>
        <IconClose onClick={closeMap} />
      </S.Bar>

      <S.Map ref={mapRef} />
    </S.Wrapper>
  )
}

export { Map, useMap }
