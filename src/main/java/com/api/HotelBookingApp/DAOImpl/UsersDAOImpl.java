package com.api.HotelBookingApp.DAOImpl;

import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.api.HotelBookingApp.DAO.UsersDAO;
import com.api.HotelBookingApp.Model.ForgotPassword;
import com.api.HotelBookingApp.Model.UpdateUser;
import com.api.HotelBookingApp.Model.Users;

@Repository
public class UsersDAOImpl implements UsersDAO {

	//@Qualifier("simpleJdbcCall1")
	
	@Autowired
	private JdbcTemplate template;
	
	private SimpleJdbcCall jdbcCall;
	
	@Override
	public Object getUsers(Users input) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("createUser");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("name", input.getName())
				.addValue("email", input.getEmail())
				.addValue("isManager", input.getIsManager())
				.addValue("userPassword", input.getPassword())
				.addValue("question", input.getQuestion())
				.addValue("answer", input.getAnswer());
		
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object getLoggedInUser(String email, String pwd, Boolean isManager) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("getLoggedInUser");
	
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inEmail", email)
				.addValue("inIsManager", isManager)
				.addValue("inPassword", pwd);
		
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object updateUser(UpdateUser param) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("updateUser");
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inId", param.getId())
				.addValue("inName", param.getName())
				.addValue("inEmail", param.getEmail())
				.addValue("inPassword", param.getPassword());
		
		Map<String, Object> result = jdbcCall.execute(params);
		
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("getUserById");
		SqlParameterSource params2 = new MapSqlParameterSource()
				.addValue("inId", param.getId());
		
		Map<String, Object> result2 = jdbcCall.execute(params2);
		return result2.get("#result-set-1");
	}

	@Override
	public Object forgotPassword(ForgotPassword param) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("hotelmanagementsys").withProcedureName("forgotPassword");
	
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inEmail", param.getEmail());
		
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

}
