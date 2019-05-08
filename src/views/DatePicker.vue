<template>
  <div class="datepicker">
    <DatePicker inputName="birthday" :clearable="clearable" :defaultDate="date" @childMethod="parentMethod" />
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
      clearable: false,
    };
  },

  methods: {
    parentMethod(v) {
      this.date = v;
    },
  },
};
</script>
