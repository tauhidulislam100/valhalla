import { Card, CardMedia, Fab, CardContent, Typography, Button, styled } from '@mui/material'
import { Box } from '@mui/system'
import { imageLink } from './PublicProfileHeader'
import Icon from 'src/@core/components/icon'
import { useState } from 'react'
import PhotoModal from './PhotoModal'

const PhotoContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

export const PhotosCard = ({
  width = '280px',
  action = true,
  onClick
}: {
  width?: string
  action?: boolean
  onClick?: () => void
}) => {
  const [openPhotoModal, setOpenPhotoModal] = useState(false)

  return (
    <>
      <PhotoContainer sx={{ width, position: 'relative' }}>
        <Card>
          <CardMedia
            onClick={() => setOpenPhotoModal(true)}
            component='img'
            alt='profile-header'
            image={imageLink}
            height={200}
            sx={{ cursor: 'pointer' }}
          />
          {action ? (
            <Fab sx={{ transform: 'translateY(-30px)', position: 'absolute', right: '10px' }} color='primary'>
              <Icon icon={'mdi:edit'} />
            </Fab>
          ) : null}

          <CardContent>
            <Box
              sx={{
                mb: '10px'
              }}
            >
              <Typography fontWeight={'600'} fontSize={16}>
                Unverified Medallion
              </Typography>
              <Typography my={'5px'} fontSize={12}>
                Created In 12/15/2023
              </Typography>
            </Box>
            {action ? (
              <Box display={'flex'} justifyContent={'center'} mt={5}>
                <Button
                  sx={{ flex: 1, display: 'flex', gap: 2, boxShadow: 0 }}
                  variant={'contained'}
                  color={'secondary'}
                  onClick={onClick}
                  startIcon={<Icon icon={'mdi:trash'} />}
                >
                  Delete
                </Button>
              </Box>
            ) : null}
          </CardContent>
        </Card>
      </PhotoContainer>

      <PhotoModal open={openPhotoModal} onClose={() => setOpenPhotoModal(false)} />
    </>
  )
}
