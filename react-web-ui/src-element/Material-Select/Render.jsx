import React from 'react'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

function Render(props) {
  const { event, style, property, monitor, trigger, env, update } = props

  React.useEffect(() => {
    if (monitor && monitor.setValue) {
      const remove = monitor.setValue(data => {
        property.value = data
        update()
      })
      return () => { remove() }
    }
  }, [])
  
  React.useEffect(() => {
    if (monitor && monitor.setOptions) {
      const remove = monitor.setOptions(data => {
        property.options = data
        update()
      })
      return () => { remove() }
    }
  }, [])

  const onChange = (e) => {
    if (env === 'dev') return
    property.value = e.target.value
    update()
    if (trigger && trigger.onChange) trigger.onChange(property.value, e)
  }

  const onOpen = (e) => {
    if (env === 'dev') return
    property.open = e.target.open
    update()
    if (trigger && trigger.onOpen) trigger.onOpen(property.open, e)
  }

  if (env === 'dev') {
    const ref = React.useRef()

    React.useEffect(() => {
      if (ref.current) ref.current.addEventListener('mousedown', e => { e.stopPropagation(); e.preventDefault() }, true)
    }, [])
  
    return <FormControl {...event} {...style} size={property.size} fullWidth={property.fullWidth} ref={el => ref.current = el} >
      <InputLabel>{property.label}</InputLabel>
      <Select multiple={property.multiple} label={property.label} variant={property.variant} disabled={property.disabled} value={property.value} onChange={onChange}>
        {
          property.options.map((i, index) => {
            return <MenuItem key={index} value={i.value}>{i.label}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  }

  if (env === 'prod') {
    return <FormControl {...event} {...style} size={property.size} fullWidth={property.fullWidth}>
      <InputLabel>{property.label}</InputLabel>
      <Select multiple={property.multiple} label={property.label} variant={property.variant} disabled={property.disabled} open={property.open} value={property.value} onChange={onChange} onOpen={onOpen}>
        {
          property.options.map((i, index) => {
            return <MenuItem key={index} value={i.value}>{i.label}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  }
}

export default Render