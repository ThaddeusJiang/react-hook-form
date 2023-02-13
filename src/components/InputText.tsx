import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const InputText = ({ name, id }: { name: string; id?: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      className={classNames('input input-bordered  w-full', {
        'input-error': errors[name],
      })}
      {...register(name)}
      id={id ?? name}
    />
  );
};
