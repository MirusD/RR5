import httpServices from '../api/fake.api'

const userService = {
    get: async () => {
        const data = await httpServices.users.fetchAll()
        return data
    },
    getById: async (id) => {
        const data = await httpServices.users.fetchById(id)
        return data
    }
}

export default userService
