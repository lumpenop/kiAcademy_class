// function go(){
//     console.log('go');
// }

// const 아반떼 = (callback) =>{
//     callback();
// }

// 아반떼(go);

// function 소나타(callback){
//     callback();
// }

// 소나타(go);




// 비동기 방식을 위해 callback 함수 사용
// 그냥 callback으로만 구현하면 callback hell에 빠지기 때문에 Promise 객체를 사용

// 비동기 ajax, 구글맵에서 끊김 없이 데이터 통신, 끝나는 시점이 다른 두 프로세스?



// const pr = new Promise( (resolve, reject) => {
//     //code
// }) 


/*
{
    state:pending(대기)
    result:undifined
}
{
    state:fulfilled(이행) // resolve의 인자를 받는다
    result:""
}
// {
//     state:rejected(거부)    // reject의 인자를 받는다
//     result:""
// }
// */


// const pr = new Promise( (resolve, reject) => {
//     reject('실패');
//     resolve('성공'); 
// }) 


// pr.then((result)=>{ 
//     // then()은 state가  fulfilled일 때만 실행됨
//     console.log(result);
    
// }).catch((error)=>{
//     // catch()는 rejected에서만 실행됨
//     console.log(error);
// })

// // 프로미스 체인

// const 아반떼 = () => {
//     return new Promise((resolve, reject)=>{ // Object로 return
//         setTimeout(()=>{
//             reject('아반떼');
//         },2000);
//     })
// }


// const 소나타 = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('소나타');
//         },2000);
//     })
// }

// const 그랜져 = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('그랜져');
//         },2000);
//     })
// }


// // 아반떼().then((result)=>{ //프로미스 객체 형태기 떄문에 then() 사용 가능
// //     console.log(result);
// //     return 소나타();
// // }).then((result)=>{
// //     console.log(result);
// //     return 그랜져();
// // }).then((result)=>{
// //     console.log(result);
// // }).catch((error)=>{
// //     console.log(error);
// // }).finally(()=>{
// //     console.log('the end');
// // })


// //Array, 중간에 하나라도 reject일 경우 error
// console.time('x');
// Promise.all([아반떼(),소나타(),그랜져()]).then((result)=>{
//     console.log(result);
//     console.timeEnd('x');
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('the end');
// })



// // try, catch


// try{
//     let a = 'hello';
//     throw b;
// }catch(e){
//     console.log(e);
// }


// function f(){
//     try{
//         console.log(0);
//         throw 'error'; // error를 발생시키고 코드블럭 나감, throw Object
//         console.log(4);
//     } catch(e){
//         console.log(1);
//         return true;
//     } finally{
//         console.log(2);
//     }
// }

// f();




// async function 자동차(name){ //결과가 Promise 객체로 반환됨
//     return Promise.reject(name);
// }

// 자동차('아반떼').then(result => {
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('end');
// })


function 자동차(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(name);
        },3000);
    })
}

async function 자동차리스트(){
    const carName = await 자동차('아반떼'); 
    // async 안에서 대기할 수 있게 하는
    console.log(carName);
    const carName2 = await 자동차('소나타'); 
    console.log(carName2);
    const carName3 = await 자동차('그랜져'); 
    console.log(carName3);
}
자동차리스트();

async function 자동차리스트2(){
    const carName = 자동차('아반떼2'); 
    // async 안에서 대기할 수 있게 하는
    console.log(carName);
}


