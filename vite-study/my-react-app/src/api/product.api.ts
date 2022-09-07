import axios from "axios";

axios.defaults.withCredentials = true;
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE0OCwidXNlcm5hbWUiOiJ0cyIsIm5hbWUiOiLsnoTtmITshLHsnYAg67CU67O064ukIiwidXNlclR5cGUiOiJDIiwidHlwZSI6ImFjY2Vzc1Rva2VuIiwicm9sZXMiOiJVU0VSIiwiaXNzIjoiY3JlbWFvIiwiaWF0IjoxNjYyNTM2MDc2LCJleHAiOjE2NjI1Mzc4NzZ9.whn-FaWwXrS4YqGKLlSzHOkRFxmXETEZyXR06RkaO9w";

const SERVER_URL = "https://dev-api.cremao.co.kr/cremao-service";

export async function getHoldingProduct() {
  return axios.get(`${SERVER_URL}/api/v1/holding-product`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getOrderHistory(page: number, size: number) {
  return axios.get(`${SERVER_URL}/api/v1/order?page=${page}&size=${size}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
