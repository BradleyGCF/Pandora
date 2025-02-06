import React from 'react';
import { ButtonPrimary } from '@/modules/library/components/atoms/button';
import { InputDefault } from '../../atoms/input';
import { EyeIcon } from '@heroicons/react/24/solid';

export const Form: React.FC = () => {

  return (
    <form className="flex flex-col gap-4 p-6 shadow-md rounded-xl border border-1 m-auto">
      <InputDefault.LabeledInputHelperLgIcon
      children="Label PlaceHolder"
      type='text'     
      />
      <InputDefault.LabeledInputHelperLgIcon
        children="Label PlaceHolder"
        type='text'     
        icon={<EyeIcon className='w-5 h-5 text-gray-700'/>}
      />
      <ButtonPrimary.ButtonPrimary className='w-30' children="Button" />
    </form>
  );
};

