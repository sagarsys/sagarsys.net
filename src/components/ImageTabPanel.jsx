import React from 'react'
import Box from '@material-ui/core/Box'
import * as PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    imageWrapper: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
    },
    responsive: {
        maxWidth: '100%',
    },
})

export default function ImageTabPanel(props) {
    const { children, value, index, image, ...other } = props
    const classes = useStyles()
    const alt =
        index === 0
            ? 'Desktop preview'
            : index === 1
            ? 'Tablet preview'
            : 'Mobile preview'
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div className={classes.imageWrapper}>
                        <img
                            className={classes.responsive}
                            src={image}
                            alt={alt}
                        />
                    </div>
                </Box>
            )}
        </div>
    )
}

ImageTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}
