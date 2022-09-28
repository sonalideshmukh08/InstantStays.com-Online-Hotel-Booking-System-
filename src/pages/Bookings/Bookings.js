import React, { useEffect, useState } from 'react'
import { PageContainer } from '../../components/GlobalStyles/PageStyles'
import BookingsList from './BookingsList'
import PageLoader from "../../components/Loaders/PageLoader.js"
import { getBookings } from '../../services/BookingService'

const Bookings = (props) => {
    const [modal, setModal] = useState({
        state: false,
        title: '',
        param: null,
        action: ''
    })
    const [loading, setLoading] = useState(false)
    const [bookings, setBookings] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        setLoading(true)
        if (props.filter && props?.filter === 'hotel') {
            getBookings(props.hotel.HotelId, 0).then(result => {
                setLoading(false)
                setBookings(result.data)
            })
        } else {
            getBookings(0, user.id).then(result => {
                setLoading(false)
                setBookings(result.data)
            })
        }
    }, [])
    let style = {}
    if (props.filter === 'hotel') {
            style = {
                marginTop:'0px',
                padding:'0px'
            }
    } 
    
    if (loading) return <PageLoader />
    return (
        <PageContainer style={style}>
            <BookingsList
                bookings={bookings}
                setModal={setModal}
                modal={modal} />
        </PageContainer>
    )
}

export default Bookings
