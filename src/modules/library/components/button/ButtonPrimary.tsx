import React from 'react';
import { Button, ButtonProps } from './Button';

export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="primary" />;
};