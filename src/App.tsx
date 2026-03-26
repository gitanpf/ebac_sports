import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
