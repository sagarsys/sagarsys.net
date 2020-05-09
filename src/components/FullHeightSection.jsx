import React from 'react'
import { Box } from '@material-ui/core'

export default function FullHeightSection(props) {
    const navBarHeight = '60px'
    return (
        <Box style={{ height: `calc(100vh - ${navBarHeight})` }} {...props} />
    )
}
