import { Link } from "react-router-dom";
import { capatalizeFirstLetter, getContinentNames, resolveContinentImagePath } from "../lib/utils";

function ContinentLink({ continentName }) {
    return (
        <Link to={`/continents/${ continentName }`} className='text-center'>
            <p className="text-lg">{ capatalizeFirstLetter(continentName) }</p> 
            <img src={ resolveContinentImagePath(continentName) }/>
        </Link>
    )
    
}

export default function Home() {
    // This is the only place where it is neccassary to define the country names
    const continents = getContinentNames();

    return (
        <div className='page'>
            <h1 className="text-4xl mb-16">Simple Geography Game</h1>
            <div className="grid grid-cols-3 gap-8 w-[100%] max-w-[40rem]">
                { continents.map(continentName => ContinentLink({ continentName })) }
            </div>
        </div>
    )
}