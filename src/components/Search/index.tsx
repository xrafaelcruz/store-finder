import { useRef, Dispatch, FormEvent, SetStateAction } from 'react'

import { Store } from 'types/store'
import { UpdateMarkers } from 'components/Map/useMap'
import { SearchStep } from 'templates/Stores/SectionSearch'

import { getNearestStores } from './utils'

import * as S from './styles'

type SearchProps = {
  stores: Store[]
  setStep: Dispatch<SetStateAction<SearchStep>>
  setNearestStores: Dispatch<SetStateAction<Store[]>>
  updateMarkers: UpdateMarkers
}

const Search = ({
  stores,
  setStep,
  setNearestStores,
  updateMarkers
}: SearchProps) => {
  const searchRef = useRef<HTMLInputElement>(null)

  const searchNearestStores = (e: FormEvent) => {
    e.preventDefault()

    const inputSearchValue = searchRef?.current?.value

    if (!inputSearchValue) return null

    const newNearestStores = getNearestStores(stores, inputSearchValue)
    setNearestStores(newNearestStores)
    updateMarkers(newNearestStores)

    setStep(2)
  }

  return (
    <S.Form onSubmit={searchNearestStores}>
      <S.InputWrapper>
        <S.IconButton>
          <S.Icon />
        </S.IconButton>

        {/* Não entendi exatamente como a busca da coordenada deveria ser feita, então adotei esse modelo latitude;longitude*/}
        <S.Input
          ref={searchRef}
          placeholder="Ex: latitude;longitude"
          title="Separe por ; latitude e longitude"
        />
      </S.InputWrapper>

      <S.Button>Buscar</S.Button>
    </S.Form>
  )
}

export default Search
