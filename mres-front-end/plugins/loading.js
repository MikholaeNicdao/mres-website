export default {
    data(){
        return{
            dataResolved: false
        }
    },
    methods: {
        setDataResolved(){
            setTimeout(() => {
                this.dataResolved = true
            }, 500)
        },
    }
}