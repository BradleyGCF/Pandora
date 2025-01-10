import React from 'react';
import { Button, ButtonProps } from './Button';

export const ButtonSecondary: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="secondary" />;
};
