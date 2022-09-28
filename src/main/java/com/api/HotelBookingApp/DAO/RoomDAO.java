package com.api.HotelBookingApp.DAO;

import com.api.HotelBookingApp.Model.AddHotel;
import com.api.HotelBookingApp.Model.AddRoom;

public interface RoomDAO {

	Object addRoom(AddRoom param) throws Exception;
	Object getRooms(Integer hotelId, Integer userId) throws Exception;
	Object updateRoom(AddRoom param, Integer roomId) throws Exception;
	Object deleteRoom(Integer roomId) throws Exception;

}
