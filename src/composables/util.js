import { ElNotification, ElMessageBox } from "element-plus";

//message notification
export function toast(message, type = "success", dangerouslyUseHTMLString) {
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration: 3000
    })
}

export function showModel(content = "提示内容", type = "warning", title= "") {
    return ElMessageBox.confirm(
        content,
        title,
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type,
        }
      )

}