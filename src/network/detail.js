import { request } from "./request";


export let getGoodWithIID = iid => {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export let getRecommend = () => {
    return request({
        url: '/recommend'
    })
}