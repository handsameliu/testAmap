import Vue from 'vue';
import Router from 'vue-router';
import AddressEdit from '../components/AddressEdit';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/AddressEdit',
            name: 'AddressEdit',
            component:AddressEdit
        },{
            path: '/Uploader',
            name: 'Uploader',
            component:resolve => require(['../components/Uploader'],resolve)
        },{
            path: '/Contact',
            name: 'Contact',
            component:resolve => require(['../components/Contact'],resolve)
        }
    ]
})
