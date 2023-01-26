import { Link} from "react-router-dom";
import styles from '../styles/style.module.css';


const MainPage = () => {

    return (
        <div className={styles.mainPage}>
            <div className={styles.heroWrapper}>
                <img alt='hero img' src='https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/Attack-On-Titan-10-Things-You-Didnt-Know-About-Erwin-Smith-featured-image.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5'/>
                <div>
                    <h1>Erwin Smith</h1>
                    <Link to='about'>About</Link>
                </div>
            </div>            
        </div>
    )
}

export default MainPage;