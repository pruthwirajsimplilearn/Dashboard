import http from "../http-common"

class DataServices {
    regsiterUser(data) {
        return http.post('/user', data)
    }
}

export default new DataServices();