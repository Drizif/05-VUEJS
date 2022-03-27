const app = Vue.createApp({
    data() {
        return {
            firstName: 'Alice',
            lastName: 'Zuberg',
            email: 'alice.zuberg@email.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/women/11.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();

            const { name, email, gender, picture } = results.shift();

            this.firstName = name.first;
            this.lastName = name.last;
            this.email = email;
            this.gender = gender;
            this.picture = picture.large;
        },
    }
});

app.mount('#app');