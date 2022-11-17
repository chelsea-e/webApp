const app = new Vue({
    el: '#app',
    data: {
      page: "content",
      lessons: lessons,
    },
    methods: {
      navigateTo(page) {
        this.page = page;
      }
    },
    computed:{
        
    },
});