import './styles/custom.sass'

import Banner from "./components/Banner/Banner"
import Category from "./components/Category/Category"
import Filter from "./components/Filter/Filter"
import Header from "./components/Header/Header"
import Product from "./components/Product/Product"
import Partner from './components/Partners/Partner'
import Brands from './components/Brands/Brands'

function App() {
  return(
    <>
      <Header />
      <Banner />
      <Category />

      <section className='section-product'>
        <h2>Produtos relacionados</h2>
          <Filter />
          <Product />
      </section>

      <Partner />

      <section className='section-product'>
        <h2>Produtos relacionados</h2>
          <p>Ver todos</p>
          <Product />
      </section>

      <Partner />
      <Brands />

      <section className='section-product'>
        <h2>Produtos relacionados</h2>
          <p>Ver todos</p>
          <Product />
      </section>

    </>
  )
}

export default App
