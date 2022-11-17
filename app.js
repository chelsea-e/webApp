const app = new Vue({
    el: '#app',
    data: {
        page: "content",
        lessons: lessons,
        sorting: "price",
        cart: [],
        search: ''
    },
    methods: {
        addtocart(lesson) {
            this.cart.push(lesson)
        },
        removefromcart(id) {
            const index = this.cart.findIndex((item) => item.id === id);
            this.cart.splice(index, 1)
            if (this.cart.length == 0) {
                this.page = 'content'
            }
        },
        canaddtocart(lesson) {
            return lesson.spaces > this.cartSpace(lesson)
        },
        cartSpace(lesson) {
            let x = 0;
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i] == lesson) {
                    x++;
                }
            }
            return x;
        },
        navigateTo(page) {
            this.page = page;
        }
    },
    computed: {
        cartItems: function () {
            return this.cart.length || "";
        },
        filteredLessons: function () {
            if (this.search) {
                return this.lessons.filter((lesson) => {
                    return lesson.subject.toLowerCase().match(this.search.toLowerCase()) || lesson.location.toLowerCase().match(this.search.toLowerCase())
                });
            }

            return this.lessons
        }
    },
});