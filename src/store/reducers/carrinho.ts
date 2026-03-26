import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../types'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoAdicionado = action.payload

      const existe = state.itens.find(
        (produto) => produto.id === produtoAdicionado.id
      )

      if (existe) return

      state.itens.push(produtoAdicionado)
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer