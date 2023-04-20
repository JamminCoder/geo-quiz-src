export default function CountryFlag({ iso, className }) {
    return <img className={ className } src={`https://www.countryflagicons.com/FLAT/64/${ iso.toUpperCase() }.png`}/>
}