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

                <tr style="cursor:pointer" v-for="(board, index) in list" :key="index"  @click="boardDetail(board.boardId)"  >
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
    
            <button class="btn btn-primary" type="button" @click="showInsertModal">글쓰기</button>
        </div>
        <insert-modal v-on:call-parent-insert="closeAfterInsert"></insert-modal>
        <detail-modal v-bind:board="board" 
                        v-on:call-parent-change-to-update="changeToUpdate" v-on:call-parent-change-to-delete="changeToDelete"
        ></detail-modal>
        <update-modal  v-bind:board="board" v-on:call-parent-update="closeAfterUpdate"></update-modal>
    </div>
</template>

<script>

import http from "@/common/axios.js" // axios 객체
import util from "@/common/util.js" 
import PaginationUi from './PaginationUI.vue'

import InsertModal from "@/components/modals/InsertModal.vue"; // vue 컴포넌트 
import DetailModal from "@/components/modals/DetailModal.vue";
import UpdateModal from "@/components/modals/UpdateModal.vue";

import { Modal } from "bootstrap"; // vue 컴포넌트에서 bootstrap modal을 사요용하기 위함.


export default {
    components: { PaginationUi, InsertModal, DetailModal, UpdateModal },
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
            currentPageIndex: 1,

            // modal
            insertModal: null, // bootstrap Modal 객체를 할당( ui component 를 전달 )
            detailModal: null,
            UpdateModal: null,

            // detail
            board:{
                boardId: 0,
                title: "",
                content: "",
                userName: "",
                regDate: "", // 백엔드로부터 받는 dto는 regDt만 받는데 이를 분해해서 regDate, regTime로 나누려는 생각
                regTime:"",
                readCount: 0,
                fileList: [],
                sameUser: false,
            },
       

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
        },
        showInsertModal(){
            this.insertModal.show();
        },
        closeAfterInsert(){
            this.insertModal.hide();
            this.boardList();
        },
        closeAfterUpdate(){
            this.updateModal.hide();
            this.boardList();
        },
        changeToDelete(){
            this.detailModal.hide();
            var $this = this;
            this.$alertify.confirm(
                "이 글을 삭제하시겠습니까?",
                // yes
                function(){
                    // this.boardDelete(); // 이렇게 쓰면 boardMain component인것 같지만.. callback처리하는 녀석으로 됨.  undefined. $this로받아주기
                    $this.boardDelete();
                },
                // no
                function(){
                    console.log("canceled!!!!")
                }
            )
        },
        async boardDelete() { 
            try{
                let response  = await http.delete('/boards/' + this.board.boardId);
                let {data} = response;

                if( data.result == "login" ){
                    this.$router.push("/login")
                }else {
                    this.$alertify.success("글이 삭제되었습니다.");
                    this.boardList();
                }

            } catch(error){
                console.error(error);
                this.$alertify.error('서버에 문제가 생겼습니다.');   
            }
        },  
        async boardDetail(boardId) {
            // 백엔드 요청 - 결과
            // DetailModal <- 결과 : data 항목에 board 객체를 추가하고 props로 DetailModal에 넘겨준다. 백엔드요청 결과를 data의 board를 변경하면 자동 반영
            // DetailModal show
            try{
                let response = await http.get("/boards/" + boardId);
                let { data } = response;
                // let { data } = await http.get("/boards/" + boardId);

                if( data.result == "login" ){
                    this.$router.push("/login")
                }else {
                    console.log(data.dto)
                    // 날짜, 시간 분리
                    let { regDt } = data.dto;
                    let boardNew = {
                        regDate: util.makeDateStr(regDt.date.year, regDt.date.month, regDt.date.day, "/"),
                        regTime: util.makeTimeStr(regDt.time.hour, regDt.time.minute, regDt.time.second, "."),
                        ...data.dto // 3 dot operator rest
                    }

                    // 현재 board 교체
                    this.board = boardNew;

                    // object 변화를 감지하려면 , 교체하는 방식을 써야함.
                    // board 를 직접 바꾸려는 작업을 하려면 ? board 객체가 아니라 id title등을 하나하나 보내야 함.
                    // 객체를 통으로 보내면 변화를 감지하지 못함!

                    this.detailModal.show();

                }

            }catch(error){
                console.error(error);
                this.$alertify.error('서버에 문제가 생겼습니다.');          
            }  
        },
            
        changeToUpdate(){
            this.detailModal.hide();
            this.updateModal.show();
        },
  
        
    },
    created: function() {
        // vue 인스턴스가 만들어 질 때 수행이 됨.
        this.boardList();
    },
    mounted() {
        // 모달 객체를 생성해서 data의 변수에 할당
        this.insertModal = new Modal(document.querySelector("#insertModal"));
        this.detailModal = new Modal(document.querySelector("#detailModal"));
        this.updateModal = new Modal(document.querySelector("#updateModal"));
        
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