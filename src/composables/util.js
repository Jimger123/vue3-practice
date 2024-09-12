import { ElNotification } from "element-plus";

//message notification
export function toast(message, type = "success",dangerouslyUseHTMLString) {
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration: 3000
    })
}