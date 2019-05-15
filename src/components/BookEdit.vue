<template>
  <div>
    <b-modal id="book-edit" centered title="Input Book Data" v-model="modelStatus" @ok="handleOk" @cancel="handleClose" @close="handleClose">
     <b-form-group>

     </b-form-group>
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
      console.log('ok');
      this.submit();
      // // Prevent modal from closing
      // bvModalEvt.preventDefault();
      // // Trigger submit handler
      // this.handleSubmit();
    },

    //   checkFormValidity() {
    //     const valid = this.$refs.form.checkValidity();
    //     this.nameState = valid ? 'valid' : 'invalid';
    //     return valid;
    //   },
    //   resetModal() {
    //     this.name = '';
    //     this.nameState = null;
    //   },
  //   handleSubmit() {
  //     // Exit when the form isn't valid
  //     if (!this.checkFormValidity()) {
  //       return;
  //     }
  //     // Push the name to submitted names
  //     this.submittedNames.push(this.name);
  //     // Hide the modal manually
  //     this.$nextTick(() => {
  //       this.$refs.modal.hide();
  //     });
  //   },
  },


};
</script>


<style>
  .mx-datepicker2  {
    height: 100px;
  }
</style>


