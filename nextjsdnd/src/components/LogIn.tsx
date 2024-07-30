import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogIn(){
    // error state
    const [err, setErr] = useState<string>("");
    // client-side router
    const router = useRouter();
    
    // state for showing password
    const [isPassword, setIsPassword] = useState<boolean>(true);
    // state for form
    const [form, setForm] = useState<{email:string, password:string}>({
        email:"",
        password:""
    });

    function handleChange(e:{target:{value:string, name:string}}){
        const target:string = e.target.name;
        const value = e.target.value;
        const formCopy = {...form}
        formCopy[target] = value;
        console.log(formCopy);
        setForm(formCopy);
    }

    const handleSubmit = async (e:SubmitEvent)=>{
        e.preventDefault();

        const res = await signIn("credentials", {
            email: form.email,
            password: form.password
        });

        if(res?.error){
            showError(res.error as string)
        }
        if(res?.ok){
            clearForm();
            return router.push("/");
        }
    }
    
    function showError(errMsg:string){
        //
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
                {err}
            </form>
        </div>
    )
}