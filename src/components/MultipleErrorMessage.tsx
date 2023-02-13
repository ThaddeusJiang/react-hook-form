import React from 'react';
import { useFormContext } from 'react-hook-form';

export const MultipleErrorMessage = () => {
  const {
    formState: { errors },
  } = useFormContext();

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <>
      {hasErrors ? (
        <ul className="list-disc list-inside text-error ">
          {Object.keys(errors).map((name) => (
            <li key={name}>
              <label htmlFor={name} className="  link link-hover">
                {errors?.[name]?.message}
              </label>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
