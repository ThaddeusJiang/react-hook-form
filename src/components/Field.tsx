import React from 'react';
import { Label } from './Label';
import { SingleErrorMessage } from './SingleErrorMessage';

export const Field = (props: {
  name: string;
  id?: string;
  label?: string;
  withoutError?: boolean;
  children: React.ReactNode;
}) => {
  const { name, id, label, withoutError = false, children } = props;
  return (
    <div>
      <Label name={name} id={id ?? name} label={label ?? name} />
      {children}
      {withoutError ? null : <SingleErrorMessage name={name} />}
    </div>
  );
};
