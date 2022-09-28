import { BaseAPIGET, BaseAPIPOST } from "../utils/BaseAPI"

export const addBooking = (reqObj) => {
    return new Promise((resolve, reject) => {

        const url = "addBooking"
        const method = "POST"

        BaseAPIPOST(url, method, reqObj).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
}

export const getBookings = (hotelId = 0, userId = 0) => {
    return new Promise((resolve, reject) => {
        const url = `getBookings?userId=${userId}&hotelId=${hotelId}`
        const method = "GET"

        BaseAPIGET(url, method).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    }) 
}

export const updateBooking = (bookingId, status) => {
    return new Promise((resolve, reject) => {

        const url = `udpateBooking?bookingId=${bookingId}&status=${status}`
        const method = "GET"

        BaseAPIGET(url, method).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
}