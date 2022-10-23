import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices";


import css from './Header.css'
import {UserInfo} from "../UserInfo";




const Header = () => {
    function toggleDarkTheme() {
        return document.body.classList.toggle('dark-theme');
    }

    const{register,handleSubmit,reset} = useForm({defaultValues:{filter:''}})
    const dispatch = useDispatch()

    const submit = async (data)=>{
        await dispatch(movieActions.setFilterParam(data.filter))
        reset()
    }
    return (
        <div className={css.header}>

            <div>
                <div>
                    <label>
                        <input className={css.switch} onClick={toggleDarkTheme} type="button" value={'light theme'}/>
                        <span className={`${css.slider} ${css.round}`}></span>
                    </label>
                </div>

                <div>

                </div>

                <form onSubmit={handleSubmit(submit)}>
                    <input className={css.search} type="text" name={"search_film"} placeholder={'Search your interesting...'} {...register('filter')}/>

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