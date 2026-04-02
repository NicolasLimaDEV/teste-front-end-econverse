import { useEffect, useState } from "react"
import "./ProductStyle.sass"
import productsData from "../../data/products.json"

interface Product {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

const ProductList = () => {
  const products: Product[] = productsData.products
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1)
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = products.length - itemsPerView

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <section className="carousel-wrapper">
      <button className="arrow left" onClick={prevSlide}>
        ‹
      </button>

      <div className="carousel-container">
        <div
          className="product-list"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {products.map((product) => (
            <div
              className="product-card"
              key={`${product.productName}-${product.price}`}
              style={{ minWidth: `${100 / itemsPerView}%` }}
            >
              <img src={product.photo} alt={product.productName} />
              <p>{product.descriptionShort}</p>

              <span className="old-price">
                R$ {(product.price * 1.1).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </span>

              <h3>
                R$ {product.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </h3>

              <small>
                ou 2x de R$ {(product.price / 2).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })} sem juros
              </small>

              <span className="shipping">Frete grátis</span>

              <button>COMPRAR</button>
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        ›
      </button>
    </section>
  )
}

export default ProductList