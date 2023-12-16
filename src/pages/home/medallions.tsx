import { Avatar, Box, Button, Card, CardContent, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Icon from 'src/@core/components/icon'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function a11yProps(index: number) {
  return {
    id: `medallions-tab-${index}`,
    'aria-controls': `medallions-tabpanel-${index}`
  }
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`medallions-tabpanel-${index}`}
      aria-labelledby={`medallions-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const ItemCard = () => {
  return (
    <Box sx={{ maxWidth: '380px' }}>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              mb: '10px'
            }}
          >
            <Avatar sx={{ width: 192, height: 192, mb: 5 }} />
            <Typography fontWeight={700} color={'secondary'}>
              084398438
            </Typography>
            <Typography color={'secondary'}>Relationship: grand father</Typography>
            <Typography my={'5px'}>Created In 12/15/2023</Typography>
            <Typography color={'red'}>Unverified Medallion</Typography>
          </Box>

          <Box display={'flex'} gap={10} mt={5}>
            <Button sx={{ flex: 1, display: 'flex', gap: 2 }} variant='contained'>
              <Icon icon={'mdi:visibility'} /> View
            </Button>
            <Button sx={{ flex: 1, display: 'flex', gap: 2 }} variant='contained' color='secondary'>
              <Icon icon={'mdi:edit'} /> Edit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

const Medallions = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Profiles' {...a11yProps(0)} />
          <Tab label='Groups' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button sx={{ flex: 1, display: 'flex', gap: 2, maxWidth: '250px' }} variant='contained' color='secondary'>
          <Icon icon={'mdi:add'} />
          Create {value === 0 ? 'Profiles' : 'Groups'}
        </Button>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ItemCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ItemCard />
      </CustomTabPanel>
    </>
  )
}

export default Medallions
