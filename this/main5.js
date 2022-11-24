// 箭頭函式中的this 如何作用
let Obj1 = {
    word1: 'Hello',
    writeMsg() {
        return (msg) => console.log(`${this.word1}, ${msg}`)
    }
}
word1 = 'Hey'
// 透過物件呼叫 writeMsg()方法，而箭頭函式接著被呼叫時，它會在 writeMsg()方法找到一個this值
let writer = Obj1.writeMsg();
writer('Jack Yeh')
// 使用變數來呼叫writeMsg()函式，這會使得this指向全域物件
let writer2 = Obj1.writeMsg
let writer3 = writer2.call(global)
writer3('Jack Yeh 1')
