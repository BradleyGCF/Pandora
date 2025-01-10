import React from 'react';
import { Button, ButtonProps } from './Button';

export const ButtonDanger: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="danger" />;
};
