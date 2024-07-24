import './App.css'
import CharacterForm from './Components/CharacterForm'
import { PartyList } from './Components/PartyList'

function App() {
  return (
    <>
      <h1>DnD Party List</h1>
      <CharacterForm />
      <br />
      <PartyList />
    </>
  )
}

export default App
