import React, { useState } from 'react'
import { FormButton, Text } from '../../components/GlobalStyles/PageStyles'
import { getAge } from '../../utils/utilFunctions'
import { useNavigate } from 'react-router-dom'
import { Layout } from './CommonStyles'
import { toast } from 'react-toastify'
import Loader from "../../components/Loaders/Loader"
import StripeCheckout from 'react-stripe-checkout';
import { addBooking } from '../../services/BookingService'

const PaymentScreen = (props) => {
    const { user, room, booking, bookingExists } = props
    
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    
    const onToken = (token) => {
        
        const obj = {
            checkIn : booking.from,
	        checkOut : booking.to,
	        bookedBy : booking.bookedBy,
	        amount : room.Price + 20,
	        childs : booking.people.children,
	        adults : booking.people.adults,
	        roomId : booking.room,
	        hotelId : booking.hotel,
	        clientIP : token.client_ip,
	        paymentId : token.id,
	        bookingDateTime : new Date().toDateString(),  
        }
        addBooking(obj).then(res => {
            if (res.status !== 200) {
                toast.error("Failed to book the hotel please try again.", {
                    autoClose: 5000,
                    pauseOnHover: true
                })
                return 
            } 
            navigate(`/payment/${booking.hotel}/${booking.room}/3`, { state: booking })
        })
        
    }


    return (
        <>
            <Layout>
                {!loading ? (
                    <>
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
                                Room: <span>{room.Name}</span>
                            </Text>
                            <Text className="small">
                                Price: <span>Rs. {room.Price}</span>
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
                                Total Cost: 
                                <span>Rs. {room.Price + 20}</span>
                            </Text>
                            <StripeCheckout
                                token={onToken}
                                stripeKey="pk_test_51Hr13fE7BvSkBO4prE35EeVzyGVKfQCPfpfcOZZkSLfa4jfONQeEOrd9A4wFIERlRXuVpBu3NYVm1YwCrFfY0gs400dAaCrTp0"
                                name=""
                                currency='USD'
                                amount={(room.Price + 20) * 100}
                            />
                        </div>
                    </>
                ) : <Loader />}

            </Layout>
            <Layout className="buttons">
                <FormButton onClick={() => navigate(`/payment/${room.hotel.id}/${room.id}/1`, { state: booking })}>
                    Go Back
                </FormButton>
            </Layout>
        </>
    )
}

export default PaymentScreen
