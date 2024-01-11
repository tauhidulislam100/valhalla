// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Avatar, Box, Button, InputLabel, Tab, Tabs, TextField, styled } from '@mui/material'
import { useState } from 'react'
import Medallions from 'src/components/Medallions'
import { CustomTabPanel, a11yProps } from 'src/components/CustomTab'
import { useAuth } from 'src/hooks/useAuth'
import EditFav from 'src/components/EditFav'
import Icon from 'src/@core/components/icon'
import { FavoriteCard } from 'src/components/FavoriteCard'

const WelcomeCard = styled(Box)(({ theme }) => ({
  background: '#f7ecd4',
  border: '1px solid #d7a229',
  borderRadius: '8px',
  padding: '20px',
  width: '346px',
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}))

const AvatarContainerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const AvatarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const InputGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
  marginTop: '10px',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}))

const EmailContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 4,
  mb: 1,
  fontSize: '0.9375rem',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}))

const Home = () => {
  const { logout } = useAuth()
  const [value, setValue] = useState(2)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent style={{ boxShadow: 'none' }}>
            <AvatarContainerWrapper>
              <AvatarContainer>
                <Box sx={{ position: 'relative' }} className='abc'>
                  <Avatar sx={{ width: 192, height: 192 }} />
                  <EditFav sx={{ bottom: 10, right: -2 }} />
                </Box>
                <Box>
                  <Typography fontWeight={'bold'} fontSize={22} mb={2}>
                    MD Tuhin
                  </Typography>
                  <EmailContainer>
                    <Typography fontWeight={500}>Email:</Typography>
                    <Typography sx={{ sm: { fontSize: '0.9375rem' }, fontSize: 12, fontWeight: 500 }}>
                      tauhidulislam100@gmail.com
                    </Typography>
                  </EmailContainer>
                  <Box display={'flex'} gap={4}>
                    <Typography fontWeight={500} fontSize={'0.9375rem'}>
                      Joined:
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <Icon icon={'mdi:calendar'} fontSize={14} />
                      <Typography sx={{ sm: { fontSize: '0.9375rem' }, fontSize: 12, fontWeight: 500 }}>
                        calendar Joined about 17 hours
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </AvatarContainer>
              <WelcomeCard>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography sx={{ fontWeight: 'bold' }}>Welcome back!</Typography>
                  <Icon icon='mdi:info' fontSize={20} />
                </Box>
                <Typography>
                  Thank you for choosing Turning Hearts to keep the memory of your loved ones alive. We are honored to
                  be a part of your healing journey.
                </Typography>
              </WelcomeCard>
            </AvatarContainerWrapper>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' centered variant='scrollable'>
                <Tab className='tab-title' label='My Favorites' {...a11yProps(0, 'home')} />
                <Tab className='tab-title' label='Post' {...a11yProps(1, 'home')} />
                <Tab className='tab-title' label='Medallions' {...a11yProps(2, 'home')} />
                <Tab className='tab-title' label='My account' {...a11yProps(3, 'home')} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} id='home'>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bold', mb: 4 }}>My Favorites</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                <FavoriteCard />
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} id='home'>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>My Post</Typography>
              <Box sx={{ my: 5 }}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Avatar sx={{ width: 80, height: 80 }} />
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: 18 }}>Md Tuhin</Typography>
                          <Icon icon={'mdi:dot'} />
                          <Typography>37 minutes ago</Typography>
                        </Box>
                      </Box>
                      <Icon icon={'mdi:more-horiz'} />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <Typography>some thing new</Typography>
                      <Typography>something is old</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} id='home'>
              <Medallions />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3} id='home'>
              <Typography fontWeight={600} fontSize={16}>
                Edit Profile
              </Typography>
              <Box display={'flex'} justifyContent={'flex-end'} my={5}>
                <Button onClick={logout} size='large' type='submit' variant='contained'>
                  Change Password
                </Button>
              </Box>
              <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', mb: '32px' }}>
                <Typography>Personal Details</Typography>
              </Box>
              <InputGroup>
                <Box flex={1} width={'100%'}>
                  <InputLabel htmlFor='firstName'>First Name:</InputLabel>
                  <TextField autoFocus fullWidth id='firstName' placeholder='First Name' size='small' />
                </Box>
                <Box flex={1} width={'100%'}>
                  <InputLabel htmlFor='lastName'>Last Name:</InputLabel>
                  <TextField autoFocus fullWidth id='lastName' placeholder='Last Name' size='small' />
                </Box>
              </InputGroup>
              <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
                <Typography>Location Details</Typography>
              </Box>
              <InputGroup>
                <Box flex={1} width={'100%'}>
                  <InputLabel htmlFor='state'>State:</InputLabel>
                  <TextField autoFocus fullWidth id='state' placeholder='State' size='small' />
                </Box>
                <Box flex={1} width={'100%'}>
                  <InputLabel htmlFor='city'>City:</InputLabel>
                  <TextField autoFocus fullWidth id='city' placeholder='City' size='small' />
                </Box>
              </InputGroup>
              <Box display={'flex'} justifyContent={'flex-end'} sx={{ mt: 10 }}>
                <Button size='large' type='submit' variant='contained' color='secondary'>
                  Save Changes
                </Button>
              </Box>
            </CustomTabPanel>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
