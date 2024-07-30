import { ChangeEventHandler, useState } from "react"

export default function SignUp(){
    const [isPassword, setIsPassword] = useState<boolean>(true);
    const [form, setForm] = useState<{email:string, password:string}>({
        email:"",
        password:""
    })

    function handleChange(e:{target:{value:string, name:string}}){
        const target:string = e.target.name;
        const value = e.target.value;
        // const formVal = {target:value};
        // console.log(formVal);
        const formCopy = {...form}
        // console.log(target);
        formCopy[target] = value;
        console.log(formCopy);
        setForm(formCopy);
    }

    return(
        <div id="signup">
            <h4>Sign Up Below</h4>
            <form>
                Email:
                <input type="email" name="email" value={form.email} onChange={handleChange}></input>
                <br />
                Passowrd: 
                <input type={isPassword? "password":"text"}></input>
                <br />
                <button type="button" onClick={(e)=>{
                    e.preventDefault();
                    setIsPassword(!isPassword);
                }}>{isPassword?"Hide Password":"Show Password"}</button>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}