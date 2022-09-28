package com.api.HotelBookingApp.Service;

import com.api.HotelBookingApp.Model.Feedback;

public interface FeedbackService {

	Object addFeedback(Feedback param) throws Exception;
	Object getFeedback(Integer userId, Integer hotelId) throws Exception;
}
