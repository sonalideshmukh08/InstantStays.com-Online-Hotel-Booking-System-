import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { getDate, getEasyDate } from '../../utils/utilFunctions';
import { ActionsContainer, Button, Item, Text } from '../../components/GlobalStyles/TableStyles';
import { toast } from 'react-toastify';
import { updateBooking } from '../../services/BookingService';
import { FormButton, Input } from '../../components/GlobalStyles/FormStyles'
import FeedbackModal from './FeedbackModal';
const ListItem = (props) => {
    
    let keys = Object.keys(props.data)
    keys = ['hotel', 'from', 'to', 'bookedOn', 'amount', 'paid','status', 'actions']
    const [showModal, setShowModal] = React.useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }

    const handleCancel = () => {
        updateBooking(props.data.BookingId, 'Cancelled').then(res => {
            if (res.status !== 200) {
                toast.error("Failed to update status please try again.", {
                    autoClose: 5000,
                    pauseOnHover: true
                })
                return
            }
            toast.success(`Status updated successfully!`, {
                autoClose: 5000,
                pauseOnHover: true
            })
        })    
    }

    const handleFeedback = () => {
        handleModal()
    }
    return (
        <Item style={{ gridTemplateColumns: `repeat(${keys.length}, 1fr)` }}>
            <Text><Tippy interactive={true} content={props.data.HotelName} placement="bottom"><p>{props.data.HotelName}</p></Tippy></Text>
            {/* <Tippy interactive={true} content={props.data.RoomName} placement="bottom"><Text>{props.data.RoomName}</Text></Tippy> */}
            <Tippy interactive={true} content={getEasyDate(props.data.CheckIn)} placement="bottom"><Text>{getDate(props.data.CheckIn)}</Text></Tippy>
            <Tippy interactive={true} content={getEasyDate(props.data.CheckOut)} placement="bottom"><Text>{getDate(props.data.CheckOut)}</Text></Tippy>
            <Tippy interactive={true} content={getEasyDate(props.data.BookedOn)} placement="bottom"><Text>{getDate(props.data.BookedOn)}</Text></Tippy>
            <Tippy interactive={true} content={props.data.Amount} placement="bottom"><Text>Rs. {props.data.Amount}</Text></Tippy>
            <Tippy interactive={true} content={props.data.Paid ? 'Paid' : 'Not Paid'} placement="bottom">
                <Text>{props.data.Paid ? 'Paid' : 'Not Paid'}</Text>
            </Tippy>
            <Tippy interactive={true} content={props.data.Status} placement="bottom">
                <Text>{props.data.Status}</Text>
            </Tippy>
            <ActionsContainer>
                {props.type === 'upcomingBooking' && props.data.Status !== 'Cancelled' ? <Button onClick={handleCancel}><img alt="" width="20px" src="https://img.icons8.com/flat-round/48/000000/delete-sign.png" /></Button> : null}
                <FormButton onClick={handleFeedback}>Feedback</FormButton>
            </ActionsContainer>
            {showModal ? <FeedbackModal hotelId={props?.data?.HotelId} handleModal={handleModal} /> : null}
        </Item>
    )
}

export default ListItem
