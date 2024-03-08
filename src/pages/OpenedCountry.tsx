import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import { useCountry } from "../context/CountriesContext";
import data from '../../data/data.json'
import FormatPop from "../utilities/FormatPopulation";

const OpenedCountry = () => {
  const {getOpenedCountry, openCountry} = useCountry();
  

  return (
    <div className=' flex flex-col gap-8 py-12 px-5'>
        <Link to="/">
            <button className='flex px-6 shadow-element cursor-pointer trans hover:scale-105 py-2 text-text items-center rounded-md  bg-elements '>
                <FontAwesomeIcon icon={faArrowLeftLong} />
                <span className="ml-2 ">Back</span>
            </button>
        </Link>
        { 
          data.map((c,index) => (
            <div key={c.numericCode + " " + index} className={` ${getOpenedCountry() != c.numericCode ? "hidden" : "flex"} md:hidden flex-col gap-8`}>
              <img src={c.flags.png} alt="" className="rounded-lg shadow-md w-[335px] h-[209px]" />
              <h1 className='text-text font-bold text-2xl'>{c.name}</h1>
              <div className='flex flex-col gap-1'>
                  <span className='text-text text-lg capitalize   '>native name:<span className='  ml-2 text-text opacity-85 text-lg'>{c.nativeName}</span></span>
                  <span className='text-text text-lg capitalize   '>population:<span className='  ml-2 text-text opacity-85 text-lg'>{FormatPop(c.population)}</span></span>
                  <span className='text-text text-lg capitalize   '>Region:<span className='  ml-2 text-text opacity-85'>{c.region}</span></span>
                  <span className='text-text text-lg capitalize   '>sub region:<span className='  ml-2 text-text opacity-85'>{c.subregion}</span></span>
                  <span className='text-text text-lg capitalize   '>Capital:<span className='  ml-2 text-text opacity-85'>{c.capital}</span></span>
              </div>
              <div className='flex flex-col gap-1'>
                  <span className='text-text text-lg capitalize   '>top level domain:<span className='  ml-2 text-text opacity-85 text-lg'>{c.topLevelDomain}</span></span>
                  <span className='text-text text-lg capitalize   '>currencies:<span className='  ml-2 text-text opacity-85 text-[16px]'>{c.currencies?.length == 1 ? c.currencies?.map((cu) =>  cu.name) : c.currencies?.length!  >  1 ? c.currencies?.map((cu) =>  cu.name + ", ") : "No Currency"}</span></span>
                  <span className='text-text text-lg capitalize   '>languages:<span className='  ml-2 text-text opacity-85'>{c.languages.length > 1 ? c.languages.map((lang) => lang.name + ", ") : c.languages.map((lang) => lang.name)}</span></span>
              </div>
              {c.borders&& <div className="flex flex-col gap-3">
                <h3 className=" capitalize text-text text-lg">border countries</h3>
                {<div className="grid grid-cols-3 w-full items-center gap-3  ">
                  {
                    c.borders?.map((border, index) => index <= 2 ? (
                      <div >
                        {
                          data.map((bordered) =>border == bordered.alpha3Code ? (
                            <Link to="/OpenedCountry" onClick={() => openCountry(bordered.numericCode)} className="py-2 px-1 text-center bg-elements text-xs shadow-element text-text/85 w-full min-h-[48px] rounded-md flex items-center justify-center">
                              {bordered.name}
                            </Link>
                        
                            ) : null)
                          }
                      </div>
                    ) : null)
                  }
                </div>}
              </div>}
            </div>
          ))
        }

        {/* Large screens */}
        { 
          data.map((c,index) => (
            <div key={c.numericCode + " " + index} className={` ${getOpenedCountry() != c.numericCode ? "hidden" : "flex"} max-md:hidden flex-col lg:flex-row max-lg:gap-10 items-center w-full max-xl:justify-between xl:gap-52`}>
              <img src={c.flags.png} alt="" className=" shadow-md w-[450px] h-[300px] xl:w-[580px] xl:h-[390px]" />

              <div className="flex flex-col gap-10">
                <h1 className='text-text font-bold text-3xl'>{c.name}</h1>
                <div className="flex w-full gap-3">
                  <div className='flex flex-col gap-1'>
                      <span className='text-text text-lg capitalize   '>native name:<span className='  ml-2 text-text opacity-85 text-lg'>{c.nativeName}</span></span>
                      <span className='text-text text-lg capitalize   '>population:<span className='  ml-2 text-text opacity-85 text-lg'>{FormatPop(c.population)}</span></span>
                      <span className='text-text text-lg capitalize   '>Region:<span className='  ml-2 text-text opacity-85'>{c.region}</span></span>
                      <span className='text-text text-lg capitalize   '>sub region:<span className='  ml-2 text-text opacity-85'>{c.subregion}</span></span>
                      <span className='text-text text-lg capitalize   '>Capital:<span className='  ml-2 text-text opacity-85'>{c.capital}</span></span>
                  </div>
                  <div className='flex flex-col gap-1'>
                      <span className='text-text text-lg capitalize   '>top level domain:<span className='  ml-2 text-text opacity-85 text-lg'>{c.topLevelDomain}</span></span>
                      <span className='text-text text-lg capitalize   '>currencies:<span className='  ml-2 text-text opacity-85 text-[16px]'>{c.currencies?.length == 1 ? c.currencies?.map((cu) =>  cu.name) : c.currencies?.length!  >  1 ? c.currencies?.map((cu) =>  cu.name + ", ") : "No Currency"}</span></span>
                      <span className='text-text text-lg capitalize   '>languages:<span className='  ml-2 text-text opacity-85'>{c.languages.length > 1 ? c.languages.map((lang) => lang.name + ", ") : c.languages.map((lang) => lang.name)}</span></span>
                  </div>
                </div>
                <div className="flex w-full">
                  {c.borders&& <div className="flex flex-col gap-3 w-full">
                <h3 className=" capitalize text-text text-lg">border countries</h3>
                {<div className="grid grid-cols-3 w-full items-center gap-3  ">
                  {
                    c.borders?.map((border, index) => index <= 2 ? (
                      <div >
                        {
                          data.map((bordered) =>border == bordered.alpha3Code ? (
                            <Link to="/OpenedCountry" onClick={() => openCountry(bordered.numericCode)} className="py-2 px-1 text-center bg-elements text-xs shadow-element text-text/85 trans hover:scale-105 w-full min-h-[48px] rounded-md flex items-center justify-center">
                              {bordered.name}
                            </Link>
                        
                            ) : null)
                          }
                      </div>
                    ) : null)
                  }
                </div>}
                  </div>}
                </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default OpenedCountry;