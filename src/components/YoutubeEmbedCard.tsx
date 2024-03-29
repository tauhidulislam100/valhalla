import { Button, styled } from '@mui/material'
import { Box } from '@mui/system'
import Icon from 'src/@core/components/icon'

const YoutubeContainer = styled(Box)(({ theme }) => ({
  borderRadius: '12px',
  width: '280px',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

const YoutubeEmbedCard = ({ embedId, action = true }: { embedId: string; action?: boolean }) => (
  <YoutubeContainer>
    <iframe
      style={{ borderRadius: '12px', display: 'block' }}
      width='100%'
      height='320'
      src={`https://www.youtube.com/embed/${embedId}`}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    ></iframe>
    {action ? (
      <Button startIcon={<Icon icon={'mdi:delete'} />} variant='contained' color='secondary' sx={{ mt: 2 }} fullWidth>
        Delete
      </Button>
    ) : null}
  </YoutubeContainer>
)

export default YoutubeEmbedCard
