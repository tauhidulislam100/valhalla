import { Dialog, DialogTitle, Typography, DialogContent, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Icon from 'src/@core/components/icon'

const SocialIconContainer = ({ color, icon, name }: { color: string; icon: string; name: string }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 80,
          background: color,
          display: 'grid',
          placeItems: 'center',
          color: 'white'
        }}
      >
        <Icon icon={icon} fontSize={32} />
      </div>
      <Typography>{name}</Typography>
    </div>
  )
}
const ShareModal = ({ open = false, onClose }: { open: boolean; onClose?: () => void }) => {
  return (
    <Dialog open={open} aria-labelledby='form-dialog-title' maxWidth={'sm'} fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: 20, fontWeight: '700' }}>Share</Typography>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <Icon icon={'mdi:close'} />
        </button>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ justifyContent: 'center', display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          <SocialIconContainer icon='mdi:facebook' name='Facebook' color='#0f6fec' />
          <SocialIconContainer icon='mdi:twitter' name='Twitter' color='#4f9ef8' />
          <SocialIconContainer icon='mdi:pinterest' name='Pinterest' color='#d6293e' />
          <SocialIconContainer icon='mdi:whatsapp' name='Whatsapp' color='#0cbc87' />
          <SocialIconContainer icon='mdi:email' name='Email' color='#a9a9a9' />
        </Box>
        <Box sx={{ display: 'flex', mt: 8, position: 'relative' }}>
          <TextField fullWidth />
          <button
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              height: 56,
              width: 100,
              background: '#252b55',
              color: 'white',
              border: 'none',
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              gap: 5,
              cursor: 'pointer'
            }}
          >
            <Icon icon={'mdi:content-paste'} />
            <span>Copy!</span>
          </button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ShareModal
