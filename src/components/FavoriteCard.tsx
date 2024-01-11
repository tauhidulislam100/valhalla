import { Card, CardContent, Avatar, Typography, Button, useTheme, Menu, MenuItem, styled } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import RemoveFavoriteModal from './RemoveFavoriteModal'
import Icon from 'src/@core/components/icon'

const CardContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

function FavoriteMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
      >
        <Icon icon={'mdi:more-horiz'} />
      </button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography color={'red'}>Delete Favorite</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}

export const FavoriteCard = ({
  width = '380px',
  onView,
  onEdit
}: {
  width?: string
  onView?: () => void
  onEdit?: () => void
}) => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  return (
    <CardContainer sx={{ width }}>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              onClick={() => setOpen(true)}
              style={{ background: 'none', border: 'none', color: theme.palette.primary.main, cursor: 'pointer' }}
            >
              <Icon icon={'mdi:heart'} fontSize={32} />
            </button>
            <FavoriteMenu />
          </Box>
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
            <Typography color={'secondary'}>Lifetime</Typography>
            <Typography my={'5px'}>Aug 15, 2023 - Aug 16, 2023</Typography>
          </Box>

          <Box display={'flex'} justifyContent={'center'} gap={10} mt={5}>
            <Button onClick={onView} sx={{ display: 'flex', gap: 2 }} variant='contained'>
              <Icon icon={'mdi:visibility'} /> View
            </Button>

            <Button onClick={onEdit} sx={{ gap: 2, display: 'flex' }} variant='contained' color='secondary'>
              <Icon icon={'mdi:share'} /> Share
            </Button>
          </Box>
        </CardContent>
      </Card>

      <RemoveFavoriteModal onClose={() => setOpen(false)} open={open} />
    </CardContainer>
  )
}
