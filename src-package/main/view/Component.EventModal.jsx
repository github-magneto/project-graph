import React from 'react'

import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { FormControl } from '@mui/material'
import { Select } from '@mui/material'
import { Dialog } from '@mui/material'
import { DialogActions } from '@mui/material'
import { DialogContent } from '@mui/material'

import { CodeModal } from './Component.Code'

import AccordionS from './Component.Accordion'

import { evalEventListenDefault, evalEventDispatchDefault } from '../utils/const'

function ListenModal(props) {
  const { keyOptions, value, onChange, onDelete, onClose } = props

  const [data, setData] = React.useState(value)
  const [codeModal, setCodeModal] = React.useState(false)

  const handleClickEval = () => {
    if (data.useEval) {
      setCodeModal(true)
    } else {
      setData(Object.assign({}, data, { useEval: true }))
    }
  }

  return <Dialog onClose={onClose} open={true} sx={{ '& .MuiDialog-paper': { width: 480, maxWidth: 'none' } }}>
    <DialogContent>
      <Grid container spacing={2} style={{ padding: 12 }}>

        <Grid item xs={12}>
          <TextField fullWidth value={data.name} label='名称' onChange={e => setData(Object.assign({}, data, { name: e.target.value }))} />
        </Grid>

        <Grid item xs={12}>
          <AccordionS defaultExpanded={true} title='执行函数'>
            <Grid container spacing={1} justifyContent='space-between'>
              <Grid item>
                <Button variant={data.useEval ? 'contained' : 'text'} color='secondary' onClick={handleClickEval}>
                  自定义函数
                </Button>
              </Grid>
              {
                keyOptions.map((i, index) => {
                  return <Grid item>
                    <Button key={index} variant={!data.useEval && data.key === i.value ? 'contained' : 'text'} onClick={() => setData(Object.assign({}, data, { key: i.value, useEval: false }))}>
                      {
                        i.label
                      }
                    </Button>
                  </Grid>
                })
              }
              {
                new Array(5).fill().map(i => <Grid item />)
              }
            </Grid>
          </AccordionS>
        </Grid>

      </Grid>
    </DialogContent>
    <DialogActions>
      <Button variant='contained' color='error' onClick={() => onDelete()}>删除</Button>
      <Button variant='contained' onClick={() => onChange(data)}>保存</Button>
    </DialogActions>

    {
      codeModal ?
        <CodeModal
          value={data.event}
          onChange={e => { setData(Object.assign({}, data, { event: e })); setCodeModal(false) }}
          onClose={() => setCodeModal(false)} initValue={evalEventListenDefault}
          mode='javascript'
        /> : null
    }
  </Dialog>
}

function DispatchModal(props) {
  const { keyOptions, value, onChange, onDelete, onClose, listenNameOptions } = props

  const [data, setData] = React.useState(value)
  const [codeModal, setCodeModal] = React.useState(false)

  const handleClickEval = () => {
    if (data.useEval) {
      setCodeModal(true)
    } else {
      setData(Object.assign({}, data, { useEval: true }))
    }
  }

  return <Dialog onClose={onClose} open={true} sx={{ '& .MuiDialog-paper': { width: 480, maxWidth: 'none' } }}>
    <DialogContent>
      <Grid container spacing={2} style={{ padding: 12 }}>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>关联监听名称</InputLabel>
            <Select label='关联监听名称' value={data.name} onChange={e => setData(Object.assign({}, data, { name: e.target.value }))}>
              {
                listenNameOptions.map(i => {
                  return <MenuItem key={i} value={i}>{i}</MenuItem>
                })
              }
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <AccordionS defaultExpanded={true} title='执行函数'>
            <Grid container spacing={1}>
              <Grid item>
                <Button variant={data.useEval ? 'contained' : 'text'} onClick={handleClickEval}>
                  自定义函数
                </Button>
              </Grid>
              <Grid item>
                <Button variant={!data.useEval ? 'contained' : 'text'} onClick={() => setData(Object.assign({}, data, { useEval: false }))}>
                  默认执行
                </Button>
              </Grid>
            </Grid>
          </AccordionS>
        </Grid>

        <Grid item xs={12}>
          <AccordionS defaultExpanded={true} title='触发时机'>
            <Grid container spacing={1} justifyContent='space-between'>
              {
                keyOptions.map((i, index) => {
                  return <Grid item>
                    <Button key={index} variant={data.key === i.value ? 'contained' : 'text'} onClick={() => setData(Object.assign({}, data, { key: i.value }))}>
                      {
                        i.label
                      }
                    </Button>
                  </Grid>
                })
              }
              {
                new Array(5).fill().map(i => <Grid item />)
              }
            </Grid>
          </AccordionS>
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button variant='contained' color='error' onClick={() => onDelete()}>删除</Button>
      <Button variant='contained' onClick={() => onChange(data)}>保存</Button>
    </DialogActions>

    {
      codeModal ?
        <CodeModal
          value={data.event}
          onChange={e => { setData(Object.assign({}, data, { event: e })); setCodeModal(false) }}
          onClose={() => setCodeModal(false)} initValue={evalEventDispatchDefault}
          mode='javascript'
        /> : null
    }
  </Dialog>
}

export { ListenModal, DispatchModal }