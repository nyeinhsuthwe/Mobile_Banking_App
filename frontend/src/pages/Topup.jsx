import { useEffect, useState } from "react"
import DataCard from "../components/DataCard";

export default function Topup() {

    const[data, setData]=useState([]);


    useEffect(()=>{
        let fetchData = async ()=>{
            let response = await fetch('http://localhost:8000/api/data')
            if(response.ok){
                let data = await response.json();
                setData(data);
            }
        }
        fetchData();
    },[])

    let onDeleted = (_id) => {
       
            //handle delete on client side
            setData(prev => prev.filter(d => d._id !== _id))
        
    }

  return (
    <div className="mt-3 space-y-3">
            {data.length && (
                data.map(data=>(
                    <DataCard data={data} key={data._id} onDeleted={onDeleted}/>
                ))
        )}
        </div>
  )
}
