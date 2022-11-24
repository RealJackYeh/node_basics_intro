// 獨立函式的 this 如何作用
//word1 = 'hey'
//{
function writeMsg(msg) {
    let word1 = 'Hey'
    console.log(`${this.word1}, ${msg}`)
}
word1 = 'Hello'
writeMsg('Jack Yeh')
writeMsg.call(global, 'Jack Yeh')
//}