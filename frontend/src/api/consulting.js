import { apiInstance } from "./index.js";

const api = apiInstance();
const consulting = {
  createConsulting: async function(consulting) {
    return new Promise((resolve,reject)=> {
      api.post(`/consultings`,JSON.stringify(consulting))
      .then(response=>resolve(response.data))
      .catch(error=>reject(error.response))
    })
  },
  deleteConsulting: async function(request,success,fail) {
    api.delete(`/consultings`,{data:JSON.stringify(request)})
    .then(success).catch(fail);
  },
  uploadSnapshop : async function(formData) {
    return new Promise((resolve, reject) => {
      api.post(`/consultings/snapshot`,formData,    { headers: { 'Content-Type': 'multipart/form-data' }})
      .then(response=>resolve(response.data))
      .catch(error => {
        if (error.response.status == 500)
          resolve("해당 방송을 찾을 수 없습니다.");
        else
          reject(error.response);
      });
    });
  }
}

export {consulting};

