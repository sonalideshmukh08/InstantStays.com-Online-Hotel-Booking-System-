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

import com.api.HotelBookingApp.Model.ForgotPassword;
import com.api.HotelBookingApp.Model.LoggedInUser;
import com.api.HotelBookingApp.Model.Response;
import com.api.HotelBookingApp.Model.UpdateUser;
import com.api.HotelBookingApp.Model.Users;
import com.api.HotelBookingApp.Service.UsersService;

@RestController
@CrossOrigin(origins = "*")
public class UsersController {
	
	@Autowired
	UsersService userService;
	
	@RequestMapping(value = "/createUser", method = RequestMethod.POST)
	public ResponseEntity<Object> getUser(@RequestBody Users param) throws Exception {
		try {
			Object res = userService.getUsers(param);
			return Response.generateResponse("User created successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/loggedInUser", method = RequestMethod.POST)
	public Object getLoggedInUser(@RequestBody LoggedInUser param) throws Exception {
		try {
			Object res = userService.getLoggedUser(param.getEmail(), param.getPwd(), param.getIsManager());
			return Response.generateResponse("success", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/updateUser", method = RequestMethod.POST)
	public ResponseEntity<Object> updateUser(@RequestBody UpdateUser param) throws Exception {
		try {
			Object res = userService.updateUser(param);
			return Response.generateResponse("User updated successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/forgotPassword", method = RequestMethod.POST)
	public Object forgotPassword(@RequestBody ForgotPassword param) throws Exception {
		try {
			Object res = userService.forgotPassword(param);
			return Response.generateResponse("success", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
}
