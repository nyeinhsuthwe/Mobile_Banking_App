import { useState } from 'react'
import { Link } from 'react-router-dom'
import InputPassword from './InputPassword';

export default function InputAmount() {
  const [showalert, setShowalert] = useState(false);

  const click = ()=>{
    setShowalert(true);
  };
  const close = ()=>{
    setShowalert(false)
  };

  return (
        <div className='xs:max-w-sm sm:max-w-sm md:max-w-lg lg:max-w-lg rounded-lg overflow-hidden shadow-lg mx-auto mt-11 bg-white'>
          
        <div className='flex space-x-5 items-center m-5'>
        <Link to="/">
        <svg className='h-5 w-5 ml-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/>
        </svg></Link>
        <span className=''>Transfer</span>
        </div>

        <form className="max-w-md bg-gray-200 mr-12 ml-12 rounded-md">
        <div className="grid md:grid-cols-1">
          <span className='text-xs text-gray-500 ml-5 mt-4'>Transfer to</span>
          <span className='text-md text-gray-600 ml-5 mt-1 font-bold '>Khin Nyein Su Lwin</span>
          <span className='text-xs text-gray-500 ml-5 mt-1 mb-3'>********</span>
       </div>
      </form>
        
        <form className="max-w-md mt-10">
        <div className="grid md:grid-cols-1 ml-12 mr-12 md:gap-6">
          <div className="relative z-0 w-full mb-3 group">
            <input type="tel" pattern="" name="floating_phone" id="floating_phone" className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
             <label  className="  peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Amount</label>
          </div>
       </div>
        <button type="submit" onClick={click} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className=" ml-12 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xs">Transfer</button>
        <InputPassword show={showalert} onClose={close}/>

      </form>
        </div>
  )
}
