import http from "../http-common"

class DataServices {
    regsiterUser(data) {
        return http.post('/user', data)
    }
    loginUser(data) {
        return http.get(`/login?email=${data.email}&password=${data.password}`)
    }
}

export default new DataServices();