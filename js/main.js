const app = {
    data() {
        return {
            currentWindow: true,
            switcherQuantity: 1,
            sum: 0,
            categories: [
                { id: 1, name: 'Мясные' },
                { id: 2, name: 'Вегетарианская' },
                { id: 3, name: 'Гриль' },
                { id: 4, name: 'Острые' },
            ],
            products: [
                { id: 1, img: 'Pizza1.png', categoryId: 1, quantity: 0, name: 'Чизбургер-пицца', price: 590, views: 100, dough: 'тонкое', size: 30 },
                { id: 2, img: 'Pizza2.png', categoryId: 2, quantity: 0, name: 'Сырная', price: 700, views: 4400, dough: 'тонкое', size: 30 },
                { id: 3, img: 'Pizza3.png', categoryId: 3, quantity: 0, name: 'Креветки по-азиатски', price: 420, views: 10, dough: 'тонкое', size: 30 },
                { id: 4, img: 'Pizza4.png', categoryId: 4, quantity: 0, name: 'Сырный цыпленок', price: 700, views: 17, dough: 'тонкое', size: 30 },
            ],

            productDoughs: [
                { id: 1, property: 'тонкое' },
                { id: 2, property: 'традиционное' }

            ],
            productWidth: [
                { id: 1, size: 26 },
                { id: 2, size: 30 },
                { id: 3, size: 40 }
            ],


            basketProducts: [],
            filter: {

                category: 'all',
                sort: 'popular'
            },
            isActive: false
        }
    },
    methods: {

        addToBasket(product) {
            product.quantity++
            const foundProduct = this.basketProducts.find(
                (p) => p.id === product.id
            );

            if (!foundProduct) {
                this.basketProducts.push(product);
            }
            else {
                this.basketProducts.quantity++
            }
            console.log(product.quantity);
        },
        deletFromBasket(product) {
            console.log(product);
            this.basketProducts = this.basketProducts.filter((p) => p.id !== product
            )
        },
        switcherQuantityMinus(a) {
            if (a.quantity < 2) { a.quantity = 1 }
            else { a.quantity-- }
        },
        switcherQuantityPlus(item) {
            item.quantity++

            let suma = 0
            suma = a * item.quantity
            item.price = suma
            console.log(item.price);
        },
        sumBasketPrices() {
            let sum = 0
            this.basketProducts.forEach(element => {
                sum += element.price * element.quantity

            });
            return sum
        },
        clearBasket() {
            this.basketProducts.length = 0
            this.products.forEach(el => {
                el.quantity = 0
            })
        },
        SumQuantity() {
            let sum = 0
            this.basketProducts.forEach(element => {
                sum += element.quantity

            });
            return sum
        },
    },
    computed: {




        filteredProducts() {

            let filteredProducts = this.products
            const category = this.filter.category
            const sort = this.filter.sort


            if (category !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.categoryId === category)
            }


            if (sort === 'price') {
                filteredProducts.sort((a, b) => a.price - b.price)
            }

            if (sort === 'popular') {
                filteredProducts.sort((a, b) => a.views - b.views)
            }
            if (sort === 'alfavit') {
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
            }

            return filteredProducts

        }
    }
}
Vue.createApp(app).mount('#app')
