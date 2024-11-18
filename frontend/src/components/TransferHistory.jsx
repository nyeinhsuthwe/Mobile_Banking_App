export default function TransferHistory() {
    const users = [
        {
            name:'Nyein Hsu Thwe',
            id:1
        },
        {
            name:'Khin Nyein Su Lwin',
            id:2
        },
        {
            name:'Hnin Sett Shwe Hlwar',
            id:3
        },
        {
            name:'Myat Po Lwin',
            id:4
        },
        
    ]
  return (
    <div>
        <div className="flex justify-center mt-5 mb-3 mx-auto">
        <div className="flex xs:space-x-48 sm:space-x-48 md:space-x-96 lg:space-x-96 ">
        <span className="text-xs">Recent Transfers</span>
        <svg className="h-4 w-4 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
        </svg>
        </div>
    </div>

    <div className='xs:max-w-xs sm:max-w-xs md:max-w-lg lg:max-w-lg rounded-lg overflow-hidden shadow-lg mx-auto mt-3 mb-3 bg-white '>
    
    {users.map((user)=>(
        <div key={user.id} className="border-b-2 flex w-full mt-0 ml-5 mb-0">
        <svg className=" h-9 w-9 p-2 fill-gray-300 m-3 border border-gray-300 border-2 rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
        </svg>
        <span className="m-3 ml-0 mt-4 text-sm text-gray-500 ">{user.name}</span>
        </div>
    ))}

    </div>

    </div>
  )
}
