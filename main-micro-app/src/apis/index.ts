
export const ApiLoginQuickly = (): Promise<{ data: string }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: 'should login' })
        }, 1000)
    })
}