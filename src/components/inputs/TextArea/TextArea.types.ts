import { ReactNode } from 'react';
import { IrisInputProps } from '../../../utils';
import { Statuses } from '../../../themes';

export type Props = IrisInputProps<{
  disabled?: boolean;
  errorMsg?: ReactNode;
  /**
   * [default = 'neutral']
   */
  format?: Statuses;
  helperMsg?: ReactNode;
  id?: string;
  /**
   * If defined, the label will appear above the textbox
   */
  label?: string;
  preMessage?: ReactNode;
  /**
   * [default = false]
   */
  showLabel?: boolean;
}>;
