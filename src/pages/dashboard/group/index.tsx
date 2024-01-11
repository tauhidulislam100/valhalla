import { Avatar, Button, Card, CardContent, Typography, styled } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Icon from 'src/@core/components/icon'
import AddMemberModal from 'src/components/AddMemberModal'

const AvatarContainerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 5,
  alignItems: 'center',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}))

const ViewGroup = () => {
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
            <AvatarContainerWrapper>
              <Avatar sx={{ width: 150, height: 150 }} />
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Tauhidul</Typography>
                <Typography sx={{ fontWeight: 'normal' }}>Information</Typography>
              </Box>
              <Box sx={{ ml: 'auto', alignSelf: 'flex-start' }}>
                <Button sx={{ flexDirection: 'column' }} variant='contained'>
                  <Icon icon={'mdi:ios-share'} />
                  Share
                </Button>
              </Box>
            </AvatarContainerWrapper>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 16 }}>Profiles</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar sx={{ width: 170, height: 170, mb: 10 }} />
                  <Typography sx={{ fontWeight: 700, fontSize: 16, mb: 2 }}>MD TAUHIDUL ISLAM</Typography>
                  <Typography>Created in 12/18/2023</Typography>
                  <Button
                    variant='contained'
                    color='secondary'
                    fullWidth
                    startIcon={<Icon icon='mdi:visibility' />}
                    sx={{ mt: 5 }}
                    onClick={() => router.push('/dashboard/view')}
                  >
                    View
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </CardContent>
      </Card>
      <AddMemberModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default ViewGroup
