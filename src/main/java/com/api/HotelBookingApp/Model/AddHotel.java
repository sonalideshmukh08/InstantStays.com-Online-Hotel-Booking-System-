package com.api.HotelBookingApp.Model;

public class AddHotel {
	private String name;
	private String description;
	private String image;
	private String location;
	private Integer totalRooms;
	private Integer userId;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Integer getTotalRooms() {
		return totalRooms;
	}
	public void setTotalRooms(Integer totalRooms) {
		this.totalRooms = totalRooms;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
}
