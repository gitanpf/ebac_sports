import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

import api from '../services/api'

import { useGetProdutosQuery } from '../services/api'

const Produtos () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>


  
  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
