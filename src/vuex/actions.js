export const addNote = ({dispatch}) => {
	dispatch('ADD_NOTE')
}

export const toggleFavorite = ({dispatch}) => {
	dispatch('TOGGLE_FAVORITE')
}

export const deleteNote = ({dispatch}) => {
	dispatch('DELETE_NOTE')
}

export const updateActiveNode = ({dispatch},note) => {
	dispatch('SET_ACTIVE_NOTE',note)
}

