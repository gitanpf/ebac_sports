import { useSelector } from 'react-redux'

import * as S from './styles'
import { Produto } from '../../types'

import cesta from '../../assets/cesta.png'

import { paraReal } from '../Produto'
import { RootState } from '../../store'

const Header = () => {
  const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens)

  const itensFavoritos = useSelector(
    (state: RootState) => state.favoritos.itens
  )

  const valorTotal = itensCarrinho.reduce(
    (acc: number, item: Produto) => acc + item.preco,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritos.length} ♥ Favoritos</span>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {itensCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
