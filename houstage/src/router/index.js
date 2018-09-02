import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddEquipment from '@/components/AddEquipment'
import EquipmentList from '@/components/EquipmentList'
import AddScene from '@/components/AddScene'
import SceneList from '@/components/SceneList'
import AddOptions from '@/components/AddOptions'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '1-1',
          name: 'AddEquipment',
          component: AddEquipment
        },
        {
          path: '1-2',
          name: 'EquipmentList',
          component: EquipmentList
        },
        {
          path: '1-3',
          name: 'AddScene',
          component: AddScene
        },
        {
          path: '1-4',
          name: 'SceneList',
          component: SceneList
        },
        {
          path: '1-5',
          name: 'AddOptions',
          component: AddOptions
        },
        {
          path: '1-6',
          name: 'SceneList',
          component: SceneList
        }
      ]
    }
  ]
})
