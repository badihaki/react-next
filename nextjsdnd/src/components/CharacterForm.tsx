import { useState, useEffect, ChangeEvent, FormEvent } from "react";

export default function CharacterForm(){
    const [jobClasses, setJobClasses] = useState<string[]>([]);
    const [form, setForm] = useState({
        "name":"",
        "class":"Barbarian"
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

    function handleFormChange(e:ChangeEvent<HTMLInputElement>){
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
            Character Name: <input type="text" name="name" value={form.name} onChange={handleFormChange} />
            <br />
            Character Class: <select name="class" onChange={handleFormChange}>
                {optionValues()}
            </select>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}