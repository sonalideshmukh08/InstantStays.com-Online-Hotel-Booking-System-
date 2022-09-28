package com.api.HotelBookingApp.DAOImpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.api.HotelBookingApp.DAO.HotelDAO;
import com.api.HotelBookingApp.DAO.RoomDAO;
import com.api.HotelBookingApp.Model.AddHotel;
import com.api.HotelBookingApp.Model.AddRoom;

@Repository
public class RoomDAOImpl implements RoomDAO {
	
	@Autowired
	private JdbcTemplate template;
	
	private SimpleJdbcCall jdbcCall;

	@Override
	public Object addRoom(AddRoom param) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("addRoom");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inName", param.getRoomName())
				.addValue("inDesc", param.getRoomDescription())
				.addValue("inOccupancy", param.getOccupancy())
				.addValue("inSpecification", param.getSpecification())
				.addValue("inPrice", param.getPrice())
				.addValue("inHotelId", param.getHotelId())
				.addValue("inUserId", param.getUserId())
				.addValue("inImage1", param.getImage1())
				.addValue("inImage2", param.getImage2())
				.addValue("inImage3", param.getImage3());	
	  	
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object getRooms(Integer hotelId, Integer userId) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("getRooms");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inHotelId", hotelId)
				.addValue("inUserId", userId);
	  	
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object updateRoom(AddRoom param, Integer roomId) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("updateRoom");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inRoomId", roomId)
				.addValue("inName", param.getRoomName())
				.addValue("inDesc", param.getRoomDescription())
				.addValue("inOccupancy", param.getOccupancy())
				.addValue("inSpecification", param.getSpecification())
				.addValue("inPrice", param.getPrice())
				.addValue("inImage1", param.getImage1())
				.addValue("inImage2", param.getImage2())
				.addValue("inImage3", param.getImage3());	
	  	
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object deleteRoom(Integer roomId) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("deleteRoom");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inRoomId", roomId);
		
		Map<String, Object> result = jdbcCall.execute(params);
		return result.get("#result-set-1");
	}

	

}
