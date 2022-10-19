
import css from './Header.css'
import {UserInfo} from "../UserInfo";




const Header = () => {
    function toggleDarkTheme() {
        return document.body.classList.toggle('dark-theme');
    }
    return (
        <div className={css.header}>

            <div>
                <div>
                    <label className={css.switch}>
                        <input onClick={toggleDarkTheme} type="button" value={'light theme'}/>
                        <span className={`${css.slider} ${css.round}`}></span>
                    </label>
                </div>

                <div>

                </div>

                <form>
                    <input type="text" name={"search_film"} placeholder={'Search your interesting...'}/>

                </form>
                <div>
                    <UserInfo/>
                </div>

            </div>
        </div>
    )
}


export {
    Header
}