package com.api.HotelBookingApp.DAO;

import org.springframework.stereotype.Repository;

import com.api.HotelBookingApp.Model.Feedback;


public interface FeedbackDAO {
	Object addFeedback(Feedback param) throws Exception;
	Object getFeedback(Integer userId, Integer hotelId) throws Exception;
}
