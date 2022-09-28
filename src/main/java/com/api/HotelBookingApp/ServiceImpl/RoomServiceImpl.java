package com.api.HotelBookingApp.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.HotelBookingApp.DAO.HotelDAO;
import com.api.HotelBookingApp.DAO.RoomDAO;
import com.api.HotelBookingApp.Model.AddHotel;
import com.api.HotelBookingApp.Model.AddRoom;
import com.api.HotelBookingApp.Service.HotelService;
import com.api.HotelBookingApp.Service.RoomService;

@Service
public class RoomServiceImpl implements RoomService {

	@Autowired
	RoomDAO roomDao;

	@Override
	public Object addRoom(AddRoom param) throws Exception {
		return roomDao.addRoom(param);
	}

	@Override
	public Object getRooms(Integer hotelId, Integer userId) throws Exception {
		return roomDao.getRooms(hotelId, userId);
	}

	@Override
	public Object updateRoom(AddRoom param, Integer roomId) throws Exception {
		return roomDao.updateRoom(param, roomId);
	}

	@Override
	public Object deleteRoom(Integer roomId) throws Exception {
		return roomDao.deleteRoom(roomId);
	}

}
