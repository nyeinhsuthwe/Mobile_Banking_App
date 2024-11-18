import './App.css';
import { Outlet} from 'react-router-dom'
import Nav from './components/Nav'

function App() {

  return (
    <>
    <Nav/>
    <div className='container max-h-full xs:mx-auto sm:mx-auto md:mx-auto lg:mx-auto'>
    <Outlet/>
    </div>
    </>
  )
}

export default App
