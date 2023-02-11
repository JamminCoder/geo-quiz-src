import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function CountriesDisplay({ countriesArray }) {
    return (
        <div>   
            {
                countriesArray.map(country => {
                    return <div key={ country.iso }>{ country.country }</div>
                })
            }
        </div>
    )
}

export default function Continent(props) {
    const { continentName } = useParams();
    const [countriesArray, setCountriesArray] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`/continents/json/${ continentName }.json`)
        .then(res => res.json())
        .then(json => {
            setCountriesArray(json.countries);
        })
        .catch(console.log)
        .finally(() => setIsLoaded(true))
    })

    if (!isLoaded) return "Loading...";

    return (
    <div>
        { continentName }
        <CountriesDisplay countriesArray={ countriesArray } />
    </div>
    );
}