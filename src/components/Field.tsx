import React from 'react';
import { Label } from './Label';
import { SingleErrorMessage } from './SingleErrorMessage';

export const Field = (props: {
  name: string;
  id?: string;
  label?: string;
  Component: React.ComponentType<{
    name: string;
    id?: string;
    text?: string;
  }>;
  withoutError?: boolean;
}) => {
  const { name, id, label, Component, withoutError = false } = props;
  return (
    <div>
      <Label name={name} id={id ?? name} label={label ?? name} />
      <Component {...props} />
      {withoutError ? null : <SingleErrorMessage name={name} />}
    </div>
  );
};
