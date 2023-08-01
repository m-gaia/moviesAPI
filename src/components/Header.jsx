import { useState } from "react"
import { Link } from "react-router-dom";
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";
import { Buscador } from "../components/Buscador";
import logo from '../assets/Movx.png';

export const Header = () => {
    let Links = [
       {name: 'Home', link:"/", key: 'home'},
       {name: 'Peliculas', link:"/pelicula", key: 'peliculas'}, 
       {name: 'TvShows', link:"/tvshow", key: 'tvshows'},
       {name: 'Favoritos', link:"/favoritos", key: 'favoritos'},
    ]
    let [open, setOpen] = useState (false);
    return (
        <div className='shadow-md w-full top-0 left-0 fixed z-[100]'>
            <div className='md:px-10 md:h-19 py-3 px-7 md:flex items-center justify-center bg-black bg-opacity-50 text-white' style={{ fontFamily: 'Raleway' }}>
                <Link to="/" className='no-underline'>
                    <div className='flex w-28 cursor-pointer items-center gap-2'>
                        <img src={logo} alt="Movx" />
                        {/* <HiFilm className='h-7 w-7 text-blue'/>
                        <span className='font-bold text-white'> |FullMovies</span> */}
                    </div>
                </Link>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 mb-0 absolute md:static md:z-auto z-[-1] left-0 w-full bg-transparent md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                    Links.map((link) => (
                    <li className='md:ml-6 md:my-0 md:px-2 my-7' key={link.key}>
                        {/* hover:underline hover:underline-offset-8 */}
                        <Link to={link.link} className='text-white text-base/8 hover:text-yellow duration-500 no-underline'>{link.name}</Link>
                    </li>))
                    }
                    <div className="md:px-2 md:ml-10">
                        <Buscador/>
                    </div>
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

