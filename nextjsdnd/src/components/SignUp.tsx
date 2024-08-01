"use client"
import { useState, useRef, FormEvent } from "react"
import { useRouter } from "next/navigation";
import { register } from "@/actions/register";

export default function SignUp(){
    const [isPassword, setIsPassword] = useState<boolean>(true);
    const [form, setForm] = useState<{email:string, password:string}>({
        email:"",
        password:""
    });
    const [error, setError] = useState<string>("");
    const router = useRouter();

    function handleChange(e:{target:{value:string, name:string}}){
        const key:string = e.target.name;
        const value = e.target.value;
        const formCopy = {...form}
        formCopy[key as keyof typeof formCopy] = value;
        // console.log(formCopy);
        setForm(formCopy);
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        const registrationResponse = await register({
            email: form.email,
            password: form.password
        })

        clearForm();
        
        if(registrationResponse?.error){
            setError(registrationResponse.error);
            return;
        }
        else{
            return router.push("/");
        }
        
        console.log(form);
    }

    function clearForm(){
        setForm(
            {
                email:"",
                password:""
            })
        }

    return(
        <div id="signup">
            <h4>Sign Up Below</h4>
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
            </form>
        </div>
    )
}