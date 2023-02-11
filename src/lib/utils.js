export function capatalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function resolveCountryImagePath(continent, country) {
    return `/continents/maps/${ continent }/${ country.iso.toLowerCase() }/vector.svg`;
}

export async function getCountries(continentName) {
    const res = await fetch(`/continents/json/${ continentName }.json`);
    const json = await res.json();
    return json.countries;
}
