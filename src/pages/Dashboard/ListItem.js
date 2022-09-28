import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { getDate, getEasyDate } from '../../utils/utilFunctions';
import { ActionsContainer, Button, Item, Text } from '../../components/GlobalStyles/TableStyles';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { deleteRoom } from '../../services/RoomService.';

const ListItem = (props) => {

    const navigate = useNavigate()

    const handleDelete = () => {
        deleteRoom(props.data.RoomId).then(res => {
            if (res.status !== 200) {
                toast.error("Failed to update room please try again.", {
                    autoClose: 5000,
                    pauseOnHover: true
                })
                return
            }
            toast.success("Room Deleted Successfully!", {
                autoClose: 5000,
                pauseOnHover: true
            })
            props.callBack()
        })
    }

    return (
        <Item style={{ gridTemplateColumns: `repeat(6, 1fr)` }}>
            <Tippy interactive={true} content={props.data.Name} placement="bottom"><Text>{props.data.Name}</Text></Tippy>
            <Tippy interactive={true} content={props.data.Description} placement="bottom"><Text>{props.data.Description}</Text></Tippy>
            <Tippy interactive={true} content={props.data.Price} placement="bottom"><Text>{props.data.Price}</Text></Tippy>
            <Tippy interactive={true} content={props.data.Occupancy} placement="bottom"><Text>{props.data.Occupancy}</Text></Tippy>
            <Tippy interactive={true} content={props.data.Specification} placement="bottom"><Text>{props.data.Specification}</Text></Tippy>
            <ActionsContainer>
                <Button onClick={() => props.setRoomModal(
                    { state: true, title: 'Update Room Details', param: props.data, action: 'update' })
                }>
                    <img alt="" width="20px" src="https://img.icons8.com/plumpy/24/000000/edit--v1.png" /></Button>
                <Button onClick={handleDelete}><img alt="" width="20px" src="https://img.icons8.com/flat-round/48/000000/delete-sign.png" /></Button>
            </ActionsContainer>
        </Item>
    )
}

export default ListItem
