package com.api.HotelBookingApp.Model;

public class Users {
	
	private Integer Id;
	private String Name;
	private Boolean IsManager;
	private String Email;
	private String Password;
	private String Question;
	private String Answer;
	
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public Integer getId() {
		return Id;
	}
	public void setId(Integer id) {
		Id = id;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public Boolean getIsManager() {
		return IsManager;
	}
	public void setIsManager(Boolean isManager) {
		IsManager = isManager;
	}
	public String getAnswer() {
		return Answer;
	}
	public void setAnswer(String answer) {
		Answer = answer;
	}
	public String getQuestion() {
		return Question;
	}
	public void setQuestion(String question) {
		Question = question;
	}
	
}
