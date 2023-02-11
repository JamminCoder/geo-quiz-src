import { Link, useParams } from "react-router-dom";
import { capatalizeFirstLetter, getCountries, resolveCountryImagePath } from '../lib/utils';
import { useState, useEffect } from 'react';

async function getRandomCountries(continentName) {
    const countries = await getCountries(continentName);

    const len = countries.length
    const selectedCountries = [];

    for (let i = 0; i < 4; i++) {
        let randIndex = Math.floor(Math.random() * len);
        
        let selected = countries[randIndex];
        while (selectedCountries.includes(selected)) {
            randIndex = Math.floor(Math.random() * len);
            selected = countries[randIndex];
        }

        selectedCountries.push(selected);
    }

    return selectedCountries;
}

function Options({ optionsArray, correctOption }) {
    const [message, setMessage] = useState();
    const [refreshButton, setRefreshButton] = useState(false);

    function handleClick(country) {
        if (country.country === correctOption.country) {
            setMessage({
                text: 'Correct!',
                style: {color: 'green'
            }});
        } else {
            setMessage({
                text: 'Incorrect! The correct answer is ' + correctOption.country,
                style: {color: 'red'}
            });
        }

        setRefreshButton(
            <button className='btn bg-slate-200 shadow w-fit' onClick={ () => window.location.reload() }>New Question</button>
        );
    }

    return (
        <div>
            <div className='flex justify-center items-centers gap-8 mb-8'>
                { 
                    optionsArray.map(c => <button 
                        onClick={() => handleClick(c)}
                        className='btn hover:bg-gray-100 hover:text-gray-900' 
                        key={ c.iso }>
                        
                        { c.country }
                    </button>) 
                }

                
            </div>

            <div className='text-center grid gap-4 place-items-center'>
                { message 
                    ? <p className='text-xl font-medium' style={ message.style }> { message.text }</p>
                    : ""
                }
                { refreshButton }    
            </div>
        </div>
    );
}



export default function Quiz() {
    const [countries, setCountries] = useState();
    const [answerCountry, setAnswerCountry] = useState();

    const [isLoaded, setIsLoaded] = useState(false);
    const { continentName } = useParams();

    useEffect(() => {
        if (isLoaded) return;

        getRandomCountries(continentName)
        .then(randCountries => {
            setCountries(randCountries);
            const randIndex = Math.floor(Math.random() * randCountries.length);
            setAnswerCountry(randCountries[randIndex]);
        })
        .catch(console.log)
        .finally(() => setIsLoaded(true));
    });

    if (!isLoaded) return "Loading...";

    return (
        <div className='page'>
            <h1 className='text-4xl font-semibold mb-8'>{ capatalizeFirstLetter(continentName) }</h1>

            <img src={ resolveCountryImagePath(continentName, answerCountry) } alt="" className='w-64 mb-8'/>

            <Options optionsArray={ countries } correctOption={ answerCountry }/>
        </div>
    );
}