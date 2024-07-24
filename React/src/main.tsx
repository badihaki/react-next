import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PartyContextProvider } from './Components/Context/PartyContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <PartyContextProvider>
      <App />
  </PartyContextProvider>
  // {/* </React.StrictMode>, */}
)
