<template>
  <Form :model='formItem1' ref='formItem1'>
    <FormItem label='题目名称'>
      <Input v-model='formItem1.input1' placeholder='请输入题目名称'></Input>
    </FormItem>
    <FormItem label='场景ID'>
      <Select v-model='formItem1.select'>
        <Option value='scene1'>scene1</Option>
        <Option value='scene2'>scene2</Option>
      </Select>
    </FormItem>
    <FormItem label='题目编号'>
      <Input v-model='formItem1.input2' placeholder='请输入'></Input>
    </FormItem>
    <FormItem label='详情'>
      <Input v-model='formItem1.textarea' type='textarea' :autosize='{minRows: 2, maxRow: 5}' placeholder='请输入详情'></Input>
    </FormItem>
    <FormItem
      v-for='(item, index) in formItem1.items'
      v-if='item.status'
      :key='index'
      :label='"item" + item.index'
      :prop='"items." + index + ".value"'
      :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
      <Row>
        <Col span='14'>
          <Input type='text' v-model='formItem1.input3' placeholder='请输入'></Input>
          <Input type='text' v-model='formItem1.input4' placeholder='请输入'></Input>
        </Col>
        <Col span='2' offset='1'>
          <Button type='ghost' @click='handleRemove(index)'>Delete</Button>
        </Col>
      </Row>
    </FormItem>
    <FormItem>
      <Row>
        <Col span='12'>
          <Button type='dashed' long @click='handleAdd' icon='plus-round'>Add Item</Button>
        </Col>
      </Row>
    </FormItem>
    <FormItem>
      <Button type='primary'>Submit</Button>
      <Button type='ghost' style='margin-left: 8px'>Reset</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'AddOptions',
  data () {
    return {
      formItem1: {
        input1: '',
        select: '',
        input2: '',
        textarea: '',
        input3: '',
        input4: '',
        index: 1,
        items: [
          {
            value: '',
            index: 1,
            status: 1
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    handleAdd () {
      this.index++
      this.formDynamic.items.push({
        value: '',
        index: this.index,
        status: 1
      })
    },
    handleRemove (index) {
      this.formDynamic.items[index].status = 0
    }
  }
}
</script>

<style lang="css">
</style>
