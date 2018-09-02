<template>
<div>
<Row>
  <Col  :xs='20' :sm='16' :md='12' :lg='8'>
  <h3>编辑设备</h3>
  </Col>
</Row>
<Row>
  <Col  :xs='20' :sm='16' :md='12' :lg='8'>
<Form ref='formCustom' :model='formCustom' :rules='ruleCustom'>
  <FormItem label='设备编号' prop='numberCustom'>
    <Input type='text' v-model='formCustom.numberCustom'></Input>
  </FormItem>
  <FormItem label='所属客户' prop='user'>
    <Input type='text' v-model='formCustom.user'></Input>
  </FormItem>
  <FormItem>
    <Button type='primary' @click='handleSubmit("formCustom")'>提交</Button>
    <Button type='ghost' @click='handleReset("formCustom")'>取消</Button>
  </FormItem>
</Form>
</Col>
</Row>
</div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'AddEquipment',
  data () {
    return {
      formCustom: {
        numberCustom: '',
        user: '',
        ID: ''
      },
      ruleCustom: {
        numberCustom: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ],
        user: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      // var that = this
      // var params = that.formCustom
      // if (that.$route.params.ID !== '') {
      //   axios.post('http', params)
      //     .then((res) => {
      //       console.log('res', res)
      //       if (res.data.Data.code === 0) {
      //         that.$Message.info('修改成功')
      //         that.$router.push({
      //           name: 'EquipmentList',
      //           params: params
      //         })
      //       } else {
      //         that.$Message.info('修改失败')
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err)
      //     })
      // } else {
      //   axios.post('http', params)
      //     .then((res) => {
      //       console.log('res', res)
      //       if (res.data.Data.code === 0) {
      //         that.$Message.info('添加成功')
      //         that.$router.push({
      //           name: 'EquipmentList',
      //           params: params
      //         })
      //       } else {
      //         that.$Message.info('添加失败')
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err)
      //     })
      // }
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
