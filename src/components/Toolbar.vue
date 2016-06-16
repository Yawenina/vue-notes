<template>
	<div id="toolbar">
		<i class="glyphicon glyphicon-plus" @click="addNote"></i>
		<i class="glyphicon glyphicon-star" 
			@click="toggleFavorite"
			:class = {starred:activeNote.favorite}></i>
		<i class="glyphicon glyphicon-remove" @click="deleteNote"></i>
	</div>
</template>

<script>
	import {addNote,deleteNote,toggleFavorite} from '../vuex/actions'
	export default {
		vuex:{
			getters:{
				activeNote:state => state.activeNote
			},
			actions:{
				addNote,
				deleteNote,
				toggleFavorite
			}
		}
	}
</script>

<style>
	#toolbar{
		float: left;
		width: 80px;
		background-color: #30414D;
		color: #767676;
		padding: 35px 25px 25px;
	}
	#toolbar i{
		font-size: 30px;
		margin-bottom: 35px;
		cursor: pointer;
		opacity: .8;
		transition: opacity .5s ease
	}
	#toolbar i:hover{
		opacity: 1
	}
	.starred{
		color: #f7ae4f
	}
</style>