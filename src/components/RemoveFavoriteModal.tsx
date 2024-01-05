import { Dialog, Typography, Button, DialogContent, DialogActions } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Icon from 'src/@core/components/icon'

const RemoveFavoriteModal = ({ open = false, onClose }: { open: boolean; onClose?: () => void }) => {
  return (
    <Dialog open={open} aria-labelledby='form-dialog-title' maxWidth={'sm'} fullWidth>
      <DialogContent>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon icon={'mdi:info'} fontSize={40} />
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
            Are you sure you want to remove this medallion from your favorites?
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box display={'flex'} sx={{ width: '100%', gap: 10 }}>
          <Button onClick={onClose} variant='outlined' color='secondary' sx={{ flex: 1 }}>
            No
          </Button>
          <Button variant='contained' color='secondary' sx={{ flex: 1 }}>
            Yes
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default RemoveFavoriteModal
