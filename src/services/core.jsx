import api from "./api";

class CoreService {
    getAvatars() {
        return api.get("/users?page=1")
    }
}

export default CoreService;