import { useState } from "react"
import { Link } from "react-router-dom";
import { HiFilm, HiMenuAlt2, HiOutlineX } from "react-icons/hi";

export const Header = () => {
    let Links = [
       {name: 'Inicio', link:"/", key: 'inicio'},
       {name: 'Peliculas', link:"/pelicula", key: 'peliculas'}, 
       {name: 'TvShows', link:"/tvshow", key: 'tvshows'},
    ]
    let [open, setOpen] = useState (false);
    return (
        <div className='shadow-md w-full top-0 left-0 fixed z-[100]'>
            <div className='md:px-10 py-3 px-7 md:flex justify-between items-center bg-black bg-opacity-50 text-white' style={{ fontFamily: 'Raleway' }}>
                <Link to="/" className='no-underline'>
                    <div className='flex text-2xl cursor-pointer items-center gap-2'>
                        <HiFilm className='h-7 w-7 text-blue'/>
                        <span className='font-bold text-white'> |FullMovies</span>
                    </div>
                </Link>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 mb-0 absolute md:static md:z-auto z-[-1] left-0 w-full bg-transparent md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.key}>
                        <Link to={link.link} className='text-white hover:underline hover:underline-offset-8 duration-500 no-underline'>{link.name}</Link>
                    </li>))
                    }
                </ul>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open? <HiOutlineX className='text-blue font-bold w-6 h-6'/> : <HiMenuAlt2 className='text-blue font-bold w-6 h-6'/> 
                    }
                </div>
            </div>
        </div>
    );
};

