import React from 'react';

export const Label = ({ name, id, label }: { name: string; id?: string; label?: string }) => {
  return (
    <label htmlFor={id ?? name} className="label text-sm capitalize">
      {label ?? name}
    </label>
  );
};
