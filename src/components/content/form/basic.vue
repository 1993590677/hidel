<template>
  <div>
    <el-card class="box-card">
      <div class="text item">
        <div class="box">基本表格（包含自定义模板，filter，分页组件）</div>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="username" label="用户名" width="120">
          </el-table-column>
          <el-table-column label="头像" align="center" width="80">
            <template slot-scope="scope">
              <img
                :src="scope.row.avatar"
                alt="用户头像"
                width="42"
                height="42"
                style="border-radius: 50%"
              />
            </template>
          </el-table-column>
          <el-table-column label="评分" prop="score" align="center" width="130">
            <!-- <template slot-scope="scope">
              <score :size="36" :score="scope.row.score"></score>
            </template> -->
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
// import score from 'src/components/Score/index.vue';
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {

  },
  // 组件状态值
  data() {
    return {
      tableData: [],
    };
  },
  // 计算属性
  computed: {},

  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    getAll() {
      this.$axios.get("/tables.json").then((res) => {
        console.log(res);
        this.tableData = res.data;
      });
    },
  },
  // 以下是生命周期钩子 注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {
    this.getAll();
  },
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {},
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeDestroy() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  destroyed() {},
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
.box {
  font-size: 20px;
}
</style>
