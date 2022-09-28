import React, { useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../../components/SearchBar/SearchBar'
import ListHeader from './ListHeader'
import ListItem from "./ListItem"
import { Text } from "../../components/GlobalStyles/PageStyles"
import Loader from '../../components/Loaders/Loader'

const Container = styled.div`
    margin-top: 20px;

`

const BookingsList = (props) => {

    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const listItems = ['Hotel Name', 'From', 'To', 'Booked On', 'Amount', 'Payment Status', 'Status', 'Actions']

    let upcomingBookings = props.bookings
    let oldBookings = props.bookings

    upcomingBookings = props.bookings.filter(x => new Date(x.CheckIn).getTime() >= new Date().getTime())
    oldBookings = props.bookings.filter(x => new Date(x.CheckIn).getTime() < new Date().getTime())
    oldBookings.map(x => {
        if (x.Status !== 'Cancelled')
            x.Status = 'Completed'
    })

    return (
        <Container>
            <SearchBar
                query={query}
                setQuery={setQuery}
                placeholder="Search bookings by hotel names..." />

            <Text style={{ fontSize: '20px', margin: '26px 0' }}>Upcoming Bookings</Text>
            <ListHeader list={listItems} />
            {!loading ? upcomingBookings.map(booking =>
                <ListItem key={booking.id}
                    type="upcomingBooking"
                    data={booking}
                    setLoading={setLoading}
                    loading={loading}
                    setModal={props.setModal} />
            ) : <Loader />}
            {upcomingBookings.length === 0 &&
                <Text className="small" style={{ textAlign: 'center', marginTop: '20px' }}>No Bookings</Text>}

            <br/>

            <Text style={{ fontSize: '20px', margin: '26px 0' }}>Old Bookings</Text>
            <ListHeader list={listItems} />
            {!loading ? oldBookings.map(booking =>
                <ListItem key={booking.id}
                    type="oldBooking"
                    data={booking}
                    setLoading={setLoading}
                    loading={loading}
                    setModal={props.setModal} />
            ) : <Loader />}
            {oldBookings.length === 0 &&
                <Text className="small" style={{ textAlign: 'center', marginTop: '20px' }}>No Bookings</Text>}
        </Container>
    )
}

export default BookingsList
