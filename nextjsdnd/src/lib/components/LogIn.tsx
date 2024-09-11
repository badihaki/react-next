'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/user/userSlice";
import axios from "axios";

export default function LogIn(){
    // error state
    const [err, setErr] = useState<string>("");
    // client-side router
    const router = useRouter();
    const dispatch = useAppDispatch();
    
    // state for showing password
    const [isPassword, setIsPassword] = useState<boolean>(true);
    // state for form
    const [form, setForm] = useState<{email:string, password:string}>({
        email:"",
        password:""
    });

    function handleChange(e:{target:{value:string, name:string}}):void{
        const key:string = e.target.name;
        const value = e.target.value;
        const formCopy:{email:string, password:string} = {...form}
        formCopy[key as keyof typeof formCopy] = value;
        // console.log(formCopy);
        setForm(formCopy);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>):Promise<void>=>{
        e.preventDefault();
            
        try{
            const response = await axios.post("api/users/login", form);
            console.log(response);
            console.log(response.data.user);
            dispatch(setUser(response.data.user));
            return router.push("/");
        }
        catch(err:any){
            showError(err.response.data.error);
        }
        clearForm();
    }
    
    function showError(errMsg:string){
        setErr(errMsg);
        setTimeout(() => {
            setErr("");
        }, 5500);
    }

    function clearForm(){
        setForm(
            {
                email:"",
                password:""
            })
        }

    return(
        <div id="login">
            <h4>Log In Below</h4>
            <form onSubmit={handleSubmit}>
                Email:
                <input type="email" name="email" value={form.email} onChange={handleChange} className="form-input px-4 py-3 rounded-full"></input>
                <br />
                Passowrd: 
                <input type={isPassword? "password":"text"} name="password" value={form.password} onChange={handleChange} className="form-input px-4 py-3 rounded-full"></input>
                <br />
                <button type="button" onClick={(e)=>{
                    e.preventDefault();
                    setIsPassword(!isPassword);
                }}>{isPassword?"Hide Password":"Show Password"}</button>
                <br />
                <button type="submit" className="bg-transparent hover:bg-gray-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">Submit</button>
                <br />
                <div className="text-red-700 font-semibold text-sm">
                    {err}
                </div>
            </form>
        </div>
    )
}