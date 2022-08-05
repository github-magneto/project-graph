import React from 'react'

import { Grid } from '@mui/material'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { FormControl } from '@mui/material'
import { Select } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Switch } from '@mui/material'
import { Divider } from '@mui/material'
import { Chip } from '@mui/material'
import { List } from '@mui/material'
import { ListItemButton } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import { ListItemText } from '@mui/material'

import CodeIcon from '@mui/icons-material/Code'
import CodeOffIcon from '@mui/icons-material/CodeOff'

import Imitation from '../utils/imitation'
import { deepSearch, deleteArrayItem, deepCopyElement, getEventName, hash, copy } from '../utils/common'
import { evalBeforeRenderHook } from '../utils/const'

import AccordionS from './Component.Accordion'
import { ListenModal, DispatchModal } from './Component.EventModal'
import { CodeModal } from './Component.Code'
import * as ElementConfigComponent from './Component.ElementConfig'

import { evalEventListenDefault, evalEventDispatchDefault } from '../utils/const'

import { graphElementSearch } from '../utils/graph.ElementSearch'

function BasicConfig(props) {
  const { currentGraphContent, parentGraphContent } = props

  const { information, license } = React.useMemo(() => graphElementSearch(currentGraphContent.license, Imitation.state.graphElement), [Imitation.state.graphElementUpdate])

  if (!information || !license) return null

  const handleChange = (value) => {
    currentGraphContent.name = value
    Imitation.assignState({ graphContentUpdate: hash() })
  }

  return <Grid item xs={12}>
    <AccordionS defaultExpanded={true} title='元素信息'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label='元素名字' disabled value={information.name} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label='编号' disabled value={currentGraphContent.only} />
        </Grid>
        {
          currentGraphContent.description ?
            <Grid item xs={12}>
              <TextField fullWidth label='描述' value={currentGraphContent.description} multiline />
            </Grid> : null
        }
        <Grid item xs={12}>
          <TextField fullWidth label='自定义名字' value={currentGraphContent.name} onChange={e => handleChange(e.target.value)} />
        </Grid>
        {
          license.dependencies && license.dependencies.length ?
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems='center'>
                <Grid item style={{ fontWeight: 'bold' }}>依赖</Grid>
                {
                  license.dependencies.map((i, index) => {
                    return <Grid item><Chip key={index} label={i} color='primary' /></Grid>
                  })
                }
              </Grid>
            </Grid> : null
        }
      </Grid>
    </AccordionS>
  </Grid>
}

