import http from "../http-common"

class DataServices {
    regsiterUser(data) {
        return http.post('/user', data)
    }
    userLogin(data) {
        return http.get(`/login?name=${data.name}&password=${data.password}`)
    }
}

export default new DataServices();