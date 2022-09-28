import React, { useEffect, useState } from 'react'
import Loader from '../../../components/Loaders/Loader'
import styled from 'styled-components'
import ComponentError from '../../../components/Error/ComponentError'
import { getBookings } from '../../../services/BookingService'
import { getDate } from '../../../utils/utilFunctions'
import star from '../../../assets/star.png';
const Container = styled.div`
    height: 100%
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 10px;;
    height: 100%
`

const Block = styled.div`
    height: 100%;
    padding: 16px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    h2{
        margin-bottom: 10px;
    }
`

const Stat = (props) => {
    const { hotel } = props
    const [bookings, setBookings] = useState([])
    
    const getRandomColor = () => {
        const colors = ['#F1C40F', '#E4CDA7', '#F78812', '#F5C6A5', '#FAAD80', '#FF8303']
        let ridx = Math.floor(Math.random() * colors.length)
        return colors[ridx];
    }

    const getTotalEarnings = () => {
        let total = 0;
        bookings.forEach(x => {
            total += x.Amount
        })
        return total
    }
    
    const getTodayBookings = () => {
        const fData = bookings.filter(x => getDate(x.CheckIn) === getDate(new Date()))
        return fData.length
    }
    
    useEffect(() => {
        if (props.hotel.HotelId) {
            getBookings(props.hotel.HotelId).then(res => {
                setBookings(res.data)
            })
        }
    }, [props.hotel])
    return (
        <Container>
            <Grid>
                <Block style={{ background: `${getRandomColor()}` }}>
                    <h2>Rs. {getTotalEarnings()}</h2>
                    <p>Total Earnings</p>
                </Block>
                <Block style={{ background: `${getRandomColor()}` }}
                onClick={() => props.setBookingsModal({state: true, title: 'Hotel Bookings', param: bookings})}>
                    <h2>{bookings.length}</h2>
                    <p>Total Bookings</p>
                    <p>(Click To See Bookings)</p>
                </Block>
                <Block style={{ background: `${getRandomColor()}` }}>
                    <h2>{props?.rooms?.length}</h2>
                    <p>Total Rooms</p>
                </Block>
                <Block style={{ background: `${getRandomColor()}` }}>
                    <h2>{getTodayBookings()}</h2>
                    <p>Bookings For Today</p>
                </Block>
                <Block style={{ background: `${getRandomColor()}` }}
                onClick={() => props.setFeedbackModal({state: true, title: 'Feedbacks', param: props.hotel})}>
                    <h2>{props.hotel.Rating}&nbsp;<img src={star} /></h2>
                    <p>Rating</p>
                    <p>(Click To See Feedbacks)</p>
                </Block>
            </Grid>
        </Container>
    )
}

export default Stat
