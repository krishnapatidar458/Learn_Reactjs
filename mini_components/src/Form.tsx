// import React,{ FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);

    // const handleSubmit = (event:FormEvent) =>{
    //     event.preventDefault();
    //     if(nameRef.current !== null){
    //         console.log(nameRef.current.value);
    //     }if(ageRef.current !== null)
        // console.log(ageRef.current.value);
    // }

    const {register,handleSubmit} = useForm();

    const onSubmit = (data : FieldValues) => console.log(data);
     
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label id="name" className="form-label">Name</label>
                <input {...register("name")} type="text" id="name" className="form-control" />
            </div>
            <div className="mb-3">
                <label id="age" className="form-label">Age</label>
                <input {...register("age")} type="number" id="age" className="form-control"/>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>

        </form>
    )
}

export default Form