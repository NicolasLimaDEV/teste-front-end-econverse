import './CategoryStyle.sass'

import TecIcon from '../../assets/category/image.svg'
import MercadoIcon from '../../assets/category/supermercados 1.svg'
import BebidasIcon from '../../assets/category/whiskey.svg'
import FerramentasIcon from '../../assets/category/ferramentas 1.svg'
import SaudeIcon from '../../assets/category/cuidados-de-saude 1.svg'
import CorridaIcon from '../../assets/category/corrida 1.svg'
import ModaIcon from '../../assets/category/moda 1.svg'

const Category = () => {
  return (
    <section className="nav-category">
      <div className="card-category">
        <img src={TecIcon} alt="Tecnologia" />
        <p>Tecnologia</p>
      </div>

      <div className="card-category">
        <img src={MercadoIcon} alt="Supermercado" />
        <p>Supermercado</p>
      </div>

      <div className="card-category">
        <img src={BebidasIcon} alt="Bebidas" />
        <p>Bebidas</p>
      </div>

      <div className="card-category">
        <img src={FerramentasIcon} alt="Ferramentas" />
        <p>Ferramentas</p>
      </div>

      <div className="card-category">
        <img src={SaudeIcon} alt="Saúde" />
        <p>Saúde</p>
      </div>

      <div className="card-category">
        <img src={CorridaIcon} alt="Esportes e Fitness" />
        <p>Esportes e Fitness</p>
      </div>

      <div className="card-category">
        <img src={ModaIcon} alt="Moda" />
        <p>Moda</p>
      </div>
    </section>
  );
};

export default Category;