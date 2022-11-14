<template>
    <div>
        <!-- Modal Detail-->
        <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">글 상세</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">            
		        <table class="table table-hover">
                	<tbody>
                		<tr><td>글 번호</td><td>{{board.boardId}}</td></tr>
                		<tr><td>제목</td><td>{{board.title}}</td></tr>
                		<tr><td>내용</td><td> {{board.content}}</td></tr>
                		<tr><td>작성자</td><td> {{board.userName}}</td></tr>
                		<tr><td>작성일시</td><td> {{ board.regDt.date  | makeDateStr('.') }}  </td></tr>
                		<tr><td>조회수</td><td>{{board.readCount}}</td></tr>                    
                
               			<!-- 첨부 파일 -->
               			<tr><td colspan="2">첨부파일</td></tr>
                		<tr><td colspan="2" id="fileListDetail">#</td></tr>
                	</tbody>
            	</table>
            	
            	<button id="btnBoardUpdateForm" type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">수정</button>
            	<button id="btnBoardDeleteConfirm" type="button" class="btn btn-sm btn-warning">삭제</button>
            </div>

          </div>
        </div>
      </div>  
    </div>
</template>

<script>

import util from "@/common/util.js" 

export default {
  data(){
   
  },
  props: [ 'board' ],

  method: {
    printProps() {
      console.log(this.board)
    }
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