import styles from './paginas.module.css'
import caminhao from './imagens/caminhao.jpg'
import caminhao2 from './imagens/caminhao2.jpg'
import mapa from './imagens/mapa.jpg'



function Home() {
    return(
        <div className={styles.div}>
            <p>Entregamos sua encomenda com muita rapidez graças à nossa frota moderna de veículos e logística eficiente.</p>
            <img className={styles.caminhao} src={caminhao} alt='caminhao'/>
            <img className={styles.caminhao} src={caminhao2} alt='caminhao'/>


            <p>Atendemos em todo o Brasil</p>
            <img className={styles.mapa} src={mapa} alt='mapa'/>
        </div>
    )
}

export default Home