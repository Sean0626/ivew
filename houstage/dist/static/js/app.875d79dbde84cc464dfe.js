webpackJsonp([1],{"+skl":function(e,t){},"/l+2":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},a,!1,function(e){n("pryj")},null,null).exports,o=n("/ocq"),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("Layout",[n("Sider",{attrs:{breakpoint:"md",collapsible:"","collapsed-width":78},model:{value:e.isCollapsed,callback:function(t){e.isCollapsed=t},expression:"isCollapsed"}},[n("Menu",{class:e.menuitemClasses,attrs:{"active-name":"1-1",theme:"dark",width:"auto"},on:{"on-select":e.routeTo}},[n("MenuItem",{attrs:{name:"1-1"}},[n("Icon",{attrs:{type:"ios-navigate"}}),e._v(" "),n("span",[e._v("编辑设备")])],1),e._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[n("Icon",{attrs:{type:"search"}}),e._v(" "),n("span",[e._v("设备管理")])],1),e._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[n("Icon",{attrs:{type:"settings"}}),e._v(" "),n("span",[e._v("编辑场景")])],1),e._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[n("Icon",{attrs:{type:"settings"}}),e._v(" "),n("span",[e._v("场景管理")])],1),e._v(" "),n("MenuItem",{attrs:{name:"1-5"}},[n("Icon",{attrs:{type:"settings"}}),e._v(" "),n("span",[e._v("编辑答题")])],1),e._v(" "),n("MenuItem",{attrs:{name:"1-6"}},[n("Icon",{attrs:{type:"settings"}}),e._v(" "),n("span",[e._v("答题管理")])],1)],1),e._v(" "),n("div",{attrs:{slot:"trigger"},slot:"trigger"})],1),e._v(" "),n("Layout",[n("Content",{style:{margin:"20px",background:"#fff",minHeight:"100vh"}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var l=n("VU/8")({data:function(){return{isCollapsed:!1}},computed:{menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{routeTo:function(e){this.$router.push(e)}}},i,!1,function(e){n("/l+2")},"data-v-6716af93",null).exports,u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Row",[n("Col",{attrs:{xs:20,sm:16,md:12,lg:8}},[n("h3",[e._v("编辑设备")])])],1),e._v(" "),n("Row",[n("Col",{attrs:{xs:20,sm:16,md:12,lg:8}},[n("Form",{ref:"formCustom",attrs:{model:e.formCustom,rules:e.ruleCustom}},[n("FormItem",{attrs:{label:"设备编号",prop:"numberCustom"}},[n("Input",{attrs:{type:"text"},model:{value:e.formCustom.numberCustom,callback:function(t){e.$set(e.formCustom,"numberCustom",t)},expression:"formCustom.numberCustom"}})],1),e._v(" "),n("FormItem",{attrs:{label:"所属客户",prop:"user"}},[n("Input",{attrs:{type:"text"},model:{value:e.formCustom.user,callback:function(t){e.$set(e.formCustom,"user",t)},expression:"formCustom.user"}})],1),e._v(" "),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("formCustom")}}},[e._v("提交")]),e._v(" "),n("Button",{attrs:{type:"ghost"},on:{click:function(t){e.handleReset("formCustom")}}},[e._v("取消")])],1)],1)],1)],1)],1)},staticRenderFns:[]},m=n("VU/8")({name:"AddEquipment",data:function(){return{formCustom:{numberCustom:"",user:"",ID:""},ruleCustom:{numberCustom:[{required:!0,message:"不能为空",trigger:"blur"}],user:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{handleSubmit:function(e){},handleReset:function(e){this.$refs[e].resetFields()}}},u,!1,null,null,null).exports,c=n("mtWM"),d=n.n(c),p={name:"EquipmentList",data:function(){var e=this;return{columns7:[{title:"设备所属客户",key:"Client"},{title:"设备所属编号",key:"Number"},{title:"日期",key:"InsertTime"},{title:"操作",key:"action",width:150,align:"center",render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.revise(n)}}},"修改"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.discard(n)}}},"删除")])}}],data6:[]}},mounted:function(){this.loadData()},methods:{loadData:function(){var e=this;d.a.get("http://192.168.1.116:8080/Box.Web/Manage/Equipment/GetAll").then(function(t){console.log("res",t),t.data.State?(e.$Message.success("查询成功"),e.data6=t.data.Data,console.log("data6",e.data6)):e.$Message.error("查询失败")}).catch(function(e){console.log(e)})},revise:function(e){console.log("修改",e);var t={ID:e.row.ID,Number:e.row.Number,Client:e.row.Client};this.$router.push({name:"EquipmentList",params:t})},discard:function(e){console.log("d",e);var t=this,n=e.row.ID,s=e.index;d.a.post("http://192.168.1.116:8080/Box.Web/Manage/Equipment/Delete",n).then(function(e){e.data.State?(t.$Message.success("删除成功"),t.data6.splice(s,1)):t.$Message.error("删除失败!")})}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h3",[this._v("设备管理")]),this._v(" "),t("Table",{attrs:{border:"",columns:this.columns7,data:this.data6}})],1)},staticRenderFns:[]},v=n("VU/8")(p,f,!1,null,null,null).exports,h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Row",[n("Col",{attrs:{xs:20,sm:16,md:12,lg:8}},[n("h3",[e._v("添加场景")])])],1),e._v(" "),n("Row",[n("Col",{attrs:{xs:20,sm:16,md:12,lg:8}},[n("Form",{ref:"formMessage",attrs:{model:e.formMessage,rules:e.ruleMessage}},[n("FormItem",{attrs:{prop:"scene"}},[n("Input",{attrs:{type:"text",placeholder:"请添加场景"},model:{value:e.formMessage.addSce,callback:function(t){e.$set(e.formMessage,"addSce",t)},expression:"formMessage.addSce"}})],1),e._v(" "),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("formMessage")}}},[e._v("提交")]),e._v(" "),n("Button",{attrs:{type:"ghost"},on:{click:function(t){e.handleReset("formMessage")}}},[e._v("取消")])],1)],1)],1)],1)],1)},staticRenderFns:[]},g=n("VU/8")({name:"AddScene",data:function(){return{formMessage:{addSce:""},ruleMessage:{scene:[{required:!0,message:"请输入",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$Message.success("success"):t.$Message.error("fail")})},handleReset:function(e){this.$refs[e].resetFields()}}},h,!1,null,null,null).exports,_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h3",[this._v("场景管理")]),this._v(" "),t("Table",{attrs:{border:"",columns:this.columns7,data:this.data6}})],1)},staticRenderFns:[]},I=n("VU/8")({name:"SceneList",data:function(){var e=this;return{columns7:[{title:"Name",key:"name",render:function(e,t){return e("div",[e("Icon",{props:{type:"person"}}),e("strong",t.row.name)])}},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Action",key:"action",width:150,align:"center",render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.show(n.index)}}},"View"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.remove(n.index)}}},"Delete")])}}],data6:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park"}]}},methods:{show:function(e){this.$Modal.info({title:"User Info",content:"Name："+this.data6[e].name+"<br>Age："+this.data6[e].age+"<br>Address："+this.data6[e].address})},remove:function(e){this.data6.splice(e,1)}}},_,!1,null,null,null).exports,y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Form",{ref:"formItem1",attrs:{model:e.formItem1}},[n("FormItem",{attrs:{label:"题目名称"}},[n("Input",{attrs:{placeholder:"请输入题目名称"},model:{value:e.formItem1.input1,callback:function(t){e.$set(e.formItem1,"input1",t)},expression:"formItem1.input1"}})],1),e._v(" "),n("FormItem",{attrs:{label:"场景ID"}},[n("Select",{model:{value:e.formItem1.select,callback:function(t){e.$set(e.formItem1,"select",t)},expression:"formItem1.select"}},[n("Option",{attrs:{value:"scene1"}},[e._v("scene1")]),e._v(" "),n("Option",{attrs:{value:"scene2"}},[e._v("scene2")])],1)],1),e._v(" "),n("FormItem",{attrs:{label:"题目编号"}},[n("Input",{attrs:{placeholder:"请输入"},model:{value:e.formItem1.input2,callback:function(t){e.$set(e.formItem1,"input2",t)},expression:"formItem1.input2"}})],1),e._v(" "),n("FormItem",{attrs:{label:"详情"}},[n("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRow:5},placeholder:"请输入详情"},model:{value:e.formItem1.textarea,callback:function(t){e.$set(e.formItem1,"textarea",t)},expression:"formItem1.textarea"}})],1),e._v(" "),e._l(e.formItem1.items,function(t,s){return t.status?n("FormItem",{key:s,attrs:{label:"item"+t.index,prop:"items."+s+".value",rules:{required:!0,message:"Item "+t.index+" can not be empty",trigger:"blur"}}},[n("Row",[n("Col",{attrs:{span:"14"}},[n("Input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.formItem1.input3,callback:function(t){e.$set(e.formItem1,"input3",t)},expression:"formItem1.input3"}}),e._v(" "),n("Input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.formItem1.input4,callback:function(t){e.$set(e.formItem1,"input4",t)},expression:"formItem1.input4"}})],1),e._v(" "),n("Col",{attrs:{span:"2",offset:"1"}},[n("Button",{attrs:{type:"ghost"},on:{click:function(t){e.handleRemove(s)}}},[e._v("Delete")])],1)],1)],1):e._e()}),e._v(" "),n("FormItem",[n("Row",[n("Col",{attrs:{span:"12"}},[n("Button",{attrs:{type:"dashed",long:"",icon:"plus-round"},on:{click:e.handleAdd}},[e._v("Add Item")])],1)],1)],1),e._v(" "),n("FormItem",[n("Button",{attrs:{type:"primary"}},[e._v("Submit")]),e._v(" "),n("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"}},[e._v("Reset")])],1)],2)},staticRenderFns:[]};var b=n("VU/8")({name:"AddOptions",data:function(){return{formItem1:{input1:"",select:"",input2:"",textarea:"",input3:"",input4:"",index:1,items:[{value:"",index:1,status:1}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$Message.success("Success!"):t.$Message.error("Fail!")})},handleReset:function(e){this.$refs[e].resetFields()},handleAdd:function(){this.index++,this.formDynamic.items.push({value:"",index:this.index,status:1})},handleRemove:function(e){this.formDynamic.items[e].status=0}}},y,!1,function(e){n("RH46")},null,null).exports;s.default.use(o.a);var x=new o.a({routes:[{path:"/",name:"HelloWorld",component:l,children:[{path:"1-1",name:"AddEquipment",component:m},{path:"1-2",name:"EquipmentList",component:v},{path:"1-3",name:"AddScene",component:g},{path:"1-4",name:"SceneList",component:I},{path:"1-5",name:"AddOptions",component:b},{path:"1-6",name:"SceneList",component:I}]}]}),k=n("BTaQ"),C=n.n(k);n("+skl");s.default.use(o.a),s.default.use(C.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:x,components:{App:r},template:"<App/>"})},RH46:function(e,t){},pryj:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.875d79dbde84cc464dfe.js.map