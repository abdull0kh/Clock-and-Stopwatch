


// console.log(h,m,s,hours,minutes);


// let x = 0;
// function rec(){
//     console.log(x);

//     if(x < 10){
//         x++;
//         rec()
//     }
// }
// rec()

//* setTimeout - funksiyani  ma'lum bir  vaqt  oraligida  bir marta chaqirib  beradi

// let x = 0;
// function rec(){
//     console.log(x);

//     if(x < 10){
//         x++;

//         setTimeout(() =>{
//             rec()
//         }, 1000);
//     }
// }
// rec()


//* clearInterval - orqali toxtatsek  bo'ladi


// let x = 0;
// function rec(){
//     console.log(x);

//     let a;
//     if(x == 20){
//         clearInterval(a)
//     } else if (x < 50){
//         x++;
//         a = setTimeout(() => {
//             rec()
//         } , 1000);
//     }
// }
// rec()





let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')



function clock() {
  const time = new Date;

  let hourArrow = time.getHours()
  let minuteArrow = time.getMinutes()
  let secondArrow = time.getSeconds()

  //    console.log(hourArrow,minuteArrow,secondArrow);


  //   h.style.transform = ` rotate(90deg)`  


  h.style.transform = ` rotate(${hourArrow * 30}deg)`
  m.style.transform = ` rotate(${minuteArrow * 6}deg)`
  s.style.transform = ` rotate(${secondArrow * 6}deg)`

  setTimeout(() => {

    clock()
  }, 1000);


  hours.innerHTML = hourArrow < 10 ? '0' + hourArrow : hourArrow
  minutes.innerHTML = minuteArrow < 10 ? '0' + minuteArrow : minuteArrow

}

clock()



let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener('click', function () {

    for (let k = 0; k < tabsItem.length; k++) {
      tabsItem[k].classList.remove('active')
      tabsContentItem[k].classList.remove('active')
    }

    tabsItem[i].classList.add('active')
    tabsContentItem[i].classList.add('active')


  })
}



const

  watchBtn = document.querySelector('.stopwatch__btn'),
  secondWatch = document.querySelector('.stopwatch__seconds'),
  minuteWatch = document.querySelector('.stopwatch__minutes'),
  hoursWatch = document.querySelector('.stopwatch__hours'),
  secondInfo = document.querySelector('.tabsLink__span');


watchBtn.addEventListener('click', function () {
  if (this.innerHTML == 'start') {
    this.innerHTML = 'stop';
    secondInfo.classList.add('active')

    let i = 0;

    setTimeout(() => stopWatch(this, i), 1000)
  } else if (this.innerHTML == 'stop') {
    secondInfo.classList.remove('active');
    secondInfo.classList.add('active_clear');
    this.innerHTML = 'clear'
  }

  else {
    secondInfo.classList.remove('active_clear');
    this.innerHTML = 'start';
    secondWatch.innerHTML = 0;
    minuteWatch.innerHTML = 0;
    hoursWatch.innerHTML = 0;

  }

})


function stopWatch(el, i) {
  if (el.innerHTML == 'stop') {
    if (i == 60) {
      i = 0;
      secondWatch.innerHTML = i;

      if (minuteWatch.innerHTML == 59) {
        minuteWatch.innerHTML = 0;
        hoursWatch.innerHTML++
      } else {
        minuteWatch.innerHTML++
      }
    }
    else {
      i++
      secondWatch.innerHTML = i;
    }

    setTimeout(() => stopWatch(el, i), 1000)
  }
}



