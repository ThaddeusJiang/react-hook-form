import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const Radio = ({ name, value, label, id }: { name: string; value?: string; id?: string; label: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex items-center space-x-1">
      <input
        className={classNames(' radio ', {
          'radio-error': errors[name],
        })}
        type="radio"
        {...register(name)}
        value={value}
        id={id}
      />
      <label htmlFor={id ?? name} className="label text-sm ">
        {label ?? name}
      </label>
    </div>
  );
};
