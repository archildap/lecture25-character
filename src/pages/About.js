import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';

const About = () => {
    return (
        <div className={styles.aboutPage}>
            <img src='https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-erwin-smith-image-33.jpg' alt='hero img'/>
            <p>Erwin Smith was the 13th commander of the Survey Corps. Discerning, intelligent, and widely respected, Erwin was an able commander. While he cared deeply for his men, he did not hesitate to sacrifice them for the good and prosperity of mankind, and his men proved more than willing to stake their lives at his order. During Erwin's career he developed the Long-Distance Enemy Scouting Formation, and due to uncertainty about his future, he later named Hange Zoë as his successor.</p>
            <Link to='../id1'>Fact 1</Link>
            <Link to='../id2'>Fact 2</Link>
            <Link to='../id3'>Fact 3</Link>
        </div>
    )
}

export default About;