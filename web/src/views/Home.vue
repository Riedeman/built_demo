<template>
	<div>
		User is: {{ user ? user.name : "No user" }}
		<button @click="getUsers()">Get users</button>
		<div v-for="user in users" :key="user.id">
			User: {{ user.name }}
		</div>
	</div>
</template>
<script>
import API from '../API';
export default {
	name: "Home",
	data() {
		return {
			api: new API(),
			user: null,
			users: []
		};
	},
	created() {
		this.loadData();
	},
	methods: {
		loadData: function () {
			console.log("Loading")
			this.user = JSON.parse(localStorage.getItem("demo-user"));
			if (!this.user) {
				this.user = {name: "Me", id: 1};
				localStorage.setItem("demo-user", JSON.stringify(this.user));
			}
		},
		getUsers: function () {
			this.api.get(`users`).then(res => {
				this.users = res.data;
				console.log("Users are", this.user.length, this.users);
			});
		}
	}
};
</script>