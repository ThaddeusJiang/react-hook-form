import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const Textarea = ({ name, id, placeholder }: { name: string; id?: string; placeholder?: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <textarea
      className={classNames('textarea textarea-bordered w-full', {
        'textarea-error': errors[name],
      })}
      {...register(name)}
      id={id ?? name}
      rows={2}
      placeholder={placeholder}
    />
  );
};
