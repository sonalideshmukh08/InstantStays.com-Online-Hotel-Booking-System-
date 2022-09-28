package com.api.HotelBookingApp.DAOImpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.api.HotelBookingApp.DAO.FeedbackDAO;
import com.api.HotelBookingApp.Model.Feedback;

@Repository
public class FeedbackDAOImpl implements FeedbackDAO {

	@Autowired
	private JdbcTemplate template;
	
	private SimpleJdbcCall jdbcCall;
	
	@Override
	public Object addFeedback(Feedback param) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("addHotelFeedback");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inHotelId", param.getHotelId())
				.addValue("inUserId", param.getUserId())
				.addValue("inFeedback", param.getFeedback());
				
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object getFeedback(Integer userId, Integer hotelId) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("getHotelFeedback");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inHotelId", hotelId)
				.addValue("inUserId", userId);
				
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

}
