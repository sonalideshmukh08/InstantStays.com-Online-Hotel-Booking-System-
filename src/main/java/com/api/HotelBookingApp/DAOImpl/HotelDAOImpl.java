package com.api.HotelBookingApp.DAOImpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.api.HotelBookingApp.DAO.HotelDAO;
import com.api.HotelBookingApp.Model.AddHotel;
import com.api.HotelBookingApp.Model.UpdateHotel;

@Repository
public class HotelDAOImpl implements HotelDAO {

	@Autowired
	private JdbcTemplate template;

	private SimpleJdbcCall jdbcCall;

	@Override
	public Object addHotel(AddHotel param) throws Exception {
		jdbcCall = new SimpleJdbcCall(template).withSchemaName("hotelmanagementsys").withProcedureName("addHotel");

		SqlParameterSource params = new MapSqlParameterSource().addValue("inName", param.getName())
				.addValue("inDesc", param.getDescription()).addValue("inImage", param.getImage())
				.addValue("inLocation", param.getLocation()).addValue("inTotalRooms", param.getTotalRooms())
				.addValue("inUserId", param.getUserId());

		Map<String, Object> result = jdbcCall.execute(params);

		return result.get("#result-set-1");
	}

	@Override
	public Object getHotel(Integer userId) throws Exception {
		jdbcCall = new SimpleJdbcCall(template).withSchemaName("hotelmanagementsys").withProcedureName("getHotel");

		SqlParameterSource params = new MapSqlParameterSource().addValue("inUserId", userId);

		Map<String, Object> result = jdbcCall.execute(params);

		return result.get("#result-set-1");
	}

	@Override
	public Object updateHotel(UpdateHotel param) throws Exception {
		jdbcCall = new SimpleJdbcCall(template).withSchemaName("hotelmanagementsys").withProcedureName("updateHotel");

		SqlParameterSource params = new MapSqlParameterSource().addValue("inName", param.getName())
				.addValue("inDesc", param.getDescription()).addValue("inImage", param.getImage())
				.addValue("inLocation", param.getLocation()).addValue("inTotalRooms", param.getTotalRooms())
				.addValue("inHotelId", param.getHotelId()).addValue("inRating", param.getRating());

		Map<String, Object> result = jdbcCall.execute(params);

		return result.get("#update-set-1");
	}

	@Override
	public Object searchHotels(String query) throws Exception {
		jdbcCall = new SimpleJdbcCall(template).withSchemaName("hotelmanagementsys").withProcedureName("searchHotels");

		SqlParameterSource params = new MapSqlParameterSource().addValue("query", query);

		Map<String, Object> result = jdbcCall.execute(params);

		return result.get("#result-set-1");
	}

	@Override
	public Object getHotelById(Integer hotelId) throws Exception {
		jdbcCall = new SimpleJdbcCall(template).withSchemaName("hotelmanagementsys").withProcedureName("getHotelById");

		SqlParameterSource params = new MapSqlParameterSource().addValue("inHotelId", hotelId);

		Map<String, Object> result = jdbcCall.execute(params);

		return result.get("#result-set-1");
	}

}
