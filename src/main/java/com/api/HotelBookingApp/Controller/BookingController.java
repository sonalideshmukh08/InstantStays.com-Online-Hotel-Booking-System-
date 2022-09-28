package com.api.HotelBookingApp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.HotelBookingApp.Model.Booking;
import com.api.HotelBookingApp.Model.Response;
import com.api.HotelBookingApp.Service.BookingService;

@RestController
@CrossOrigin(origins = "*")
public class BookingController {
	
	@Autowired
	BookingService bookingService;
	
	@RequestMapping(value = "/addBooking", method = RequestMethod.POST)
	public ResponseEntity<Object> getUser(@RequestBody Booking param) throws Exception {
		try {
			Object res = bookingService.addBooking(param);
			return Response.generateResponse("Booking created successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/getBookings", method = RequestMethod.GET)
	public ResponseEntity<Object> getUser(Integer hotelId, Integer userId) throws Exception {
		try {
			Object res = bookingService.getBookings(hotelId, userId);
			return Response.generateResponse("success", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/udpateBooking", method = RequestMethod.GET)
	public ResponseEntity<Object> updateBooking(Integer bookingId, String status) throws Exception {
		try {
			Object res = bookingService.updateBooking(bookingId, status);
			return Response.generateResponse("Booking updated successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
}