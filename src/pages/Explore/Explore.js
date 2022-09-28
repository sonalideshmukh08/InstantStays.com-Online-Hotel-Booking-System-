import React, { useState, useEffect } from 'react'
import { PageContainer, Text } from '../../components/GlobalStyles/PageStyles'
import { GlobalContext } from '../../utils/Context'
import styled from "styled-components"
import LeftSidebar from '../../components/Sidebars/LeftSidebar'
import Card from "./Card"
import { useParams, useLocation } from 'react-router'
import PageLoader from '../../components/Loaders/PageLoader'
import PageError from '../../components/Error/PageError'
import ComponentError from '../../components/Error/ComponentError'
import { searchHotel } from '../../services/HotelService'

const ResultContainer = styled.div`
    width: calc(100vw - 510px);
    margin-left: auto
`

const Explore = (props) => {


    const params = useParams()
    const location = useLocation()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [searchHotels, setSearchHotels] = useState([])
    useEffect(() => {
        searchHotel(location.state.location).then(res => {
            setSearchHotels(res.data)
        })
    }, [])

    if (loading) return <PageLoader />
    return (
        <PageContainer>
            <LeftSidebar data={location.state} />

            <ResultContainer>
                {searchHotels.length ? searchHotels.map(s =>
                    <Card data={s} params={location.state} />
                ) : <Text style={{ color: 'grey', textAlign: 'center' }}>No Hotels Found</Text>}
                
            </ResultContainer>
        </PageContainer>
    )
}

export default Explore
