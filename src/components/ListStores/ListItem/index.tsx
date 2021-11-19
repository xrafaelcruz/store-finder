import { memo, Dispatch, SetStateAction } from 'react'

import { Store } from 'types/store'
import { CenterMap } from 'components/Map/useMap'

import * as S from './styles'
import MapIcon from './../../Icons/icon_pin_link.svg'

export type ListItemProps = {
  store: Store
  centerMap: CenterMap
  setMapIsVisible: Dispatch<SetStateAction<boolean>>
}

const ListItem = ({ store, centerMap, setMapIsVisible }: ListItemProps) => {
  const distance = store?.distance?.toFixed(2).replace('.', ',')

  const handleClickItem = () => {
    centerMap(store.longitude, store.latitude, 14)
  }

  const handleClickMapButton = () => {
    handleClickItem()
    setMapIsVisible(true)
  }

  return (
    <S.Item>
      <S.Title>
        <S.Text onClick={handleClickItem}>{store.name}</S.Text>
        <S.Distance>{distance}km</S.Distance>
      </S.Title>

      <S.MapButton onClick={handleClickMapButton}>
        <MapIcon />
        Ver no mapa
      </S.MapButton>

      <S.Info>
        <S.Address>{store.adress}</S.Address>

        <S.Attendance>
          Atendimento:
          <br />
          Segunda a Sábado 10h às 22h | Domingo 11h às 20h
        </S.Attendance>

        <S.Available>Disponível em 4 dias úteis</S.Available>
      </S.Info>
    </S.Item>
  )
}

export default memo(ListItem)
