export function capatalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function resolveCountryImagePath(continent, country) {
    return `/continents/maps/${ continent }/${ country.iso.toLowerCase() }/vector.svg`;
}