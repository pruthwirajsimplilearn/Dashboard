import http from "../http-common"

class DataServices {
    regsiterUser(data) {
        return http.post('/user', data)
    }
    loginUser(data) {
        return http.post('/login', data)
    }
}

export default new DataServices();