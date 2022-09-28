package com.api.HotelBookingApp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.HotelBookingApp.Model.AddHotel;
import com.api.HotelBookingApp.Model.Feedback;
import com.api.HotelBookingApp.Model.Response;
import com.api.HotelBookingApp.Service.FeedbackService;

@RestController
@CrossOrigin(origins = "*")
public class FeedbackController {
	
	@Autowired 
	FeedbackService feedbackService;
	
	@RequestMapping(value = "/addFeedback", method = RequestMethod.POST)
	public ResponseEntity<Object> addFeedback(@RequestBody Feedback param) throws Exception {
		try {
			Object res = feedbackService.addFeedback(param);
			return Response.generateResponse("Feedback added successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/getFeedback", method = RequestMethod.GET)
	public Object getFeedback(Integer userId, Integer hotelId) throws Exception {
		try {
			Object res = feedbackService.getFeedback(userId, hotelId);
			return Response.generateResponse("success", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	
}
