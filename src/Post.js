import React from 'react';
import { useForm } from 'react-hook-form';


function Posts() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
     console.log(data);

     try {
      const body = data ;
      const response = await fetch("https://twoc-nv25lzr5wa-ew.a.run.app/ads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

    } catch (err) {
      console.error(err.message);
    }


  }
  console.log(errors);

  return (
    <div className='page'>
      <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
      <input type="text" placeholder="Name" name="name" ref={register({required: true, maxLength: 80})} />
      <input type="tel" placeholder="Mobile number" name="mobile_number" ref={register({required: true, minLength: 6, maxLength: 13})} />
      <input type="text" placeholder="Your Red Number" name="red_number" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Vehicle Model" name="vehicle_model" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Pick up address " name="pick_up_address" ref={register({required: true})} />
      <input type="text" placeholder="Drop Off Address" name="drop_off_address" ref={register({required: true})} />
      </div>
      <textarea name="info" ref={register({required: true})} />

      <input type="submit" />
    </form>
    </div>
    </div>
  );
}

export default Posts;
