import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itensFavoritos: Produto[]
}

const initialState: FavoritosState = {
  itensFavoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const existe = state.itensFavoritos.find((p) => p.id === produto.id)

      if (existe) {
        state.itensFavoritos = state.itensFavoritos.filter((p) => p.id !== produto.id)
      } else {
        state.itensFavoritos.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
