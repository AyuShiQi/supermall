import {request} from './request'

export let getHomeMultidata = () => {
    return request({
        url: '/home/multidata'
    })
}

export let getHomeGoods = (type,page) => {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}