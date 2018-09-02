let v = new Vue({
    el: '#app',
    data: function () {
        return {
            baseUrl: "http://120.78.144.196:3002",
            isCollapse: false,
            userName: "DefaultUser",
            headImgUrl: "https://www.setaswall.com/wp-content/uploads/2017/10/3d-Afloat-Drop-Img-Wallpaper-1080x1920.jpg",
            newColumnName: "",
            newColCode: "",
            dialogVisible: false,
            modifyColumnName: "",
            modifyColumnCode: "",
            modifyColumnId: -1,
            tableData: [],
            currentPage: 1,
            pageSize: 10,
            totalNum: 100,
        }
    },
    methods: {
        handleMenuSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleCreateColumn() {
            if (v.newColumnName.length < 1) {
                v.$message({
                    message: '请填写新栏目名称',
                    type: 'warning'
                });
                return;
            }
            if (v.newColCode.length < 1) {
                v.$message({
                    message: '请填写新栏目代码',
                    type: 'warning'
                });
                return;
            }

            axios.post(v.baseUrl + '/column/create', {
                    name: v.newColumnName,
                    code: v.newColCode,
                    login: 1
                })
                .then(function (response) {
                    console.log(response);
                    if (response.data.Code === 200) {
                        v.$message('操作成功');
                        v.reloadPageData();
                    } else {
                        v.$message('出现错误：' + response.data.Desc);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    v.$message('服务器未知错误');
                });
        },
        handleEdit(index, row) {
            v.modifyColumnName = v.tableData[index].name;
            v.modifyColumnCode = v.tableData[index].code;
            v.modifyColumnId = v.tableData[index].id;
            v.dialogVisible = true;
        },
        handleDelete(index, row) {
            axios.post(v.baseUrl + '/column/delete', {
                    id: v.tableData[index].id
                })
                .then(function (response) {
                    console.log(response);
                    if (response.data.Code === 200) {
                        v.$message({
                            message: '操作成功',
                            type: 'success'
                        });
                        v.reloadPageData();
                    } else {
                        v.$message.error('出现错误：' + response.data.Desc);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    v.$message.error('服务器未知错误');
                });
        },
        handleCurrentChange(val) {
            v.currentPage = val;
            v.reloadPageData();
        },
        handlePrevPage() {
            v.currentPage -= 1;
            v.reloadPageData();
        },
        handleNextPage() {
            v.currentPage += 1;
            v.reloadPageData();
        },
        handleDialogCancel() {
            v.dialogVisible = false;
            v.modifyColumnCode = "";
            v.modifyColumnName = "";
            v.modifyColumnId = -1;
        },
        handleDialogConfirm() {
            axios.post(v.baseUrl + '/column/update', {
                    id: v.modifyColumnId,
                    name: v.modifyColumnName,
                    code: v.modifyColumnCode,
                    login: 1
                })
                .then(function (response) {
                    console.log(response);
                    if (response.data.Code === 200) {
                        v.handleDialogCancel();
                        v.$message({
                            message: '操作成功',
                            type: 'success'
                        });
                        v.reloadPageData();
                    } else {
                        v.$message.error('出现错误：' + response.data.Desc);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    v.$message.error('服务器未知错误');
                });
            v.handleDialogCancel();
        },
        handleClose(done) {
            v.$confirm('确认关闭？')
                .then(_ => {
                    v.modifyColumnCode = "";
                    v.modifyColumnName = "";
                    done();
                })
                .catch(_ => {});
        },
        reloadPageData() {
            axios.get(v.baseUrl + '/column/list', {
                    page: v.currentPage
                })
                .then(function (response) {
                    if (response.data.Code === 200) {
                        v.newColCode = "";
                        v.newColumnName = "";
                        v.modifyColumnCode = "";
                        v.modifyColumnName = "";
                        v.modifyColumnId = -1;
                        v.tableData = response.data.Message.rows;
                        v.totalNum = response.data.Message.count;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    mounted() {
        let v = this;
        axios.get(v.baseUrl + '/column/list')
            .then(function (response) {
                if (response.data.Code === 200) {
                    v.tableData = response.data.Message.rows;
                    v.totalNum = response.data.Message.count;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

})