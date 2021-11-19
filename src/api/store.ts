// import api from './index'
import mockStores from './mockStores.json'
import { StoreAPI } from 'types/store'

export const getStores = async () => {
  let stores: StoreAPI[] = []

  try {
    // stores = await api<StoreAPI[]>(`${process.env.API_URL}/stores`, { method: 'GET' })
    stores = mockStores as unknown as StoreAPI[]
  } catch (error) {
    console.log(error)
    console.log('Erro ao buscar as lojas')
  }

  return stores
}
