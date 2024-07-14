import BarraLateral from './containers/BarraLateral'
import EstiloGlobal, { ContainerGeral } from './globalStyles'
import { SecaoPrincipal } from './containers/SecaoPrincipal'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <ContainerGeral>
        <BarraLateral />
        <SecaoPrincipal />
      </ContainerGeral>
      {/* Parei na aula Conheça Enums */}
    </Provider>
  )
}

export default App
