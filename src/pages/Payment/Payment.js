import React, { useContext, useEffect } from 'react'
import { PageContainer } from '../../components/GlobalStyles/PageStyles'
import { GlobalContext } from '../../utils/Context'
import ProgressBar from './ProgressBar'
import CustomerInfo from './CustomerInfo'
import {useParams, useLocation, Navigate} from 'react-router-dom'
import PaymentScreen from './PaymentScreen'
import BookingConfirmed from './BookingConfirmed'
import PageLoader from '../../components/Loaders/PageLoader'
import PageError from '../../components/Error/PageError'

const Payment = () => {

    const { roomId, step} = useParams()
    const location = useLocation()

    const {data, loading, error} = {}

    if(loading) return <PageLoader />
    if (error) return <PageError error={error} />

    if(!location.state) return <Navigate to="/"/>

    const user = JSON.parse(localStorage.getItem('user'))
    const bookingData = location.state
    const room =  bookingData.roomDetails
    const bookingExists = bookingData.id !== undefined

    if(!bookingData) return <PageError error={{message: 'Booking info not available.'}}></PageError>

    return (
        <PageContainer>
            <ProgressBar step={step}/>
            {step === '1' && (<CustomerInfo user={user} room={room} booking={bookingData} bookingExists={bookingExists}/>)}
            {step === '2' && (<PaymentScreen user={user} room={room} booking={bookingData} bookingExists={bookingExists}/>)}
            {step === '3' && (<BookingConfirmed user={user} room={room} booking={bookingData} bookingExists={bookingExists}/>)}
        </PageContainer>
    )
}

export default Payment