function OuterConfig(props) {
  const { currentGraphContent, parentGraphContent } = props

  const { information } = React.useMemo(() => graphElementSearch(currentGraphContent.license, Imitation.state.graphElement), [Imitation.state.graphElementUpdate])

  if (!currentGraphContent.outer || !information) return null

  const handleChange = (callback) => {
    callback()
    Imitation.assignState({ graphContentUpdate: hash() })
  }

  const use = (name, children) => {
    var status = true
    name.forEach(i => {
      if (information.outer.$use) {
        const r = information.outer.$use.find(i_ => i_ === i)
        if (!r) status = false
      }
      if (information.outer.$nonuse) {
        const r = information.outer.$nonuse.find(i_ => i_ === i)
        if (r) status = false
      }
    })

    return status ? children : null
  }

  const basic = [
    use(['render'], <ElementConfigComponent.Render_C value={currentGraphContent} onChange={handleChange} />),
    use(['visible'], <ElementConfigComponent.Visible_C value={currentGraphContent} onChange={handleChange} />),
    use(['position', 'inset', 'margin'], <ElementConfigComponent.ToolButton value={currentGraphContent} onChange={handleChange} />),
  ]

  const position = [
    use(['width', 'height'], <ElementConfigComponent.Size_C value={currentGraphContent} onChange={handleChange} />),
    use(['minWidth', 'minHeight', 'maxWidth', 'maxHeight'], <ElementConfigComponent.SizeLimit_C value={currentGraphContent} onChange={handleChange} />),
    use(['padding'], <ElementConfigComponent.Padding_C value={currentGraphContent} onChange={handleChange} />),
    use(['margin'], <ElementConfigComponent.Margin_C value={currentGraphContent} onChange={handleChange} />),
    use(['display'], <ElementConfigComponent.Display_C value={currentGraphContent} onChange={handleChange} />),
    use(['position'], <ElementConfigComponent.Position_C value={currentGraphContent} onChange={handleChange} />),
    use(['inset'], <ElementConfigComponent.Inset_C value={currentGraphContent} onChange={handleChange} />),
    use(['zIndex'], <ElementConfigComponent.ZIndex_C value={currentGraphContent} onChange={handleChange} />),
    use(['verticalAlign'], <ElementConfigComponent.VerticalAlign_C value={currentGraphContent} onChange={handleChange} />),
    use(['flex'], <ElementConfigComponent.Flex_C value={currentGraphContent} onChange={handleChange} />),
    use(['transform'], <ElementConfigComponent.Transform_C value={currentGraphContent} onChange={handleChange} />),
    use(['overflow'], <ElementConfigComponent.Overflow_C value={currentGraphContent} onChange={handleChange} />),
  ]

  const style = [
    use(['transition'], <ElementConfigComponent.Transition_C value={currentGraphContent} onChange={handleChange} />),
    use(['filter'], <ElementConfigComponent.Filter_C value={currentGraphContent} onChange={handleChange} />),
    use(['border'], <ElementConfigComponent.Border_C value={currentGraphContent} onChange={handleChange} />),
    use(['borderRadius'], <ElementConfigComponent.BorderRadius_C value={currentGraphContent} onChange={handleChange} />),
    use(['boxShadow'], <ElementConfigComponent.BoxShadow_C value={currentGraphContent} onChange={handleChange} />),
    use(['outline'], <ElementConfigComponent.Outline_C value={currentGraphContent} onChange={handleChange} />),
    use(['background'], <ElementConfigComponent.Background_C value={currentGraphContent} onChange={handleChange} />),
    use(['font'], <ElementConfigComponent.Font_C value={currentGraphContent} onChange={handleChange} />),
    use(['text'], <ElementConfigComponent.Text_C value={currentGraphContent} onChange={handleChange} />),
    use(['textDecoration'], <ElementConfigComponent.TextDecoration_C value={currentGraphContent} onChange={handleChange} />),
    use(['textShadow'], <ElementConfigComponent.TextShadow_C value={currentGraphContent} onChange={handleChange} />),
    use(['textStroke'], <ElementConfigComponent.TextStroke_C value={currentGraphContent} onChange={handleChange} />),
    use(['cursor'], <ElementConfigComponent.Cursor_C value={currentGraphContent} onChange={handleChange} />),
  ]

  return <>
    {
      basic.filter(i => i).length ?
        <Grid item xs={12}>
          <AccordionS defaultExpanded={false} title='通用配置 基础'>
            <Grid container spacing={2}>
              {
                basic
              }
            </Grid>
          </AccordionS>
        </Grid> : null
    }
    {
      position.filter(i => i).length ?
        <Grid item xs={12}>
          <AccordionS defaultExpanded={false} title='通用配置 位置'>
            <Grid container spacing={2}>
              {
                position
              }
            </Grid>
          </AccordionS>
        </Grid> : null
    }
    {
      style.filter(i => i).length ?
        <Grid item xs={12}>
          <AccordionS defaultExpanded={false} title='通用配置 样式'>
            <Grid container spacing={2}>
              {
                style
              }
            </Grid>
          </AccordionS>
        </Grid> : null
    }
  </>
}

function InnerConfig(props) {
  const { currentGraphContent, parentGraphContent } = props

  if (!currentGraphContent.inner) return null

  const { Edit } = React.useMemo(() => graphElementSearch(currentGraphContent.license, Imitation.state.graphElement), [Imitation.state.graphElementUpdate])

  if (!Edit) return null

  const handleChange = (value) => {
    if (typeof value === 'function') {
      value(currentGraphContent.inner)
      Imitation.assignState({ graphContentUpdate: hash() })
    } else {
      currentGraphContent.inner = value
      Imitation.assignState({ graphContentUpdate: hash() })
    }
  }

  return <Grid item xs={12}>
    <AccordionS defaultExpanded={false} title='元素属性配置'>
      <Edit
        value={currentGraphContent.inner}
        onChange={handleChange}
        component={{ CodeModal }}
      />
    </AccordionS>
  </Grid>
}

function ChildrenConfig(props) {
  const { currentGraphContent, parentGraphContent } = props

  if (!currentGraphContent.children) return null

  const { information } = React.useMemo(() => graphElementSearch(currentGraphContent.license, Imitation.state.graphElement), [Imitation.state.graphElementUpdate])

  if (!information) return null

  const [options, setOptions] = React.useState(information.children)
  const [current, setCurrent] = React.useState(information.children[0].value)

  const handleAdd = () => {
    Imitation.assignState({ modalVisible: 'AddElement', modalContent: Imitation.state.modalContent + '@' + current })
  }

  const handleEdit = (i) => {
    Imitation.assignState({ modalContent: i })
  }

  return <Grid item xs={12}>
    <AccordionS defaultExpanded={false} title='子元素配置'>
      <FormControl fullWidth>
        <InputLabel>选择模块</InputLabel>
        <Select label='选择模块' value={current} onChange={e => setCurrent(e.target.value)}>
          {
            options.map(i => {
              return <MenuItem value={i.value}>{i.label}</MenuItem>
            })
          }
        </Select>
      </FormControl>

      <List>
        {
          currentGraphContent.children[current].map(i => {
            return <ListItemButton key={i.only} onClick={() => handleEdit(i.only)} style={{ height: 48 }}>
              <ListItemText>
                {
                  i.name
                }
              </ListItemText>
              <ListItemText style={{ color: 'gray' }}>
                {
                  i.only
                }
              </ListItemText>
            </ListItemButton>
          })
        }
      </List>
      <Button variant='outlined' fullWidth onClick={handleAdd}>添加</Button>
    </AccordionS>
  </Grid>
}

