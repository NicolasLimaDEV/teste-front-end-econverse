import "./BannerStyle.sass";
import BannerBg from "../../assets/Banner.png";

const Banner = () => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      <div className="banner-overlay">
        <div className="banner-content">
          <h1>Venha conhecer nossas promoções</h1>
          <p>
            <span>50% Off</span> nos produtos
          </p>
          <button>Ver produto</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;