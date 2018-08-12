// import { stat } from "fs";
// import { resolve } from "path";
// import { rejects } from "assert";

import Axios from 'axios'

let publicUrl = 'http://shop.f83a.cn/v1/gg/app/'

export function getToken (userId) {
  return Axios({
    method: 'post',
    url: publicUrl + 'token/get/oauth2',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {
      userId
    }
  })
}

export function getHomeData (token, pageSize) {
  return Axios({
    method: 'post',
    url: publicUrl + 'game/ho/me',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {
      token,
      pageSize
    }
  })
}

export function getMoreGame (typePage, typeNum, pageSize) {
  return Axios({
    method: 'post',
    url: publicUrl + 'game/get/game/t',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {
      typePage,
      typeNum,
      pageSize
    }
  })
}

export function $http (url, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = (readyState) => {
      if (readyState === 4 && (xhr.status < 300 || xhr.status === 304)) {
        resolve(xhr.response)
      } else {
        reject(xhr.status)
      }
    }
    xhr.open('post', url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    xhr.send(JSON.stringify(data))
  })
}
