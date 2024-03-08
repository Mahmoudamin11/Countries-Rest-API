import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useCountry } from "../context/CountriesContext";

const Input = () => {
    const {chooseRegion, getChosenRegion, changeSearchedCountry, getSearchedCountry} = useCountry();
    const [select, setselect] = useState(false);
    const toggleSelect = () => { 
        select == true ? setselect(false) : setselect(true);
        
    }
    const handleSearch = (event:any) => { 
        changeSearchedCountry(event.target.value);
    }
    
  return (
    <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:mt-10'>
        {/* Search */}
        <div  className={`mb-8 w-full trans  ${getSearchedCountry() != "" ? "border-text border-[1px] " : ""} sm:w-[40%] xl:w-1/4 flex gap-5 shadow-element bg-elements p-3 items-center rounded-lg`}>
            <FontAwesomeIcon onSubmit={handleSearch}  icon={faMagnifyingGlass} className="ml-5 text-text" />
            <input onChange={handleSearch} type="text" className="outline-none w-full  bg-elements text-text" placeholder="Search for a country..." />
        </div>

        {/* Select Region */}
        <div className="sm:flex flex-col trans  cursor-pointer sm:justify-center sm:items-center w-full sm:w-[35%] md:w-[30%] lg:w-[20%] xl:w-[15%]">
            <div onClick={toggleSelect} id="filterByRegion" className="mb-2 w-2/3 sm:w-full shadow-element  bg-elements rounded-lg py-3 px-5 flex items-center justify-between">
                {/* dynamic */}
                <span className=" text-lg capitalize">{getChosenRegion() != "" ? getChosenRegion() : "Filter by Region"}</span>
                {/* Rotate on open */}
                <FontAwesomeIcon icon={faAngleDown} className={`${select == true ? "rotate-180" : "rotate-0"} trans`} />
            </div>
            <div className={`relative ${select == false ? " delay-75 transition-all -z-10" : " z-50"} h-[250px] max-sm:w-2/3 sm:w-full overflow-hidden `}>
                {<ul className={` absolute  trans top-0  space-y-2 ${select == false ? "translate-y-[-120%] -z-10" : "translate-0 z-50"}  left-0 bg-elements w-full py-5 text-lg rounded-lg`}>
                    <li onClick={() => {chooseRegion(""); toggleSelect()}} className={` ${getChosenRegion() == "" ? "bg-background" : ""} hover:bg-background trans focus:bg-background w-full px-5`}>All</li>
                    <li onClick={() => {chooseRegion("Africa"); toggleSelect()}} className={` ${getChosenRegion() == "Africa" ? "bg-background" : ""} hover:bg-background trans focus:bg-background w-full px-5`}>Africa</li>
                    <li onClick={() => {chooseRegion("Americas"); toggleSelect()}} className={` ${getChosenRegion() == "Americas" ? "bg-background" : ""} hover:bg-background trans focus:bg-background w-full px-5`}>America</li>
                    <li onClick={() => {chooseRegion("Asia"); toggleSelect()}} className={` ${getChosenRegion() == "Asia" ? "bg-background" : ""} hover:bg-background trans focus:bg-background w-full px-5`}>Asia</li>
                    <li onClick={() => {chooseRegion("Europe"); toggleSelect()}} className={` ${getChosenRegion() == "Europe" ? "bg-background" : ""} hover:bg-background trans focus:bg-background w-full px-5`}>Europe</li>
                    <li onClick={() => {chooseRegion("Oceania"); toggleSelect()}} className={` ${getChosenRegion() == "Oceania" ? "bg-background" : ""} hover:bg-background trans focus:bg-background w-full px-5`}>Oceania</li>
                </ul>}
            </div>
        </div>
    </div>
  )
}

export default Input