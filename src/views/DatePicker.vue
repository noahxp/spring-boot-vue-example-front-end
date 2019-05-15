<template>
  <div class="datepicker">
    <DatePicker inputName="birthday" :clearable="clearable" :defaultDate="date" @datePickerParentMethod="parentCallBackMethod" />
    {{date}}
  </div>
</template>

<script>
import DatePicker from '@/components/DatePicker.vue';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      date: new Date(),
      clearable: true,
    };
  },

  methods: {
    parentCallBackMethod(v) {
      this.date = v;
    },
  },
};
</script>
