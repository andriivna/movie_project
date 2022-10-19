import css from './UserInfo.module.css'

const UserInfo=()=>{
    return(
        <div className={css.userDiv} >
            <div><img className={css.user} src={`https://ad.mains.life/img/default-user.png`} alt={'user'}/></div>

            <div>
                <h5>Anyta Faryna</h5>
                <h6>Lviv,Ukraine</h6>
            </div>
        </div>
    )
}

export {
    UserInfo
}