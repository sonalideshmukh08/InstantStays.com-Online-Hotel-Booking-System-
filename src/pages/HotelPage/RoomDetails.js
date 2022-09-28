import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FormButton, Image, SelectBox, Text } from '../../components/GlobalStyles/PageStyles'
import RoomIMG from "../../assets/hotel.png";
import { useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { detailsSettings } from '../../utils/carouselSettings';
import { toast } from 'react-toastify';

const CardContainer = styled.div`
    margin-top: 20px;
    background: #ffeedb;
    padding: 16px;
    border-radius: 6px;
`

const Details = styled.div`
    width: 40%;
    margin-left: 20px
`

const Features = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    align-items: center;
    grid-gap: 8px;
    p{
        text-align: center;
        padding: 6px 10px;
        border: 1px solid #cbcbcb;
        border-radius: 20px;
        margin: 0
    }
}
`

const SliderContainer = styled.div`
    width: 60%;
    padding: 16px
}
`

const RoomDetails = (props) => {
    
    const { room, params, images, hotel } = props
    const ratings = 5
    const navigate = useNavigate()
    const [roomsNum, setroomsNum] = useState(0)
    const user = JSON.parse(localStorage.getItem('user'))
    const handleBook = () => {
        const bookingData = {
            amount: 0,
            from: params.from,
            to: params.to,
            bookedBy: user.id,
            paid: true,
            people: params.people,
            room: room.RoomId,
            hotel: hotel.HotelId,
            roomDetails : room,
            hotelDetails : hotel
        }
        
        navigate(`/payment/${hotel.HotelId}/${room.RoomId}/1`, { state: bookingData })
    }

    return (
        <CardContainer style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', width: '100%' }}>
                {images.length === 0 ? (
                    <Image style={{ backgroundImage: `url(${RoomIMG})`, height: "300px", width: "60%", }} />
                ) : (
                    <SliderContainer>
                        <Slider {...detailsSettings}>
                            {images.map((img, i) => (
                                <div className="banners" key={`image${i}`}>
                                    <img src={img} alt="" />
                                </div>
                            ))}
                        </Slider>
                    </SliderContainer>
                )}

                <Details style={{ width: '40%', marginLeft: '20px' }}>
                    <Text className="clip">{room.Name}</Text>
                    <Text className="clamp small" style={{ marginTop: '12px' }}>{room.Description}</Text>
                    <Text className="small">Price: <span>{room.Price}/-</span></Text>
                    <FormButton onClick={handleBook}
                        style={{ display: 'initial', marginRight: '16px' }}>
                        Book Room
                    </FormButton>
                </Details>
            </div>
            <Features>
                {room?.Specification?.split(",").map(oth => {
                    return <Text className="small">{oth}</Text>
                })}
            </Features>

        </CardContainer>
    )
}

export default RoomDetails
