import axios from "axios";

axios.defaults.withCredentials = true;

export async function getHoldingProduct() {
  return axios.get(
    `https://dev-api.cremao.co.kr/cremao-service/api/v1/holding-product`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE0OCwidXNlcm5hbWUiOiJ0cyIsIm5hbWUiOiLsnoTtmITshLHsnYAg67CU67O064ukIiwidXNlclR5cGUiOiJDIiwidHlwZSI6ImFjY2Vzc1Rva2VuIiwicm9sZXMiOiJVU0VSIiwiaXNzIjoiY3JlbWFvIiwiaWF0IjoxNjYyNDUwODA1LCJleHAiOjE2NjI0NTI2MDV9.Ta1DG0ppjgsCuqp6zONfUvbkdk200r5DLpneTskuW9Q`,
      },
    }
  );
}
