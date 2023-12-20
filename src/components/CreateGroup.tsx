import { Button, Typography, InputLabel, TextField, FormHelperText, Input } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import Icon from 'src/@core/components/icon'
import AddMemberModal from './AddMemberModal'

export const CreateGroup = ({ onBack }: { onBack?: () => void }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant='text' onClick={onBack} sx={{ display: 'flex', alignItems: 'center', mb: 5, px: 0 }}>
        <Icon icon={'mdi:chevron-left'} />
        <Typography>Create new group</Typography>
      </Button>
      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '16px' }}>
        <Typography>Group Details</Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <InputLabel>Group name: *</InputLabel>
        <TextField autoFocus fullWidth id='quote' placeholder='Quote' size='small' sx={{ mb: 4 }} />
        <InputLabel>Group description: *</InputLabel>
        <TextField multiline minRows={2} autoFocus fullWidth id='quote' placeholder='Quote' />
        <FormHelperText>This headline text is the one that shows above the name of the person.</FormHelperText>
      </Box>
      <Box sx={{ mb: 4 }}>
        <InputLabel>Group profile image:</InputLabel>
        <Input type='file' fullWidth />
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '16px' }}>
        <Typography>Members</Typography>
      </Box>
      <FormHelperText sx={{ mb: '10px' }}>Select the members you wish to include on this group.</FormHelperText>
      <Button variant='contained' color='secondary' onClick={() => setOpen(true)}>
        <Icon icon={'mdi:add'} />
        Add Member
      </Button>

      <AddMemberModal onClose={() => setOpen(false)} open={open} />
    </>
  )
}
