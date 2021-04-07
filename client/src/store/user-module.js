import api from '@/api/api' // to simplify the actions , no repitition

export default {
    state: {
      userdata: undefined,
      token: undefined
    },

    mutations: {
      setUser (state, user) {
        state.userdata = user
      },
      resetUser (state) {
        state.userdata = undefined
      },
      setToken (state, token) {
        state.token = token
      },
      resetToken (state) {
        state.token = undefined
      }
    },

    actions: {
        login ({ commit }, credentials) {
            return api.login(credentials)
            .then(userdata => {
              const { success, user, token, message } = userdata
              if (!success) {
                  // TODO: Afficher proprement le message contenu dans `message` dans l'interface
                  //       et non dans la console comme ici
                  console.error(message)
                  // return
                  // return userdata.status(400).send({ message })
                  return false
              }
              localStorage.setItem('token', token)
              commit('setUser', user)
              return true
              // commit('setToken', token)
            })
        },

        logout ({ commit }) {
        localStorage.removeItem('token')
        commit('resetUser')
        // commit('resetToken')
        },

        checkToken ({ commit }) {
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }

        return api.checkToken(token)
            .then(userdata => {
              const { success, message, user } = userdata

              if (!success) {
                  // Afficher le message d'erreur à l'utilisateur
                  console.warn(message)
                  return false
              }

              commit('setUser', user)
              return true
            })
        },

        register ({ commit }, credentials) {
          return api.register({
            firstname: credentials.firstname,
            lastname: credentials.lastname,
            email: credentials.email,
            username: credentials.username,
            password: credentials.password
            })
          .then(userdata => {
            const { success, message } = userdata
            if (!success) {
                // TODO: Afficher proprement le message contenu dans `message` dans l'interface
                //       et non dans la console comme ici
                console.error(message)
                // return
                return userdata.status(400).send({ message })
              }
            })
        },

        modifyUser ({ commit }, userdata) {
          const token = localStorage.getItem('token')
          if (!token) {
              return
          }
          return api.modify(userdata)
              .then(newuserdata => {
              const { success, message } = newuserdata
              if (!success) {
                  // Afficher le message d'erreur à l'utilisateur
                  console.warn(message)
                  return false
              }
              return true
              })
          }
    },

    getters: {
      isLoggedIn (state) {
        return !!state.userdata
      }
    }
  }
