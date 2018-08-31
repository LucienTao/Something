var ue = UE.getEditor('container');

new Vue({
    el: '#app',
    data: function () {
        return {
            visible: false,
            isCollapse: false,
            userName: "DefaultUser",
            sideMenuState: "收起",
            headImgUrl: "https://www.setaswall.com/wp-content/uploads/2017/10/3d-Afloat-Drop-Img-Wallpaper-1080x1920.jpg",
            colSelect:"test",
            newArticleName:"",
            article:"",
            level:0,
            levelSel:[{id:1,name:"正常"},{id:2,name:"重要"},{id:3,name:"非常重要"},],
            columns:[{id:1,name:"test1"},{id:2,name:"test2"},{id:3,name:"test3"},]
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