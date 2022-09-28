package com.api.HotelBookingApp.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.HotelBookingApp.DAO.HotelDAO;
import com.api.HotelBookingApp.Model.AddHotel;
import com.api.HotelBookingApp.Model.UpdateHotel;
import com.api.HotelBookingApp.Service.HotelService;

@Service
public class HotelServiceImpl implements HotelService {

	@Autowired
	HotelDAO hotelDao;
	
	@Override
	public Object addHotel(AddHotel param) throws Exception {
		return hotelDao.addHotel(param);
	}

	@Override
	public Object getHotel(Integer userId) throws Exception {
		return hotelDao.getHotel(userId);
	}

	@Override
	public Object updateHotel(UpdateHotel param) throws Exception {
		return hotelDao.updateHotel(param);
	}

	@Override
	public Object searchHotels(String query) throws Exception {
		return hotelDao.searchHotels(query);
	}

	@Override
	public Object getHotelById(Integer hotelId) throws Exception {
		return hotelDao.getHotelById(hotelId);
	}

}
