import { BaseAPIGET, BaseAPIPOST } from "../utils/BaseAPI"

export const addRoom = (reqObj) => {
    return new Promise((resolve, reject) => {

        const url = "addRoom"
        const method = "POST"

        BaseAPIPOST(url, method, reqObj).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
}

export const updateRoom = (reqObj, roomId) => {
    return new Promise((resolve, reject) => {

        const url = `updateRoom?roomId=${roomId}`
        const method = "POST"

        BaseAPIPOST(url, method, reqObj).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
}


export const getRooms = (hotelId, userId) => {
    return new Promise((resolve, reject) => {

        const url = `getRooms?hotelId=${hotelId}&userId=${userId}`
        const method = "GET"

        BaseAPIGET(url, method, '').then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
}

export const deleteRoom = (roomId) => {
    return new Promise((resolve, reject) => {

        const url = `deleteRoom?roomId=${roomId}`
        const method = "DELETE"

        BaseAPIGET(url, method, '').then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
}
