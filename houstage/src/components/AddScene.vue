<template>
<div>
<Row>
  <Col :xs='20' :sm='16' :md='12' :lg='8'>
  <h3>添加场景</h3>
  </Col>
</Row>
<Row>
<Col :xs='20' :sm='16' :md='12' :lg='8'>
<Form ref='formMessage' :model='formMessage' :rules='ruleMessage'>
  <FormItem prop='scene'>
    <Input type='text' v-model='formMessage.addSce' placeholder='请添加场景'></Input>
  </FormItem>
  <FormItem>
    <Button type='primary' @click='handleSubmit("formMessage")'>提交</Button>
    <Button type='ghost' @click='handleReset("formMessage")' >取消</Button>
  </FormItem>
</Form>
</Col>
</Row>
</div>
</template>
<script>
export default {
  name: 'AddScene',
  data () {
    return {
      formMessage: {
        addSce: ''
      },
      ruleMessage: {
        scene: [
          {required: true, message: '请输入', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('success')
        } else {
          this.$Message.error('fail')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
