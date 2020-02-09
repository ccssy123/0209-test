var cakeOne = new Vue({
    el:'#cakeOne',
    data:{
        itemList:[
            {
            id:'1',
            itemName:'巧克力蛋糕',
            imgUrl:'images/product/cake01.png',
            price:'500',
            count:'2',
            href:''
            },
            {
                    id:'2',
                    itemName: '草莓蛋糕',
                    imgUrl: 'images/product/cake01.png',
                    price:'400',
                    count:'2',
                    href:''
            },
            {
                id:'3',
                itemName:'咖啡蛋糕',
                imgUrl: 'images/product/cake01.png',
                price:'700',
                count: '2',
                herf:''
            },
    ]
    },
    methods: {
       
    },
    computed: {

    }
})

var cakeTwo = new Vue({
    el: '#cakeTwo',
    data: {
        itemList: [
            {
                id: '1',
                itemName: '巧克力蛋糕',
                imgUrl: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
                price: '500',
                count: '2',
                href: ''
            },
            {
                id: '2',
                itemName: '草莓蛋糕',
                imgUrl: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
                price: '400',
                count: '2',
                href: ''
            },
            {
                id: '3',
                itemName: '咖啡蛋糕',
                imgUrl: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
                price: '700',
                count: '2',
                herf: ''
            },
        ]
    },
    methods: {

    },
    computed: {

    }
})