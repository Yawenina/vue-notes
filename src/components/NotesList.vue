<template>
	<div id="notes-list">
		<div id="list-header">
			<h2>Notes | coligo</h2>
			<div class="btn-group btn-group-justified">
				<div class="btn-group">
					<button class="btn btn-default" @click="show ='all'"
							:class="{active:show==='all'}"
					>All Notes</button>
				</div>
				<div class="btn-group">
					<div class="btn btn-default" @click="show='favorites'"
						:class="{active:show === 'favorites'}"
					>Favorites</div>
				</div>
			</div>

		</div>
		
		<div class="container">
			<div class="list-group">
				<a class="list-group-item" v-for="note in filteredNotes"
					@click="updateActiveNote(note)"
					:class="{active:activeNote === note}">

					<h4 class="list-group-item-heading">
						{{note.text.trim().substring(0,30)}}
					</h4>
				</a>
			</div>
		</div>
	</div>

	
</template>

<script>
	import {updateActiveNote} from '../vuex/actions'

	export default {
		data () {
			return {
				show : 'all'
			}
		},
		vuex : {
			getters: {
				notes:state => state.notes,
				activeNote:state => state.activeNote
			},
			actions:{
				updateActiveNote
			}
		},
		computed:{
			filteredNotes () {
				if(this.show === 'all'){
					return this.notes
				}else if (this.show === 'favorites'){
					return this.notes.filter(note => note.favorite)
				}
			}
		}
	}
</script>

<style>
	#notes-list{
		float: left;
	    width: 300px;
	    height: 100%;
	    background-color: #F5F5F5;
	    font-family: 'Raleway', sans-serif;
	    font-weight: 400;
	}
	#list-header{
		padding: 5px 25px 25px 25px;
	}
	#list-header h2{
		font-weight: 300;
	    text-transform: uppercase;
	    text-align: center;
	    font-size: 22px;
	    padding-bottom: 8px;
	}
	#notes-list .container{
		height: calc(100% - 137px);
	    max-height: calc(100% - 137px);
	    overflow: auto;
	    width: 100%;
	    padding: 0;
	}
	#notes-list .container .list-group-item {
	  border: 0;
	  border-radius: 0;
	}
</style>

