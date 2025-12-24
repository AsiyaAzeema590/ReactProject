
import './App.css'
import LogIn from './Components/LogIn'
import Profile from './Components/Profile'
import UsercontextProvider from './Context/UserContextProvider'

function App() {
 

  return (
    <UsercontextProvider>
      <h1>React with chai</h1>
      <LogIn/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default App
