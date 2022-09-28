package com.api.HotelBookingApp.Model;

public class LoggedInUser {
	private String email;
	private String pwd;
	private Boolean isManager;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public Boolean getIsManager() {
		return isManager;
	}
	public void setIsManager(Boolean isManager) {
		this.isManager = isManager;
	}
}
