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
import com.api.HotelBookingApp.Model.AddRoom;
import com.api.HotelBookingApp.Model.Response;
import com.api.HotelBookingApp.Service.HotelService;
import com.api.HotelBookingApp.Service.RoomService;

@RestController
@CrossOrigin(origins = "*")
public class RoomController {
	
	@Autowired
	RoomService roomService;
	
	@RequestMapping(value = "/addRoom", method = RequestMethod.POST)
	public ResponseEntity<Object> getUser(@RequestBody AddRoom param) throws Exception {
		try {
			Object res = roomService.addRoom(param);
			return Response.generateResponse("Room added successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	} 
	
	@RequestMapping(value = "/getRooms", method = RequestMethod.GET)
	public ResponseEntity<Object> getUser(Integer hotelId, Integer userId) throws Exception {
		try {
			Object res = roomService.getRooms(hotelId, userId);
			return Response.generateResponse("Room added successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	} 
	
	@RequestMapping(value = "/updateRoom", method = RequestMethod.POST)
	public ResponseEntity<Object> updateRoom(@RequestBody AddRoom param, Integer roomId) throws Exception {
		try {
			Object res = roomService.updateRoom(param, roomId);
			return Response.generateResponse("Room updated successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	} 
	
	@RequestMapping(value = "/deleteRoom", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deleteRoom(Integer roomId) throws Exception {
		try {
			Object res = roomService.deleteRoom(roomId);
			return Response.generateResponse("Room deleted successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	} 
	
}
