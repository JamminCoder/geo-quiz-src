export const CONTINENT_MAPS_PATH = '/continents/maps';
export const CONTINENT_JSON_PATH = '/continents/json';


// Paths
export const resolveContinentImagePath = continent => `${ CONTINENT_MAPS_PATH }/${ continent }/${ continent }.png`;
export const resolveCountryImagePath = (continent, country) => `${ CONTINENT_MAPS_PATH }/${ continent }/${ country.iso.toLowerCase() }/vector.svg`;
export const resolveContinentJsonPath = continent => `${ CONTINENT_JSON_PATH }/${ continent }.json`;


// API calls
export async function getCountries(continentName) {
    const res = await fetch(resolveContinentJsonPath(continentName));
    const json = await res.json();
    return json.countries;
}


// Generic helpers
export const capatalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
export const rand = (min, max) => Math.floor(Math.random() * max) + min;