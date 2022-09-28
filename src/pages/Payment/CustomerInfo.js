import React, { useEffect } from 'react'
import { FormButton, Text } from '../../components/GlobalStyles/PageStyles'
import styled from 'styled-components'
import { getAge } from '../../utils/utilFunctions'
import { useNavigate } from 'react-router-dom'
import { Layout } from './CommonStyles'


const CustomerInfo = (props) => {
    const { room, booking } = props
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        
    }, [room, booking])
    return (
        <>
            <Layout>
                <div className="section">
                    <Text>Customer Info</Text>
                    <Text className="small">
                        Name: <span>{user.name}</span>
                    </Text>
                    <Text className="small">
                        Email: <span>{user.email}</span>
                    </Text>
                    <Text className="small">
                        Total: <span>{booking.people.adults+booking.people.children} Persons</span>
                    </Text>
                </div>
                <div className="section">
                    <Text>Booking Info</Text>
                    <Text className="small">
                        Hotel: <span>{booking?.hotelDetails.Name}</span>
                    </Text>
                    <Text className="small">
                        Room: <span>{room?.Name}</span>
                    </Text>
                    <Text className="small">
                        Price : <span>Rs. {room?.Price}</span>
                    </Text>
                    <Text className="small">
                        Total Cost: <span>Rs. {room?.Price}</span>
                    </Text>
                </div>
            </Layout>
            <Layout className="buttons">
                <FormButton onClick={() => navigate(`/payment/${booking.hotel}/${room.RoomId}/1`, {state: booking})}>
                    Go Back
                </FormButton>
                <FormButton onClick={() => navigate(`/payment/${booking.hotel}/${room.RoomId}/2`, {state: booking})}>
                    Confirm
                </FormButton>
            </Layout>
        </>
    )
}

export default CustomerInfo
