import React, { useState } from 'react'

// ** React Imports
import Button from '@mui/material/Button'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Dialog, DialogContent, DialogTitle, InputLabel, Tab, Tabs, TextField } from '@mui/material'
import FileUploaderRestrictions from 'src/components/fileUploader'
import { CustomTabPanel, a11yProps } from 'src/components/CustomTab'
import AdminProfileHeader from 'src/components/AdminProfileHeader'
import YoutubeEmbedCard from 'src/components/YoutubeEmbedCard'
import AdminTabs from 'src/components/AdminTabs'
import { CreateProfile } from 'src/components/CreateProfile'
import { PhotosCard } from 'src/components/PhotosCard'

const AdminPage = () => {
  const [value, setValue] = useState(0)
  const [openLinkModal, setOpenLinkModal] = useState(false)
  const [openImageModal, setOpenImageModal] = useState(false)
  const [openVideoModal, setOpenVideoModal] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <AdminProfileHeader />
      <Card sx={{ mt: 10 }}>
        <CardContent>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
              <Tab className='tab-title' label='About' {...a11yProps(0, 'profile')} />
              <Tab className='tab-title' label='Images' {...a11yProps(1, 'profile')} />
              <Tab className='tab-title' label='Videos' {...a11yProps(2, 'profile')} />
              <Tab className='tab-title' label='Details' {...a11yProps(3, 'profile')} />
              <Tab className='tab-title' label='Admins' {...a11yProps(4, 'profile')} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} id='profile'>
            <CreateProfile hideBack />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} id='profile'>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                onClick={() => setOpenImageModal(true)}
                variant='contained'
                color='secondary'
                startIcon={<Icon icon={'mdi:plus'} />}
              >
                Add Image
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <PhotosCard />
              <PhotosCard />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2} id='profile'>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                onClick={() => setOpenVideoModal(true)}
                variant='contained'
                color='secondary'
                startIcon={<Icon icon={'mdi:plus'} />}
              >
                Add Video
              </Button>
            </Box>
            <YoutubeEmbedCard embedId='5NgNicANyqM' />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3} id='profile'>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                onClick={() => setOpenLinkModal(true)}
                variant='contained'
                color='secondary'
                startIcon={<Icon icon={'mdi:plus'} />}
              >
                Add Link
              </Button>
            </Box>
            <Card sx={{ mt: 5 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>Facebook</Typography>
                  <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Button variant='contained' color='secondary' startIcon={<Icon icon={'mdi:edit'} />}>
                      Edit
                    </Button>
                    <Button variant='contained' color='secondary' startIcon={<Icon icon={'mdi:delete'} />}>
                      Delete
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4} id='profile'>
            <AdminTabs />
          </CustomTabPanel>
        </CardContent>
      </Card>

      <Dialog open={openImageModal} aria-labelledby='form-dialog-title' fullWidth>
        <DialogTitle
          id='form-dialog-title'
          sx={{ borderBottom: '1px solid black', mb: '10px', display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography fontWeight={600}>Add new images</Typography>

          <Icon icon={'mdi:close'} onClick={() => setOpenImageModal(false)} />
        </DialogTitle>
        <DialogContent>
          <Box mb={8}>
            <FileUploaderRestrictions />
            <InputLabel htmlFor='title'>Title</InputLabel>
            <TextField autoFocus fullWidth id='title' sx={{ mb: 5 }} size='small' />
            <InputLabel htmlFor='url'>URL</InputLabel>
            <TextField autoFocus fullWidth id='url' size='small' />
          </Box>
          <Button
            startIcon={<Icon icon={'mdi:plus'} />}
            fullWidth
            onClick={() => setOpenImageModal(false)}
            variant='contained'
            color='secondary'
          >
            Upload Images
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={openLinkModal} aria-labelledby='form-dialog-title' fullWidth>
        <DialogTitle
          id='form-dialog-title'
          sx={{ borderBottom: '1px solid black', mb: '10px', display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography fontWeight={600}>Add Link</Typography>
          <Icon icon={'mdi:close'} onClick={() => setOpenLinkModal(false)} />
        </DialogTitle>
        <DialogContent>
          <Box mb={8}>
            <InputLabel htmlFor='title'>Title</InputLabel>
            <TextField autoFocus fullWidth id='title' sx={{ mb: 5 }} size='small' />
            <InputLabel htmlFor='url'>URL</InputLabel>
            <TextField autoFocus fullWidth id='url' size='small' />
          </Box>
          <Button
            startIcon={<Icon icon={'mdi:plus'} />}
            fullWidth
            onClick={() => setOpenLinkModal(false)}
            variant='contained'
            color='secondary'
          >
            Add Link
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={openVideoModal} aria-labelledby='form-dialog-title' fullWidth>
        <DialogTitle
          id='form-dialog-title'
          sx={{ borderBottom: '1px solid black', mb: '10px', display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography fontWeight={600}>Add Video</Typography>

          <Icon icon={'mdi:close'} onClick={() => setOpenVideoModal(false)} />
        </DialogTitle>
        <DialogContent>
          <Box mb={8}>
            <InputLabel htmlFor='title'>Title</InputLabel>
            <TextField autoFocus fullWidth id='title' sx={{ mb: 5 }} size='small' />
            <InputLabel htmlFor='url'>Youtube URL</InputLabel>
            <TextField autoFocus fullWidth id='url' size='small' sx={{ mb: 5 }} />
            <InputLabel htmlFor='description'>Description</InputLabel>
            <TextField multiline minRows={2} autoFocus fullWidth id='description' size='small' />
          </Box>
          <Button
            startIcon={<Icon icon={'mdi:plus'} />}
            fullWidth
            onClick={() => setOpenVideoModal(false)}
            variant='contained'
            color='secondary'
          >
            Add Video
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AdminPage
