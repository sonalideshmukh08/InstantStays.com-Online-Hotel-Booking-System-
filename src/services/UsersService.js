import { BaseAPIGET, BaseAPIPOST } from "../utils/BaseAPI"

export const createUser = (reqObj) => {
    return new Promise((resolve, reject) => {

        const url = "createUser"
        const method = "POST"

        BaseAPIPOST(url, method, reqObj).then(result => {
          resolve(result)
        }).catch(err => {
            reject(err)
        })

    })
}

export const loggedInUser = (email, password, isManager) => {
  return new Promise((resolve, reject) => {

      const url =  `loggedInUser`
      const method = "POST"

      BaseAPIPOST(url, method, {email: email, pwd: window.btoa(password), isManager: isManager}).then(result => {
          if (result.data.length === 1) {
              resolve(result)
          } else {
              reject()
          }
      }).catch(err => {
          reject(err)
      })

  })
}

export const updatUser = (reqObj) => {
  return new Promise((resolve, reject) => {

      const url =  "updateUser"
      const method = "POST"

      BaseAPIPOST(url, method, reqObj).then(result => {
          resolve(result)
      }).catch(err => {
          reject(err)
      })

  })
}

export const forgotPassword = (reqObj) => {
    return new Promise((resolve, reject) => {
  
        const url =  "forgotPassword"
        const method = "POST"
  
        BaseAPIPOST(url, method, reqObj).then(result => {
            resolve(result)
        }).catch(err => {
            reject(err)
        })
  
    })
  }