import authStorage from "../../app/modules/auth/storage"

export default function setupAxios(axios: any) {
  axios.interceptors.request.use(
    (config: any) => {
      const storage = authStorage;
      const token = storage.getToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (err: any) => Promise.reject(err)
  )
}
