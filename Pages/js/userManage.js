new Vue({
    el: '#app',
    data: function () {
        return {
            visible: false,
            remember: false,
            isCollapse: true,
            userName: "DefaultUser",
            sideMenuState: "收起"
        }
    },
    methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        handleSideMenuCollapse(){
            this.sideMenuState = this.isCollapse == true ? "展开" : "收起";
            this.isCollapse = !this.isCollapse;
            
        }
      }
})