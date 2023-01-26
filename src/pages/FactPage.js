import { useParams } from "react-router-dom";
import styles from '../styles/style.module.css';


const paramIds = {
    id1: 'His Childhood Nickname Was “Eyebrow"',
    id2: 'He Was The First Commander To Take Over While The Previous One Still Lived',
    id3: 'Erwin Smith Was 39 Years Old',
}

const FactPage = () => {
    const params = useParams();
    const paramString = paramIds[params.factId]

    if(!paramString) return (
        <div className={styles.factPage}>
            <h3>Fact was not found!</h3>
        </div>
    )
    return (
        <div className={styles.factPage}>
            <h2>Fact about Erwin Smith</h2>
            <p>{paramString}</p>
        </div>
    )
}

export default FactPage;