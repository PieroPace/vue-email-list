// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const app = new Vue({
    el: '#app',
    data: {
        emailList: [],
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    while(!this.emailList.includes(response.data.response)) {
                        this.emailList.push(response.data.response);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
})