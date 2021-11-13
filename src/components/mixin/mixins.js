import ShowModal from './../ShowModal.vue';


export default {
    components:{
        ShowModal
    },
    data(){
        return {
           ActiveModal:false             
        }
    },

    methods : {
        ShowModals(){
            return this.ActiveModal = true;
        },
        CloseModal(){
            return this.ActiveModal = false;
        }
    }

}