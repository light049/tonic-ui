import React, { forwardRef } from 'react';
import { Box } from '../box';
import { useInputGroupAddonStyle } from './styles';
import useInputGroup from './useInputGroup';

const defaultSize = 'md';
const defaultVariant = 'outline';

const InputGroupAddon = forwardRef((
  {
    size: sizeProp,
    variant: variantProp,
    ...rest
  },
  ref,
) => {
  const inputGroupContext = useInputGroup();
  const {
    size: inputGroupSize,
    variant: inputGroupVariant,
  } = { ...inputGroupContext };
  const size = (sizeProp ?? inputGroupSize) ?? defaultSize;
  const variant = (variantProp ?? inputGroupVariant) ?? defaultVariant;
  const styleProps = useInputGroupAddonStyle({ size, variant });

  return (
    <Box
      ref={ref}
      {...styleProps}
      {...rest}
    />
  );
});

InputGroupAddon.displayName = 'InputGroupAddon';

export default InputGroupAddon;
