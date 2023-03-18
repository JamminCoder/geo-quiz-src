import { Link, useParams } from "react-router-dom";
import { 
    resolveCountryImagePath,
    createProperName, 
} from '../lib/utils';

import { getRandomCountries } from '../lib/api';
import { LoadingPage } from './Loading';

import { useState, useEffect } from 'react';
import GameManager from '../lib/GameManager';
import GameOver from './GameOver';

const NewQuestionButton = () => 
    <button className='btn bg-white shadow w-fit' onClick={ () => window.location.reload() }>
        New Question
    </button>


function Options({ setGame, optionsArray, correctOption, audio }) {
    const [messageColor, setMessageColor] = useState();
    const [btnStyle, setBtnStyle] = useState();
    const { continentName } = useParams();

    const [isAnswered, setIsAnswered] = useState(false);
    const properName = createProperName(correctOption.country);
    function handleClick(country) {
        if (isAnswered) return;

        if (country.country === correctOption.country) {
            // Answer is correct
            audio.correct.play();
            setMessageColor('green');
            GameManager.incrementPoints(continentName);

        } else {
            // answer incorrect
            audio.wrong.play();
            setMessageColor('red');
            GameManager.decrementLives();
        }

        setBtnStyle({
            pointerEvents: 'none',
            opacity: '50%'
        });

        setGame(GameManager.getGame());

        setIsAnswered(true);
    }

    return (
        <div className='grid gap-8 place-items-center'>
            { 
                isAnswered
                ? <p className='text-xl font-medium' style={{ color: messageColor }}> The correct answer is { properName } </p>
                : ""
            }

            { 
                isAnswered
                ?  <NewQuestionButton/>
                : ""
            }

            <div className='flex flex-wrap justify-center items-centers gap-8'>
                { 
                    optionsArray.map(c => <button 
                        onClick={() => handleClick(c)}
                        style={ btnStyle }
                        className='btn shadow bg-white hover:bg-gray-100 hover:text-gray-900 text-xl' 
                        key={ c.iso }>
                        
                        { createProperName(c.country) }
                    </button>) 
                }

                
            </div>
        </div>
    );
}


function Points({ game }) {
    return (
        <div className='grid place-items-center mb-8'>
            <p>Points: { game.points }</p>
            <p>Lives: { game.lives }</p>
        </div>
    );
}

function resetGame() {
    GameManager.newGame(); 
    window.location.reload();
}

export default function Quiz() {
    const [countries, setCountries] = useState();
    const [answerCountry, setAnswerCountry] = useState();
    const [audio, setAudio] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const { continentName } = useParams();

    const [game, setGame] = useState(GameManager.getGame());

    
    useEffect(() => {
        if (isLoaded) return;
        const correctAudio = new Audio("https://cdn.pixabay.com/download/audio/2021/08/04/audio_bb630cc098.mp3");
        const wrongAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/24/audio_757cb20504.mp3");
        
        setAudio({
            correct: correctAudio,
            wrong: wrongAudio
        });

        getRandomCountries(continentName)
        .then(randCountries => {
            setCountries(randCountries);
            const randIndex = Math.floor(Math.random() * randCountries.length);
            setAnswerCountry(randCountries[randIndex]);
            
            
        })
        .catch(console.log)
        .finally(() => setIsLoaded(true));
    });
    
    if (game.lives <= 0) {
        return (
        <div className='page'>
            <GameOver game={ game } continentName={ continentName }/>
        </div>
        )
    }

    if (!isLoaded) return <LoadingPage />;

    return (
        <div className='page'>
            <Points game={ game }/>
            <button class='btn text-black mb-4' onClick={ resetGame }>Reset Game</button>
            <h1 className='text-center text-4xl font-semibold mb-16'>Which country in { createProperName(continentName) } is this?</h1>

            <img src={ resolveCountryImagePath(continentName, answerCountry) } alt="" className='w-64 mb-8'/>

            <Options setGame={ setGame } optionsArray={ countries } audio={ audio } correctOption={ answerCountry }/>
        </div>
    );
}