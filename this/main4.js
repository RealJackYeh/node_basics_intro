// 物件方法的this 如何作用
let Obj1 = {
    word1: 'Hello',
    writeMsg(msg) {
        console.log(`${this.word1}, ${msg}`)
    }
}
Obj1.writeMsg = Obj1.writeMsg.bind(Obj1)
Obj1.writeMsg('Jack Yeh')
//Obj1.writeMsg.call(Obj1, 'Jack Yeh')
word1 = 'Hey'
// 透過變數呼叫函式，不是透過物件呼叫，則 this 將指向全域物件
let myFun = Obj1.writeMsg
myFun('Jack Yeh')