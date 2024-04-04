import { ElMessage } from 'element-plus'

export const successMsg = (msg: string) => {
    ElMessage({
        message: msg,
        type: 'success'
    })
}
export const warningMsg = (msg: string) => {
    ElMessage({
        message: msg,
        type: 'warning'
    })
}
export const messageMsg = (msg: string) => {
    ElMessage({
        message: msg,
        type: 'info'
    })
}
export const errorMsg = (msg: string) => {
    ElMessage({
        message: msg,
        type: 'error'
    })
}