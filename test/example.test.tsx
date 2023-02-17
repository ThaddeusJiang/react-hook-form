import React from 'react';
import { render, screen } from '@testing-library/react';
import { Field, Input } from '../src';
import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

type FormSchema = yup.InferType<typeof schema>;

function FormWrapper({ children }: { children: React.ReactNode }) {
  const form = useForm<FormSchema>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: 'Thaddeus',
      lastName: undefined,
      age: 30,
    },
  });
  return <FormProvider {...form}>{children}</FormProvider>;
}

test('renders successfully', () => {
  render(
    <FormWrapper>
      <Field name="test" label="test">
        <Input name="test" />
      </Field>
    </FormWrapper>
  );
  const label = screen.getByText(/test/i);
  expect(label).toBeInTheDocument();
});
