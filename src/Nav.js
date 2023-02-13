import { NavLink } from 'react-router-dom';
import { createProperName, getContinentNames } from './lib/utils';

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
                        getContinentNames().map(continent => <NavLink key={ continent } to={ `/continents/${ continent }` }>{ createProperName(continent) }</NavLink>)
                    }
                </div>
            </div>

            <span onClick={ handleClick } className='md:hidden self-start'>
                expand
            </span>
        </nav>
    );
}