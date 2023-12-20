import { Button, Menu, MenuItem, Typography, Card, CardMedia, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { ProfilePicture, imageLink } from './PublicProfileHeader'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'

function BasicMenu() {
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
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ px: 0 }}
        variant='text'
      >
        <Icon icon={'mdi:more-vert'} />
      </Button>
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
          <Typography color={'red'}>Delete Profile</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}

const AdminProfileHeader = () => {
  return (
    <Card>
      <CardMedia
        component='img'
        alt='profile-header'
        image={imageLink}
        sx={{
          height: { xs: 250, md: 400 }
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: { xs: 'center', md: 'flex-start' },
          py: '0px'
        }}
      >
        <Box sx={{ transform: 'translateY(-60px)' }}>
          <ProfilePicture src={imageLink} alt='profile-picture' />
          <Typography sx={{ textAlign: 'center', fontWeight: '600', fontSize: 20, mt: '12px' }}>Vetaran</Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 6 },
            alignItems: 'flex-start',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between']
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'], mt: '20px' }}>
            <Box display={'flex'} alignItems={'center'} gap={1} mb={'10px'}>
              <Typography fontSize={18} fontWeight={600}>
                Name:
              </Typography>
              <Typography fontSize={14} fontWeight={'normal'}>
                MD TAUHIDUL ISLAM
              </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={1} mb={'24px'}>
              <Typography fontSize={18} fontWeight={600}>
                Lifetime:
              </Typography>
              <Typography fontSize={14} fontWeight={'normal'}>
                Dec 20, 1991 -
              </Typography>
            </Box>
            <Link href={'/dashboard/view'}>
              <Button
                variant='contained'
                sx={{ boxShadow: 'none' }}
                startIcon={<Icon icon='mdi:visibility' fontSize={20} />}
              >
                Public view profile
              </Button>
            </Link>
          </Box>
          <Box>
            <Box sx={{ transform: 'translateY(-50px)', gap: '10px', display: 'flex' }}>
              <Button variant='outlined' startIcon={<Icon icon='mdi:upload' fontSize={20} />}>
                upload cover photo
              </Button>
              <Button variant='outlined' color='error' startIcon={<Icon icon='mdi:close' fontSize={20} />}>
                remove cover photo
              </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', gap: '10px' }}>
                <Typography fontWeight={600}>Profile status:</Typography>
                <Typography sx={{ color: 'red' }}>Unverified</Typography>
              </Box>
              <Button href='/' variant='text' color='info' sx={{ textDecoration: 'underline' }}>
                See more
              </Button>
              <BasicMenu />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AdminProfileHeader
