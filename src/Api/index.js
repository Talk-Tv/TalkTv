// import BASE_URL from './config';
// import axios from 'axios';
// import getUser from '../helper/helper';
//
// const apis = {
// 	async verifyUser(token) {
// 		const result = await axios.get(`${BASE_URL}users/verify/${token}`);
// 		return result.data;
// 	},
// 	async loginUser(data) {
// 		const login = await axios.post(`${BASE_URL}users/login`, data);
// 		return login;
// 	},
// 	signup(user) {
// 		return axios.post(`${BASE_URL}users/signup`, user);
// 	},
// 	async changeRole(token, data) {
// 		const role = await axios.put(`${BASE_URL}users/role`, data, {
// 			headers: { Authorization: token },
// 		});
// 		return role;
// 	},
// 	async getUsersRoles(token) {
// 		const roles = await axios.get(`${BASE_URL}users/roles`, {
// 			headers: { Authorization: token },
// 		});
// 		return roles;
// 	},
// 	createAccommodation(data, token) {
// 		return axios.post(`${BASE_URL}accommodations`, data, {
// 			headers: { Authorization: token, contentType: 'application/x-www-form-urlencoded' },
// 		});
// 	},
// 	getUserProfile(userId) {
// 		return axios.get(`${BASE_URL}users/${userId}/profile`);
// 	},
// 	facebookLoginAPI(accessToken) {
// 		return axios.post(`${BASE_URL}/users/auth/facebook`, { access_token: accessToken });
// 	},
// 	logout(token) {
// 		return axios.patch(`${BASE_URL}users/logout`, null, {
// 			headers: {
// 				Authorization: token,
// 				'Content-Type': 'application/json',
// 			},
// 		});
// 	},
// 	changeRequestStatus(requestId, status, token) {
// 		return axios.patch(`${BASE_URL}requests/${requestId}/${status}`, null, {
// 			headers: {
// 				Authorization: token,
// 			},
// 		});
// 	},
// 	getSingleRequest(requestId, token) {
// 		return axios.get(`${BASE_URL}requests/${requestId}`, {
// 			headers: {
// 				Authorization: token,
// 			},
// 		});
// 	},
// 	getRequestComment(requestId, token) {
// 		return axios.get(`${BASE_URL}requests/${requestId}/comments`, {
// 			headers: {
// 				Authorization: token,
// 			},
// 		});
// 	},
// 	getAllUsers() {
// 		return axios.get(`${BASE_URL}users`);
// 	},
// 	getChats(token) {
// 		return axios.get(`${BASE_URL}chats?limit=1000`, {
// 			headers: {
// 				Authorization: token,
// 			},
// 		});
// 	},
// 	sendCommentReply(requestId, token, payload) {
// 		return axios.post(`${BASE_URL}requests/${requestId}/comments`, payload, {
// 			headers: {
// 				Authorization: token,
// 			},
// 		});
// 	},
// 	getStats(token) {
// 		return axios.get(`${BASE_URL}requests/stats`, {
// 			headers: {
// 				Authorization: token,
// 			},
// 		});
// 	},
// 	postChat(data, token) {
// 		return axios.post(`${BASE_URL}chats`, data, {
// 			headers: {
// 				Authorization: token,
// 			},
// 		});
// 	},
// 	trashComment(requestId, commentId, token) {
// 		return axios.delete(`${BASE_URL}requests/${requestId}/comments/${commentId}`, {
// 			headers: {
// 				Authorization: token,
// 			},
// 		});
// 	},
// 	updateRequest(data, token, reqId) {
// 		return axios.put(`${BASE_URL}requests/${reqId}`, data, {
// 			headers: { Authorization: token },
// 		});
// 	},
// 	editComment(requestId, commentId, data, token) {
// 		return axios.put(`${BASE_URL}requests/${requestId}/comments/${commentId}`, data, {
// 			headers: {
// 				Authorization: token,
// 			},
// 		});
// 	},
// };
//
// export default apis;
