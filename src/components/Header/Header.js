
import css from './Header.css'
import {useState} from "react";
import {UserInfo} from "../UserInfo";




const Header = () => {
    return (
        <div className={css.header}>

            <div>


                <form>
                    <input type="text" name={"search_film"} placeholder={'Search your interesting...'}/>


                </form>
                <div>
                    <UserInfo/>
                </div>

            </div>
        </div>
    )
};


export {
    Header
}