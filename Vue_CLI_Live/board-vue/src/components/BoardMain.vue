<template>
    <div>
        <div class="container">
            <h4 class="text-center mt-3">게시판</h4>
    
            <div class="input-group mb-3  mt-3">
                <input type="text" class="form-control"  placeholder="Search" v-model="searchWord" @keydown.enter="boardList"/>
                <button class="btn btn-success" type="button" @click="boardList" >Search</button>
            </div>
    
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">작성자</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성일자</th>
                        <th scope="col">조회수</th>
                    </tr>
                </thead>

                <tr style="cursor:pointer" v-for="(board, index) in list" :key="index" data-boardId=${boardId}>
                    <td> {{ board.boardId }}</td>
                    <td> {{ board.userName }} </td>
                    <td> {{ board.title }} </td>
                    <td> {{ board.regDt.date | makeDateStr('.') }}  </td>
                    <td> {{ board.readCount }} </td>
                </tr>

            
            </table>
    
            <!-- Pagination Component 4개 props 필요 -->
            <pagination-ui  v-bind:listRowCount="listRowCount" 
                            v-bind:pageLinkCount="pageLinkCount"
                            v-bind:currentPageIndex="currentPageIndex"
                            v-bind:totalListItemCount="totalListItemCount"
                            v-on:call-parent-move-page="movePage">
                            ></pagination-ui>
    
            <button class="btn btn-primary" type="button" id="btnInsertPage">글쓰기</button>
        </div>
    </div>
</template>

<script>

import http from "@/common/axios.js" // axios 객체
import util from "@/common/util.js" 
import PaginationUi from './PaginationUI.vue'

export default {
    components: { PaginationUi },
    data(){
        return {
            limit: 10,
            offset: 0,
            searchWord: '',

            // list
            list:[],

            totalListItemCount: 0, // pagination 사용
            listRowCount: 10,
            pageLinkCount: 10,
            currentPageIndex: 1
        }
    },

    methods: {
        async boardList(){
            // limit, offset, searchWord
            let params = {
                limit: this.limit,
                offset: this.offset,
                searchWord: this.searchWord
            }

            try{
                // axios가 json 으로 parameter 를 보내는 방법 객체를 전달
                let response = await http.get('/boards', { params });
                let { data } = response;
 
                console.log(data);       

                // interceptor session check fail -> session timeout 났을때 
                if( data.result == "login" ){
                    this.$router.push("/login")
                }else {
                    this.list = data.list // 목록 
                    this.totalListItemCount = data.count; // 총 건수 
                    
                }

            } catch(error){
                console.error(error);
                this.$alertify.error('서버에 문제가 생겼습니다.');          
            }

        },

        movePage(pageIndex){
            this.offset = (pageIndex - 1)*this.listRowCount;
            this.currentPageIndex = pageIndex;
            this.boardList();
        }
    },
    created: function() {
        // vue 인스턴스가 만들어 질 때 수행이 됨.
        this.boardList();
    },
    filters: {
        makeDateStr: function( date, type ){
            return util.makeDateStr( date.year, date.month, date.day, type ); // import 한 util 을 이용해서 filter
        }
    }
}
</script>

<style>
</style>