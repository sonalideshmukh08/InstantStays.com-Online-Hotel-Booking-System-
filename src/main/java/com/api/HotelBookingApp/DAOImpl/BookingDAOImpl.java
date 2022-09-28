package com.api.HotelBookingApp.DAOImpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.api.HotelBookingApp.DAO.BookingDAO;
import com.api.HotelBookingApp.DAO.HotelDAO;
import com.api.HotelBookingApp.Model.AddHotel;
import com.api.HotelBookingApp.Model.Booking;
import com.api.HotelBookingApp.Model.UpdateHotel;

@Repository
public class BookingDAOImpl implements BookingDAO {
	
	@Autowired
	private JdbcTemplate template;
	
	private SimpleJdbcCall jdbcCall;

	@Override
	public Object addBooking(Booking param) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("addBooking");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inCheckIn", param.getCheckIn())
	            .addValue("inCheckOut", param.getCheckOut())
	            .addValue("inBookedBy", param.getBookedBy())
	            .addValue("inAmount", param.getAmount())
	            .addValue("inChilds", param.getChilds())
	            .addValue("inAdults", param.getAdults())
	            .addValue("inRoomId", param.getRoomId())
	            .addValue("inHotelId", param.getHotelId())
	            .addValue("inClientIP", param.getClientIP())
	            .addValue("inPaymentId", param.getPaymentId())
	            .addValue("inBookingDateTime", param.getBookingDateTime());   
		
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object getBookings(Integer hotelId, Integer userId) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("getBookings");
		
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inHotelId", hotelId)
	            .addValue("inUserId", userId);
	            
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object updateBooking(Integer bookingId, String status) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("updateBooking");
		
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inBookingId", bookingId)
	            .addValue("inStatus", status);
	            
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}
	
	

}
