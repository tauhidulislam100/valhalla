import { Dialog, DialogContent } from '@mui/material'
import React from 'react'
import Icon from 'src/@core/components/icon'

const PhotoModal = ({ open = false, onClose }: { open: boolean; onClose?: () => void }) => {
  return (
    <Dialog open={open} aria-labelledby='form-dialog-title' maxWidth={'md'} fullWidth>
      <DialogContent sx={{ padding: 0, position: 'relative' }}>
        <img
          src='/images/cover.jpeg'
          style={{ width: '100%', maxWidth: '100%', objectFit: 'cover', height: '100%' }}
          alt=''
        />
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            position: 'absolute',
            top: 10,
            right: 10
          }}
        >
          <Icon icon={'mdi:close'} />
        </button>
      </DialogContent>
    </Dialog>
  )
}

export default PhotoModal
