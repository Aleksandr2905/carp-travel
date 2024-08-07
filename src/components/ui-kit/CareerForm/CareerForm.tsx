'use client';

import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormButton } from '@/components/base/FormButton';
import {
  Input,
  FormData,
  Name,
  Textarea,
  Checkbox,
} from '@/components/base/FormField';
import { schema } from '@/helpers';

import { dataCareer } from '@/data';

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const { description2, formFields, textarea, checkbox } = dataCareer;

  watch((data) => {
    localStorage.setItem('careerForm', JSON.stringify(data));
  });

  useEffect(() => {
    const storageData = localStorage.getItem('careerForm');
    if (storageData !== null) {
      const result = JSON.parse(storageData);
      setValue('username', result.username);
      setValue('email', result.email);
      setValue('position', result.position);
      setValue('phone', result.phone);
      setValue('message', result.message);
    }
  }, [setValue]);

  const onSubmit = (data: FormData) => {
    try {
      console.log(data);
      toast.success('Your data has been successfully sent!');
      localStorage.removeItem('careerForm');
      reset();
      setValue('phone', '');
    } catch (error) {
      toast.error('Something went wrong, try again.');
    }
  };

  return (
    <div className="md:mt-auto">
      <Toaster />
      <p className="text-sm font-extralight leading-5 w-[179px] ml-auto mb-6 whitespace-pre-line md:text-[13px] md:w-[221px] md:mb-10 md:ml-0 xl:w-[234px] xl:text-lg xl:leading-6 xl:mb-[10px]">
        {description2.text}
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="md:flex md:gap-5 xl:gap-6">
          <div className="md:w-[221px] xl:w-[290px]">
            {formFields.map((field) => (
              <Input
                key={field.id}
                label={field.label}
                type={field.type}
                id={field.id}
                name={field.name as Name}
                errors={errors}
                register={register}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                className="md:h-[68px] xl:h-[82px]"
              />
            ))}
          </div>
          <Textarea
            key={textarea.id}
            label={textarea.label}
            type={textarea.type}
            id={textarea.id}
            name={textarea.name as Name}
            errors={errors}
            register={register}
            className="md:w-[221px] md:h-[256px] xl:w-[292px] xl:h-[300px]"
          />
        </div>
        <div className="md:flex md:justify-between xl:mt-3">
          <Checkbox
            key={checkbox.id}
            label={checkbox.label}
            type={checkbox.type}
            id={checkbox.id}
            name={checkbox.name as Name}
            errors={errors}
            register={register}
          />
          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
