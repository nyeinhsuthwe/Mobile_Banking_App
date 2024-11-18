import { useState } from 'react';
import {Link} from 'react-router-dom';

// import { AuthContext } from '../contexts/AuthContext';
// import { useContext } from 'react';

export default function Nav() {
    // let { user, dispatch } = useContext(AuthContext);
    // let navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const toggleMenu = ()=>{
        setOpen(!open);
    }
    const closeMenu = ()=>{
        setOpen(false)
    }
    // let {name} =useContext(AuthContext);
   
    
    
  return (
    <div className='sticky top-0 z-50'>
        <nav className="bg-blue-600  ">
            <div className="mx-auto px-7 max-w-7xl px-2 md:px-6 lg:px-8 flex justify-between  items-center">
                <div className='flex justify-between items-center'>
                    <span className='font-bold text-2xl text-white opacity-'>My Pay</span>
                </div>
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                        <button type="button" onClick={toggleMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            
                            {!open ? (
                                <svg className="block h-7 w-7 " fill="white" viewBox="0 0 24 24"  stroke="currentColor" aria-hidden="true">
                                <path  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                ) : (
                                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
                                )}
          
                            
                        </button>
                    </div>
                        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
        
                            <div className="hidden md:ml-6 md:block">
                                <div className="flex space-x-4">
                                    <ul className='flex text-xs font-bold text-white w-full 
                                                left-0 md:w-auto md:py-0 md:pl-0 
                                                md:opacity-100 opaticy-0 transition-all 
                                                ease-in duration-500'>
      
                                        <svg className='w-5 mr-1 fill-blue-400'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                        </svg><li><Link to="/" className='hover:text-blue-300 mr-7 md:my-0'>Home</Link></li>
      
                                        <svg className='w-7 mr-1 fill-blue-400 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/>
                                        </svg>
                                        <li><Link to="/message" className='hover:text-blue-300 mr-7 md:my-0'>Message</Link></li>

                                        <svg className='w-5 mr-1 fill-blue-400 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                                        </svg>
                                        <li><Link to="/mysetting" className='hover:text-blue-300 mr-7 md:my-0'>My</Link></li>

                                        <li><Link to="/createdata" className='hover:text-blue-300 mr-7 md:my-0'>Create Data</Link></li>

                                    </ul>
                                    
                                    
                                </div>
    
                            </div>
                            
                        </div>
                </div>
                <div className='flex space-x-3'>
                <Link to='/login' className='hidden md:block md:items-stretch md:justify-start bg-blue-500 hover:bg-blue-400 text-white font-semibold py-1 px-4 rounded text-sm'>Login</Link>               
                <button to="/login" className='hidden md:block md:items-stretch md:justify-start bg-blue-500 hover:bg-blue-400 text-white font-semibold py-1 px-4 rounded text-sm'>Logout</button>           
                </div>
                </div>

    <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
    <div className="space-y-1 px-6 pb-3 pt-2 bg-white">

      <div className='items-center flex hover:bg-gray'>
      <svg className='w-5 mr-1 fill-blue-600'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
      </svg>
      <Link to="/" onClick={closeMenu} className="block rounded-md  px-3 py-2 text-base font-medium text-gray-600 " aria-current="page">Home</Link>
      </div>

      <div className='items-center flex'>
      <svg className='w-5 mr-1 fill-blue-600 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/>
      </svg>
      <Link to="/message" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 ">Message</Link>
      </div>

      <div className='flex items-center'>
      <svg className='w-5 mr-1 fill-blue-600 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
      </svg><Link to="/mysetting" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 ">My</Link>
      </div>
        <div className='flex space-x-3'>
                <Link to='/login' className='hidden md:block md:items-stretch md:justify-start bg-blue-500 hover:bg-blue-400 text-white font-semibold py-1 px-4 rounded text-sm'>Login</Link>                
                <button className='hidden md:block md:items-stretch md:justify-start bg-blue-500 hover:bg-blue-400 text-white font-semibold py-1 px-4 rounded text-sm'>Logout</button>            
        </div>
    </div>
    
  </div>
</nav>

    </div>
  )
}
