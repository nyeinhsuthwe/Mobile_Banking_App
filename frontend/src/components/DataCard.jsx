/* eslint-disable react/prop-types */
import axios from "axios";
import { Link } from "react-router-dom";

export default function DataCard({data, onDeleted}) {

    let deleteData = async () => {
        
        let res = await axios.delete('http://localhost:8000/api/data/' + data._id);
        if (res.status === 200) {
           
            onDeleted(data._id)
        }
    }
  return (
    
    <div className="bg-white p-5 rounded-2xl space-y-1" key={data._id}>
                        <div className="flex justify-between">
                        <p className="text-md font-bold text-gray-500">{data.description}</p>
                        <div className="space-x-2">
                        <Link to={`/editdata/${data._id}`} className='bg-blue-500 px-2 py-1 rounded-lg text-white text-sm'>Edit</Link>
                        <button onClick={deleteData}  className='bg-red-500 px-2 py-1 rounded-lg text-white text-sm hover:bg-red-300'>Delete</button>
                        </div>
                        </div>
                        <p className="text-gray-500">{data.price}</p>
                        <p className="text-gray-500">{data.date}</p>
                    </div>
  )
}
