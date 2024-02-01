import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
<ul className={styles.lista}>
    <li className={styles.item}><Link to='/'>Página Inicial</Link></li>
    <li className={styles.item}><Link to='/QuemSomos'>Quem Somos</Link></li>
    <li className={styles.item}><Link to='/FaleConosco'>Fale Conosco</Link></li>

</ul>

    )
}



export default NavBar