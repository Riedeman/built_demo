import axios from 'axios'

export default class API {
	base = "http://localhost:8080/";
	user = JSON.parse(localStorage.getItem('demo-user'));
	headers = { headers: { "x-api-key": this.user ? this.user.id : "" } };
	constructor() {
		this.get = this.get.bind(this)
		this.post = this.post.bind(this)
		this.put = this.put.bind(this)
	}
	get(route) {
		return axios.get(this.base + route, this.headers);
	}
	post(route, data) {
		return axios.post(this.base + route, data, this.headers);
	}
	put(route, data) {
		return axios.put(this.base + route, data, this.headers);
	}
}
