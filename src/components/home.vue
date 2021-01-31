<template>
  <div>
    <el-container>
      <el-header>
        <div class="three">
          <b>|||</b>
        </div>
        <div class="word">
          <b>VUE-ADMIN 后台管理系统</b>
        </div>
        <div class="figure">
            <i class="el-icon-user-solid" style="font-size: 26px;"></i>
          <el-select v-model="value" placeholder="luichooy">
       
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <el-button plain class="wen">
             <i class="el-icon-question" style="font-size: 28px;"></i>
          </el-button>
          <el-button plain class="wen">
             <i class="el-icon-refresh-right" style="font-size: 28px;"></i>
          </el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <h1>logo</h1>
            <!-- 导航栏 -->
             <el-col :span="12">
    <el-menu
      default-active="1"
      router
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff">
       <el-menu-item index="/homePage">
        <i class="el-icon-s-home i"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-share i"></i>
          <span>表格管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/basic">基本表格</el-menu-item>
          <el-menu-item index="/sort">排序表格</el-menu-item>
           <el-menu-item index="/fliter">筛选表格</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-data i"></i>
          <span>图标管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/bar">柱状图</el-menu-item>
          <el-menu-item index="3-2">折线图</el-menu-item>
           <el-menu-item index="3-3">饼图</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-order i"></i>
          <span>表单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">渲染表单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-menu-item index="5">
        <i class="el-icon-menu i"></i>
        <span slot="title">系统管理</span>
      </el-menu-item>
       <el-menu-item index="6">
        <i class="el-icon-user-solid i"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-s-shop i"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
       <el-menu-item index="8">
        <i class="el-icon-s-management i"></i>
        <span slot="title">操作日常</span>
      </el-menu-item>
       <el-menu-item index="9">
        <i class="el-icon-s-tools i"></i>
        <span slot="title">测试</span>
      </el-menu-item>
    </el-menu>
  </el-col>

        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
        value:'',
        options:[{
            value: '选项1',
          label: 'admin'
        },
        {
          value: '选项2',
          label: 'luichooy'
        },
        {
           value: '选项3',
          label: '超级管理员'
        }
        ]
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  // 以下是生命周期钩子 注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
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
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  margin-left: 200px;
  
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  margin-top: -60px;
}

.el-main {
  background-color: #f5f5f5;
  color: #333;
  height: 800px;
}
h1 {
  color: #65cea7;
  font-size: 30px;
  margin-top: 20px;
}
.three {
  float: left;
}
.word {
  float: left;
  margin-left: 20px;
}
.figure {
  float: right;
  width: 300px;
}
.el-select{
    width: 100px;
    border: none;
}
.wen{
    border: none;
}
.el-col{
    width: 200px;
    background: #545c64;
}
.el-menu{
    border: none; 
}
.i{
    color: #ffff;
}
</style>
