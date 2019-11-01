var store = {
  install: function (Vuex) {
    store.namespace = new Vuex.Store({
      state: {
        name: "",
      },
      mutations: {
        change(state, name) {
          state.name = name;
        }
      }
    })
  }
}

module.exports = store;
