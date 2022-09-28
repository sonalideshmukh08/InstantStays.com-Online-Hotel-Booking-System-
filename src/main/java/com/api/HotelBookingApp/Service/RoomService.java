package com.api.HotelBookingApp.Service;

import com.api.HotelBookingApp.Model.AddRoom;

public interface RoomService {

	Object addRoom(AddRoom param) throws Exception;
	Object getRooms(Integer hotelId, Integer userId) throws Exception;
	Object updateRoom(AddRoom param, Integer roomId) throws Exception;
	Object deleteRoom(Integer roomId) throws Exception;

}
