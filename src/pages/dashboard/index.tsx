// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Avatar, Box, Button, InputLabel, Menu, MenuItem, Tab, Tabs, TextField, useTheme } from '@mui/material'
import { useState } from 'react'
import Medallions from 'src/components/Medallions'
import { CustomTabPanel, a11yProps } from 'src/components/CustomTab'
import { useAuth } from 'src/hooks/useAuth'
import EditFav from 'src/components/EditFav'
import Icon from 'src/@core/components/icon'
import RemoveFavoriteModal from 'src/components/RemoveFavoriteModal'

export const FavoriteCard = ({
  width = '380px',
  onView,
  onEdit
}: {
  width?: string
  onView?: () => void
  onEdit?: () => void
}) => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  return (
    <Box sx={{ maxWidth: width }}>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              onClick={() => setOpen(true)}
              style={{ background: 'none', border: 'none', color: theme.palette.primary.main, cursor: 'pointer' }}
            >
              <Icon icon={'mdi:heart'} fontSize={32} />
            </button>
            <FavoriteMenu />
          </Box>
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
            <Typography color={'secondary'}>Lifetime</Typography>
            <Typography my={'5px'}>Aug 15, 2023 - Aug 16, 2023</Typography>
          </Box>

          <Box display={'flex'} justifyContent={'center'} gap={10} mt={5}>
            <Button onClick={onView} sx={{ display: 'flex', gap: 2 }} variant='contained'>
              <Icon icon={'mdi:visibility'} /> View
            </Button>

            <Button onClick={onEdit} sx={{ gap: 2, display: 'flex' }} variant='contained' color='secondary'>
              <Icon icon={'mdi:share'} /> Share
            </Button>
          </Box>
        </CardContent>
      </Card>

      <RemoveFavoriteModal onClose={() => setOpen(false)} open={open} />
    </Box>
  )
}

function FavoriteMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
      >
        <Icon icon={'mdi:more-horiz'} />
      </button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography color={'red'}>Delete Favorite</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}

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
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'}>
              <Box flexDirection={'row'} display={'flex'} gap={10} alignItems={'center'}>
                <Box sx={{ position: 'relative' }}>
                  <Avatar sx={{ width: 192, height: 192 }} />
                  <EditFav sx={{ bottom: 10, right: -2 }} />
                </Box>
                <Box>
                  <Typography fontWeight={'bold'} fontSize={22} mb={2}>
                    MD Tuhin
                  </Typography>
                  <Box display={'flex'} gap={4} mb={1} fontSize={'0.9375rem'}>
                    <Typography fontWeight={500}>Email:</Typography>
                    <Typography>tauhidulislam100@gmail.com</Typography>
                  </Box>
                  <Box display={'flex'} gap={4}>
                    <Typography fontWeight={500} fontSize={'0.9375rem'}>
                      Joined:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.9375rem', fontWeight: 500 }}>
                      <Icon icon={'mdi:calendar'} fontSize={16} />
                      <Typography>calendar Joined about 17 hours ago</Typography>
                    </Box>
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography sx={{ fontWeight: 'bold' }}>Welcome back!</Typography>
                  <Icon icon='mdi:info' fontSize={20} />
                </Box>
                <Typography>
                  Thank you for choosing Turning Hearts to keep the memory of your loved ones alive. We are honored to
                  be a part of your healing journey.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' centered>
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
                        <Box sx={{ display: 'flex' }}>
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
              <Box display={'flex'} justifyContent={'flex-end'}>
                <Button onClick={logout} size='large' type='submit' variant='contained'>
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
