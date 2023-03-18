import GameManager from '../lib/GameManager';
import { createProperName } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function GameOver({ game, continentName }) {
    return(
        <>
            <h1 className='text-4xl font-semibold mb-4'>Game Over!</h1>
            <p className='text-xl'>Points: { game.points }</p>
            <Link onClick={ () => { GameManager.newGame(); window.location.reload(); } } to={`/quiz/${ continentName }`} className='btn bg-purple-600 text-white font-medium mb-8'>Take Quiz for { createProperName(continentName) }</Link>
            <Link to='/' className='btn bg-slate-200 font-medium mb-8'>Go to Home</Link>
        </>
    );
}