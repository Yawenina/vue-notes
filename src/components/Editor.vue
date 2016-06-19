<template>
	<div id="note-editor">
		<textarea :value = "activeNoteText"
				  @input = "editNote"
				  class="form-control"></textarea>
	</div>
</template>

<script>
	import {editNote} from '../vuex/actions'

	export default {
		vuex:{
			getters:{
				activeNoteText:state => state.activeNote.text
			},
			actions:{
				editNote
			}
		}
	}
</script>

<style>
	#note-editor{
		height: 100%;
		margin-left: 380px;
	}
	#note-editor textarea{
		height: 100%;
		border:0;
		border-radius: 0;
	}
</style>