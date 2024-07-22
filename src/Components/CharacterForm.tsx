import { ChangeEvent, useEffect, useState } from "react";

function CharacterForm(){
    // form
    const [form, setForm] = useState({
        "name":"",
        "class":"Barbarian"
    })

    // job classes
    const [jobClasses, setJobClasses] = useState<string[]>([]);

    // use effect
    useEffect(()=>{
        fetch("https://www.dnd5eapi.co/api/classes/").then((response)=>response.json()).then((data)=>{
            // console.log(data);
            const classArray:string[] = []
            data.results.forEach((element:{name:string}) => {
                // console.log(element.name);
                if(!classArray.includes(element.name)){
                    classArray.push(element.name);
                }
            });
            setJobClasses(classArray);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    function changeForm(e:ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        const key = e.target.name;
        const value:string = e.target.value;
        
        // console.log(`the key we are changing is '${key}' and the value is '${value}'`);
        
        const formUpdate = {...form};
        formUpdate[key] = value;
        setForm(formUpdate);
    }


    const optionValues = ()=>{
        if(jobClasses.length > 0){
            // console.log(jobClasses);
            return jobClasses.map(jobClass => <option value={jobClass} key={jobClass}>{jobClass}</option>);
        }
        else {
            return(
            <option value={"default"}>Obtaining classes, please wait</option>
        )}
    }

    return(
        <form>
            Character Name: <input type="text" name="name" value={form.name} onChange={changeForm} />
            <br />
            Class: <select name="class" onChange={changeForm}>
                {optionValues()}
            </select>
            <br />
            <button type="submit">Create Character</button>
        </form>
    )
}

export default CharacterForm;