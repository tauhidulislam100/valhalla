import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Icon from 'src/@core/components/icon'

const YoutubeEmbedCard = ({ embedId, action = true }: { embedId: string; action?: boolean }) => (
  <Box sx={{ borderRadius: '12px', width: '280px' }}>
    <iframe
      style={{ borderRadius: '12px', display: 'block' }}
      width='280'
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
  </Box>
)

export default YoutubeEmbedCard