function HookConfig(props) {
  const { currentGraphContent, parentGraphContent, defaultExpanded } = props

  const [modal, setModal] = React.useState()

  const handleChange = (value) => {
    currentGraphContent.hook[modal] = value
    Imitation.assignState({ graphContentUpdate: hash() })
    setModal(undefined)
  }

  const handleChangeCallback = (callback) => {
    callback()
    Imitation.assignState({ graphContentUpdate: hash() })
  }

  return <Grid item xs={12}>
    <AccordionS defaultExpanded={defaultExpanded} title='生命事件配置'>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant='outlined' onClick={() => setModal('beforeRenderHook')}>渲染前触发</Button>
          <Switch checked={currentGraphContent.hook.useBeforeRenderHook} onChange={e => handleChangeCallback(() => currentGraphContent.hook.useBeforeRenderHook = e.target.checked)} />
        </Grid>
      </Grid>

      {
        modal === 'beforeRenderHook' ?
          <CodeModal
            onClose={() => setModal(undefined)}
            value={currentGraphContent.hook.beforeRenderHook}
            onChange={e => handleChange(e)}
            initValue={evalBeforeRenderHook}
            mode='javascript'
          /> : null
      }
    </AccordionS>
  </Grid>
}

function ListenConfig(props) {
  const { currentGraphContent, parentGraphContent, defaultExpanded } = props

  const [modal, setModal] = React.useState()

  if (!currentGraphContent.listen) return null

  const { information } = React.useMemo(() => graphElementSearch(currentGraphContent.license, Imitation.state.graphElement), [Imitation.state.graphElementUpdate])

  if (!information) return null

  const handleChange = (index, value) => {
    setModal(undefined)
    currentGraphContent.listen[index] = value
    Imitation.assignState({ graphContentUpdate: hash() })
  }
  const handleAdd = () => {
    currentGraphContent.listen.push({ name: hash(), event: evalEventListenDefault, key: '', useEval: false })
    Imitation.assignState({ graphContentUpdate: hash() })
  }
  const handleDelete = (index) => {
    setModal(undefined)
    currentGraphContent.listen.splice(index, 1)
    Imitation.assignState({ graphContentUpdate: hash() })
  }

  const keyOptions = information.listen

  if (!keyOptions && keyOptions.length === 0) return null

  return <Grid item xs={12}>
    <AccordionS defaultExpanded={defaultExpanded} title='监听事件配置'>
      <List>
        {
          currentGraphContent.listen.map((i, index) => {
            return <ListItemButton key={index} onClick={e => setModal({ index: index, data: i })} style={{ height: 48 }}>
              <ListItemIcon>
                {
                  i.useEval ? <CodeIcon /> : <CodeOffIcon />
                }
              </ListItemIcon>
              <ListItemText>
                {
                  i.name
                }
              </ListItemText>
              <ListItemText style={{ color: 'gray' }}>
                {
                  !i.useEval && keyOptions.find(i_ => i_.value === i.key) ? keyOptions.find(i_ => i_.value === i.key).label : null
                }
              </ListItemText>
            </ListItemButton>
          })
        }
      </List>
      <Button variant='outlined' fullWidth onClick={handleAdd}>添加</Button>
    </AccordionS>
    {
      modal ?
        <ListenModal
          onClose={() => setModal(undefined)}
          keyOptions={keyOptions}
          value={modal.data}
          onChange={(v) => handleChange(modal.index, v)}
          onDelete={() => handleDelete(modal.index)}
          elementonly={currentGraphContent.only}
        /> : null
    }
  </Grid>
}

