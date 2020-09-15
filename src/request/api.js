import {http} from './http'

//请求城市的接口
export function getCity(params) { 
    return request({ 
    url:'/api/v1/topics', 
    methods: 'get',
    params
        }) 
    } 

