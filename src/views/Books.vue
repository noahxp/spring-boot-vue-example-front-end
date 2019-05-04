<template>
  <div id="divBook" class="book">
   <table border="1" width="500">
     <tr style="background-color: aquamarine">
       <th>ISDN</th>
       <th>Book Name</th>
       <th>Book Description</th>
     </tr>
     <tr>
       <td>12345</td>
       <td>倚天屠龍記</td>
       <td>Book Description</td>
     </tr>
   </table>
  </div>
</template>

<script>
//import xx from '@/js/view' //-> it's will import /js/view.js
import axios from 'vue-axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book {
  position: center;
}
</style>
