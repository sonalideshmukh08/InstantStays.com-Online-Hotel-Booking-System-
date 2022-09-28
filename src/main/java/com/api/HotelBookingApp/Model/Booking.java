package com.api.HotelBookingApp.Model;

public class Booking {
	private String checkIn;
	private String checkOut;
	private Integer bookedBy;
	private Integer amount;
	private Integer childs;
	private Integer adults;
	private Integer roomId;
	private Integer hotelId;
	private String clientIP;
	private String paymentId;
	private String bookingDateTime;
	
	public String getCheckIn() {
		return checkIn;
	}
	public void setCheckIn(String checkIn) {
		this.checkIn = checkIn;
	}
	public String getCheckOut() {
		return checkOut;
	}
	public void setCheckOut(String checkOut) {
		this.checkOut = checkOut;
	}
	public Integer getBookedBy() {
		return bookedBy;
	}
	public void setBookedBy(Integer bookedBy) {
		this.bookedBy = bookedBy;
	}
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public Integer getChilds() {
		return childs;
	}
	public void setChilds(Integer childs) {
		this.childs = childs;
	}
	public Integer getAdults() {
		return adults;
	}
	public void setAdults(Integer adults) {
		this.adults = adults;
	}
	public Integer getRoomId() {
		return roomId;
	}
	public void setRoomId(Integer roomId) {
		this.roomId = roomId;
	}
	public Integer getHotelId() {
		return hotelId;
	}
	public void setHotelId(Integer hotelId) {
		this.hotelId = hotelId;
	}
	public String getClientIP() {
		return clientIP;
	}
	public void setClientIP(String clientIP) {
		this.clientIP = clientIP;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	public String getBookingDateTime() {
		return bookingDateTime;
	}
	public void setBookingDateTime(String bookingDateTime) {
		this.bookingDateTime = bookingDateTime;
	}
	
	
}
