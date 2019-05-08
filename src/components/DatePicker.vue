<template>
  <div>
    <date-picker @change="getDate" :inputName="inputName" v-model="date" placeholder="請選擇日期" :type="type" :lang="lang" :clearable="clearable" :editable="editable"></date-picker>
  </div>

</template>

<script>
import datePicker from 'vue2-datepicker';

export default {
  components: {datePicker},
  props: {
    inputName: {
      type: String,
      default: 'date',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    // default value
    defaultDate: {
      type: Date,
      default: null,
    },
  },

  data() {
    return {
      type: 'date',
      lang: {
        days: ['日', '一', '二', '三', '四', '五', '六'], months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      },
      format: 'YYYY-MM-DD', // clearable: true,
      editable: false,
      date: this.defaultDate,
    };
  },

  methods: {
    getDate() {
      // console.log(this.defaultDate);
      this.$emit('childMethod', this.defaultDate);
    },
  },


};
</script>


<!-- https://www.npmjs.com/package/vue2-datepicker -->
