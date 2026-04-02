import './HeaderStyle.sass'

import ShieldIcon from '../../assets/icons/ShieldCheck.svg'
import TruckIcon from '../../assets/icons/Truck.svg'
import CreditIcon from '../../assets/icons/CreditCard.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="top-header">
         <div className="item-top-header">
            <img src={ShieldIcon} alt="" />
            <p>Compra <span className="text-other">100% segura</span></p>
         </div>

         <div className="item-top-header">
            <img src={TruckIcon} alt="" />
            <p><span className="text-other">Frete grátis</span> acima de R$ 200</p>
         </div>

         <div className="item-top-header">
            <img src={CreditIcon} alt="" />
            <p><span className="text-other">Parcele</span> suas compras</p>
         </div>
      </div>
    </header>
  )
}
