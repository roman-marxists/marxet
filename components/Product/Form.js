import React from 'react';
import { useForm } from 'react-hook-form';

import { doUploadBytes } from '../../src/api/product';

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => doUploadBytes(data.image[0]);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input
        type='text'
        placeholder='Name'
        {...register('name', { required: true, maxLength: 80 })}
      />
      <input
        type='text'
        placeholder='Description'
        {...register('description', { required: true, maxLength: 100 })}
      /> */}
      <input type='file' placeholder='Images' {...register('image')} />
      <input type='submit' />
    </form>
  );
}
