import { GlobalStyle } from "./GlobalStyles"
import Router from "./Routes/routes"
import State from "./contexts/State"

function App() {
  return (
    <State>
      <GlobalStyle />
      <Router />
    </State>
  )
}

export default App
