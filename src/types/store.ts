export type StoreAPI = {
  name: string
  number: number
  latitude: number
  longitude: number
  adress: string
}

export type Store = StoreAPI & {
  distance?: number
}
