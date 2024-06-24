// @ts-nocheck
import axios from "axios"

const BASE_URL = 'http://localhost:5000/api'

const HISTORY = '/history'
const CATEGORY = '/category'

const GET = '/get'
const ADD = '/add'
const EDIT = '/edit'
const DELETE = '/delete'


async function sendRequest(url, data) {
    let returnData = {}
    await axios.post(BASE_URL + url, data)
    .then((response) => returnData = response)
    .catch((error) => console.log(error.code))
    return returnData
}

let historyGet = (data) => { return sendRequest(HISTORY + GET, data) }
let historyAdd = (data) => { return sendRequest(HISTORY + ADD, data) }
let historyEdit = (data) => { return sendRequest(HISTORY + EDIT, data) }
let historyDelete = (data) => { return sendRequest(HISTORY + DELETE, data) }

let categoryGet = (data) => { return sendRequest(CATEGORY + GET, data) }
let categoryAdd = (data) => { return sendRequest(CATEGORY + ADD, data) }
let categoryEdit = (data) => { return sendRequest(CATEGORY + EDIT, data) }
let categoryDelete = (data) => { return sendRequest(CATEGORY + DELETE, data) }

let axiosInstance = {
    axios: axios,
    historyGet: historyGet,
    historyAdd: historyAdd,
    historyEdit: historyEdit,
    historyDelete: historyDelete,

    categoryGet: categoryGet,
    categoryAdd: categoryAdd,
    categoryEdit: categoryEdit,
    categoryDelete: categoryDelete,
}

export default { axiosInstance }