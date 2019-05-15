<template>
  <div id="my-book" class="book">

    <b-table id="books-table" striped hover :items="page.bookList" :fields="fields" @row-dblclicked="doubleClick"
             selectable :select-mode="'single'" selectedVariant="success" @row-selected="rowSelected"></b-table>
    <b-pagination v-model="page.currentPage" :total-rows="page.totalRows" :per-page="page.pageSize" @input="readBook" aria-controls="books-table" align="center" size="sm"></b-pagination>
    <BookEdit v-if="bookEditStatus" :bookData="bookData"  @bookParentMethod="bookParentMethod"></BookEdit>
    <b-button v-b-tooltip.hover title="add one book" :modalShow="bookEditStatus" @click="bookEditStatus = true;">Add Book</b-button>

    <br>
    <hr>
    {{page}}
    <hr>
    {{ajaxResult}}

  </div>
</template>

<script>
import BookEdit from '@/components/BookEdit.vue';

export default {
  components: {
    BookEdit,
  },
  data() {
    return {
      fields: ['bookId', 'bookName', 'isdn', 'createDate'],
      page: {
        bookList: [],
        currentPage: 1,
        pageSize: 0,
        totalRows: 0,
        totalPages: 0,
      },
      ajaxResult: '',

      selected: [],

      bookData: {},

      bookEditStatus: false,
    };
  },
  mounted() {
    this.readBook();
  },

  methods: {
    readBook: function() {
      this.$http.get('/apis/books/page/' + this.page.currentPage)
          .then((response) => {
            this.ajaxResult = response;
            this.page.bookList = response.data.result.content;
            this.page.currentPage = response.data.result.currentPage;
            this.page.pageSize = response.data.result.pageSize;
            this.page.totalRows = response.data.result.totalRows;
            this.page.totalPages = response.data.result.totalPages;
          }).catch((error) => {
            this.page.bookList = error;
          });
    },
    bookParentMethod(v) {
      this.bookEditStatus = v;
    },
    rowSelected(items) {
      this.selected = items;
    },
    doubleClick(items, index, event) {
      console.log('double click:' + items);
      this.bookData = items;
      this.bookEditStatus = true;
    },
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
