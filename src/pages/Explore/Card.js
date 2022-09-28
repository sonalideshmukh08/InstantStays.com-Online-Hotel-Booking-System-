import React from 'react'
import styled from 'styled-components'
import HotelIMG from "../../assets/hotel.png"
import { Image, Text } from '../../components/GlobalStyles/PageStyles'
import "./card.css"
import {useNavigate} from 'react-router-dom'

const CardContainer = styled.div`
    height: 292px;
    padding: 16px;
    border-radius: 6px;
    background: white;
    box-shadow: 0 0 10px #bbbbbb;
    margin-bottom: 20px;
    display: flex;
    position: relative;
    cursor: pointer;
    :hover .action-slider{
        width: 280px;
        padding: 10px;
        border-radius: 6px;
    }
    :hover .details{
        width: calc(100% - 526px);
    }
`

const HotelDetails = styled.div`
    padding: 0 16px;
    border-radius: 6px;
    margin-bottom: 20px;
    transition: 0.5s;
`

const Card = (props) => {
    const navigate = useNavigate()
    const {data, params} = props
    const hotel = data

    const searchData = {
        from: params.from,
        to: params.to,
        people: params.people,
    }

    return (
        <CardContainer>
            <div className="action-slider" onClick={() => navigate(`/hotel/${hotel.HotelId}`, {state: searchData})}>
                Book Room
            </div>
            <Image style={{ backgroundImage: `url(${hotel.Image ? hotel.Image : HotelIMG})`, minWidth: '260px', height: '260px' }} />
            <HotelDetails className="details">
                <Text className="clip">{hotel.Name}</Text>
                <Text className="small">{hotel.Location}</Text>
                <Text className="small clamp">{hotel.Description}</Text>
                <Text className="small"> <span className="highlight">{hotel.Rating}</span> Ratings</Text>
                <Text className="small">Starting from Rs. 500</Text>
                <Text className="small">{data.TotalRooms} Total Rooms</Text>
            </HotelDetails>
        </CardContainer>
    )
}

export default Card
