import React, { forwardRef } from 'react';
import { ButtonBase } from '../button';
import config from '../shared/config';
import { useTabStyle } from './styles';
import useTabs from './useTabs';

const Tab = forwardRef((
  {
    disabled,
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
  const styleProps = useTabStyle({});

  return (
    <ButtonBase
      aria-controls={tabPanelId}
      aria-disabled={disabled}
      aria-selected={isSelected}
      disabled={disabled}
      id={tabId}
      ref={ref}
      role="tab"
      tabIndex={isSelected ? 0 : -1}
      {...styleProps}
      {...rest}
    />
  );
});

Tab.displayName = 'Tab';

export default Tab;
