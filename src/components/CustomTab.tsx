import { Box, Typography } from '@mui/material'

export interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  id: string
}

export function a11yProps(index: number, id: string) {
  return {
    id: `${id}-tab-${index}`,
    'aria-controls': `${id}-tabpanel-${index}`
  }
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, id, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id}-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
