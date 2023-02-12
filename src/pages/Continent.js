import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { capatalizeFirstLetter, resolveCountryImagePath } from "../lib/utils";

import { getCountries } from "../lib/api";

export function Country({ continent, country }) {
    const imagePath = resolveCountryImagePath( continent, country );
    return (
        <div className="card">
            <h3 className="text-lg font-medium text-center mb-4">{ capatalizeFirstLetter(country.country) }</h3>
            <img src={ imagePath } alt={ country.country } className='w-44'/>
        </div>
    )
}

export function CountriesDisplay({ continent, countriesArray }) {
    return (
        <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-4'>   
            {
               countriesArray.map(country => <Country continent={ continent } country={ country } />) 
            }
        </div>
    )
}

export default function Continent(props) {
    const { continentName } = useParams();
    const properName = capatalizeFirstLetter(continentName);

    const [countriesArray, setCountriesArray] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded) return;
        
        getCountries(continentName)
        .then(countries => {
            setCountriesArray(countries);
        })
        .catch(console.log)
        .finally(() => setIsLoaded(true))
    })

    if (!isLoaded) return 'Loading...';

    return (
    <div className='page'>
        <h1 className='text-4xl font-bold mb-16'>{ properName }</h1>
        <Link to={`/quiz/${ continentName }`} className='link mb-8'>Take Quiz for { properName }</Link>
        <CountriesDisplay countriesArray={ countriesArray } continent={ continentName } />
    </div>
    );
}