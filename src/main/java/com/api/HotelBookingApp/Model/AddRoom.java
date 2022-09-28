package com.api.HotelBookingApp.Model;

public class AddRoom {
	private String roomName;
	private String roomDescription;
	private Integer occupancy;
	private String specification;
	private Integer price;
	private Integer hotelId;
	private Integer userId;
	private String Image1;
	private String Image2;
	private String Image3;
	
	public String getImage1() {
		return Image1;
	}
	public void setImage1(String image1) {
		Image1 = image1;
	}
	public String getImage2() {
		return Image2;
	}
	public void setImage2(String image2) {
		Image2 = image2;
	}
	public String getImage3() {
		return Image3;
	}
	public void setImage3(String image3) {
		Image3 = image3;
	}
	public String getRoomName() {
		return roomName;
	}
	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}
	public String getRoomDescription() {
		return roomDescription;
	}
	public void setRoomDescription(String roomDescription) {
		this.roomDescription = roomDescription;
	}
	public Integer getOccupancy() {
		return occupancy;
	}
	public void setOccupancy(Integer occupancy) {
		this.occupancy = occupancy;
	}
	public String getSpecification() {
		return specification;
	}
	public void setSpecification(String specification) {
		this.specification = specification;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public Integer getHotelId() {
		return hotelId;
	}
	public void setHotelId(Integer hotelId) {
		this.hotelId = hotelId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	
}
