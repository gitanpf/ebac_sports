import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itensCarrinho: Produto[]
}

const initialState: CarrinhoState = {
  itensCarrinho: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoAdc = action.payload

      if (state.itensCarrinho.find((produto) => produto.id === produtoAdc.id)) {
        alert('Item já adicionado!')
      } else {
        state.itensCarrinho.push(produtoAdc)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
