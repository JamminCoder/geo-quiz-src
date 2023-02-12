import { Link } from "react-router-dom";
import { createProperName, getContinentNames, resolveContinentImagePath } from "../lib/utils";

function ContinentLink({ continentName }) {
    return (
        <Link key={ continentName } to={`/continents/${ continentName }`} className='text-center card hover:-translate-y-1 active:-translate-y-1 transition-transform'>
            <p className="text-lg mb-2">{ createProperName(continentName) }</p> 
            <img src={ resolveContinentImagePath(continentName) }/>
        </Link>
    )
    
}

export default function Home() {
    // This is the only place where it is neccassary to define the country names
    const continents = getContinentNames();

    return (
        <div className='page'>
            <div className='text-center mb-16 grid gap-4'>
                <h1 className="text-5xl font-bold">Simple Geography Game</h1>
                <p>
                    
                    Made with <a className='link' href="https://reactjs.org/">React.js</a> and styled with <a className='link' href="https://tailwindcss.com/">Tailwind CSS</a> 
                </p>
            </div>

            

            <h2 className='text-3xl font-medium'>Pick a Continent</h2>
            <small className='text-gray-700 mb-4'>Map sizes are not to scale.</small>
            <div className="grid grid-cols-3 gap-8 w-[100%] max-w-[40rem] mb-16">
                { continents.map(continentName => ContinentLink({ continentName })) }
            </div>
            
            <div className='text-center'>
                <h3 className='text-3xl'>Content Attribution</h3>
                <p>
                    Map icons: <a className='link' href="https://github.com/djaiss/mapsicon">https://github.com/djaiss/mapsicon</a> <br />
                    Country ISO codes: <a className='link' href="https://gist.github.com/maephisto/9228207">https://gist.github.com/maephisto/9228207</a>
                </p>
            </div>
        </div>
    )
}