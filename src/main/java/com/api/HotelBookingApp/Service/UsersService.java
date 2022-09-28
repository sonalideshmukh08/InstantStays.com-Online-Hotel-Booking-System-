package com.api.HotelBookingApp.Service;

import com.api.HotelBookingApp.Model.ForgotPassword;
import com.api.HotelBookingApp.Model.UpdateUser;
import com.api.HotelBookingApp.Model.Users;

public interface UsersService {

	Object getUsers(Users param) throws Exception;
	Object getLoggedUser(String email, String pwd, Boolean isManager) throws Exception;
	Object updateUser(UpdateUser param) throws Exception;
	Object forgotPassword(ForgotPassword param) throws Exception;
}
