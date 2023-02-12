import { NavLink } from 'react-router-dom';
import { createProperName, getContinentNames } from './lib/utils';

export default function Nav() {
    return (
        <nav className='flex gap-4 items-center bg-white shadow p-4'>
            <NavLink to='/' className='text-xl font-medium'>Geography Quiz</NavLink>
            <div className='flex gap-4 flex-wrap'>
                {
                    getContinentNames().map(continent => <NavLink key={ continent } to={ `/continents/${ continent }` } className='text-sm'>{ createProperName(continent) }</NavLink>)
                }
            </div>
        </nav>
    );
}