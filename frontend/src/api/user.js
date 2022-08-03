import { apiInstance } from "@/api";

const api = apiInstance();
const user = {
  getUserProfile: async function(user_no,success,fail) {
    await api.get(
      `/users/${user_no}`
    )
    .then(success)
    .catch(fail)
  }
}

export { user };
