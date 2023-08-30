const information = {
  name: 'Tabs',
  type: 'Material UI Component',
  monitor: [
    { value: 'setValue', label: 'Set Value' },
    { value: 'setOptions', label: 'Set Options' },
  ],
  trigger: [
    { value: 'onChange', label: 'On Change' },
  ],
  property: {
    value: '',
    options: [{ label: 'Option A', value: 'A' }, { label: 'Option B', value: 'B' }],
    textColor: 'primary',
    indicatorColor: 'primary',
    orientation: 'horizontal',
    variant: 'standard',
    scrollButtons: 'auto',
    centered: false,
  }
}

export default information