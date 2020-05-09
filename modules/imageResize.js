// 参考サイト(http://salary.katsulabo.com/imageresize/)
const imageResize = {}
imageResize.resizeImage = (imgEL, maxSize, type = 'image/jpeg') =>
    new Promise(resolve => {
        let w = imgEL.naturalWidth
        let h = imgEL.naturalHeight
        const canvas = document.createElement('canvas')
        if (w >= h && w > maxSize) {
            // 横が長い　→　横の長さ：maxSize　縦の長さ：maxSize * h/w
            canvas.width = maxSize
            canvas.height = maxSize * h / w
        } else if (w < h && h > maxSize) {
            // 縦が長い　→　縦の長さ：maxSize　横の長さ：maxSize * w/h 
            canvas.width = maxSize * w / h
            canvas.height = maxSize
        } else {
            // 縦、横ともにmaxSize以下→縮小しない
            canvas.width = w
            canvas.height = h
        }
        canvas.getContext('2d').drawImage(imgEL, 0, 0, canvas.width, canvas.height)
        canvas.toBlob(resolve, type)
    })
imageResize.pFileReader = blob =>
    new Promise(resolve => {
        const fr = new FileReader()
        fr.readAsDataURL(blob)
        fr.onload = e => resolve(e.target.result)
    })
imageResize.pImage = src =>
    new Promise(resolve => {
        const img = new Image()
        img.src = src
        img.onload = e => resolve(img)
    })
export default imageResize
