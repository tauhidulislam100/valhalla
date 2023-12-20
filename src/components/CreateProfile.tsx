import {
  Button,
  Typography,
  InputLabel,
  TextField,
  FormHelperText,
  Select,
  MenuItem,
  Input,
  FormControlLabel,
  Checkbox,
  InputAdornment
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import Icon from 'src/@core/components/icon'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker from 'react-datepicker'

export const CreateProfile = ({ onBack, hideBack }: { onBack?: () => void; hideBack?: boolean }) => {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <>
      {!hideBack ? (
        <Button sx={{ display: 'flex', alignItems: 'center', px: 0, mb: 5, mx: 0 }} variant='text' onClick={onBack}>
          <Icon icon={'mdi:chevron-left'} />
          <Typography>Create new profile</Typography>
        </Button>
      ) : null}

      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', mb: '32px' }}>
        <Typography>Personal Details</Typography>
      </Box>
      <Box flexDirection={'row'} display={'flex'} gap={10} my={'10px'}>
        <Box flex={1}>
          <InputLabel htmlFor='firstName'>First Name:</InputLabel>
          <TextField autoFocus fullWidth id='firstName' placeholder='First Name' size='small' />
        </Box>
        <Box flex={1}>
          <InputLabel htmlFor='middleName'>Middle Name:</InputLabel>
          <TextField autoFocus fullWidth id='middleName' placeholder='Middle Name' size='small' />
        </Box>
        <Box flex={1}>
          <InputLabel htmlFor='lastName'>Last Name:</InputLabel>
          <TextField autoFocus fullWidth id='lastName' placeholder='Last Name' size='small' />
        </Box>
      </Box>
      <Box flexDirection={'row'} display={'flex'} gap={10} my={'10px'}>
        <Box flex={1}>
          <InputLabel htmlFor='title'>Title:</InputLabel>
          <TextField autoFocus fullWidth id='title' placeholder='Title' size='small' />
          <FormHelperText>(Example Jr - Sr)</FormHelperText>
        </Box>

        <Box flex={1}>
          <InputLabel id='demo-simple-select-helper-label'>Relationship</InputLabel>
          <Select defaultValue='' id='demo-simple-select-helper' size='small' fullWidth>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box width={'88%'}>
          <Input type='file' fullWidth />
        </Box>

        <FormControlLabel
          label='Is a Veteran?'
          control={<Checkbox defaultChecked name='color-secondary' color='secondary' />}
        />
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
        <Typography>Headline text</Typography>
      </Box>
      <Box flexDirection={'row'} display={'flex'} gap={10} my={'10px'}>
        <Box flex={1}>
          <InputLabel htmlFor='state'>Text or phrase:</InputLabel>
          <TextField autoFocus fullWidth id='state' placeholder='In loving memory of' size='small' />
          <FormHelperText>
            This headline text is the one that shows above the name of the person. If this field is null, the headline
            text won’t be added.
          </FormHelperText>
        </Box>
      </Box>

      <FormControlLabel
        label='Don’t include headline text'
        control={<Checkbox defaultChecked name='color-secondary' color='secondary' />}
      />
      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
        <Typography>Obituary Information</Typography>
      </Box>
      <Box>
        <InputLabel htmlFor='link-to-obituary'>Link to Obituary:</InputLabel>
        <TextField autoFocus fullWidth id='link-to-obituary' size='small' />
      </Box>
      <Box>
        <InputLabel htmlFor='bio-information'>Bio information:</InputLabel>
        <TextField fullWidth autoFocus id='bio-information' multiline minRows={2} />
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
        <Typography>Lifetime</Typography>
      </Box>
      <Box display={'flex'} gap={'10px'}>
        <Box flex={1}>
          <InputLabel>Birth date: *</InputLabel>
          <DatePickerWrapper>
            <DatePicker
              selected={date}
              id='basic-input2'
              popperPlacement={'bottom'}
              onChange={(date: Date) => setDate(date)}
              placeholderText='Click to select a date'
              customInput={
                <TextField
                  fullWidth
                  size='small'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Icon icon={'mdi:calendar-month'} />
                      </InputAdornment>
                    )
                  }}
                />
              }
            />
          </DatePickerWrapper>
        </Box>
        <Box flex={1}>
          <InputLabel>Death date:</InputLabel>
          <DatePickerWrapper>
            <DatePicker
              selected={date}
              id='basic-input'
              popperPlacement={'bottom'}
              onChange={(date: Date) => setDate(date)}
              placeholderText='Click to select a date'
              customInput={
                <TextField
                  fullWidth
                  size='small'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Icon icon={'mdi:calendar-month'} />
                      </InputAdornment>
                    )
                  }}
                />
              }
            />
          </DatePickerWrapper>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
        <Typography>Location Details</Typography>
      </Box>
      <Box flexDirection={'row'} display={'flex'} gap={10} my={'10px'}>
        <Box flex={1}>
          <InputLabel htmlFor='state'>State:</InputLabel>
          <TextField autoFocus fullWidth id='state' placeholder='State' size='small' />
        </Box>
        <Box flex={1}>
          <InputLabel htmlFor='city'>City:</InputLabel>
          <TextField autoFocus fullWidth id='city' placeholder='City' size='small' />
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
        <Typography>Quote Section</Typography>
      </Box>
      <InputLabel>Text or phrase:</InputLabel>
      <TextField multiline minRows={2} autoFocus fullWidth id='quote' placeholder='Quote' />
      <FormHelperText>This headline text is the one that shows above the name of the person.</FormHelperText>
    </>
  )
}
