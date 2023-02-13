import React from 'react';
import { useFormContext } from 'react-hook-form';

export const SingleErrorMessage = ({ name, id }: { name: string; id?: string }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {errors[name] ? (
        <label htmlFor={id ?? name} className="label-text text-error">
          {errors?.[name]?.message}
        </label>
      ) : null}
    </>
  );
};
