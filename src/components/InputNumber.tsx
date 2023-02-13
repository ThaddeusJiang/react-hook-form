import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const InputNumber = ({ name, id }: { name: string; id?: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      id={id ?? name}
      {...register(name, {
        valueAsNumber: true,
        required: true,
      })}
      type="number"
      className={classNames('input input-bordered w-full', {
        'input-error': errors[name],
      })}
    />
  );
};
