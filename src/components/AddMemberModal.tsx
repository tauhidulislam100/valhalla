import {
  Dialog,
  DialogTitle,
  Typography,
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
  Avatar,
  Card,
  CardContent
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const SelectItemCard = ({
  width = '280px',
  isSelected = false,
  onClick
}: {
  width?: string
  isSelected?: boolean
  onClick?: () => void
}) => {
  //selected item

  return (
    <Box sx={{ maxWidth: width }}>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              mb: '10px'
            }}
          >
            <Avatar sx={{ width: 192, height: 192, mb: 5 }} />
            <Typography fontWeight={700} color={'secondary'}>
              084398438
            </Typography>
            <Typography color={'secondary'}>Relationship: grand father</Typography>
            <Typography my={'5px'}>Created In 12/15/2023</Typography>
            <Typography color={'red'}>Unverified Medallion</Typography>
          </Box>

          <Box display={'flex'} justifyContent={'center'} mt={5}>
            <Button
              sx={{ flex: 1, display: 'flex', gap: 2 }}
              variant={isSelected ? 'contained' : 'outlined'}
              color={isSelected ? 'secondary' : 'primary'}
              onClick={onClick}
            >
              {isSelected ? 'Remove' : 'Select'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

const AddMemberModal = ({ open = false, onClose }: { open: boolean; onClose?: () => void }) => {
  const [selected, setSelected] = useState(false)

  return (
    <Dialog open={open} aria-labelledby='form-dialog-title' maxWidth={'lg'} fullWidth>
      <DialogTitle
        id='form-dialog-title'
        sx={{ borderBottom: '1px solid black', mb: '10px', display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography>Add members to the group</Typography>
        <Button variant='contained' color='primary'>
          Create Medallion
        </Button>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3, borderBottom: '1px solid #ccc', mx: '-20px', px: '20px', pb: '10px' }}>
          Select the group members
        </DialogContentText>
        <Box display={'flex'} flexWrap={'wrap'} gap={'12px'}>
          <SelectItemCard isSelected={selected} onClick={() => setSelected(p => !p)} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Box display={'flex'} justifyContent={'space-between'} sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Button onClick={onClose} variant='outlined' color='secondary'>
              Cancel
            </Button>
            <Button variant='contained' color='secondary'>
              Add member
            </Button>
          </Box>
          <Box>
            <Typography>Selected medallions: {selected ? 1 : 0}</Typography>
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default AddMemberModal
