import { Link } from 'react-router-dom';
import data from '../../data/data.json'
import { useCountry } from "../context/CountriesContext"
import FormatPop from '../utilities/FormatPopulation';
import { useEffect, useState } from 'react';
import NoCountry from './NoCountry';

const Country = () => {
    const {getChosenRegion, getSearchedCountry, openCountry} = useCountry();
    const search = (name:string) => { 
        const searched = getSearchedCountry().toLowerCase();
        let newName = name.toLowerCase();
        if (newName.startsWith(searched) || searched == "") { 
            return true;
        }
        return false ;
    }
    const [shownCountries, setshownCountries] = useState(data)
    const changeShownCountries = () => { 

    }
    useEffect(() => { 
        let arr = [];
        data.map((country) => { 
            if (search(country.name) && checkRegion(country.region)) { 
                arr.push(country);
            }
        });
        setshownCountries(arr);
        
    }, [getChosenRegion(), getSearchedCountry()])
    const checkRegion =(countryRegion:string) => { 
        if (getChosenRegion() == "") { 
            return true ;
        }
        else if (countryRegion == getChosenRegion()) { 
            return true ; 
        }
        return false ;
    }
    
    return (
    <div className={`-mt-[192px]  ${shownCountries.length > 0 ? " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center w-[100%] place-content-center gap-10" : "grid grid-cols-1 place-items-center"}`}>
        {
            shownCountries.map((c, index) =>   (
                // sm:w-[335px] lg:w-auto
                <Link to="/OpenedCountry" onClick={() => openCountry(c.numericCode)} className={` ${shownCountries.length >= 1 ? "flex" : "hidden"} flex-col   w-full shadow-element hover:scale-105 trans`} key={c.numericCode + " " +  index}>
                    {/* w-[335px] lg:w-[300px]  */}
                    <img src={c.flags.png} alt={c.name} className='rounded-t-lg h-[209px]' />
                    <div className='  flex flex-col gap-4 w-full py-8 px-5 bg-elements justify-center rounded-b-lg'>
                        <h1 className='text-text font-bold text-2xl lg:text-xl'>{c.name}</h1>
                        <div className='flex flex-col gap-1'>
                            <span className='text-text text-xl lg:text-lg capitalize   '>population:<span className='  ml-2 text-text opacity-70 text-xl lg:text-lg'>{FormatPop(c.population)}</span></span>
                            <span className='text-text text-xl lg:text-lg capitalize   '>Region:<span className='  ml-2 text-text opacity-70'>{c.region}</span></span>
                            <span className='text-text text-xl lg:text-lg capitalize   '>Capital:<span className='  ml-2 text-text opacity-70'>{c.capital}</span></span>
                        </div>
                    </div>
                </Link>
            ))
        }
        <div className={`${shownCountries.length == 0 ? "block" : "hidden"}`}>
            <NoCountry />
        </div>
    </div>
  )
}

export default Country