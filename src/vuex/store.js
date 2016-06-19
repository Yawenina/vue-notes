import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	notes:[],
	activeNote:{}
}

const mutations = {
	ADD_NOTE (state) {
		const newNote = {
			text:'New note',
			favorite:false
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},
	TOGGLE_FAVORITE (state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},
	DELETE_NOTE (state) {
		this.notes.$remove(state.activeNote)
		this.activeNote = state.notes[0]
	},
	SET_ACTIVE_NOTE (state,note) {
		state.activeNote = note
	},
	EDIT_NOTE (state,text) {
		state.activeNote.text = text
	}
	
}

export default new Vuex.Store({
	state,
	mutations
})