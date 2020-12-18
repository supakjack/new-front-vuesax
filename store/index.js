export const state = () => ({
  activeSidebar: false,
  authenticated: null,
  breadcrumb: [
    {
      title: 'Dashboard',
      url: '/home'
    },
    {
      title: 'Link 1',
      url: '/home'
    },
    {
      title: 'Link 2',
      disabled: true,
      url: '/home'
    },
    {
      title: 'Active',
      active: true,
      url: '/home'
    }
  ]
})

export const mutations = {
  SET_ACTIIVE_SIDEBAR(state, activeSidebar) {
    state.activeSidebar = activeSidebar
  },
  SET_BREADCRUMB(state, breadcrumb) {
    state.breadcrumb = breadcrumb
  }
}

export const actions = {
  switchActiveSidebar(context) {
    context.commit('SET_ACTIIVE_SIDEBAR', !context.state.activeSidebar)
  }
}
