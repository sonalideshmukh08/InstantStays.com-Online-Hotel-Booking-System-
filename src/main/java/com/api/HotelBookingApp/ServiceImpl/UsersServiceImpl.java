package com.api.HotelBookingApp.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.HotelBookingApp.DAO.UsersDAO;
import com.api.HotelBookingApp.Model.ForgotPassword;
import com.api.HotelBookingApp.Model.UpdateUser;
import com.api.HotelBookingApp.Model.Users;
import com.api.HotelBookingApp.Service.UsersService;

@Service
public class UsersServiceImpl implements UsersService {

	@Autowired
	UsersDAO usersDao;
	
	@Override
	public Object getUsers(Users param) throws Exception {
		return usersDao.getUsers(param);
	}

	@Override
	public Object getLoggedUser(String email, String pwd, Boolean isManager) throws Exception {
		return usersDao.getLoggedInUser(email, pwd, isManager);
	}

	@Override
	public Object updateUser(UpdateUser param) throws Exception {
		return usersDao.updateUser(param);
	}

	@Override
	public Object forgotPassword(ForgotPassword param) throws Exception {
		return usersDao.forgotPassword(param);
	}

}
