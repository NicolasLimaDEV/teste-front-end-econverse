import "./PartnerStyle.sass"
import PartnerBg from "../../assets/parceiros.jpg"

const partners = [
  {
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: PartnerBg,
  },
  {
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: PartnerBg,
  },
]

const Partner = () => {
  return (
    <section className="partner-section">
      {partners.map((partner, index) => (
        <div
          key={index}
          className="partner-card"
          style={{ backgroundImage: `url(${partner.image})` }}
        >
          <div className="overlay">
            <div className="partner-content">
              <h2>{partner.title}</h2>
              <p>{partner.description}</p>
              <button>CONFIRA</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Partner