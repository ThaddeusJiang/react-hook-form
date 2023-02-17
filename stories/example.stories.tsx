import React, { useEffect } from 'react';
import { Meta } from '@storybook/react';
import { DevTool } from '@hookform/devtools';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Checkbox, Field, Input, InputNumber, MultipleErrorMessage, Radio, Select, Textarea } from '../src';
import { FormProvider, useForm } from 'react-hook-form';

export default {
  title: 'example',
} as Meta;

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

const onSubmit = console.debug;

export const Basic = () => {
  const formMethods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...formMethods}>
      <form
        className=" form-control  container  max-w-screen-sm  flex flex-col space-y-4 bg-white rounded shadow p-4 "
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <Field name="firstName">
          <Input id="firstName" name="firstName" />
        </Field>
        <Field name="lastName">
          <Input id="lastName" name="lastName" />
        </Field>
        <Field name="age">
          <InputNumber id="age" name="age" />
        </Field>

        <button type="submit" className="btn btn-primary">
          Save
        </button>

        <DevTool control={formMethods.control} />
      </form>
    </FormProvider>
  );
};

export const InlineError = () => {
  const formMethods = useForm({
    defaultValues: {
      firstName: 'Thaddeus',
      lastName: undefined,
      age: 30,
    },
    values: {
      firstName: 'Thaddeus',
      lastName: undefined,
      age: 30,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    formMethods.trigger();
  }, [formMethods]);

  return (
    <FormProvider {...formMethods}>
      <form
        className=" form-control  container  max-w-screen-sm  flex flex-col space-y-4 bg-white rounded shadow p-4 "
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <Field name="firstName">
          <Input id="firstName" name="firstName" />
        </Field>
        <Field name="lastName">
          <Input id="lastName" name="lastName" />
        </Field>
        <Field name="age">
          <InputNumber id="age" name="age" />
        </Field>

        <button type="submit" className="btn btn-primary">
          Save
        </button>

        <DevTool control={formMethods.control} />
      </form>
    </FormProvider>
  );
};

export const IsolatedErrors = () => {
  const formMethods = useForm({
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      age: 30,
    },
    values: {
      firstName: undefined,
      lastName: undefined,
      age: 30,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    formMethods.trigger();
  }, [formMethods]);

  return (
    <FormProvider {...formMethods}>
      <form
        className=" form-control  container  max-w-screen-sm  flex flex-col space-y-4 bg-white rounded shadow p-4 "
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <MultipleErrorMessage />

        <Field name="firstName" withoutError>
          <Input id="firstName" name="firstName" />
        </Field>
        <Field name="lastName" withoutError>
          <Input id="lastName" name="lastName" />
        </Field>
        <Field name="age" withoutError>
          <InputNumber id="age" name="age" />
        </Field>

        <button type="submit" className="btn btn-primary">
          Save
        </button>

        <DevTool control={formMethods.control} />
      </form>
    </FormProvider>
  );
};

export const ComplexForm = () => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <form className=" form-control flex flex-col space-y-4" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <fieldset className="bg-white grid grid-cols-3 gap-2 rounded shadow p-4">
          <div>
            <h4>Profile</h4>
            <p className="font-light text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <section className=" col-span-2">
            <div>
              <label htmlFor="about" className="label text-sm">
                About
              </label>
              <Textarea id="about" name="about" placeholder="you@example.com" />
              <label htmlFor="about" className="label-text text-sm font-light text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </label>
            </div>
          </section>
        </fieldset>

        <fieldset className="bg-white grid grid-cols-3 gap-2 rounded shadow p-4">
          <div>
            <h4>Personal Information</h4>
            <p className=" font-light text-gray-500">Use a permanent address where you can receive mail.</p>
          </div>

          <section className=" col-span-2 grid-cols-2 ">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="label text-sm">
                  First Name
                </label>
                <Input id="firstName" name="firstName" />
              </div>
              <div>
                <label htmlFor="lastName" className="label text-sm">
                  Last Name
                </label>
                <Input id="lastName" name="lastName" />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="age" className="label text-sm">
                  Age
                </label>
                <InputNumber id="age" name="age" />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="email" className="label text-sm">
                  Email address
                </label>
                <Input id="email" name="email" />
              </div>
            </div>

            <div>
              <div>
                {/* Country */}
                <label htmlFor="country" className="label text-sm">
                  Country
                </label>
                <Select
                  id="country"
                  name="country"
                  options={[
                    {
                      id: 'JP',
                      text: 'Japan',
                    },
                    {
                      id: 'US',
                      text: 'United States',
                    },
                    {
                      id: 'CA',
                      text: 'Canada',
                    },
                  ]}
                />
              </div>
            </div>

            <div>
              <div>
                {/* Street address */}
                <label htmlFor="streetAddress" className=" label text-sm">
                  Street address
                </label>
                <Input id="streetAddress" name="streetAddress" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                {/* City */}
                <label htmlFor="city" className=" label text-sm">
                  City
                </label>
                <Input id="city" name="city" />
              </div>
              <div>
                {/* State / Province */}
                <label htmlFor="stateProvince" className=" label text-sm">
                  State / Province
                </label>
                <Input id="stateProvince" name="stateProvince" />
              </div>

              <div>
                {/* Zip / Postal code */}
                <label htmlFor="postalCode" className=" label text-sm">
                  Zip / Postal code
                </label>
                <Input id="postalCode" name="postalCode" />
              </div>
            </div>
          </section>
        </fieldset>

        <fieldset className="bg-white grid grid-cols-3 gap-2 rounded shadow p-4">
          <div>
            <h4>Notifications</h4>
            <p className=" font-light text-gray-500">Decide which communications you'd like to receive and how.</p>
          </div>

          <section className="space-y-4">
            <div>
              <div className="space-y-2">
                <h5 className="  font-medium">By Email</h5>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Comments" name="byEmail" value="Comments" label="Comments" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Candidates" name="byEmail" value="Candidates" label="Candidates" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Offers" name="byEmail" value="Offers" label="Offers" />
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-2">
                <div>
                  <h5 className="font-medium">Push Notifications</h5>
                  <p className=" font-light">These are delivered via SMS to your mobile phone.</p>
                </div>

                {[
                  {
                    id: 'Everything',
                    text: 'Everything',
                  },
                  {
                    id: 'Same as email',
                    text: 'Same as email',
                  },
                  {
                    id: 'No push notifications',
                    text: 'No push notifications',
                  },
                ].map((item) => (
                  <div className="mb-2">
                    <Radio name="Radio" key={item.id} id={item.id} value={item.id} label={item.text} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </fieldset>

        <footer className="flex justify-end">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </footer>
        <DevTool control={formMethods.control} />
      </form>
    </FormProvider>
  );
};

export const AllInputs = () => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <form
        className="form-control max-w-screen-sm flex flex-col space-y-4"
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <Field name="Input">
          <Input id="Input" name="Input" placeholder="Input" />
        </Field>
        <Field name="InputNumber">
          <InputNumber id="InputNumber" name="InputNumber" placeholder="1,000,000" />
        </Field>

        <Field name="InputPassword">
          <Input id="InputPassword" name="InputPassword" type="password" placeholder="******" />
        </Field>

        <Field name="Date">
          <Input id="InputTime" name="InputTime" type="date" />
        </Field>

        <Field name="Time">
          <Input id="InputTime" name="InputTime" type="time" />
        </Field>

        <Field name="Select">
          <Select
            id="Select"
            name="Select"
            options={[
              {
                id: 'JP',
                text: 'Japan',
              },
              {
                id: 'US',
                text: 'United States',
              },
            ]}
          />
        </Field>

        <Field name="Checkbox">
          <Checkbox id="Checkbox" name="Checkbox" label="checked" />
        </Field>

        <Field name="Radio">
          {[
            {
              id: 'JP',
              text: 'Japan',
            },
            {
              id: 'US',
              text: 'United States',
            },
          ].map((item) => (
            <Radio name="Radio" key={item.id} id={item.id} value={item.id} label={item.text} />
          ))}
        </Field>
      </form>
      <DevTool control={formMethods.control} />
    </FormProvider>
  );
};
