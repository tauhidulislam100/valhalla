import { Fab, SxProps, Theme } from '@mui/material'
import React from 'react'
import Icon from 'src/@core/components/icon'

const EditFav = ({ sx }: { sx?: SxProps<Theme> | undefined }) => {
  return (
    <Fab color='primary' sx={{ position: 'absolute', bottom: 0, right: 0, width: 50, height: 50, ...sx }}>
      <Icon icon={'mdi:edit'} />
    </Fab>
  )
}

export default EditFav
