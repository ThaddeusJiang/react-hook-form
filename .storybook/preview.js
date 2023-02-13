import '../tailwind.css';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },

  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'rgb(243 244 246 / 100%)',
      },
      {
        name: 'dark',
        value: 'rgb(31 41 55 / 100%)',
      },
    ],
  },
};
