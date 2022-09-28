package com.api.HotelBookingApp.DAO;

import com.api.HotelBookingApp.Model.AddHotel;
import com.api.HotelBookingApp.Model.AddRoom;
import com.api.HotelBookingApp.Model.UpdateHotel;

public interface HotelDAO {

	Object addHotel(AddHotel param) throws Exception;
	Object getHotel(Integer userId) throws Exception;
	Object updateHotel(UpdateHotel param) throws Exception;
	Object searchHotels(String query) throws Exception;
	Object getHotelById(Integer hotelId) throws Exception;

}
