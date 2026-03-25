import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produtos } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produtos[], void>({
      query: () => 'api'
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
