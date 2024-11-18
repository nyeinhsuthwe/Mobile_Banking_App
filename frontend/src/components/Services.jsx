import { Link } from "react-router-dom";

export default function Services() {
 
  return (
    <div className='lg:max-w-xl md:max-w-md sm:max-w-sm xs:max-w-xs rounded overflow-hidden shadow-lg mb-4 mx-auto mt-11 bg-white'>
        <div className="m-11 flex justify-center bg-white">
            <ul className='flex space-x-8 text-sm font-bold text-gray-600'>
            <Link to="/transfer"><li><svg className='bg-blue-600 h-11 w-11 mb-2 pr-2 pl-2  rounded-full hover:fill-white hover:bg-blue-300 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>
            <span>Transfer</span></li> </Link>

            <Link to="/top-up"><li><svg className='bg-blue-600 h-11 w-11 mb-2 pr-2  pl-3  rounded-full hover:fill-white hover:bg-blue-300 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z"/>
            </svg><span>TopUp</span></li></Link>

            <li>
            <svg className="bg-blue-600 h-11 w-11 mb-2 pr-3 pl-3  rounded-full hover:fill-white hover:bg-blue-300 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/>
            </svg>
            <span>History</span></li>
            </ul>
        </div>

      </div>
  )
}
