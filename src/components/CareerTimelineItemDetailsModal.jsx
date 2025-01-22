import React from 'react'
import { Dialog, DialogContent } from '@material-ui/core'
import { safeParseHtmlString } from '../helpers/html'
import { makeStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'
import Typography from '@material-ui/core/Typography'

const useClasses = makeStyles((theme) => ({
    title: {
        width: '100%',
        position: 'relative',
    },
    close: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
    description: {
        padding: theme.spacing(0, 4, 4),
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        fontSize: '0.9rem',
    },
}))

export const CareerTimelineItemDetailsModal = ({ open, onClose, title, details }) => {
    const classes = useClasses()

    return <Dialog className={classes.root} open={open} onClose={onClose} maxWidth="lg">
        <DialogTitle className={classes.title} onClick={onClose}>
            <Typography variant="h5" color="secondary">{title}</Typography>
            <IconButton color="secondary" aria-label="close" className={classes.close}>
                <ClearIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent className={classes.description} dangerouslySetInnerHTML={safeParseHtmlString(details)} />
    </Dialog>
}
