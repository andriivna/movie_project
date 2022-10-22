import {useDispatch} from "react-redux";

import css from "../GenresFilter/GenresFilter.module.scss";
import {filterActions} from "../../redux/slices";



const Genre = ({genre: {id, name}}) => {
    const dispatch = useDispatch();

    return (
        <li>
            <button
                className={`${css.filter__item} ${css.genre}`}
                onClick={() => dispatch(filterActions.setGenre(id))}
                type={'button'}
            >
                {name}
            </button>
        </li>
    );
};

export {Genre};