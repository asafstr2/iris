import React, { useState } from 'react';
import { Story } from '@storybook/react';

import { DateSelect, Props } from './DateSelect';

import { Input } from '../../Input/Input';
import { Layout } from '../../../../storybook';

export default {
  title: 'Components/Inputs/Dates/DateSelect',
  component: DateSelect,
  argTypes: {
    label: { table: { disable: true } }, // not relevant
    status: { table: { disable: true } }, // not relevant
    value: { table: { disable: true } }, // not relevant
    messages: { table: { disable: true } }, // not relevant
    src: { table: { disable: true } }, // not relevant
    // disabling because this control doesn't work as intended
    children: { control: { disable: true } },
    initialMonth: { control: { type: 'date' } },
  },
};

const Template: Story<Props> = (args) => {
  const [date, dateSet] = useState(args.initialMonth);

  return (
    <Layout.StoryVertical>
      <DateSelect
        {...args}
        initialMonth={new Date(args.initialMonth)}
        onSelect={(date) => dateSet(date)}
      >
        <Input value={date.toLocaleDateString()} readOnly />
      </DateSelect>
    </Layout.StoryVertical>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'DateSelect';
Controls.args = {
  initialMonth: new Date(),
};
