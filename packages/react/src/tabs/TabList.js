import React, { forwardRef } from 'react';
import { Box } from '../box';
import useTabs from './useTabs';
import { useTabListStyle } from './styles';

const TabList = forwardRef((
  {
    children,
    ...rest
  },
  ref,
) => {
  const context = useTabs(); // context might be an undefined value
  const {
    orientation,
  } = { ...context };

  const styleProps = useTabListStyle({ orientation });

  return (
    <Box
      ref={ref}
      aria-orientation={orientation}
      role="tablist"
      {...styleProps}
      {...rest}
    >
      {children}
    </Box>
  );
});

TabList.displayName = 'TabList';

export default TabList;
