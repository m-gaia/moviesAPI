import {Link} from "react-router-dom"
import { AiFillStar } from "react-icons/ai";

export const PeliculasCard = ({pelicula})=> {

    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
    return (
        <li>
            <Link to={`/pelicula/${pelicula.id}`} className="bg-black relative no-underline transition duration-200 ease-in transform hover:scale-110">
                <div className="h-[20rem] sm:h-[25rem] lg:h-[30rem]">
                    <img className="rounded-t-md" src={imgURL} alt={pelicula.title}/>
                </div>
                <h1 className="text-black text-center py-2 text-xl">{pelicula.title}</h1>
                <div className="absolute top-2 left-2 bg-blue rounded-full px-2 py-1 text-sm text-white flex items-center gap-1">
                    <span>{Number(pelicula.vote_average || "6.5").toFixed(1)}</span>
                    <AiFillStar className="text-lg" />
                </div>
            </Link>
        </li>
    );
};