import React, { forwardRef } from 'react';
import { Box } from '../box';
import config from '../shared/config';
import { useTabPanelStyle } from './styles';
import useTabs from './useTabs';

const TabPanel = forwardRef((
  {
    children,
    value: valueProp,
    ...rest
  },
  ref,
) => {
  const context = useTabs();
  const {
    value,
  } = { ...context };
  const isSelected = (value === valueProp);
  const tabId = `${config.name}:Tab-${valueProp}`;
  const tabPanelId = `${config.name}:TabPanel-${valueProp}`;
  const styleProps = useTabPanelStyle({});

  return (
    <Box
      aria-labelledby={tabId}
      aria-hidden={!isSelected}
      id={tabPanelId}
      ref={ref}
      role="tabpanel"
      tabIndex={-1}
      {...styleProps}
      {...rest}
    >
      {children}
    </Box>
  );
});

TabPanel.displayName = 'TabPanel';

export default TabPanel;
