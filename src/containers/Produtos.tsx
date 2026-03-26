import ProdutoComponent from '../components/Produto'
import * as S from './styles'
import { useGetProdutosQuery } from '../services/api'

const Produtos = () => {
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (isError) {
    return <p>Erro ao carregar produtos</p>
  }

  return (
    <S.Container>
      {produtos?.map((produto) => (
        <ProdutoComponent key={produto.id} produto={produto} />
      ))}
    </S.Container>
  )
}

export default Produtos
