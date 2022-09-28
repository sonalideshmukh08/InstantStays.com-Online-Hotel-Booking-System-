package com.api.HotelBookingApp.Model;

public class UpdateHotel {
		private String name;
		private String description;
		private String image;
		private String location;
		private Integer totalRooms;
		private Integer hotelId;
		private Integer rating;
		
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
		public Integer getHotelId() {
			return hotelId;
		}
		public void setHotelId(Integer hotelId) {
			this.hotelId = hotelId;
		}
		public Integer getRating() {
			return rating;
		}
		public void setRating(Integer rating) {
			this.rating = rating;
		}
}
