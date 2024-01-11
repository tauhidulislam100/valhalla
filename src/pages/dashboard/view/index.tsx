import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  InputLabel,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import Icon from 'src/@core/components/icon'
import { CustomTabPanel, a11yProps } from 'src/components/CustomTab'
import FileUploaderRestrictions from 'src/components/fileUploader'
import { PhotosCard } from 'src/components/PhotosCard'
import PublicUserProfile, { imageLink } from 'src/components/PublicProfileHeader'
import YoutubeEmbedCard from 'src/components/YoutubeEmbedCard'

const ProfileView = () => {
  const [value, setValue] = useState(0)
  const [openTributeModal, setOpenTributeModal] = useState(false)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <PublicUserProfile />
      <Card sx={{ mt: 10 }}>
        <CardContent>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' centered variant='scrollable'>
              <Tab className='tab-title' label='About' {...a11yProps(0, 'settings')} />
              <Tab className='tab-title' label='Photos' {...a11yProps(1, 'settings')} />
              <Tab className='tab-title' label='Videos' {...a11yProps(2, 'settings')} />
              <Tab className='tab-title' label='Tributes' {...a11yProps(3, 'settings')} />
              <Tab className='tab-title' label='Details' {...a11yProps(4, 'settings')} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} id='settings'>
            <Typography>
              This headline text is the one that shows above the name of the person. If this field is null, the headline
              text won’t be added. This headline text is the one that shows above the name of the person. If this field
              is null, the headline text won’t be added. This headline text is the one that shows above the name of the
              person. If this field is null, the headline text won’t be added. This headline text is the one that shows
              above the name of the person. If this field is null, the headline text won’t be added.
            </Typography>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} id='settings'>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <PhotosCard action={false} />
              <PhotosCard action={false} />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2} id='settings'>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <YoutubeEmbedCard embedId='5NgNicANyqM' action={false} />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3} id='settings'>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                onClick={() => setOpenTributeModal(true)}
                variant='contained'
                color='secondary'
                startIcon={<Icon icon={'mdi:plus'} />}
              >
                Create Tribute
              </Button>
            </Box>
            <Card sx={{ mt: 10 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                    <Avatar sx={{ width: 50, height: 50 }} />
                    <Box sx={{ display: 'flex', gap: '2px', flexWrap: 'wrap' }}>
                      <Typography sx={{ fontWeight: 700 }}>MD Tuhin</Typography>
                      <Icon icon={`mdi:dot`} />
                      <Typography>2 days ago</Typography>
                    </Box>
                  </Box>

                  <Icon icon={'mdi:more-vert'} />
                </Box>
                <Typography sx={{ my: 4 }}>
                  This is my Tributes This is my Tributes Details This is my Tributes DetailsThis is my Tributes
                  DetailsThis is my Tributes DetailsThis is my Tributes DetailsThis is my Tributes DetailsThis is my
                  Tributes DetailsThis is my Tributes DetailsThis is my Tributes DetailsThis is my Tributes DetailsThis
                  is my Tributes DetailsThis is my Tributes DetailsThis is my Tributes DetailsThis is my Tributes
                  DetailsThis is my Tributes DetailsThis is my Tributes DetailsThis is my Tributes DetailsThis is my
                  Tributes DetailsThis is my Tributes DetailsThis is my Tributes DetailsThis is my Tributes DetailsThis
                  is my Tributes DetailsThis is my Tributes DetailsThis is my Tributes DetailsThis is my Tributes
                  DetailsThis is my Tributes Details
                </Typography>
                <img src={imageLink} style={{ maxWidth: '100%' }} />

                <Box sx={{ display: 'flex', mt: 5, gap: 4 }}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Icon icon={'mdi:heart'} fontSize={16} />
                    <Typography>Liked (0)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Icon icon={'mdi:chat-bubble'} fontSize={16} />
                    <Typography>Comments (0)</Typography>
                  </Box>
                  <Button
                    sx={{ padding: 0, margin: 0, minHeight: 0, minWidth: 0 }}
                    onClick={() => setOpenTributeModal(true)}
                  >
                    Edit
                  </Button>
                </Box>
                <Box mt={2} pl={10}>
                  <TextField multiline minRows={2} fullWidth />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button variant='contained' color='secondary'>
                      Submit
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4} id='settings'>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold', mb: 4 }}>Cemetery information</Typography>
            <Box display={'flex'} gap={5} mb={1}>
              <Typography sx={{ fontWeight: 600 }}>Cemetery Name:</Typography>
              <Typography>Cemetery name:</Typography>
            </Box>
            <Box display={'flex'} gap={5} mb={1}>
              <Typography sx={{ fontWeight: 600 }}>Cemetery plot number:</Typography>
              <Typography>Cemetery plot number:</Typography>
            </Box>
            <Box display={'flex'} gap={5} mb={3}>
              <Typography sx={{ fontWeight: 600 }}>Cemetery Location:</Typography>
              <Typography>Cemetery city:, Cemetery state:</Typography>
            </Box>
            <Box mb={1}>
              <Typography sx={{ fontWeight: 600 }}>Links:</Typography>
              <a href='#' style={{ paddingLeft: '10px' }} target='_blank'>
                See obituary
              </a>
            </Box>
            <Card sx={{ mt: 5 }}>
              <CardContent>
                <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <Avatar variant='square' sx={{ width: 60, height: 60 }} />
                  <Box sx={{ sm: { ml: 20 } }}>
                    <Typography sx={{ color: 'black', fontWeight: 500 }}>Facebook</Typography>
                    <a href='https://www.facebook.com'>https://www.facebook.com</a>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </CustomTabPanel>
        </CardContent>
      </Card>

      <Dialog open={openTributeModal} aria-labelledby='form-dialog-title' fullWidth>
        <DialogTitle
          id='form-dialog-title'
          sx={{ borderBottom: '1px solid black', mb: '10px', display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography fontWeight={600}>Update/Create Tribute</Typography>

          <Icon icon={'mdi:close'} onClick={() => setOpenTributeModal(false)} />
        </DialogTitle>
        <DialogContent>
          <Box mb={8}>
            <InputLabel htmlFor='title'>Title</InputLabel>
            <TextField autoFocus fullWidth id='title' sx={{ mb: 2 }} size='small' />
            <InputLabel htmlFor='description'>Description</InputLabel>
            <TextField autoFocus fullWidth id='description' multiline minRows={2} sx={{ mb: 4 }} />
            <FileUploaderRestrictions />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
            <Button variant='outlined' color='secondary' startIcon={<Icon icon={'mdi:close'} />}>
              Cancel
            </Button>
            <Button variant='contained' color='secondary' startIcon={<Icon icon={'mdi:check'} />}>
              Publish Tribute
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ProfileView
