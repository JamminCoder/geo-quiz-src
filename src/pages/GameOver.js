import GameManager from '../lib/GameManager';
import { createProperName } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function GameOver({ game, continentName }) {
    return(
        <div className='grid place-items-center gap-4'>
            <h1 className='text-4xl font-semibold'>Game Over!</h1>
            <p className='text-xl'>Your Score: { game.points }</p>
            <p className='text-xl'>High Score: { game.highScores[continentName] }</p>
            <Link onClick={ () => { GameManager.newGame(); window.location.reload(); } } to={`/quiz/${ continentName }`} className='btn bg-purple-600 text-white font-medium'>Take Quiz for { createProperName(continentName) }</Link>
            <Link to='/' className='btn bg-slate-200 font-medium mb-8'>Go to Home</Link>
        </div>
    );
}