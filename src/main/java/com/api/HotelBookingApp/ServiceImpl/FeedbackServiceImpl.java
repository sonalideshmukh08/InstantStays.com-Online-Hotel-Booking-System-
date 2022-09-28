package com.api.HotelBookingApp.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.HotelBookingApp.DAO.FeedbackDAO;
import com.api.HotelBookingApp.Model.Feedback;
import com.api.HotelBookingApp.Service.FeedbackService;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	FeedbackDAO feedbackDao;
	
	@Override
	public Object addFeedback(Feedback param) throws Exception {
		return feedbackDao.addFeedback(param);
	}

	@Override
	public Object getFeedback(Integer userId, Integer hotelId) throws Exception {
		return feedbackDao.getFeedback(userId, hotelId);
	}

}
