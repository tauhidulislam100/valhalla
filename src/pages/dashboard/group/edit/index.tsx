import { Avatar, Button, Card, CardContent, Fab, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Icon from 'src/@core/components/icon'
import AddMemberModal from 'src/components/AddMemberModal'
import { ProfileCard } from 'src/components/Medallions'

const EditGroup = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card sx={{ boxShadow: 0 }}>
        <CardContent>
          <Box>
            <Button onClick={router.back} startIcon={<Icon icon='mdi:chevron-left' />}>
              Go Back
            </Button>
          </Box>
          <Box mt={10} sx={{ borderBottom: '1px solid #ddd', pb: 10, mb: 10 }}>
            <Box sx={{ display: 'flex', gap: 10 }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar sx={{ width: 192, height: 192 }} />
                <Fab size='small' color='primary' sx={{ position: 'absolute', bottom: 20, right: 15 }}>
                  <Icon icon={'mdi:edit'} />
                </Fab>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ mb: 4 }}>
                  <InputLabel htmlFor='grpname'>Group Name: *</InputLabel>
                  <TextField fullWidth size='small' />
                </Box>
                <Box sx={{ mb: 4 }}>
                  <InputLabel htmlFor='grpname'>Group Description: *</InputLabel>
                  <TextField fullWidth multiline minRows={3} />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button startIcon={<Icon icon='mdi:check' />} variant='contained' color='secondary'>
                Save Changes
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 700, fontSize: 16 }}>Profiles</Typography>
            <Button
              onClick={() => setOpen(true)}
              variant='contained'
              color='secondary'
              startIcon={<Icon icon={'mdi:plus'} />}
            >
              Add new medallion
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <ProfileCard />
          </Box>
        </CardContent>
      </Card>
      <AddMemberModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default EditGroup
