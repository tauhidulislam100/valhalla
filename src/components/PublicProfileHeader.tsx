import styled from '@emotion/styled'
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import Icon from 'src/@core/components/icon'

export const imageLink = `/images/cover.jpeg`

export const ProfilePicture = styled('img')(() => ({
  width: 180,
  height: 180,
  borderRadius: '50%',
  border: `3px solid #ddd`
}))

const PublicUserProfile = () => {
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
          <Box sx={{ mt: '20px', pt: 4, px: 8 }}>
            <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 4 }}>
              This headline text is the one that shows above the name of the person. If this field is null, the headline
              text won’t be added.
            </Typography>
            <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 4 }}>MD TAUHIDUL ISLAM - Jr</Typography>
            <Typography fontStyle={'italic'}>
              This headline text is the one that shows above the name of the person. If this field is null, the headline
              text won’t be added. This headline text is the one that shows above the name of the person. If this field
              is null, the headline text won’t be added. This headline text is the one that shows above the name of the
              person. If this field is null, the headline text won’t be added. This headline text is the one that shows
              above the name of the person. If this field is null, the headline text won’t be added. This headline text
              is the one that shows above the name of the person. If this field is null, the headline text won’t be
              added.
            </Typography>
          </Box>
          <Box display={'flex'} gap={'10px'} sx={{ pt: 5 }}>
            <Button sx={{ flexDirection: 'column' }} variant='contained'>
              <Icon icon={'mdi:ios-share'} />
              Share
            </Button>
            <Button sx={{ flexDirection: 'column' }} variant='contained' color='secondary'>
              <Icon icon={'mdi:favorite-border'} />
              Favorite
            </Button>
            <Button sx={{ flexDirection: 'column' }} variant='contained'>
              <Icon icon={'mdi:room'} />
              Map
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PublicUserProfile
