import React, { useState, useEffect } from 'react'
import { FormButton, Input, TextArea } from '../GlobalStyles/FormStyles'
import { AddField, GridContainer, ModalBox, ModalContainer, ModalTitle, RoomSelectionBox } from '../GlobalStyles/ModalStyles'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';
import "./animation.css"
import ImageUpload from '../ImageUpload/ImageUpload'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { bulkImageUpload, deleteImageBulk, imageUpload } from '../../utils/utilFunctions'
import Loader from '../Loaders/Loader'
import { addRoom, updateRoom } from '../../services/RoomService.';

const RoomModal = (props) => {

    const propsRoom = props.room
    const user = JSON.parse(localStorage.getItem('user'))
    const [hide, setHide] = useState(false)
    const [loading, setLoading] = useState(false)
    const [room, setRoom] = useState({
        id: propsRoom ? propsRoom.RoomId : '',
        name: propsRoom ? propsRoom.Name : '',
        description: propsRoom ? propsRoom.Description : '',
        hotel: props.hotel.HotelId,
        images: propsRoom ? [propsRoom.Image1, propsRoom.Image2, propsRoom.Image3] : [],
        specification: propsRoom ? propsRoom.Specification : '',
        occupancy: propsRoom ? propsRoom.Occupancy : null,
        price: propsRoom ? propsRoom.Price : null,
        roomNumbers: propsRoom ? propsRoom.roomNumbers : '',
        userId: user.id
    })
    const [roomImages, setRoomImages] = useState([])
    const [selected, setSelected] = useState([])

    const addField = () => {
        if (roomImages.length <= 2)
            setRoomImages([...roomImages, { url: null, uuid: null }])
    }

    const addNewRoom = async (e) => {
        e.preventDefault()
        setLoading(true)
        const reqObj = {
            roomName: room.name,
            roomDescription: room.description,
            occupancy: room.occupancy,
            specification: room.specification,
            price: room.price,
            hotelId: room.hotel,
            userId: room.userId,
            image1: roomImages[0]?.value ? await imageUpload(roomImages[0]?.value) : null,
            image2: roomImages[1]?.value ? await imageUpload(roomImages[1]?.value) : null,
            image3: roomImages[2]?.value ? await imageUpload(roomImages[2]?.value) : null 
        }
        addRoom(reqObj).then(res => {
            if (res.status !== 200) {
                toast.error("Failed to add room please try again.", {
                    autoClose: 5000,
                    pauseOnHover: true
                })
                setLoading(false)
                return
            }
            props.callBack()
            toast.success(`Room Added successfully!`, {
                autoClose: 5000,
                pauseOnHover: true
            })
            setLoading(false)
            props.setRoomModal(false)
        })
    }

    const updateHotelRoom = async (e) => {
        e.preventDefault()
        setLoading(true)
        const reqObj = {
            roomName: room.name,
            roomDescription: room.description,
            occupancy: room.occupancy,
            specification: room.specification,
            price: room.price,
            image1: roomImages[0]?.value ? await imageUpload(roomImages[0]?.value) : null,
            image2: roomImages[1]?.value ? await imageUpload(roomImages[1]?.value) : null,
            image3: roomImages[2]?.value ? await imageUpload(roomImages[2]?.value) : null 
        }
        updateRoom(reqObj, room.id).then(res => {
            if (res.status !== 200) {
                toast.error("Failed to update room please try again.", {
                    autoClose: 5000,
                    pauseOnHover: true
                })
                setLoading(false)
                return
            }
            props.callBack()
            toast.success(`Room updated successfully!`, {
                autoClose: 5000,
                pauseOnHover: true
            })
            setLoading(false)
            props.setRoomModal(false)
        }) 
    }

    const roomSlots = Array.from({ length: props.hotel.totalRooms }, (x, i) => {
        const s = {
            number: i + 1,
            assigned: props.hotel.roomsMap[`${i + 1}`] && !room.roomNumbers.includes(i + 1)
        }
        return s
    })

    const addNumber = (n, assigned) => {
        if (room.roomNumbers.includes(n) && !assigned) {
            let ns = room.roomNumbers.filter(s => s !== n)
            setRoom({ ...room, roomNumbers: ns })
        }
        else if (!assigned) {
            let ns = room.roomNumbers
            ns.push(n)
            setRoom({ ...room, roomNumbers: ns })
        }
        else return
    }


    return (
        <ModalContainer>
            <ModalBox className="modal-box">
                {!loading ? (
                    <>
                        <CloseIcon className="close-icon" onClick={() => props.setRoomModal(false)} />
                        <ModalTitle>{props.title}</ModalTitle>

                        <GridContainer>
                            {room.images.length ? room.images.slice(0, 3).map((image, idx) => (
                                <ImageUpload key={idx}
                                    imageUrl={image}
                                    data={room.images}
                                    styles={{ height: '160px' }}
                                    setSelected={setSelected}
                                    setImageURL={(val) => image.value = val}
                                    selected={selected}
                                    />
                            )) : roomImages.length ? roomImages.slice(0, 3).map((image, idx) => (
                                <ImageUpload key={image.uuid}
                                    imageUrl={image.url}
                                    data={image}
                                    styles={{ height: '160px' }}
                                    setSelected={setSelected}
                                    setImageURL={(val) => image.value = val}
                                    selected={selected} />
                            )) : null}
                            {room.images.length <= 2 && roomImages.length <= 2 && <AddField onClick={() => addField()}>
                                <AddCircleIcon className="plus-icon" />
                            </AddField>}
                        </GridContainer>

                        <form onSubmit={props.action === 'update' ? updateHotelRoom : addNewRoom}>
                            <Input required={true} style={{ marginBottom: '16px' }}
                                value={room.name} onChange={(e) => setRoom({ ...room, name: e.target.value })}
                                placeholder="Room name">
                            </Input>

                            <TextArea required={true} style={{ marginBottom: '16px' }}
                                value={room.description} onChange={(e) => setRoom({ ...room, description: e.target.value })}
                                placeholder="Room description"></TextArea>

                            <Input required={true} style={{ marginBottom: '16px' }}
                                type="number"
                                value={room.occupancy} onChange={(e) => setRoom({ ...room, occupancy: Number(e.target.value) })}
                                placeholder="Occupancy"></Input>

                            <TextArea required={true} style={{ marginBottom: '16px' }}
                                value={room.specification}
                                onChange={(e) => setRoom({ ...room, specification: e.target.value })}
                                placeholder="Room specifications (Add using ',')"></TextArea>

                            <Input required={true} style={{ marginBottom: '16px' }}
                                type="number"
                                value={room.price} onChange={(e) => setRoom({ ...room, price: Number(e.target.value) })}
                                placeholder="Price"></Input>

                            <RoomSelectionBox>
                                {roomSlots.map(t => (
                                    <div className={`${t.assigned ? 'assigned' :
                                        room.roomNumbers.includes(t.number) ? 'selected' : ''}`}
                                        onClick={() => addNumber(t.number, t.assigned)}
                                    >{t.number}</div>
                                ))}
                            </RoomSelectionBox>

                            {!hide && (
                                <FormButton type="submit"
                                    style={{ marginLeft: 'auto', marginTop: '40px' }}>
                                    {props.title}
                                </FormButton>
                            )}
                        </form>
                    </>
                ) : <Loader />}
            </ModalBox>
        </ModalContainer>
    )
}

export default RoomModal