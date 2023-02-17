import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const Checkbox = ({ name, value, label, id }: { name: string; value?: string; id?: string; label: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex items-center space-x-1">
      <input
        type="checkbox"
        className={classNames('checkbox', {
          'checkbox-error': errors[name],
        })}
        {...register(name)}
        id={id ?? name}
        value={value}
      />
      <label htmlFor={id ?? name} className="label text-sm ">
        {label ?? name}
      </label>
    </div>
  );
};
