import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Icon from 'src/@core/components/icon'
import { CustomTabPanel, a11yProps } from 'src//components/CustomTab'

const AdminTabs = () => {
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={() => setOpen(true)}
          variant='contained'
          color='secondary'
          startIcon={<Icon icon={'mdi:plus'} />}
        >
          Invite Users
        </Button>
      </Box>
      <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
        <Tab
          label={
            <Badge badgeContent={1} color='secondary'>
              Profile Admins
            </Badge>
          }
          {...a11yProps(0, 'admin')}
        />
        <Tab
          label={
            <Badge badgeContent={0} color='secondary'>
              Pending Invitations
            </Badge>
          }
          {...a11yProps(1, 'admin')}
        />
      </Tabs>

      <CustomTabPanel value={value} index={0} id='admin'>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Avatar sx={{ width: 60, height: 60 }} />
              <Box>
                <Typography sx={{ fontWeight: 600, mb: '8px' }}>MD Tuhin</Typography>
                <Typography sx={{ fontSize: 12 }}>Joined: 1 day ago</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} id='admin'>
        pending invitations
      </CustomTabPanel>

      <Dialog open={open} aria-labelledby='form-dialog-title' fullWidth>
        <DialogTitle
          id='form-dialog-title'
          sx={{ borderBottom: '1px solid black', mb: '10px', display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography fontWeight={600}>Invite user for MD TAUHIDUL ISLAM</Typography>

          <Icon icon={'mdi:close'} onClick={() => setOpen(false)} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3, fontSize: 14 }}>
            You are adding a user for MD TAUHIDUL ISLAM new memorial page
          </DialogContentText>
          <Box mb={6}>
            <InputLabel htmlFor='email'>Email:</InputLabel>
            <TextField autoFocus fullWidth id='email' size='small' />
          </Box>
          <Button fullWidth onClick={() => setOpen(false)} variant='contained' color='secondary'>
            Send Invitation
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AdminTabs
