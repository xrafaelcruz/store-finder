import SectionSearch from './SectionSearch'
import { Store } from 'types/store'
import * as S from './styles'

export type StoresPageProps = {
  stores: Store[]
}

const StoresPage = ({ stores }: StoresPageProps) => (
  <S.Main>
    <S.Container>
      <SectionSearch stores={stores} />
    </S.Container>
  </S.Main>
)

export default StoresPage
