import React from 'react'

import { TextField } from '@mui/material'
import { Grid } from '@mui/material'

function Edit(props) {
  const { value, onChange } = props

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <TextField fullWidth label='尺寸' value={value.size} onChange={e => onChange(Object.assign({}, value, { size: e.target.value }))} type='number' />
    </Grid>
    <Grid item xs={12}>
      <TextField fullWidth label='厚度' value={value.thickness} onChange={e => onChange(Object.assign({}, value, { thickness: e.target.value }))} type='number' />
    </Grid>
    <Grid item xs={8}>
      <TextField fullWidth label='颜色' value={value.color} onChange={e => onChange(Object.assign({}, value, { color: e.target.value }))} />
    </Grid>
    <Grid item xs={4}>
      <TextField fullWidth label='调色板' value={value.color} onChange={e => onChange(Object.assign({}, value, { color: e.target.value }))} type='color' />
    </Grid>
  </Grid>
}

export default Edit