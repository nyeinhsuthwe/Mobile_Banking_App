import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateData() {
    const{id}=useParams();
    console.log(id);
    
    const[description,setDescription]=useState('');
    const[price,setPrice]=useState('');
    const[date,setDate]=useState('');
    let [errors, setErrors] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        let fetchData = async()=>{
            if(id){
                let res = await axios.post('http://localhost:8000/api/data/'+ id );
                if(res.status===200){
                    setDescription(res.data.description);
                    setPrice(res.data.price)
                    setDate(res.data.date)
                    
                }
            }
        }
        fetchData();
    },[id])

    let submit = async (e) => {
        try {
            e.preventDefault();
            let data = {
                description,
                price,
                date
            };
            let res;
            if(id){
                res = await axios.patch('http://localhost:8000/api/data/'+id );

            }
            else{
                res = await axios.post('http://localhost:8000/api/data', data );

            }
            if (res.status === 200) {
                navigate('/top-up');
            }
        } catch (e) {
            setErrors(Object.keys(e.response.data.errors));
        }
    }
    
  return (
    <div>
         <div className="mx-auto max-w-md border-2 my-14 border-white p-4">
            <div className="flex justify-between">
            <h1 className="mb-6 text-2xl font-bold text-blue-500 text-center">Data { id? 'Edit' : 'Create'} Form</h1>

            </div>
            <form action="" className="space-y-5" onSubmit={submit}>
            <ul className='list-disc pl-3'>
                    {!!errors.length && errors.map((error, i) => (
                        <li className='text-red-500 text-sm' key={i}>{error} is invalid value</li>
                    ))}
                </ul>
                <input value={description} onChange={e=> setDescription(e.target.value)} type="text" placeholder="data" className="w-full p-1" />
                <input value={price} onChange={e=> setPrice(e.target.value)} placeholder="data price" type="text" className="w-full p-1" />
                <input value={date} onChange={e=> setDate(e.target.value)} type="text" placeholder="expired date" className="w-full p-1" />
                <button type="submit" className='w-full px-3 py-1 rounded-full bg-blue-600 text-white'>{id? 'Update' : 'Create'}</button>
            </form>
        </div>
    </div>
  )
}
