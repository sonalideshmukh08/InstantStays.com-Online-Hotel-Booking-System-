import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Image, Text } from '../../components/GlobalStyles/PageStyles'
import HotelIMG from "../../assets/hotel.png";
import RoomDetails from './RoomDetails';
import PageLoader from "../../components/Loaders/PageLoader"
import ComponentError from '../../components/Error/ComponentError';
import { getRooms } from '../../services/RoomService.';
import { getFeedback } from '../../services/FeedbackService';
import { getBookings } from '../../services/BookingService';

const Details = styled.div`
    border: 0.5px solid #d8d8d8;
    padding: 16px
`

const HotelDetails = (props) => {

    const { hotel, params } = props
    const [rooms, setRooms] = useState([])
    const [feedbacks, setFeedbacks] = useState([])
    const { data, loading, error } = {}
    const ratings = 5

    useEffect(() => {
        getRooms(hotel.HotelId, hotel.managerId).then(res => {
            const temp = []
            getBookings(hotel.HotelId, 0).then(res1 => {
                res.data.forEach(r => {
                    let isFound = false
                    const upcomingBookings = res1.data.filter(x => new Date(x.CheckIn).getTime() >= new Date().getTime())
                    upcomingBookings.forEach(b => {
                        if (r.RoomId === b.RoomId) {
                            isFound = true
                        }
                    })
                    if (!isFound) {
                        temp.push(r)
                    }
                })
                setRooms(temp)
            })
        })
        getFeedback(hotel.HotelId, 0).then(res => {
            setFeedbacks(res.data)
        })
    }, [props])

    if (loading) return <PageLoader />
    if (error) return <ComponentError error={error} />
    return (
        <div>
            <div style={{ display: 'flex', width: '100%' }}>
                <Image style={{ backgroundImage: `url(${hotel.Image ? hotel.Image : HotelIMG})`, height: "300px", width: "60%", }} />
                <Details style={{ width: '40%', marginLeft: '20px' }}>
                    <Text className="small">Location: <span>{hotel.Location}</span></Text>
                    <Text className="small">Ratings: <span className="highlight">{hotel.Rating}</span></Text>
                    <Text className="small">Price: <span>1500-5960/-</span></Text>
                </Details>
            </div>
            <Details style={{ marginTop: '20px' }}>
                <Text className="clip">{hotel.Name}</Text>
                <Text className="clamp small" style={{ marginTop: '12px' }}>{hotel.Description}</Text>
            </Details>
            <Details style={{ marginTop: '20px' }}>
                <Text className="clip">Manager Details</Text>
                <Text className="clamp small" style={{ marginTop: '12px' }}>{hotel.managerName}</Text>
                <Text className="clamp small" style={{ marginTop: '12px' }}>
                    Contact: <span>{hotel.managerEmail}</span>
                </Text>
            </Details>
            <Details style={{ marginTop: '20px' }}>

                <Text className="clip">Feedbacks</Text>
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {feedbacks.map(f => {
                        return <>
                            <Text className="small" style={{ marginTop: '12px' }}><b>{f.Name}</b> : {f.feedback}</Text> 
                        </>
                    })}
                </div>
            </Details>
            <Text style={{ marginTop: '20px' }}>Rooms</Text>
            <div style={{ marginTop: '20px' }}>
                {rooms.map(r => (
                    <RoomDetails room={r}
                        hotel={hotel}
                        images={[r.Image1, r.Image2, r.Image3]}
                        params={params} />
                ))}
            </div>
        </div>
    )
}

export default HotelDetails
