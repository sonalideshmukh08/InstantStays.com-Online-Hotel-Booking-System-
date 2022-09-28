package com.api.HotelBookingApp.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.HotelBookingApp.DAO.BookingDAO;
import com.api.HotelBookingApp.DAO.HotelDAO;
import com.api.HotelBookingApp.Model.AddHotel;
import com.api.HotelBookingApp.Model.Booking;
import com.api.HotelBookingApp.Model.UpdateHotel;
import com.api.HotelBookingApp.Service.BookingService;
import com.api.HotelBookingApp.Service.HotelService;

@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	BookingDAO bookingDao;

	@Override
	public Object addBooking(Booking param) throws Exception {
		return bookingDao.addBooking(param);
	}

	@Override
	public Object getBookings(Integer hotelId, Integer userId) throws Exception {
		return bookingDao.getBookings(hotelId, userId);
	}

	@Override
	public Object updateBooking(Integer bookingId, String status) throws Exception {
		return bookingDao.updateBooking(bookingId, status);
	}
	

}
