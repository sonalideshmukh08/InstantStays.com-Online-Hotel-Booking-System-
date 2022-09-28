import { getDownloadURL, ref, uploadBytesResumable, deleteObject } from '@firebase/storage'
import moment from 'moment'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';

export const getDate = (d) => {
    return moment(d).format('DD/MM/YYYY')
}

export const getEasyDate = (d) => {
    let dT = moment(d).format('Do MMMM, YYYY')
    return dT
}

export const getAge = (d) => {
    let cur = moment()
    let dob = moment(d).format('YYYY')
    var diff = cur.diff(dob, 'years')
    return diff
}

export const isDate = (d) => {
    let dT = moment(d).isValid()
    return dT
}

export const imageUpload = async (file) => {
    return new Promise((resolve, reject) => {
        if (!file) reject()
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
}

export const bulkImageUpload = async (images, room) => {
    if (!images || images.length === 0) {
        alert("No file found.")
        return
    }
    const result = []

    await Promise.all(images.map(async (image, idx) => {
        const imgID = uuidv4()
        let refPath = `images/rooms/${room.id}/roomImage-${imgID}`
        let url = await imageUpload(image, refPath)
        result.push({ url: url, uuid: imgID })
    }));

    return result
}


export const deleteImage = async (imgID, roomId) => {
    // const imageRef = ref(storage, `images/rooms/${roomId}/roomImage-${imgID}`);
    // await deleteObject(imageRef)
}

export const deleteImageBulk = async (images, roomId) => {
    await Promise.all(images.map(async (image, idx) => {
        const imgID = image.uuid
        // const imageRef = ref(storage, `images/rooms/${roomId}/roomImage-${imgID}`);
        // await deleteObject(imageRef)
    }));
}