"use client"
import { useState, useRef, FormEvent } from "react"
import { useRouter } from "next/navigation";
import { register } from "@/lib/actions/register";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setUser } from "@/lib/redux/features/user/userSlice";
import IUser from "@/lib/interfaces/IUser";
import axios from "axios";

export default function SignUp(){
    const [isPassword, setIsPassword] = useState<boolean>(true);
    const [form, setForm] = useState<{username:string, email:string, password:string}>({
        username:"",
        email:"",
        password:"",
    });
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const dispatch = useAppDispatch();

    function handleFormChange(e:{target:{value:string, name:string}}){
        const key:string = e.target.name;
        const value = e.target.value;
        const formCopy = {...form}
        formCopy[key as keyof typeof formCopy] = value;
        // console.log(formCopy);
        setForm(formCopy);
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        // const registrationResponse = await register(JSON.stringify({
        //     email: form.email,
        //     password: form.password
        // })) as string;

        // const registrationResult = JSON.parse(registrationResponse);
        
        // clearForm();
        
        // if(registrationResult?.error){
        //     setError(registrationResult.error);
        //     return;
        // }
        // else{
        //     console.log(registrationResult);
        //     console.log(registrationResult.email);
        //     const user:IUser = registrationResult;
        //     dispatch(setUser(user));
        //     return router.push("/");
        // }

        // clearForm();
        try{
            // console.log(form);
            const response = await axios.post("api/users/signup", form);
            // dispatch(setUser()); // dispatch the response to the store
            // console.log(response);
            router.push("/");

        }
        catch(err:any){
            // console.log(`Signup failed with error:`);
            // console.log(err.message);
            showError(err.message);
        }
    }
    
    async function showError(err:string) {
        setError(err);
        setTimeout(() => {
            setError("");
        }, 5000);
    }

    function clearForm(){
        setForm(
            {
                username:"",
                email:"",
                password:"",
            })
        }

    return(
        <div id="signup">
            <h4>Sign Up Below</h4>
            <form onSubmit={handleSubmit}>
                Username: 
                <input type="text" name="username" value={form.username} onChange={handleFormChange} className="form-input px-4 py-3 rounded-full"></input>
                <br />
                Email:
                <input type="email" name="email" value={form.email} onChange={handleFormChange} className="form-input px-4 py-3 rounded-full"></input>
                <br />
                Passowrd: 
                <input type={isPassword? "password":"text"} name="password" value={form.password} onChange={handleFormChange} className="form-input px-4 py-3 rounded-full"></input>
                <br />
                <button type="button" onClick={(e)=>{
                    e.preventDefault();
                    setIsPassword(!isPassword);
                }}>{isPassword?"Hide Password":"Show Password"}</button>
                <br />
                <button type="submit" className="bg-transparent hover:bg-gray-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">Submit</button>
            </form>
            <div className="text-red-700 font-semibold text-sm">{error}</div>
        </div>
    )
}