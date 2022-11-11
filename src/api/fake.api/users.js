const users = [
    {
        _id: '0',
    },
    {
        _id: '1',
    },
    {
        _id: '2',
    },
    {
        _id: '3',
    },
    {
        _id: '4',
    },
    {
        _id: '5',
    },
]

const fetchAll = () =>
    new Promise(resolve => {
        window.setTimeout(function () {
            resolve(users)
        }, 1500)
    })

const fetchById = (id) =>
    new Promise(resolve => {
        window.setTimeout(function () {
            const user = users.find(u => u._id === id)
            resolve(user)
        }, 1500)
    })

const usersAPI = {
    fetchAll,
    fetchById
}

export default usersAPI
