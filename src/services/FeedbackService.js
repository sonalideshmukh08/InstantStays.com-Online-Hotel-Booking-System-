import { BaseAPIGET, BaseAPIPOST } from "../utils/BaseAPI"

export const addFeedback = (reqObj) => {
    return new Promise((resolve, reject) => {

        const url = "addFeedback"
        const method = "POST"

        BaseAPIPOST(url, method, reqObj).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
}

export const getFeedback = (hotelId = 0, userId = 0) => {
    return new Promise((resolve, reject) => {
        const url = `getFeedback?userId=${userId}&hotelId=${hotelId}`
        const method = "GET"

        BaseAPIGET(url, method).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })
    }) 
}