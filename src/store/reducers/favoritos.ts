import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const existe = state.itens.some((item) => item.id === produto.id)

      if (existe) {
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
