<template>
	<div>
		<v-container fluid>
			<v-row>
				<v-col cols="12" class="white--text text-h4">
					{{ id }}
				</v-col>
				<v-col
					cols="2"
					v-for="src in srcs"
					:key="src.title"
					@click="selectTarget(src.src)"
				>
					<v-card :class="{ 'white--text': true, 'blue--text': target === src.url }">
						{{ src.title }}
					</v-card>
					<!-- <v-card :class="{ 'white--text': true, 'blue--text': target === src }">
						{{ src.split('/').pop() }}
					</v-card> -->
				</v-col>
			</v-row>
		</v-container>
		<div class="height60">
			<video
				controls
				:src="target"
				autoplay
				v-if="target"
				controlsList="nodownload"
			></video>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		props: ['id'],
		data() {
			return {
				srcs: [],
				target: null
			}
		},
		mounted() {
			// axios.get('http://122.116.138.18:5567/' + this.id).then((res) =>
			// 	res.data.forEach((a) => {
			// 		this.srcs.push('http://122.116.138.18:5568/' + this.id + '/' + a.src)
			// 	})
			// )
			axios.get('https://animegfans.herokuapp.com/video/' + this.id).then((res) =>
				res.data.forEach((a) => {
					this.srcs.push(a)
				})
			)
		},
		methods: {
			selectTarget(src) {
				this.target = src
			}
		}
	}
</script>

<style>
	.height60 {
		display: flex;
		height: 70vh;
		justify-content: center;
		align-items: center;
	}
	video {
		height: 60vh;
		width: 50vw;
	}
</style>
