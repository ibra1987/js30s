export const state = () => ({
  users: [],
})

export const getters = {


    usersList:(state)=>state.users
  },

  export const actions = {

    getUsers: async ({commit})=>{

        try {
            const users = await axios.get("http://localhost:5000/api/users")

            commit("usersloaded" , users)
            
        } catch (error) {
            
            console.log(error)
        }
    }

  },


export const mutations = {

    usersLoaded:(state,payload)=> state.usersn = payload

  },

