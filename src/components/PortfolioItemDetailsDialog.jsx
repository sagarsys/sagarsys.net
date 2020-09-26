import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import PortfolioItemDetailsDialogContent from './PortfolioItemDetailsDialogContent'
import { LinkOrText } from './LinkOrText'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    close: {
        marginLeft: 'auto',
    },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function PortfolioItemDetailsDialog({
    open,
    handleClose,
    item,
}) {
    const classes = useStyles()
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            maxWidth="lg"
            fullScreen
        >
            <div className={classes.title}>
                <DialogTitle variant="h6">
                    <LinkOrText
                        link={item.titleLink}
                        title={item.title}
                        color="secondary"
                    />
                </DialogTitle>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    autoFocus
                    className={classes.close}
                >
                    <CloseIcon />
                </IconButton>
            </div>
            <Divider />
            <PortfolioItemDetailsDialogContent item={item} />
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
