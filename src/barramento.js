import  Vue from 'vue'


export default new Vue({
    methods: {
        sendData(data) {
            this.$emit('sendDataAgora', data)
        },

        responseData(callback){
            this.$on('sendDataAgora', callback)
        }

     }

})