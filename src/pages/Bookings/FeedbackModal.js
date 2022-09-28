import React, { useEffect } from 'react'
import { FormButton, TextArea } from '../../components/GlobalStyles/FormStyles'
import { ModalBox, ModalContainer } from '../../components/GlobalStyles/ModalStyles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/Modals/animation.css'
import Rating from 'react-rating';
import star from '../../assets/star.png';
import eStar from '../../assets/emptyStar.png';
import { addFeedback, getFeedback } from '../../services/FeedbackService';
import CloseIcon from '@mui/icons-material/Close';
import { updateHotel } from '../../services/HotelService';
const FeedbackModal = ({ hotelId, handleModal }) => {

    const user = JSON.parse(localStorage.getItem('user'))
    const [isDisabled, setDisabled] = React.useState(false)
    const [rating, setRating] = React.useState(0)

    const getFeedbacks = () => {
        getFeedback(hotelId, user.id).then(res => {
            if (res?.data?.length) {
                setDisabled(true)
                document.getElementById("feedback").value = res.data[0].Feedback        
            }
        })
    }

    const onAddFeedback = () => {
        if (!isDisabled) {
            const reqObj = {
                hotelId : hotelId ? hotelId : 0,
                userId : user.id,
                feedback : document.getElementById("feedback").value
            }
            addFeedback(reqObj).then(res => {
                if (res.status === 200) {
                    toast.success("Feedback added successfully!", {
                        autoClose: 5000,
                        pauseOnHover: true
                    })
                } else {
                    toast.error("Failed to add feedback", {
                        autoClose: 5000,
                        pauseOnHover: true
                    })
                }
            })
        }
        if (rating !== 0) {
            updateHotel({hotelId: hotelId, rating: rating}).then(res => {
            })
        }
    }

    useEffect(() => {
        getFeedbacks()
    }, [hotelId])

    return (
        <ModalContainer>
            <ModalBox className="modal-box">
                <CloseIcon className="close-icon" onClick={handleModal} />
                <TextArea required="true" style={{ marginBottom: '16px', marginTop: "10%" }}
                    placeholder="Give you feedback" id="feedback" disabled={isDisabled}></TextArea>
                <div style={{justifyContent:"center", "display": "flex"}}>
                    {!isDisabled ? <Rating
                        initialRating={0}
                        emptySymbol={<img alt="rat" src={eStar} className="icon" />}
                        fullSymbol={<img alt="rat" src={star} className="icon" />}
                        onChange={(e) => { setRating(e) }}
                    /> : <h3>You've already rated this hotel.</h3>}
                </div>
                {!isDisabled ? <FormButton style={{float:"right"}} onClick={onAddFeedback} >Submit</FormButton> : null}
            </ModalBox>
        </ModalContainer>
    )
}

export default FeedbackModal