function DispatchConfig(props) {
  const { currentGraphContent, parentGraphContent, defaultExpanded } = props

  const [modal, setModal] = React.useState()

  if (!currentGraphContent.dispatch) return null

  const { information } = React.useMemo(() => graphElementSearch(currentGraphContent.license, Imitation.state.graphElement), [Imitation.state.graphElementUpdate])

  if (!information) return null

  const handleChange = (index, value) => {
    setModal(undefined)
    currentGraphContent.dispatch[index] = value
    Imitation.assignState({ graphContentUpdate: hash() })
  }
  const handleAdd = () => {
    currentGraphContent.dispatch.push({ name: '', event: evalEventDispatchDefault, key: '', useEval: false })
    Imitation.assignState({ graphContentUpdate: hash() })
  }
  const handleDelete = (index) => {
    setModal(undefined)
    currentGraphContent.dispatch.splice(index, 1)
    Imitation.assignState({ graphContentUpdate: hash() })
  }

  const keyOptions = information.dispatch

  const listenNameOptions = getEventName(Imitation.state.graphContent)

  if (!keyOptions || keyOptions.length === 0) return null

  return <Grid item xs={12}>
    <AccordionS defaultExpanded={defaultExpanded} title='触发事件配置'>
      <List>
        {
          currentGraphContent.dispatch.map((i, index) => {
            return <ListItemButton key={index} onClick={e => setModal({ index: index, data: i })} style={{ height: 48 }}>
              <ListItemIcon>
                {
                  i.useEval ? <CodeIcon /> : <CodeOffIcon />
                }
              </ListItemIcon>
              <ListItemText>
                {
                  i.name
                }
              </ListItemText>
              <ListItemText style={{ color: 'gray' }}>
                {
                  keyOptions.find(i_ => i_.value === i.key) ? keyOptions.find(i_ => i_.value === i.key).label : null
                }
              </ListItemText>
            </ListItemButton>
          })
        }
      </List>
      <Button variant='outlined' fullWidth onClick={handleAdd}>添加</Button>
    </AccordionS>
    {
      modal ?
        <DispatchModal
          onClose={() => setModal(undefined)}
          keyOptions={keyOptions}
          value={modal.data}
          onChange={(v) => handleChange(modal.index, v)}
          onDelete={() => handleDelete(modal.index)}
          listenNameOptions={listenNameOptions}
        /> : null
    }
  </Grid>
}

function DefaultPage() {
  return <Grid container spacing={2}>
    <Grid item xs={12} style={{ fontWeight: 'bold' }}>元素配置</Grid>
    <Grid item xs={12}><Divider /></Grid>
  </Grid>
}

function App() {
  if (!Imitation.state.modalContent) return <DefaultPage />

  const [currentGraphContent, parentGraphContent] = deepSearch(Imitation.state.graphContent, 'only', Imitation.state.modalContent)

  if (!currentGraphContent) return <DefaultPage />

  const handleDelete = () => {
    deleteArrayItem(parentGraphContent, currentGraphContent)
    Imitation.assignState({ graphContentUpdate: hash(), modalContent: undefined, modalVisible: 'AddElement' })
  }

  const handleCopy = () => {
    const newElement = deepCopyElement(currentGraphContent)
    parentGraphContent.push(newElement)
    Imitation.assignState({ graphContentUpdate: hash() })
  }

  const handleDownload = () => {
    copy(JSON.stringify(currentGraphContent), () => { Imitation.assignState({ message: '复制到剪切板' }) })
  }

  return <Grid container spacing={2}>
    <Grid item xs={12} style={{ fontWeight: 'bold' }}>元素配置</Grid>
    <Grid item xs={12}><Divider /></Grid>

    <BasicConfig currentGraphContent={currentGraphContent} parentGraphContent={parentGraphContent} />
    <OuterConfig currentGraphContent={currentGraphContent} parentGraphContent={parentGraphContent} />
    <InnerConfig currentGraphContent={currentGraphContent} parentGraphContent={parentGraphContent} />
    <ChildrenConfig currentGraphContent={currentGraphContent} parentGraphContent={parentGraphContent} />
    <HookConfig currentGraphContent={currentGraphContent} parentGraphContent={parentGraphContent} />
    <ListenConfig currentGraphContent={currentGraphContent} parentGraphContent={parentGraphContent} />
    <DispatchConfig currentGraphContent={currentGraphContent} parentGraphContent={parentGraphContent} />

    <Grid item xs={12}><Divider /></Grid>
    <Grid item xs={12}>
      <Button variant='outlined' color='primary' fullWidth onClick={handleCopy}>复制</Button>
    </Grid>
    <Grid item xs={12}>
      <Button variant='outlined' color='primary' fullWidth onClick={handleDownload}>导出</Button>
    </Grid>
    <Grid item xs={12}>
      <Button variant='outlined' color='primary' fullWidth onClick={handleDelete}>删除</Button>
    </Grid>
  </Grid>
}

export default App

export { HookConfig, ListenConfig, DispatchConfig }