<template>
<div>
  <h3>设备管理</h3>
  <Table border :columns='columns7' :data='data6'></Table>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'EquipmentList',
  data () {
    return {
      columns7: [
        {
          title: '设备所属客户',
          key: 'Client'
        },
        {
          title: '设备所属编号',
          key: 'Number'
        },
        {
          title: '日期',
          key: 'InsertTime'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.revise(params)
                  }
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.discard(params)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data6: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData: function () {
      var that = this
      axios.get('http://192.168.1.116:8080/Box.Web/Manage/Equipment/GetAll')
        .then((res) => {
          console.log('res', res)
          if (res.data.State) {
            that.$Message.success('查询成功')
            that.data6 = res.data.Data
            console.log('data6', that.data6)
          } else {
            that.$Message.error('查询失败')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    revise (a) {
      console.log('修改', a)
      let _params = {
        ID: a.row.ID,
        Number: a.row.Number,
        Client: a.row.Client
      }
      this.$router.push({
        name: 'EquipmentList',
        params: _params
      })
    },
    discard (d) {
      console.log('d', d)
      let that = this
      let params = d.row.ID
      let Uindex = d.index
      axios.post('http://192.168.1.116:8080/Box.Web/Manage/Equipment/Delete', params)
        .then((res) => {
          if (res.data.State) {
            that.$Message.success('删除成功')
            that.data6.splice(Uindex, 1)
          } else {
            that.$Message.error('删除失败!')
          }
        })
    }
  }
}

</script>
