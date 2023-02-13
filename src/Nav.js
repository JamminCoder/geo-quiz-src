import { NavLink } from 'react-router-dom';
import { createProperName, getContinentNames } from './lib/utils';

const NavIcon = () => 
    <svg 
        fill="currentColor" viewBox="0 0 16 16" id="nav-btn"
        className="h-10 w-10 hover:bg-slate-200 active:bg-slate-300 transition-colors rounded cursor-pointer" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>    
    </svg>

export default function Nav() {
    function handleClick(e) {
        const collapse = document.querySelector('.nav-collapse');
        collapse.classList.toggle('hidden');
    }

    return (
        <nav className='flex items-center justify-between bg-white shadow p-4'>
            <div className='md:flex items-center gap-8'>
                <NavLink to='/' className='text-xl font-medium'>Geography Quiz</NavLink>
                <div className='nav-collapse hidden md:flex gap-4'>
                    {
                        getContinentNames().map(continent => <NavLink key={ continent } to={ `/continents/${ continent }` } className='block'>{ createProperName(continent) }</NavLink>)
                    }
                </div>
            </div>

            <span onClick={ handleClick } className='md:hidden self-start'>
                <NavIcon />
            </span>
        </nav>
    );
}