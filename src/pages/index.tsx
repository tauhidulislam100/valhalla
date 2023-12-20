// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Avatar, Box, Button, InputLabel, Tab, Tabs, TextField } from '@mui/material'
import { useState } from 'react'
import Medallions from 'src/components/Medallions'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

const Home = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent style={{ boxShadow: 'none' }}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'}>
              <Box flexDirection={'row'} display={'flex'} gap={5} alignItems={'center'}>
                <Avatar sx={{ width: 192, height: 192 }} />
                <Box>
                  <Typography fontWeight={'bold'} fontSize={22} mb={2}>
                    MD Tuhin
                  </Typography>
                  <Box display={'flex'} gap={4} mb={1}>
                    <Typography fontWeight={'semibold'}>Email:</Typography>
                    <Typography>tauhidulislam100@gmail.com</Typography>
                  </Box>
                  <Box display={'flex'} gap={4}>
                    <Typography fontWeight={'semibold'}>Joined:</Typography>
                    <Typography>calendar Joined about 17 hours ago</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  background: '#f7ecd4',
                  border: '1px solid #d7a229',
                  borderRadius: '8px',
                  padding: '20px',
                  width: '346px'
                }}
              >
                <Typography mb={'4px'}>Welcome back!</Typography>
                <Typography>
                  Thank you for choosing Turning Hearts to keep the memory of your loved ones alive. We are honored to
                  be a part of your healing journey.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' centered>
                <Tab label='My Favorites' {...a11yProps(0)} />
                <Tab label='Post' {...a11yProps(1)} />
                <Tab label='Medallions' {...a11yProps(2)} />
                <Tab label='My account' {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Typography>My Favorites</Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Typography>Post</Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Medallions />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Typography fontWeight={600} fontSize={16}>
                Edit Profile
              </Typography>
              <Box display={'flex'} justifyContent={'flex-end'}>
                <Button size='large' type='submit' variant='contained'>
                  Change Password
                </Button>
              </Box>
              <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', mb: '32px' }}>
                <Typography>Personal Details</Typography>
              </Box>
              <Box flexDirection={'row'} display={'flex'} gap={10} my={'10px'}>
                <Box flex={1}>
                  <InputLabel htmlFor='firstName'>First Name:</InputLabel>
                  <TextField autoFocus fullWidth id='firstName' placeholder='First Name' size='small' />
                </Box>
                <Box flex={1}>
                  <InputLabel htmlFor='lastName'>Last Name:</InputLabel>
                  <TextField autoFocus fullWidth id='lastName' placeholder='Last Name' size='small' />
                </Box>
              </Box>
              <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
                <Typography>Location Details</Typography>
              </Box>
              <Box flexDirection={'row'} display={'flex'} gap={10} my={'10px'}>
                <Box flex={1}>
                  <InputLabel htmlFor='state'>State:</InputLabel>
                  <TextField autoFocus fullWidth id='state' placeholder='State' size='small' />
                </Box>
                <Box flex={1}>
                  <InputLabel htmlFor='city'>City:</InputLabel>
                  <TextField autoFocus fullWidth id='city' placeholder='City' size='small' />
                </Box>
              </Box>
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
