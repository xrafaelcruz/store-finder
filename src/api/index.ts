type FetchParams = {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT'
}

const api = <T>(url: string, params: FetchParams): Promise<T> =>
  fetch(url, params)
    .then((res) => res.json())
    .then((res: T) => res)

export default api
