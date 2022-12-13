import {request} from './request'

export let getHomeMultidata = () => {
    return request({
        url: '/home/multidata'
    })
}