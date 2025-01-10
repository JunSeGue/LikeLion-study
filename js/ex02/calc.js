// MVC 방식으로 : 라이브러리

Vue.createApp({
    data() {
        return {
            num1: 10,
            num2: 10,
            result: 20,
        }
    },
    methods: {
        resultClickHandler() {
            this.result = this.num1 + this.num2;
        }
    }
}).mount('#calc-app');


