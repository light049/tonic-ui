import React, { forwardRef } from 'react';
import { Box } from '../box';
import { useTabPanelsStyle } from './styles';

const TabPanels = forwardRef((
  {
    children,
    ...rest
  },
  ref,
) => {
  const styleProps = useTabPanelsStyle({});

  return (
    <Box
      ref={ref}
      {...styleProps}
      {...rest}
    >
      {children}
    </Box>
  );
});

TabPanels.displayName = 'TabPanels';

export default TabPanels;
