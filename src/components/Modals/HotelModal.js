import React, { useEffect, useState } from 'react'
import { FormButton, Input, TextArea } from '../GlobalStyles/FormStyles'
import { ModalBox, ModalContainer, ModalTitle } from '../GlobalStyles/ModalStyles'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';
import "./animation.css"
import ImageUpload from '../ImageUpload/ImageUpload';
import { imageUpload } from '../../utils/utilFunctions';
import Loader from '../Loaders/Loader';
import { addHotel, updateHotel } from '../../services/HotelService';

const HotelModal = (props) => {

    const [hide, setHide] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isUpdate, setIsUpdate] = useState(props?.hotel.Id)
    const user = JSON.parse(localStorage.getItem('user'))
    
    const [hotel, setHotel] = useState({
        name: props?.hotel.Name,
        description: props?.hotel.Description,
        image: null,
        totalRooms: props?.hotel.TotalRooms,
        location: props?.hotel.Location,
        userId: user.id
    })

    const addNewHotel = async (e) => {
        e.preventDefault()
        
        if (hotel.image) {
            const imageUrl = await imageUpload(hotel.image)
            hotel.image = imageUrl
        }
        
        const api = isUpdate ? updateHotel(hotel) : addHotel(hotel)
        setLoading(true)
        api.then(res => {
            if (res.status !== 200) {
                toast.error("Failed to add hotel please try again.", {
                    autoClose: 5000,
                    pauseOnHover: true
                })
                return
            }
            
            props.callBack()
            toast.success(`Hotel ${isUpdate ? 'Updated' : 'Added'} successfully!`, {
                autoClose: 5000,
                pauseOnHover: true
            })
            setLoading(false)
            props.setHotelModal(false)
            
        }).catch(err => {
            
        })
    }

    useEffect(() => {
        
        if (props.hotel.HotelId) {
            setHotel({...hotel, hotelId : props?.hotel.HotelId})
            setIsUpdate(true)
        } else {
            setIsUpdate(false)
        }
    }, [props])

    return (
        <ModalContainer>
            <ModalBox className="modal-box">
                {!loading ? (
                    <>
                        <CloseIcon className="close-icon" onClick={() => props.setHotelModal(false)} />
                        <ModalTitle>{props.title}</ModalTitle>
                        <ImageUpload imageUrl={hotel.image} setImageURL={(val) => setHotel({ ...hotel, image: val })} single={true} />

                        <form onSubmit={addNewHotel}>
                            <Input required="true" style={{ marginBottom: '16px' }}
                                value={hotel.name} onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
                                placeholder="Hotel name">
                            </Input>

                            <TextArea required="true" style={{ marginBottom: '16px' }}
                                value={hotel.description} onChange={(e) => setHotel({ ...hotel, description: e.target.value })}
                                placeholder="Hotel description"></TextArea>

                            <Input required="true" style={{ marginBottom: '16px' }}
                                value={hotel.location} onChange={(e) => setHotel({ ...hotel, location: e.target.value })}
                                placeholder="Location"></Input>

                            <Input required="true" style={{ marginBottom: '16px' }}
                                value={hotel.totalRooms} onChange={(e) => setHotel({ ...hotel, totalRooms: Number(e.target.value) })}
                                placeholder="Total Rooms"></Input>

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

export default HotelModal
