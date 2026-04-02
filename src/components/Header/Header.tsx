import './HeaderStyle.sass'

import ShieldIcon from '../../assets/icons/ShieldCheck.svg'
import TruckIcon from '../../assets/icons/Truck.svg'
import CreditIcon from '../../assets/icons/CreditCard.svg'
import LogoEconverse from '../../assets/Logo.png'
import SearchBar from '../SearchBar/SearchBar'
import GroupIcon from '../../assets/icons/Group.svg'
import HeartIcon from '../../assets/icons/Heart.svg'
import UserIcon from '../../assets/icons/UserCircle.svg'
import ShoppingIcon from '../../assets/icons/ShoppingCart.svg'
import CrowIcon from '../../assets/icons/CrownSimple.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="top-header">
         <div className="item-top-header">
            <img src={ShieldIcon} alt="Compra 100% segura" />
            <p>Compra <span className="text-other">100% segura</span></p>
         </div>

         <div className="item-top-header">
            <img src={TruckIcon} alt="Frete grátis acima de R$ 200" />
            <p><span className="text-other">Frete grátis</span> acima de R$ 200</p>
         </div>

         <div className="item-top-header">
            <img src={CreditIcon} alt="Parcele suas compras" />
            <p><span className="text-other">Parcele</span> suas compras</p>
         </div>
      </div>

      <div className="header-midle">
         <img src={LogoEconverse} alt="Logo Econverse" />

         <SearchBar /> 

         <div className="icons-menu">
            <img src={GroupIcon} alt="Caixa" />
            <img src={HeartIcon} alt="ÍCone coração" />
            <img src={UserIcon} alt="Usuário" />
            <img src={ShoppingIcon} alt="Carrinho de compras" />
         </div>
      </div>
      
      <nav className='nav-menu'>
            <a href="#">Todas categorias</a>
            <a href="#">Supermercado</a>
            <a href="#">Livros</a>
            <a href="#">Modas</a>
            <a href="#">Lançamentos</a>
            <a href="#">Ofertas do dia</a>
            <a href="#"><img src={CrowIcon} alt="Assinatura" /> Assinatura</a>
         </nav>
    </header>
  )
}
