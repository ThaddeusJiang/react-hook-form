import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const Radio = ({ name, options }: { name: string; options: { id: string; text: string }[] }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {options.map((item) => (
        <label key={item.id} className="flex items-center">
          <input
            className={classNames(' radio ', {
              'radio-error': errors[name],
            })}
            type="radio"
            {...register(name)}
            value={item.id}
            id={item.id}
          />
          <span className="ml-2">{item.text}</span>
        </label>
      ))}
    </>
  );
};
