<template>
    <!-- <div class="search_root">
        <div class="search_block">
            <input class="search_input" type="text" placeholder="快速探索" v-model="keyword" @keyup.enter="search">
            <span class="search_icon" @click="search"></span>
        </div>
        <div>
            <div >
                高频搜索内容
                <a href="https://www.baidu.com">天下十大行书</a>&nbsp;
                <a href="https://www.baidu.com">王羲之</a>&nbsp;
                <a href="https://www.baidu.com">颜真卿</a>&nbsp;
                <a href="https://www.baidu.com">启功</a>&nbsp;
                <a href="https://www.baidu.com">欧阳询</a>
            </div>
        </div>
    </div> -->
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            keyword: "",
        }
    },
    methods: {
        search() {
            let that = this
            console.log(that.keyword)
            axios.get("/interface/api/theory/theory?title=" + that.keyword).
                then(function (response) {
                    if (response.status == 200) {
                        console.log(response.data.data.results)
                        let res = [];
                        for (var item of response.data.data.results) {
                            res.push(item)
                        }
                        that.list = res
                        that.total = response.data.data.page.total
                        console.log("that.total: ", that.total)
                    }
                }).
                catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>
<style>
.search_root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.search_block {
    width: 55vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: relative;
    padding-left: 20px;
}

.search_input {
    width: 50vw;
    height: 60px;
    margin: 5px 0 0 0;
    line-height: 50px;
    font-size: 25px;
    border-bottom: 2px solid #6510AD;
    outline: none;
    text-decoration: none;
    border-top: none;
    border-left: none;
    border-right: none;
}

.search_input::placeholder{
    color: #6510AD5d;
}

.search_icon::before {
    content: '';
    display: block;
    position: relative;
    background: url('/src/assets/search_icon.png');
    background-size: 100%;
    background-repeat: no-repeat;
    left:-30px;
    width: 20px;
    height: 20px;
}

.search_icon:hover{
    cursor: pointer;
}
</style>
