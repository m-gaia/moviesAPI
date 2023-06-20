const API = "https://api.themoviedb.org/3"


export const get = async (path)=>{
    const results = await fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZhYzFiYmU4NTk2ZTA1ZjY3Y2VjN2E5MTU5YzA0YyIsInN1YiI6IjY0MjYwY2ZkNjkwNWZiMDBiZDA5NzMyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HaB873duTxEUGRkUmkPx12MhEN9nuPFUb0XVw3eADPU",
            "Content-Type": "application/json;charset=utf-8",
        }
    })
    return await results.json()
}