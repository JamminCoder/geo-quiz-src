import { rand, resolveContinentJsonPath } from './utils';

export async function getCountries(continentName) {
    const res = await fetch(resolveContinentJsonPath(continentName));
    const json = await res.json();
    return json.countries;
}

export async function getRandomCountries(continentName) {
    const countries = await getCountries(continentName);

    const len = countries.length
    const maxIndex = len - 1;
    const selectedCountries = [];

    for (let i = 0; i < 4; i++) {
        let randIndex = rand(0, maxIndex);
        
        let selected = countries[randIndex];
        while (selectedCountries.includes(selected)) {
            randIndex = rand(0, maxIndex);
            selected = countries[randIndex];
        }

        selectedCountries.push(selected);
    }

    return selectedCountries;
}
