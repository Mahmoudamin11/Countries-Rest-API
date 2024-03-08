import { ReactNode, createContext, useContext, useState } from "react"
// data is an array of objects of (countries)
type child = { 
    children: ReactNode,
}

type countryType = { 
    chooseRegion:(region:string)=>void
    getChosenRegion:() => string
    changeSearchedCountry:(c:string) => void
    getSearchedCountry:() => string
    openCountry:(country:string) => void
    getOpenedCountry:() => string
}

const countryContext = createContext({} as countryType); // as our type
export function useCountry() { 
    return useContext(countryContext);
}



function CountriesContext({ children }: child) {
    const [chosenRegion, setchosenRegion] = useState("")
    const [searchedCountry, setsearchedCountry] = useState("")
    const [openedCountry, setopenedCountry] = useState("")
    const openCountry = (country: string) => {
        setopenedCountry(country);
        setsearchedCountry("");
    }
    const getOpenedCountry = () => {
        return openedCountry
    }
    const chooseRegion = (region: string) => {
        setchosenRegion(region)
    }
    const getChosenRegion = () => {
        return chosenRegion
    }
    const changeSearchedCountry = (country: string) => {
        setsearchedCountry(country)
    }
    const getSearchedCountry = () => {
        return searchedCountry
    }

    return (
        <countryContext.Provider value={{ chooseRegion, getChosenRegion, changeSearchedCountry, getSearchedCountry, getOpenedCountry, openCountry }}>
            {children}
        </countryContext.Provider>
    )
}

export default CountriesContext