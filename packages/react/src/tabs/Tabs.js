import React, { forwardRef } from 'react';
import { Box } from '../box';
import { TabsContext } from './context';
import { useTabsStyle } from './styles';

const defaultOrientation = 'horizontal';

const Tabs = forwardRef((
  {
    children,
    onChange,
    orientation = defaultOrientation,
    value,
    ...rest
  },
  ref,
) => {
  const styleProps = useTabsStyle({});
  const context = {
    onChange,
    value,
  };

  return (
    <TabsContext.Provider value={context}>
      <Box
        ref={ref}
        {...styleProps}
        {...rest}
      >
        {(typeof children === 'function') ? children(context) : children}
      </Box>
    </TabsContext.Provider>
  );
});

Tabs.displayName = 'Tabs';

export default Tabs;
