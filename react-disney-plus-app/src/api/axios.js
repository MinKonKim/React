import axios from 'axios';

const instance = axios.create({
    baseURL:"http://api.themoviedb.org/3",
    params:{
        api_key : "d1eb8dd1ff57365e633bd1a44459f847",
        language: "ko-KR"
    }
})

export default instance;