import Filter from './Filter'
import ListItem, { ListItemProps } from './ListItem'

import { Store } from 'types/store'

import * as S from './styles'

type ListStoresProps = Omit<ListItemProps, 'store'> & {
  stores: Store[]
}

const ListStores = ({ stores, ...props }: ListStoresProps) => (
  <S.Wrapper>
    <Filter />

    <S.List>
      {stores.map((store: Store) => (
        <ListItem store={store} key={store.number} {...props} />
      ))}
    </S.List>
  </S.Wrapper>
)

export default ListStores
