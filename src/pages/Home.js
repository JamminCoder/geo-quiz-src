import { Link } from "react-router-dom";
import { capatalizeFirstLetter } from "../lib/utils";

function ContinentLink({ continentName }) {
    const continentImagePath = `/continents/maps/${ continentName }/${ continentName }.png`;
    return (
        <Link to={`/continents/${ continentName }`} className='text-center'>
            <p className="text-lg">{ capatalizeFirstLetter(continentName) }</p> 
            <img src={ continentImagePath }/>
        </Link>
    )
    
}

export default function Home() {
    const continents = ['africa', 'asia', 'europe', 'oceania', 'north_america', 'south_america'];

    return (
        <div className='page'>
            <h1 className="text-4xl mb-16">Simple Geography Game</h1>
            <div className="grid grid-cols-3 gap-8 w-[100%] max-w-[40rem]">
                { continents.map(continentName => ContinentLink({ continentName })) }
            </div>
        </div>
    )
}