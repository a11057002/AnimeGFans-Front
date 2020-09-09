<template>
	<div>
		<v-container>
			<v-row>
				<v-col v-for="(src, index) in srcs" v-bind:key="index" cols="3">
					<v-hover v-slot:default="{ hover }">
						<router-link :to="src" :v-bind:key="src">
							<v-card :elevation="hover ? 30 : 0">
								{{ src }}
							</v-card>
						</router-link>
					</v-hover>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Home',
		components: {},
		data() {
			return {
				srcs: []
			}
		},
		mounted() {
			// axios.get('http://122.116.138.18:5567').then((res) =>
			// 	res.data.forEach((a) => {
			// 		this.srcs.push(a.title)
			// 	})
			// )
			axios.get('https://animegfans.herokuapp.com').then((res) =>
				res.data.forEach((a) => {
					this.srcs.push(a.head)
				})
			)
		}
		// methods: {
		// 	getIp() {
		// 		fetch('https://api.ipify.org?format=json')
		// 			.then((x) => x.json())
		// 			.then(({ ip }) => {
		// 				console.log(ip)
		// 			})
		// 	}
		// }
	}
</script>

<style>
	a {
		text-decoration: none;
	}
	.v-card {
		transition: opacity 0.4s ease-in-out;
	}

	.v-card:not(.on-hover) {
		opacity: 0.4;
	}
	.v-card:hover {
		opacity: 1;
	}
</style>
