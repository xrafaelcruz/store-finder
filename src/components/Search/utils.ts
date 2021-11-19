import { Store } from 'types/store'

type ClientCoordinates = {
  latitude?: number
  longitude?: number
}

export const getFirstStores = (stores: Store[]) => {
  return stores.slice(0, 3)
}

const isNumber = (value: string | number | undefined): boolean => {
  return value !== undefined && !isNaN(Number(value.toString()))
}

const getLatitudeLongitudeFromInput = (value: string): ClientCoordinates => {
  const split = value.split(';')

  const coordinates: ClientCoordinates = {}

  if (split[0] && isNumber(split[0])) {
    coordinates.latitude = Number(split[0])
  }

  if (split[1] && isNumber(split[1])) {
    coordinates.longitude = Number(split[1])
  }

  return coordinates
}

const calcClientAndStoreDistance = (
  client: ClientCoordinates,
  store: Store
) => {
  const xa = client.latitude as number
  const ya = client.longitude as number

  const xb = store.latitude
  const yb = store.longitude

  const xbSubtractXa = xb - xa
  const ybSubtractYa = yb - ya

  const powXbSubtractXa = Math.pow(xbSubtractXa, 2)
  const powYbSubtractYa = Math.pow(ybSubtractYa, 2)

  const sumPowers = powXbSubtractXa + powYbSubtractYa

  const distance = Math.sqrt(sumPowers)

  return distance
}

const orderByDistance = (a: Store, b: Store) => {
  if (a.distance !== undefined && b.distance !== undefined) {
    if (a.distance < b.distance) {
      return -1
    }

    if (a.distance > b.distance) {
      return 1
    }
  }

  return 0
}

const setStoresDistance = (client: ClientCoordinates, stores: Store[]) => {
  return stores.map((store: Store) => {
    const distance = calcClientAndStoreDistance(client, store)
    store.distance = distance

    return store
  })
}

const getOrderedStoresByDistance = (
  client: ClientCoordinates,
  stores: Store[]
) => {
  const storesWithDistance = setStoresDistance(client, stores)
  const orderedStores = storesWithDistance.sort(orderByDistance)

  return orderedStores
}

export const getNearestStores = (
  stores: Store[],
  inputSearchValue: string
): Store[] => {
  const clientCoordinates = getLatitudeLongitudeFromInput(inputSearchValue)

  if (
    !isNumber(clientCoordinates.latitude) ||
    !isNumber(clientCoordinates.longitude)
  ) {
    return []
  }

  const orderedStores = getOrderedStoresByDistance(clientCoordinates, stores)

  return getFirstStores(orderedStores)
}
