import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function InputPassword({show, onClose}) {
  if(!show) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center ">

      <div className="bg-white rounded shadow-lg w-96 h-80">
      
          <div className="flex space-x-52 mt-5">
          <h2 className="text-md ml-11 mt-4 font-semibold">Enter Pin</h2>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"  onClick={onClose} className="h-5 w-7 mt-4">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
          </svg>
          </div>

          <div className="text-sm mt-7 flex justify-center">
          <span>Transfer to Khin Nyein Su Lwin</span>
          </div>

          <div className="text-lg font-bold mt-2 flex justify-center">
          <span>10000Ks</span>
          </div>

          <form className="max-w-md mt-7">
        <div className="grid md:grid-cols-1 ml-12 mr-12 md:gap-6">
          <div className="relative z-0 w-full mb-3 group">
            <input type="password" pattern="" name="floating_phone" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
             <label  className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Enter your Pin</label>
          </div>
       </div>
        <Link to="/"><button type="submit" className="ml-12 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xs">Confirm</button>
        </Link>
      </form>
       
      </div>


    </div>
  );
  
}
