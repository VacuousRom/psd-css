import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slider: [{slideIndex: 0, slideHead: 'Heading', slideBody: 'Lorem ipsum dolor sit amet.', slideIcon: true},
    {slideIndex: 1, slideHead: 'Heading', slideBody: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet', slideIcon: false},
    {slideIndex: 2, slideHead: 'Ultra Mega Super Long Heading', slideBody: 'Lorem ipsum dolor sit amet.', slideIcon: false}]
  },
  mutations: {

  },
  actions: {

  }
})
