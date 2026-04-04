import "./ProductModalStyle.sass"
import { useEffect, useState } from "react"

interface Product {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    setCount(1)
  }, [product])

  const aumentar = () => {
    setCount((prev) => prev + 1)
  }

  const diminuir = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1))
  }

  if (!product) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <img src={product.photo} alt={product.productName} />

        <div className="modal-info">
          <h2>{product.productName}</h2>

          <h3>
            R$ {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </h3>

          <p>{product.descriptionShort}</p>

          <p className="details-info">Veja mais detalhes do produto</p>

          <div className="modal-actions">
            <div className="content-qtd">
              <button onClick={diminuir}>−</button>
              <span>{String(count).padStart(2, "0")}</span>
              <button onClick={aumentar}>+</button>
            </div>

            <button className="buy-button">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal