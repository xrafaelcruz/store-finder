import { useState } from 'react'

import Search from 'components/Search'
import List from 'components/ListStores'
import { Map, useMap } from 'components/Map'

import { Store } from 'types/store'

import * as S from './styles'

export type SectionSearchProps = {
  stores: Store[]
}

export type SearchStep = 1 | 2

const SectionSearch = ({ stores }: SectionSearchProps) => {
  const [step, setStep] = useState<SearchStep>(1)
  const [mapIsVisible, setMapIsVisible] = useState(false)
  const [nearestStores, setNearestStores] = useState<Store[]>([])
  const { mapRef, centerMap, updateMarkers } = useMap()

  return (
    <S.Section>
      <S.Title>Lojas</S.Title>

      <Search
        stores={stores}
        setStep={setStep}
        setNearestStores={setNearestStores}
        updateMarkers={updateMarkers}
      />

      <S.Content isVisible={step === 2}>
        <List
          stores={nearestStores}
          centerMap={centerMap}
          setMapIsVisible={setMapIsVisible}
        />

        <Map
          mapRef={mapRef}
          height={S.contentHeight}
          mapIsVisible={mapIsVisible}
          setMapIsVisible={setMapIsVisible}
        />
      </S.Content>
    </S.Section>
  )
}

export default SectionSearch
