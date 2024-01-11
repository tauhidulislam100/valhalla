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
  InputAdornment,
  styled
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import Icon from 'src/@core/components/icon'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker from 'react-datepicker'

const InputGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
  marginTop: '10px',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}))
const InputGroupContainer = styled(Box)(() => ({
  width: '100%',
  flex: 1
}))

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
      <InputGroup>
        <InputGroupContainer>
          <InputLabel htmlFor='firstName'>First Name:</InputLabel>
          <TextField autoFocus fullWidth id='firstName' placeholder='First Name' size='small' />
        </InputGroupContainer>
        <InputGroupContainer>
          <InputLabel htmlFor='middleName'>Middle Name:</InputLabel>
          <TextField autoFocus fullWidth id='middleName' placeholder='Middle Name' size='small' />
        </InputGroupContainer>
        <InputGroupContainer>
          <InputLabel htmlFor='lastName'>Last Name:</InputLabel>
          <TextField autoFocus fullWidth id='lastName' placeholder='Last Name' size='small' />
        </InputGroupContainer>
      </InputGroup>
      <InputGroup>
        <InputGroupContainer>
          <InputLabel htmlFor='title'>Title:</InputLabel>
          <TextField autoFocus fullWidth id='title' placeholder='Title' size='small' />
          <FormHelperText>(Example Jr - Sr)</FormHelperText>
        </InputGroupContainer>

        <InputGroupContainer>
          <InputLabel id='demo-simple-select-helper-label'>Relationship</InputLabel>
          <Select defaultValue='' id='demo-simple-select-helper' size='small' fullWidth>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>&nbsp;</FormHelperText>
        </InputGroupContainer>
      </InputGroup>
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
      <InputGroup>
        <InputGroupContainer>
          <InputLabel htmlFor='state'>Text or phrase:</InputLabel>
          <TextField autoFocus fullWidth id='state' placeholder='In loving memory of' size='small' />
          <FormHelperText>
            This headline text is the one that shows above the name of the person. If this field is null, the headline
            text won’t be added.
          </FormHelperText>
        </InputGroupContainer>
      </InputGroup>

      <FormControlLabel
        label='Don’t include headline text'
        control={<Checkbox defaultChecked name='color-secondary' color='secondary' />}
      />
      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
        <Typography>Obituary Information</Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <InputLabel htmlFor='link-to-obituary'>Link to Obituary:</InputLabel>
        <TextField autoFocus fullWidth id='link-to-obituary' size='small' />
      </Box>
      <Box>
        <InputLabel htmlFor='bio-information'>Bio information:</InputLabel>
        <TextField fullWidth autoFocus id='bio-information' multiline minRows={2} />
      </Box>
      {hideBack ? (
        <Box sx={{ my: 4 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
            <Typography>Location Before Death</Typography>
          </Box>

          <InputGroup>
            <InputGroupContainer>
              <InputLabel htmlFor='city'>City:</InputLabel>
              <TextField autoFocus fullWidth id='city' placeholder='City' size='small' />
            </InputGroupContainer>
            <InputGroupContainer>
              <InputLabel htmlFor='state'>State:</InputLabel>
              <TextField autoFocus fullWidth id='state' placeholder='State' size='small' />
            </InputGroupContainer>
          </InputGroup>
        </Box>
      ) : null}
      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
        <Typography>Lifetime</Typography>
      </Box>
      <InputGroup>
        <InputGroupContainer>
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
        </InputGroupContainer>
        <InputGroupContainer>
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
        </InputGroupContainer>
      </InputGroup>

      {hideBack ? (
        <Box sx={{ my: 4 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
            <Typography>Cemetery information</Typography>
          </Box>

          <InputGroup>
            <InputGroupContainer>
              <InputLabel htmlFor='city'>Cemetery name:</InputLabel>
              <TextField autoFocus fullWidth id='city' placeholder='City' size='small' />
            </InputGroupContainer>
            <InputGroupContainer>
              <InputLabel htmlFor='state'>Cemetery plot number:</InputLabel>
              <TextField autoFocus fullWidth id='state' placeholder='State' size='small' />
            </InputGroupContainer>
          </InputGroup>
          <InputGroup>
            <InputGroupContainer>
              <InputLabel htmlFor='city'>Cemetery city:</InputLabel>
              <TextField autoFocus fullWidth id='city' placeholder='City' size='small' />
            </InputGroupContainer>
            <InputGroupContainer>
              <InputLabel htmlFor='state'>Cemetery state:</InputLabel>
              <TextField autoFocus fullWidth id='state' placeholder='State' size='small' />
            </InputGroupContainer>
          </InputGroup>
          <Box sx={{ display: 'flex' }}>
            <button
              style={{
                border: '1px solid rgb(219 219 223)',
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                background: '#e9ecef',
                color: '#212529'
              }}
            >
              Set Location:
            </button>
            <input
              style={{
                flex: 1,
                display: 'flex',
                border: '1px solid rgb(219 219 223)',
                borderLeft: 'none',
                borderRight: 'none',
                padding: '12px 8px',
                background: '#fff'
              }}
              disabled
            />
            <button
              style={{
                display: 'inline-flex',
                border: 'none',
                backgroundColor: '#e9ecef',
                alignItems: 'center'
              }}
            >
              <Icon icon={'mdi:insert-drive-file'} fontSize={14} color='#212529' />
            </button>
          </Box>

          <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
            <Typography>Donations</Typography>
          </Box>

          <Box flex={1}>
            <InputLabel htmlFor='city'>Donation URL:</InputLabel>
            <TextField autoFocus fullWidth id='city' placeholder='' size='small' />
          </Box>
        </Box>
      ) : null}

      {!hideBack ? (
        <>
          <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
            <Typography>Location Details</Typography>
          </Box>
          <InputGroup>
            <InputGroupContainer>
              <InputLabel htmlFor='state'>State:</InputLabel>
              <TextField autoFocus fullWidth id='state' placeholder='State' size='small' />
            </InputGroupContainer>
            <InputGroupContainer>
              <InputLabel htmlFor='city'>City:</InputLabel>
              <TextField autoFocus fullWidth id='city' placeholder='City' size='small' />
            </InputGroupContainer>
          </InputGroup>
        </>
      ) : null}

      <Box sx={{ borderBottom: 1, borderColor: 'black', paddingBottom: '10px', my: '32px' }}>
        <Typography>Quote Section</Typography>
      </Box>
      <InputLabel>Text or phrase:</InputLabel>
      <TextField multiline minRows={2} autoFocus fullWidth id='quote' placeholder='Quote' />
      <FormHelperText>This headline text is the one that shows above the name of the person.</FormHelperText>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 5 }}>
        <Button color='secondary' variant='contained' startIcon={<Icon icon={'mdi:check'} />}>
          Save Changes
        </Button>
      </Box>
    </>
  )
}
