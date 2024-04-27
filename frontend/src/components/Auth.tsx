import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { userSignUpType } from "@yuvateja01/common";
import axios from "axios";


export const Auth = ({type}:{type:"signup"|"signin"}) =>{
    const navigate = useNavigate()
    const [postInputs,setPostInputs] = useState<userSignUpType>({
        username:"",
        email:"",
        password:""
    })

    async function sendRequest(){
        try{
        const response = await axios.post(`https://backend.yuvas2001.workers.dev/user/${type == "signup"?"signup":"login"}`,postInputs)
        const {token} = response.data;
        localStorage.setItem("token",token)
        navigate("/blogs")
        }
        catch(e){
            console.log("Exception "+e)
        }
    }


    return <div className="flex flex-col justify-center h-screen">
        <div className = "flex justify-center">
            <div>
            <div className = "px-10">
                <div className="font-extrabold text-3xl pt-2">
                    Create an Account
                </div>
                <div className="text-gray-900 font-semibold text-base text-center pt-2">
                    Already have an account?<Link to={'/signin'} className="underline">Login</Link>
                 </div>
            </div>
            <div>
            <LabelInput label="Username" placeHolder="Enter your username" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    username:e.target.value

                })
            }}></LabelInput>
             {type === "signup"?<LabelInput label="Email" placeHolder="Enter your email" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    email:e.target.value

                })
            }}></LabelInput>:null}
             <LabelInput label="Password" placeHolder="Enter your password" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    password:e.target.value

                })
            }}></LabelInput>
            <button onClick= {sendRequest} type="button" className=" mt-3 w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{type === "signup"?"Sign Up":"Sign In"}</button>
            </div>
            </div>
        </div>
    </div>
}
interface LabelInputTpe {
    label : string;
    placeHolder:string;
    onChange: (e: ChangeEvent<HTMLInputElement>) =>void;
}

function LabelInput({label,placeHolder,onChange}:LabelInputTpe) {
    return <div>
        <div>
            <label className="block mb-2 text-base font-semibold text-gray-900 dark:text-black pt-2">{label}</label>
            <input onChange = {onChange} 
            type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeHolder} required />
        </div>
    </div>

}