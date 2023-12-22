import { Avatar, Box, Button, Card, CardContent, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Icon from 'src/@core/components/icon'

import { CustomTabPanel, a11yProps } from 'src/components/CustomTab'
import { CreateProfile } from './CreateProfile'
import { CreateGroup } from './CreateGroup'

import 'react-datepicker/dist/react-datepicker.css'
import { useRouter } from 'next/router'

export const ProfileCard = ({
  width = '380px',
  onView,
  onEdit
}: {
  width?: string
  onView?: () => void
  onEdit?: () => void
}) => {
  return (
    <Box sx={{ maxWidth: width }}>
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

          <Box display={'flex'} justifyContent={'center'} gap={10} mt={5}>
            <Button onClick={onView} sx={{ display: 'flex', gap: 2 }} variant='contained'>
              <Icon icon={'mdi:visibility'} /> View
            </Button>

            <Button onClick={onEdit} sx={{ gap: 2, display: 'flex' }} variant='contained' color='secondary'>
              <Icon icon={'mdi:edit'} /> Edit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export const GroupCard = ({
  width = '380px',
  onView,
  onEdit
}: {
  width?: string
  onView?: () => void
  onEdit?: () => void
}) => {
  return (
    <Box sx={{ maxWidth: width }}>
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

            <Typography color={'secondary'}>Relationship: grand father</Typography>
            <Typography my={'5px'}>Created In 12/15/2023</Typography>
            <Avatar />
          </Box>

          <Box display={'flex'} justifyContent={'center'} gap={10} mt={5}>
            <Button onClick={onView} sx={{ display: 'flex', gap: 2 }} variant='contained'>
              <Icon icon={'mdi:visibility'} /> View
            </Button>

            <Button onClick={onEdit} sx={{ gap: 2, display: 'flex' }} variant='contained' color='secondary'>
              <Icon icon={'mdi:edit'} /> Edit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

const Medallions = () => {
  const router = useRouter()
  const [value, setValue] = useState(0)
  const [showGroupForm, setShowGroupForm] = useState(false)
  const [showProfileForm, setShowProfileForm] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      {!showGroupForm && !showProfileForm ? (
        <>
          <Box>
            <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
              <Tab className='tab-title' label='Profiles' {...a11yProps(0, 'medallions')} />
              <Tab className='tab-title' label='Groups' {...a11yProps(1, 'medallions')} />
            </Tabs>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={() => {
                setShowProfileForm(value === 0)
                setShowGroupForm(value === 1)
              }}
              sx={{ flex: 1, display: 'flex', gap: 2, maxWidth: '250px' }}
              variant='contained'
              color='secondary'
            >
              <Icon icon={'mdi:add'} />
              Create {value === 0 ? 'Profiles' : 'Groups'}
            </Button>
          </Box>
          <CustomTabPanel value={value} index={0} id='medallions'>
            <ProfileCard onEdit={() => router.push('/dashboard/admin')} onView={() => router.push('/dashboard/view')} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} id='medallions'>
            <GroupCard
              onEdit={() => router.push('/dashboard/group/edit')}
              onView={() => router.push('/dashboard/group')}
            />
          </CustomTabPanel>
        </>
      ) : null}

      {showProfileForm ? <CreateProfile onBack={() => setShowProfileForm(false)} /> : null}
      {showGroupForm ? <CreateGroup onBack={() => setShowGroupForm(false)} /> : null}
    </>
  )
}

export default Medallions
