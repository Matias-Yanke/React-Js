import { CartWidget } from "./CartWidget"

export const NavBar = () => (
<>
<div>NOPLAN</div>
    <ul>
        <li> 
            <a href="#">INICIO</a>
        </li>
        <li> 
            <a href="#">PRODUCTOS</a>
        </li>
        <li> 
            <a href="#">CONTACTO</a>
        </li>
   
    </ul>
    <CartWidget />
</>
)