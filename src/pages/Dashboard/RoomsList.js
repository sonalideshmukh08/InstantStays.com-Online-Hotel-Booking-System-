import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Text } from '../../components/GlobalStyles/PageStyles'
import Loader from '../../components/Loaders/Loader'
import SearchBar from '../../components/SearchBar/SearchBar'
import ListHeader from './ListHeader'
import ListItem from "./ListItem"

const Container = styled.div`
    margin-top: 20px;

`

const RoomsList = (props) => {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [filteredData, setFilteredData] = useState([])
    const listItems = ['Room Name', 'Description', "Price", 'Occupancy', 'Specification', 'Actions']
    const rooms = props.rooms

    useEffect(() => {
        
        if (query.length) {
            const d = rooms.filter(x => x.Name.toLowerCase().includes(query.toLowerCase()))
            setFilteredData(d)
        }
        else
            setFilteredData([])
    }, [query])

    return (
        <Container>
            <SearchBar
                query={query}
                setQuery={setQuery}
                placeholder="Search rooms by names..." />

            <ListHeader list={listItems} />

            {filteredData.length ? 
            filteredData?.map(room =>
                <ListItem key={room.RoomId} data={room}
                    callBack={props.callBack}
                    setRoomModal={props.setRoomModal}
                    setLoading={setLoading} />) : 
            rooms?.map(room =>
                <ListItem key={room.RoomId} data={room}
                    callBack={props.callBack}
                    setRoomModal={props.setRoomModal}
                    setLoading={setLoading} />)}

            {loading && <Loader />}
            {rooms.length === 0 &&
                <Text className="small" style={{ textAlign: 'center', marginTop: '20px' }}>No Rooms</Text>}
        </Container>
    )
}

export default RoomsList
