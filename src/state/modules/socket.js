
export default {
	namespaced: true,
    state: {
		connect: false,
		servant_topic:'',
		requester_topic:'',
        channelId:[],
        appName: ''

    },
    getters: {
		getServantTopic(state) {
            return state.servant_topic
        },
        getRequesterTopic(state) {
            return state.requester_topic
        },
        getChannelId(state) {
            return state.channelId
        },
        getAppName(state) {
            return state.appName
        },
    },
    mutations: {
		socketConnect: (state, status) => {
            state.connect = true;
        },
		socketServantTopic: (state,  topic) => {
            state.servant_topic = topic;
        },
		socketRequesterTopic: (state,  topic) => {
            state.requester_topic = topic;
        },
        socketchannelId: (state,  id) => {
            state.channelId = id;
        },
        socketAppName: (state,  name) => {
            state.appName = name;
        },
    }
}
