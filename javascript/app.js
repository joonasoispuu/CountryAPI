const GetInfoBtn = document.querySelector('.GetInfoBtn')

const CountryName = document.getElementById("CountryName")
const topLevelDomain = document.getElementById("topLevelDomain")
const CallingCode = document.getElementById("CallingCode")
const Capital = document.getElementById("Capital")
const Region = document.getElementById("Region")
const Subregion = document.getElementById("Subregion")
const Population = document.getElementById("Population")
const Timezone = document.getElementById("Timezone")
const Language = document.getElementById("Language")
const CurrencyCode = document.getElementById("CurrencyCode")
const CurrencyName = document.getElementById("CurrencyName")
const CurrencySymbol = document.getElementById("CurrencySymbol")
const Flag = document.getElementById("Flag")

GetInfoBtn.addEventListener('click', getInfo)

function getInfo() {
    let ChosenCountry = document.getElementById("CountryDropdown").value
    let url = `https://restcountries.com/v2/name/${ChosenCountry}`

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(Data =>{
        let country = Data[0];
        CountryName.innerHTML = country.name
        topLevelDomain.innerHTML = "TopLevelDomain : " + country.topLevelDomain
        CallingCode.innerHTML = "Calling code : " + country.callingCodes
        Capital.innerHTML = "Capital : " + country.capital
        Region.innerHTML = "Region : " + country.region
        Subregion.innerHTML = "Subregion : " + country.subregion
        Population.innerHTML = "Population : " + country.population
        Timezone.innerHTML = "Timezone : " + country.timezones[0]
        Language.innerHTML = "Language : " + country.languages[0].name
        CurrencyCode.innerHTML = "Currency Code : " + country.currencies[0].code
        CurrencyName.innerHTML = "Currency Name : " + country.currencies[0].name
        CurrencySymbol.innerHTML = "Currency Symbol : " + country.currencies[0].symbol
        Flag.src = country.flag
        Flag.setAttribute("class","flags")
    });
};