import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import TabletMacIcon from '@material-ui/icons/TabletMac'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'
import Typography from '@material-ui/core/Typography'
import ImageTabPanel from './ImageTabPanel'

const useStyles = makeStyles({
    paper: {
        flexGrow: 1,
    },
})

export default function DevicesPreview({ images }) {
    const { mobile, tablet, desktop } = images
    const classes = useStyles()
    const theme = useTheme()
    const startIndex = desktop ? 0 : tablet ? 1 : 2
    const [value, setValue] = React.useState(startIndex)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <Typography
                variant="subtitle1"
                paragraph={true}
                component="p"
                color="secondary"
            >
                Preview:
            </Typography>

            <Paper square className={classes.paper}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="Devices preview"
                    centered={true}
                >
                    {desktop && (
                        <Tab icon={<DesktopWindowsIcon />} label="Desktop" />
                    )}
                    {tablet && <Tab icon={<TabletMacIcon />} label="Tablet" />}
                    {mobile && (
                        <Tab icon={<PhoneAndroidIcon />} label="Mobile" />
                    )}
                </Tabs>
                {desktop && (
                    <ImageTabPanel
                        value={value}
                        index={0}
                        dir={theme.direction}
                        image={desktop}
                    >
                        Item One
                    </ImageTabPanel>
                )}
                {tablet && (
                    <ImageTabPanel
                        value={value}
                        index={1}
                        dir={theme.direction}
                        image={tablet}
                    >
                        Item Two
                    </ImageTabPanel>
                )}
                {mobile && (
                    <ImageTabPanel
                        value={value}
                        index={2}
                        dir={theme.direction}
                        image={mobile}
                    >
                        Item Three
                    </ImageTabPanel>
                )}
            </Paper>
        </>
    )
}
