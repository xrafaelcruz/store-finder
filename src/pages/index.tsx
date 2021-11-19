import { GetStaticProps } from 'next'
import Head from 'next/head'

import StoresPage, { StoresPageProps } from 'templates/Stores'

import { Store } from 'types/store'
import { getStores } from 'api/store'

const Index = (props: StoresPageProps) => (
  <>
    <Head>
      <title>Encontre a sua loja mais próxima</title>
      <meta name="description" content="Localizador de lojas" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <StoresPage {...props} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const stores: Store[] = await getStores()

  return { props: { stores } }
}

export default Index
