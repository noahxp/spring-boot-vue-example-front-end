<template>
  <div>
    <b-modal id="book-edit" centered title="Input Book Data" v-model="modelStatus" @ok="handleOk" @cancel="handleClose" @close="handleClose">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>Book Name</b-col>
          <b-col>
            <b-form-group id="fieldset-1" label-for="bookName" :invalid-feedback="invalidFeedback" :state="state">
              <b-form-input id="bookName" v-model="bookData.bookName" :state="state" trim></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>ISDN</b-col>
          <b-col>
            <b-form-group id="fieldset-2" label-for="isdn" :invalid-feedback="invalidFeedback" :state="state">
              <b-form-input id="isdn" v-model="bookData.isdn" :state="state" trim></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>Descript</b-col>
          <b-col>{{bookData.descript}}</b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>

</template>

<script>

export default {
  props: {
    modalShow: {
      type: Boolean,
      default: true,
    },
    bookData: {
      default: null,
    },
  },

  data() {
    return {
      modelStatus: this.modalShow,
    };
  },

  methods: {
    submit() {
      this.handleClose();
    },
    handleClose() {
      this.$emit('bookParentMethod', false);
    },
    handleOk(bvModalEvt) {
      this.$http.put('/apis/books',this.bookData).then((response) => {
        console.log('edit success.');
      }).catch((error) => {
        console.error(error);
      });


      this.submit();
    },

    computed: {
      state() {
        return this.name.length >= 4 ? true : false;
      },
      invalidFeedback() {
        if (this.name.length > 4) {
          return '';
        } else if (this.name.length > 0) {
          return 'Enter at least 4 characters';
        } else {
          return 'Please enter something';
        }
      },
    },
  },


};
</script>


<style>
  .mx-datepicker2  {
    height: 100px;
  }
</style>


