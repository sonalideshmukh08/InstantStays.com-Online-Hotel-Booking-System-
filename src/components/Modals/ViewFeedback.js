import React from 'react'
import { ModalBox, ModalContainer, ModalTitle } from '../GlobalStyles/ModalStyles'
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';
import "./animation.css"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { ActionsContainer, Item, Text } from '../GlobalStyles/TableStyles';
import { getFeedback } from '../../services/FeedbackService';

const ViewFeedback = (props) => {

    const [feedbacks, setFeedbacks] = React.useState([])

    React.useEffect(() => {
        getFeedback(props.hotel.HotelId, 0).then(res => {
            setFeedbacks(res.data)
        })
    }, [])

    return (
        <ModalContainer>
            <ModalBox className="modal-box" style={{width: '1200px'}}>
                <CloseIcon className="close-icon"
                    onClick={() => props.setfeedbackModal({ state: false, title: '' })} />
                <ModalTitle>{props.title}</ModalTitle> 
                
                {feedbacks.map(f => {
                    return <>
                        <Item style={{ gridTemplateColumns: `repeat(2, 1fr)` }}>
                            <Tippy interactive={true} content={f.Name} placement="bottom"><Text>{f.Name}</Text></Tippy>
                            <Tippy interactive={true} content={f.feedback} placement="bottom"><Text>{f.feedback}</Text></Tippy>
                        </Item>
                    </>
                })}
            </ModalBox>
        </ModalContainer>
    )
}

export default ViewFeedback
