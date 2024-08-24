import { useState, useEffect, ChangeEvent, FormEvent } from "react";

export default function CharacterForm(){
    const [jobClasses, setJobClasses] = useState<string[]>([]);
    const [form, setForm] = useState({
        "name":"",
        "class":"Barbarian",
        "gender":"m"
    })
    
    useEffect(()=>{
        try{
            fetch("https://www.dnd5eapi.co/api/classes/").then((response)=>response.json()).then((data)=>{
                const classArr:string[] = [];
                data.results.forEach( (element:{name:string}) => {
                    if(!classArr.includes(element.name)) classArr.push(element.name);
                } )
                setJobClasses(classArr);
            });
        }
        catch(err){
            console.log(err);
        }
    },[])

    const optionValues = ()=>{
        if(jobClasses.length > 0) return jobClasses.map( (jobClass)=><option value={jobClass} key={jobClass}>{jobClass}</option> );
        else return <option value={"Barbarian"}>Obtaining job classes, please wait</option>
    }

    function handleFormChange(e:{target:{name:string, value:string}}){
        const key = e.target.name;
        const val = e.target.value;

        const formUpdate = {...form};
        formUpdate[key as keyof typeof formUpdate] = val;
        setForm(formUpdate);
    }

    function handleFormSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(form);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            Character Name: <input className="text-stone-800 font-semibold font-serif" type="text" name="name" value={form.name} onChange={handleFormChange} />
            <br />
            Character Class: <select name="class" className="bg-slate-500 p-1 text-stone-100 font-semibold font-serif mt-1" onChange={handleFormChange}>
                {optionValues()}
            </select>
            <br />
            Character Gender: <select name="gender" className='bg-slate-500 p-1 text-stone-100 font-semibold font-serif my-1' onChange={handleFormChange}>
                <option value={"m"}>Male</option>
                <option value={"f"}>Female</option>
            </select>
            <br />
            <button type="submit" className="transition duration-300 ease-in-out bg-slate-500 hover:bg-slate-600 active:bg-slate-800 px-2 py-1 rounded-full border-stone-400 border-2 hover:border-opacity-30 font-serif font-semibold text-stone-200 hover:text-stone-50">Submit</button>
        </form>
    )
}