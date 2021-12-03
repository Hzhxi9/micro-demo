export const ApiGetUserInfo = (token: string): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    nickname: 'Hello',
                    gender: 1,
                    country: '中国',
                    province: '广东省',
                    city: '广州市'
                }
            })
        }, 1000)
    })
}