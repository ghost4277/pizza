import vProduct from "./components/vProduct.js"

const { createApp } = Vue 

const app = {
    components: {
        vProduct
    },
    data() {
        return {
            categories: [
                { id: 1, name: 'Мясные' },
                { id: 2, name: 'Вегетарианская' },
                { id: 3, name: 'Гриль' },
                { id: 4, name: 'Острые' },
                { id: 5, name: 'Острые 2' },
            ],
            products: [
                { id: 1, categoryId: 1,  name: 'Чизбургер-пицца', price: 590, views: 100 },
                { id: 2, categoryId: 2,  name: 'Сырная', price: 700, views: 4400 },
                { id: 3, categoryId: 3,  name: 'Креветки по-азиатски', price: 420, views: 10 },
                { id: 4, categoryId: 4,  name: 'Сырный цыпленок', price: 700, views: 17 },
            ],
            filter: {
                category: 'ALL',
                sort: 'popular'
            }
        }
    },

    computed: {
        filteredProducts() {

            let filteredProducts = this.products
            const category = this.filter.category
            const sort = this.filter.sort


            if (category !== 'ALL') {
                filteredProducts = filteredProducts.filter(p => p.categoryId === category)
            }


            if (sort === 'price') {
                filteredProducts.sort((a, b) => a.price - b.price)
            } 

            if (sort === 'popular') {
                filteredProducts.sort((a, b) => a.views - b.views)
            }

            return filteredProducts

        }
    }
}

createApp(app).mount('#app')
