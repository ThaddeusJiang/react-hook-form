import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const Input = ({
  name,
  id,
  placeholder,
  type,
}: {
  name: string;
  id?: string;
  placeholder?: string;
  type?: string;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      className={classNames('input input-bordered w-full', {
        'input-error': errors[name],
      })}
      placeholder={placeholder}
      id={id ?? name}
      type={type ?? 'text'}
      {...register(name)}
    />
  );
};
