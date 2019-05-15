
<template>
  <div id="my-demo">
    <h1>my labes</h1>

    example 1: <span style="color:red">一般綁定</span><br>
    <p>message={{message}}</p>
    <p>number={{number}} - ${number}</p>
    <hr>

    example 2: <span style="color:red">綁定在 html 屬性上</span><br>
    <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
    </span>
    <hr>

    example 3: <span style="color:red">條件渲染(conditional rendering)</span><br>
    <p v-if="seen">Now you see me</p>
    <p v-show="seen">shoe me...</p>
    seen:<input v-model="seen">
    <hr>

    example 4: <span style="color:red">迴圈取值/物件/range</span><br>
    <ol>
      <li v-for="(v,k) in todos" :key="k">
        {{v.text}}}
      </li>
      <!--
      <li v-for="(value,name) in todos">
        {{ value.text }}
      </li>
      -->
    </ol>

    <hr>
    example 5:  <span style="color:red">event handling, 可 bind 一個函式或 inline js</span><br>
    {{textMsg}}
    <button v-on:click="reverseMessage">Reverse Message</button>

    <hr>
    example 6: <span style="color:red">form input binding</span><br>
    <input size="50" v-model="textMsg">

    <hr>
    example 7: <span style="color:red">插入 html</span><br>
    <span v-html="rawHtml"></span>


    <hr>
    example 8:  <span style="color:red">綁定可用 JavaScript 表達式，但不能為一般的程序 (如,{var number=1}</span><br>
    {{number+1}} <br>
    {{ok?'YES':'NO'}} <br>
    {{ message.split('').reverse().join('') }}<br>


    <hr>
    example 9: <span style="color:red">v-bind 縮寫、v-on 縮寫</span><br>
    <span :title="message">v-bind的縮寫「:title」</span> <br>
    <span @click="reverseMessage">v-on的縮寫「@click」</span><br>

    <hr>
    example 10: <span style="color:red">computed & methods</span><br>
    <button @click="testComputed" v-text="testComputed"></button><br>
    testComputed: <input @change="testComputed" v-model="message"><br>
    <button @click="testMethods" v-text="testMethods"></button><br>
    <input type="text" size="50" v-model="message" @change="testComputed">
    <input type="text" size="50" v-model="message" @change="testMethods">
    <!--
    @click.prevent : 後綴修飾符.prevent可防止瀏覽器預設行為。
    @click.stop    : 後綴修飾符.stop可阻止點擊事件往父層傳播。
    @click.capture : 後綴修飾符.capture可將事件的傳遞改由父層往子層傳遞。
    @click.self    : 後綴修飾符.self僅僅觸發自己範圍的事件，不包含子層。
    @click.once    : 後綴修飾符.once僅在按下第一次時被執行。

    -->

    <hr>
    example 11: <span style="color:red">filters</span><br>
    <p>{{ price | filterComma | filterDollarSign('NTD') }}</p>

    <hr>
    example 12: <span style="color:red">watch</span><br>
    <p>number:<input type="text" v-model="number"> </p>
    <p>new number: {{newNumber}}</p>

    <hr>
    example 13: <span style="color:red">ajax by vue-axios</span><br>
    <p><button @click="ajaxDemo">ajax</button> </p>
    <p>{{ajaxResult}}</p>

    <hr>
    example 14: <span style="color:red">Conditional Rendering, v-if & v-for 在同一節點(html tag), v-for 優先於 v-if ，如果是條件成立才執行 for , 則需放在不同節點</span><br>
    <span v-if="number == 0">number is 0</span>
    <span v-else-if="number > 0">number is grant 0</span>
    <span v-else>this is else block</span>
    <p v-show="ok">it's ok</p> <!-- if ok was false , 會用 display:none 隱藏 , 要用 visibility: hidden 則需引用 vue-visible 套件引入 -->

    <hr>
    example 15: <span style="color:red">v-bind & v-model demo</span><br>
    :value <input type="text" size="30" :value="bindText"><br>
    v-model <input type="text" size="30" v-model="modelText"><br>
    :value v-model <input type="text" size="30" :abc="bindText" v-model="modelText"><br>

    請輸入來觀查v-bind或v-model <input type="text" size="30" @change="bindAndModelTest">
    <!--
    v-bind(縮寫「:」與v-model的分別)
     1.v-bind是數數綁定，沒有雙向綁定效果，但不一定在表素上使用，任何有效元件上都可以使用(如一般的 html 屬性)
     2.v-model是雙向綁定，基本上只用在表單元素上
     3.當v-bind和v-model周時用在一個元素上時，他們各自的作用沒變，但v-model優先級更高，而且需區分這個元素是單個的還是一組出現的
    -->


    <hr>
    example 99: <span style="color:red"></span><br>

    <hr>
    example 99: <span style="color:red"></span><br>

    <hr>
    example 99: <span style="color:red"></span><br>


    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>


</template>

<!--
- options syntax:
{
  el: '#id',    // CSS selector 或 HTMLElement 實例
  props: {},    // Array<string> 或 Object
  data: {},     // Object 或 Function
  computed: {}, // { [key: string]: Function | { get: Function, set: Function } }
  methods: {},  // { [key: string]: Function }
  watch: {},    // { [key: string]: string | Function | Object }
  mounted() {}  // Function
  // ...
}
- lifecycle : created -> mounted -> updated -> destoryed: https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
- virtaul Dom
- template 三種寫法
  - <template></template>
  - options 中的 template
  - options 中的 render function
  實際執行時的 <template></template> 會被編譯為 render function

- filters, computed, methods
  - filters 主要用於簡單的文格式處理,需要在應用程式中重複使用
  - computed 適合較複雜的資料處理與轉換(並且會監聽 data 裡的值的變化)
-->

<script>
// import axios from "axios";

export default {
  // el: '#app-1',  // 在 views 裡不需指定，全域的才需要 或 非 CLI mode 的才需要
  data() {
    return {
      message: 'this is local data',
      number: 3,

      seen: false,

      // exmpale 4
      todos: [
        {text: 'Learn JavaScript'},
        {text: 'Learn Vue'},
        {text: 'Build something awesome'},
      ],

      textMsg: 'this is a vue application.',


      rawHtml: ' <span style="color: red">This should be red.</span>',

      ok: false,

      price: 12345678,

      newNumber: 0,

      ajaxResult: '',

      bindText: 'bind text default value',

      modelText: 'model text default value',
    };
  },

  // 不管相依的 data 或 props 是否有，都會執行
  methods: {
    reverseMessage: function() {
      this.textMsg = this.textMsg.split('').reverse().join('');
      this.message = 'OH. myGod.';
    },
    testMethods: function() {
      this.message = 'run testMethods';
      return Date.now();
    },


    ajaxDemo: function() {
      this.axios.get('/apis/books/all/dd')
          .then((response) => {
            this.ajaxResult = response;
          }).catch((error) => {
            this.ajaxResult = error;
          });
    },


    bindAndModelTest: function(v) {
      this.bindText = v.target.value;
      this.modelText = v.target.value;
    },
  },

  // 相依的 data 或 props 有改變時，才會執行
  computed: {
    testComputed: function() {
      // this.message = 'run testComputed';
      // this.ok = 'run testComputed';
      // this.message = 'run testComputed';
      return Date.now();
    },
  },

  // 格式處理，可連續串接
  filters: {
    filterDollarSign(price, arg1) {
      return arg1 + '$' + price;
    },
    filterComma(price) {
      return price.toLocaleString('en-US');
    },
  },


  // 監控某個值，並作後面的事情，或呼叫別的函式
  watch: {
    // whenever question changes, this function will run
    number: function(v) {
      this.newNumber = v;
    },
  },


};


</script>

<style scoped>

</style>


