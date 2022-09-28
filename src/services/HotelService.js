import { BaseAPIGET, BaseAPIPOST } from "../utils/BaseAPI"

export const addHotel = (reqObj) => {
    return new Promise((resolve, reject) => {

        const url = "addHotel"
        const method = "POST"

        BaseAPIPOST(url, method, reqObj).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
}

export const getHotel = (userId) => {
    return new Promise((resolve, reject) => {
        const url = `getHotel?userId=${userId}`
        const method = "GET"

        BaseAPIGET(url, method).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    }) 
}

export const updateHotel = (reqObj) => {
    return new Promise((resolve, reject) => {

        const url = "updateHotel"
        const method = "POST"

        BaseAPIPOST(url, method, reqObj).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
}

export const searchHotel = (query) => {
    return new Promise((resolve, reject) => {
        const url = `searchHotels?query=${query}`
        const method = "GET"

        BaseAPIGET(url, method).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    }) 
}

export const getHotelById = (hotelId) => {
    return new Promise((resolve, reject) => {
        const url = `getHotelById?hotelId=${hotelId}`
        const method = "GET"

        BaseAPIGET(url, method).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    }) 
}
