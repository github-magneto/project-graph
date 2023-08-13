import React from 'react'

import { TextField } from '@mui/material'
import { Grid } from '@mui/material'

function Edit(props) {
  const { value, onChange, component, sx } = props

  return <Grid container spacing={1}>
    <Grid item xs={12}>
      <TextField {...sx.TextFieldSX} fullWidth label='图片地址' value={value.src} onChange={e => onChange(Object.assign({}, value, { src: e.target.value }))} multiline maxRows={4} />
    </Grid>
    <Grid item xs={12}>
      <TextField {...sx.TextFieldSX} fullWidth label='图片信息' value={value.alt} onChange={e => onChange(Object.assign({}, value, { alt: e.target.value }))} multiline maxRows={4} />
    </Grid>
  </Grid>
}


export default Edit