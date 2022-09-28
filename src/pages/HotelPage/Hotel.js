import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import PageError from "../../components/Error/PageError";
import { PageContainer } from "../../components/GlobalStyles/PageStyles";
import PageLoader from "../../components/Loaders/PageLoader";
import { getHotelById } from "../../services/HotelService";
import { GlobalContext } from "../../utils/Context";
import HotelDetails from "./HotelDetails";

const Hotel = () => {
    const { id } = useParams();
    const location = useLocation()
    const { loading, error } = {}
    const [hotel, setHotel] = useState()
    useEffect(() => {
        getHotelById(id).then(res => {
            setHotel(res.data[0])
        })
    }, [loading])

    if (loading) return <PageLoader />
    if (error) return <PageError error={error} />
    // if(!location.state) return <PageError error={{message: 'Booking info not found.'}} />

    return (
        <PageContainer style={{maxWidth: "1200px", marginLeft: "auto", marginRight: "auto"}}>
            {hotel?.HotelId && <HotelDetails hotel={hotel} params={location.state}/>}
        </PageContainer>
    );
};

export default Hotel;
