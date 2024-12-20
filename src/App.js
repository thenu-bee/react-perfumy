import Navbar from './components/Navbar'
import Product from './components/products'
import Search from './components/Search'
import About from './components/About'
import Footer from './components/footer'

function App()

{
    return(
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Product></Product>
            <About></About>
            <Footer></Footer>

        </div>
    )
}

export default App 