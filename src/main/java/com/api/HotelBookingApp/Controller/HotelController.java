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

import com.api.HotelBookingApp.Model.AddHotel;
import com.api.HotelBookingApp.Model.Response;
import com.api.HotelBookingApp.Model.UpdateHotel;
import com.api.HotelBookingApp.Service.HotelService;

@RestController
@CrossOrigin(origins = "*")
public class HotelController {
	
	@Autowired
	HotelService hotelService;
	
	@RequestMapping(value = "/addHotel", method = RequestMethod.POST)
	public ResponseEntity<Object> getUser(@RequestBody AddHotel param) throws Exception {
		try {
			Object res = hotelService.addHotel(param);
			return Response.generateResponse("User created successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/getHotel", method = RequestMethod.GET)
	public Object getHotel(@RequestParam Integer userId) throws Exception {
		try {
			Object res = hotelService.getHotel(userId);
			return Response.generateResponse("success", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/updateHotel", method = RequestMethod.POST)
	public ResponseEntity<Object> updateHotel(@RequestBody UpdateHotel param) throws Exception {
		try {
			Object res = hotelService.updateHotel(param);
			return Response.generateResponse("Hotel updated successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/searchHotels", method = RequestMethod.GET)
	public Object getHotel(String query) throws Exception {
		try {
			Object res = hotelService.searchHotels(query);
			return Response.generateResponse("success", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}

	@RequestMapping(value = "/getHotelById", method = RequestMethod.GET)
	public Object getHotelById(Integer hotelId) throws Exception {
		try {
			Object res = hotelService.getHotelById(hotelId);
			return Response.generateResponse("success", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
}
