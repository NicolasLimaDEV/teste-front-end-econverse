import "./BrandStyle.sass"
import BrandLogo from "../../assets/logo.png"

const brands = [1, 2, 3, 4, 5]

const Brands = () => {
  return (
    <section className="brands-section">
      <h2>Navegue por marcas</h2>

      <div className="brands-list">
        {brands.map((brand) => (
          <div className="brand-card" key={brand}>
            <img src={BrandLogo} alt="Marca Econverse" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brands