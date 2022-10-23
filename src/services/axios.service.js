import axios from "axios";

import {baseURL} from "../configs";

export const axiosService = axios.create(
    {
        baseURL,
        headers:{
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJiZDQwZDMyMGJiODE5MzhiMzUxMmE1NTcwMTUwNyIsInN1YiI6IjYzNDlkNDUxZTIyZDI4MDA4OWMzOGIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YXGasBCrqC8Jow1pQxJCv9WUV9eZiNmI9ZcIL-KUT20`
        }
    });