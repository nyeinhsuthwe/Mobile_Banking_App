/* eslint-disable react/no-unescaped-entities */
import { Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function LoginForm() {
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let[error,setError]= useState(null)

  const navigate = useNavigate();

  const userLogin = async(e) => {
    try {
      e.preventDefault();
      setError(null)
    
    let data = {
      phone,
      password,
    };
   let res = await axios.post('http://localhost:8000/api/users/login', data ,{
    withCredentials: true
   })
    if(res.status==200){
      navigate('/')
    }
    
    } catch (e) {
      setError(e.response.data.error);
      
    }
    
  };

  
    return (
        <div className="mx-auto">
          <div className="w-full max-w-sm pt-3 mx-auto">
            <form  onSubmit={userLogin}
              className="backdrop-blur-lg bg-white/10 shadow-lg px-8 pt-6 pb-8 rounded-lg"
            >
              <p className="text-2xl mb-4 font-bold text-gray-600 ">
                Login Form
              </p>

    
              <div className="mb-2">
                <label  className="block text-gray-600 text-xs font-semibold mb-2">
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="shadow appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs rounded-lg"
                  id="email"
                  type="text"
                  placeholder="Enter your Phone"
                ></input>
                  
              </div>
    
              <div className="mb-2">
                <label className="block text-gray-600 text-xs font-semibold mb-2">
                  Password
                </label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  className="shadow appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs rounded-lg"
                  id="password"
                  placeholder="Enter your Pin"
                ></input>
                  {!!(error)&& <p className="text-xs text-red-500">{error}</p>}
              </div>
    
    
              <p className="text-orange-700 text-xs font-semibold mb-3"></p>
              <div className="flex justify-between mb-6 mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 text-sm rounded-lg"
                  type="submit"
                >
                  Login
                </button>
              </div>
    
              <p className="text-xs font-semibold text-gray-600 text-center">
                {" "}
                If you doesn't have an Account?{" "}
                <Link className="font-bold " to="/register">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
    
        </div>
      );
}
