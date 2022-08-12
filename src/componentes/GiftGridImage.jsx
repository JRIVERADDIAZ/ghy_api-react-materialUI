
import style from '../styles/cardGiphyStyles.module.css'

const GifGridImage = ({ title, url }) => {
    return (

        <div className={style.card_giphy_container}>
            <div>
                <img src={url} alt={title}></img>
                <div className={style.giphy_cards_title_container}>
                    <p className={style.giphy_cards_title}>{title}</p>
                </div>
            </div>
        </div>

    )
}

export default GifGridImage