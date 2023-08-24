const information = {
  name: 'Radio',
  type: 'Material UI Component',
  children: false,
  monitor: [
    { value: '@setUseTrue', label: 'Use Element' },
    { value: '@setUseFalse', label: 'Unuse Element' },
    { value: 'setCheckedOpen', label: 'Check Value' },
    { value: 'setCheckedClose', label: 'Uncheck Value' },
  ],
  trigger: [
    { value: '@onClick', label: 'Click' },
    { value: '@onDoubleClick', label: 'Double Click' },
    { value: '@onMouseEnter', label: 'Mouse Enter' },
    { value: '@onMouseLeave', label: 'Mouse Leave'},
    { value: '@onMouseMove', label: 'Mouse Move' },
    { value: '@onMouseDown', label: 'Mouse Down' },
    { value: '@onMouseUp', label: 'Mouse Up' },
    { value: 'onChange', label: 'Check Change' },
  ],
  style: {},
  property: {
    color: 'primary',
    size: 'medium',
    checked: false,
    disabled: false
  }
}

export default information