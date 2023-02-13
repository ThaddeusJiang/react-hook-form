import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const Checkbox = ({ name, value, id }: { name: string; value: string; id?: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      type="checkbox"
      className={classNames('checkbox', {
        'checkbox-error': errors[name],
      })}
      {...register(name)}
      id={id ?? name}
      value={value}
    />
  );
};
