import React, { useEffect } from 'react'
import { FormButton, Text } from '../../components/GlobalStyles/PageStyles'
import styled from 'styled-components'
import { getAge } from '../../utils/utilFunctions'
import { useNavigate } from 'react-router-dom'
import { Confirmation, Layout } from './CommonStyles'

const BookingConfirmed = (props) => {
    const { user, room, booking } = props
    
    const navigate = useNavigate()

    useEffect(() => {
        
    }, [room, user, booking])

    return (
        <>
            <Confirmation>
                <img src="https://img.icons8.com/fluency/48/000000/ok.png" alt="/"
                    style={{ marginRight: '10px' }} />
                <Text style={{ margin: '0' }}>Booking Confirmed</Text>
            </Confirmation>
            <Layout style={{ marginTop: '20px' }}>
                <div className="section">
                    <Text>Customer Info</Text>
                    <Text className="small">
                        Name: <span>{user.name}</span>
                    </Text>
                    <Text className="small">
                        Email: <span>{user.email}</span>
                    </Text>
                    <Text className="small">
                        Total: <span>{booking.people.adults + booking.people.children}</span>
                    </Text>
                    <Text style={{ marginTop: '20px' }}>Booking Info</Text>
                    <Text className="small">
                        Hotel: <span>{booking.hotelDetails.Name}</span>
                    </Text>
                    <Text className="small">
                        Room: <span>{booking.roomDetails.Name}</span>
                    </Text>
                    <Text className="small">
                        Price : <span>Rs. {room.Price}</span>
                    </Text>
                    <Text className="small">
                        Total Cost: <span>Rs. {room.Price}</span>
                    </Text>
                </div>
                <div className="section">
                    <Text>Payment Info</Text>
                    <Text className="small">
                        Room(s) Cost: <span>Rs. {room.Price}</span>
                    </Text>
                    <Text className="small">
                        Tax: <span>Rs. {20}</span>
                    </Text>
                    <Text className="small">
                        Total Cost: <span>Rs. {room.Price + 20}</span>
                    </Text>
                    <Text className="small">
                        Payment Status: <span>Paid</span>
                    </Text>
                </div>
            </Layout>
            <Layout className="buttons">
                <FormButton onClick={() => navigate(`/bookings`)}
                    style={{ marginLeft: 'auto' }}>
                    Your Bookings
                </FormButton>
            </Layout>
        </>
    )
}

export default BookingConfirmed
