import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CareerTimelineItemDetailsModal } from './CareerTimelineItemDetailsModal'

const useClasses = makeStyles((theme) => ({
    root: {},
    button: {
        fontWeight: theme.typography.fontWeightBold,
        margin: theme.spacing(3, 'auto'),
    }
}))


export const CareerTimelineItemDetails = ({ title, details }) => {
    const [isOpen, setIsOpen] = useState(false);
    const classes = useClasses();

    const closeDialog = () => { setIsOpen(false) }

    return <>
        <Button onClick={() => setIsOpen(!isOpen)} className={classes.button} variant="outlined" color="secondary">Learn More</Button>

        {isOpen && <CareerTimelineItemDetailsModal open={isOpen} onClose={closeDialog} title={title} details={details} />}
    </>
}

