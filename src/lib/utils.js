export const CONTINENT_MAPS_PATH = '/continents/maps';
export const CONTINENT_JSON_PATH = '/continents/json';

// Paths
export const resolveContinentImagePath = continent =>
    `${ CONTINENT_MAPS_PATH }/${ continent }/${ continent }.png`;

export const resolveCountryImagePath = (continent, country) =>
    `${ CONTINENT_MAPS_PATH }/${ continent }/${ country.iso.toLowerCase() }/vector.svg`;
    
export const resolveContinentJsonPath = continent => 
    `${ CONTINENT_JSON_PATH }/${ continent }.json`;

export const getContinentNames = () => 
    ['africa', 'asia', 'europe', 'oceania', 'north_america', 'south_america'];

// Generic helpers
export const capatalizeFirstLetter = string => 
    string.charAt(0).toUpperCase() + string.slice(1);

export const createProperName = string => 
    string.split(/_| /).map(capatalizeFirstLetter).join(' ');

export const rand = (min, max) => 
    Math.floor(Math.random() * max) + min;