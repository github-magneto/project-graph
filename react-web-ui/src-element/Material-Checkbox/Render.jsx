import React from 'react'
import { Checkbox } from '@mui/material'

function Render(props) {
  const { env, update, devParams, property, style, monitor, trigger, children, element, prop } = props

  React.useEffect(() => {
    if (monitor && monitor.checkBox) {
      const remove = monitor.checkBox(data => {
        property.checked = true
        update()
      })
      return () => { remove() }
    }
  }, [])

  React.useEffect(() => {
    if (monitor && monitor.uncheckBox) {
      const remove = monitor.uncheckBox(data => {
        property.checked = false
        update()
      })
      return () => { remove() }
    }
  }, [])

  const onChange = (e) => {
    property.checked = e.target.checked
    update()
    if (trigger && trigger.onChange) trigger.onChange(property.checked, e)
  }

  if (env === 'dev') {
    return <Checkbox {...devParams} checked={property.checked} size={property.size} color={property.color} disabled={property.disabled} />
  }

  if (env === 'prod') {
    return <Checkbox checked={property.checked} onChange={onChange} size={property.size} color={property.color} disabled={property.disabled} />
  }
}

export default Render