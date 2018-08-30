new Vue({
    el: '#app',
    data: function () {
        return {
            visible: false,
            remember: false,
            isCollapse: false,
            userName: "DefaultUser",
            sideMenuState: "收起",
            headImgUrl: "https://www.setaswall.com/wp-content/uploads/2017/10/3d-Afloat-Drop-Img-Wallpaper-1080x1920.jpg",
            newUserName: "",
            newUserPhone: "",
            tableData: [{
                id: 1,
                name: "user",
                phone: "123",
                date: "2018-09-30"
            }, {
                id: 2,
                name: "user",
                phone: "123",
                date: "2018-09-30"
            }, {
                id: 3,
                name: "user",
                phone: "123",
                date: "2018-09-30"
            }, {
                id: 4,
                name: "user",
                phone: "123",
                date: "2018-09-30"
            }, {
                id: 5,
                name: "user",
                phone: "123",
                date: "2018-09-30"
            }, {
                id: 6,
                name: "user",
                phone: "123",
                date: "2018-09-30"
            }, {
                id: 7,
                name: "user",
                phone: "123",
                date: "2018-09-30"
            }, {
                id: 8,
                name: "user",
                phone: "123",
                date: "2018-09-30"
            }, {
                id: 9,
                name: "user",
                phone: "123",
                date: "2018-09-30"
            }, {
                id: 10,
                name: "user",
                phone: "123",
                date: "2018-09-30"
            }],
            currentPage: 1,
            pageSize: 10,
            totalNum: 100,
        }
    },
    methods: {
        handleMenuSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSideMenuCollapse() {
            this.sideMenuState = this.isCollapse == true ? "展开" : "收起";
            this.isCollapse = !this.isCollapse;
        },
        handleCreateUser() {
            console.log("newUser");
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handlePrevPage() {

        },
        handleNextPage() {

        }
    },
    mounted() {
        // axios.get('/user?ID=12345')
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // axios.post('/user', {
        //         firstName: 'Fred',
        //         lastName: 'Flintstone'
        //     })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    },

})