import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { useState } from '@storybook/addons';

import { Toggle as T } from './Toggle';
import { Button } from '../../buttons/Button/Button';

import { Story } from '../../../storybook';
import { Eye, EyeOff } from '../../../icons';

const Toggle = styled(T)`
  margin: 1rem 0;
`;

storiesOf(`Components|inputs/Marks`, module)
  .add('Toggle', () => (
    <Story title="Toggle">
      <Toggle
        label="Toggle 1 (Medium)"
        name="demoToggle1"
        id="Toggle1"
        value="1"
        size="sm"
      />
      <Toggle
        label="Toggle 2 (Medium)"
        name="demoToggle2"
        id="Toggle2"
        value="2"
        size="sm"
      />
      <Toggle
        label="Toggle 3 has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
        name="demoToggle3"
        id="Toggle3"
        value="3"
        size="lg"
      />
      <Toggle
        label="Errored Field"
        name="demoToggle4"
        status="negative"
        id="Toggle4"
        value="4"
        size="sm"
        required
      />
      <Toggle
        label="DisabledField"
        name="demoToggleDisabled"
        id="ToggleDisabled"
        value="disabled"
        size="md"
        disabled
      />
      <Toggle
        label="Toggle has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
        name="demoToggle5"
        status="negative"
        id="Toggle5"
        value="5"
        size="lg"
        required
      />
      <Toggle
        label={false}
        name="demoToggle6"
        id="Toggle6"
        value="6"
        size="xl"
      />
    </Story>
  ))
  .add('Toggle Sizes', () => (
    <Story title="Toggle">
      <Toggle
        label="Toggle 1 (SM)"
        name="demoToggle1"
        id="Toggle1"
        value="1"
        size="sm"
      />
      <Toggle
        label="Toggle 2 (MD)"
        name="demoToggle2"
        id="Toggle2"
        value="2"
        size="md"
      />
      <Toggle
        label="Toggle 3 (LG)"
        name="demoToggle3"
        id="Toggle3"
        value="3"
        size="lg"
      />
      <Toggle
        label="Toggle 4 (XL)"
        name="demoToggle4"
        id="Toggle4"
        value="4"
        size="xl"
      />
    </Story>
  ))
  .add('Toggle (controlled)', () => {
    const [checked, setChecked] = useState(true);

    return (
      <Story title="Toggle">
        <Button onClick={() => setChecked(checked => !checked)}>
          Toggle {checked.toString()}
        </Button>
        <Toggle
          label="Toggle 1 (Medium)"
          name="demoToggle1"
          id="Toggle1"
          value="1"
          size="sm"
          checked={checked}
        />
        <Toggle
          label="Toggle 2 (Medium)"
          name="demoToggle2"
          id="Toggle2"
          value="2"
          size="sm"
          checked={checked}
        />
      </Story>
    );
  })
  .add('Toggle (with icon)', () => {
    const [checked, setChecked] = useState(true);
    return (
      <Story title="Toggle">
        <Toggle
          onClick={() => setChecked(checked => !checked)}
          label="Toggle with Icon"
          name="demoToggle1"
          icon={checked ? <Eye /> : <EyeOff />}
          id="Toggle1"
          value="1"
          size="xl"
          checked={checked}
        />
      </Story>
    );
  });
