import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const Select = ({
  name,
  options,
  id,
}: {
  name: string;
  options: { id: string; text: string }[];
  id?: string;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <select
      className={classNames(' select  select-bordered', {
        'select-error': errors[name],
      })}
      {...register(name)}
      id={id ?? name}
    >
      {options.map((item) => (
        <option key={item.id} value={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
};
