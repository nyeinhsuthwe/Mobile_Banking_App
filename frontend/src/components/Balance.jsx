import Scan from "./Scan";

export default function Balance() {
  return (
       <div className=" lg:max-w-xl 
                    md:max-w-md  
                    sm:max-w-sm  
                    xs:max-w-xs mx-auto">
        <div className=" rounded overflow-hidden shadow-lg mx-auto mt-5 bg-white">
        <div className="ps-11 pe-11 py-5 mt-3 flex justify-between xs:ps-7 xs:pe-7">
            <p className="text-gray-800 text-base">Balance (ks)</p>

            <div className="flex space-x-1">
            <img src="/src/assets/icons8-usa-flag-48.png" className="w-4 h-4" />
            <p className="text-black text-base text-xs">
            1 USD =  </p>

            <img src="/src/assets/icons8-myanmar-burma-48.png" className="w-4 h-4" />
            <p className="text-black text-base text-xs">
            3375 MMK </p> 
            </div>   
            
        </div>
        <div className="ps-11 font-bold text-xl xs:ps-7">15000ks</div>
        <Scan/>
    </div>
    </div>
  )
}
