import { Card, CardMedia, Fab, CardContent, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import { imageLink } from './PublicProfileHeader'
import Icon from 'src/@core/components/icon'

export const PhotosCard = ({
  width = '280px',
  action = true,
  onClick
}: {
  width?: string
  action?: boolean
  onClick?: () => void
}) => {
  return (
    <Box sx={{ maxWidth: width, position: 'relative' }}>
      <Card>
        <CardMedia component='img' alt='profile-header' image={imageLink} height={200} />
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
    </Box>
  )
}
