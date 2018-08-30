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
            newColumnName: "",
            tableData: [{
                id: 1,
                colName: "column"
            }, {
                id: 2,
                colName: "column"
            }, {
                id: 3,
                colName: "column"
            }, {
                id: 4,
                colName: "column"
            }, {
                id: 5,
                colName: "column"
            }, {
                id: 6,
                colName: "column"
            }, {
                id: 7,
                colName: "column"
            }, {
                id: 8,
                colName: "column"
            }, {
                id: 9,
                colName: "column"
            }, {
                id: 10,
                colName: "column"
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
        handleCreateColumn() {
            console.log("newColumn");
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