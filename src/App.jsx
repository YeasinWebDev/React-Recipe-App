import './App.css'
// import Pages from './Pages/Pages'
import Category from './Component/Category'
import { BrowserRouter } from 'react-router-dom'
import Search from './Component/Search'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'


function App() {

  return (
    <div>
    <BrowserRouter>
      <Header/>
      <Search/>
      <Category/>
      <Pages />
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
