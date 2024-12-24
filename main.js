// 1. Funksiya uchun xato tashlash
// Shart:

//  Funksiya yozing, u berilgan sonni faktorialini hisoblaydi. Agar funksiyaga musbat son emas (masalan, manfiy son yoki satr) uzatilsa, throw yordamida xato tashlash kerak. Xato xabarida quyidagi mazmun bo‘lishi kerak:


//1- "Faktorialni hisoblash uchun musbat son kerak!"
// Funksiya try...catch orqali chaqirilganda:

// function fact(num) {
//    try {
//     if (num < 0 || !Number.isInteger(num)) {
//         throw new Error("Faktorialni hisoblash uchun musbat son kerak");
        
//     }
//     let res = 1;
//     for(let i = 1; i<= num; i++){
//         res *= i;
//     }
//     return res
//    } catch (error) {
//     console.log(22,error);
//    } 
// }

// console.log(fact(-3));


// 2-Xato yuz bersa, konsolga "Xato yuz berdi: xato haqida xabar" yozilsin.
// function xato(a,b) {
//     try {
//         if (b > a) {
//           throw new Error("Xato yuz berdi: 'a' dan 'b' kichik bulmasligi kerak");
//         }
//         return a < b;
//     } catch (error) {
//         console.log(37,error);
        
//     }
// }
// console.log(xato(12,2));

//3- Xato bo‘lmasa, natija qaytarilsin.

// function divide(a, b) {
//    if (b == 0) {
//      throw new Error("bo'luvchi 0ga teng bo'lishi mumkin emas");
//    }else{
//     console.log(a,b);
    
//    }
//    return a / b;
// }

// try {
//   console.log(a,b);
  
// } catch (error) {
//   console.log(55,error);
// }

// console.log(divide(12,2));




// 2. Array bilan ishlashda xatolarni boshqarish

// Shart:
//  Funksiya yozing, u massiv ichidagi sonlarning o‘rtacha qiymatini hisoblaydi. Funksiyada quyidagi holatlar uchun xatolarni tutish kerak:


// 1- Agar funksiya argument sifatida massiv qabul qilmasa yoki undefined bo‘lsa, xato tashlash kerak:

// Xato xabari: "Massiv uzatilmadi!".


//2- Agar massivda hech bo‘lmaganda bitta element son bo‘lmasa, xato tashlash kerak:

// Xato xabari: "Massivda faqat sonlar bo‘lishi kerak!".

//3- Xato yuz berganda try...catch orqali "Xato yuz berdi: xato haqida xabar" deb konsolga chiqaring.


// Funksiya xato bo‘lmasa, massivdagi barcha sonlarning o‘rtacha qiymatini qaytarishi kerak.
// function average(arr) {
//     if(typeof arr != 'object' || arr == undefined)
//         throw new TypeError("Massiv notogri berildi");
        

// let isExistNumber = arr.some(value=>{
//     return typeof value == 'number'
// })

// if (!isExistNumber) {
//     throw new Error("Ichida kamida bitta son bulishi kerak");
// }
// let sum = 0;
// let counter = 0;
// arr.forEach(value =>{
//     if (typeof value =='number') {
//         sum+= value;
//         counter++
//     }
// })
//  return sum / counter;
// }


// try {
//     let arr = [1,2,"salom",false]
//     console.log(average(arr));
    
// } catch (error) {
//     console.log(error);
// }
// 3. O‘z xatolik sinfini yaratish
// Shart:


// 1-O‘zingizning CustomError nomli xatolik sinfini yarating. Ushbu sinf konstruktoriga xabar va kod qabul qiladi (message va code).


//2- Funksiya yozing, u ikki sonni bo‘lishni bajaradi.

// Agar bo‘luvchi 0 bo‘lsa, CustomError yordamida "Bo‘luvchi nolga teng bo‘lmasligi kerak" deb xato tashlang.
//  Agar argumentlardan biri son bo‘lmasa, "Ikkala argument ham son bo‘lishi kerak" deb xato tashlang.


// 3-Funksiyani try...catch orqali chaqiring:

// Xato yuz bersa, console.error orqali xato xabarini va xato kodini chiqarish kerak.

// Xato bo‘lmasa, natijani qaytaring.
// function divide(a, b) {
//   if (b == 0) {
//     throw new Error("bo'luvchi 0ga teng bo'lishi mumkin emas");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(12,0));
// } catch (error) {
//   console.log(145, error);
// }




// Massivlarga oid masalalar  1-15


// 1-masala

// Funksiya yozing, massivdagi barcha juft sonlarni topib, ularning yig‘indisini qaytaruvchi.
// function sumfull(num) {
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i]
//   }
//   return sum
// }
// let sum = 0;
// let num = [1,2,3,4,5,6,7,8,9]
// console.log(sumfull(num));

// 2-masala

// Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan.
//   let toq = [1,2,3,4,5,6,7,8,9]
//  let res =  toq.filter(num =>{
//    return num % 2 != 1
//   })
//   console.log(res);
  

// 3-masala
// Funksiya yozing, massiv ichida nechta unikal element borligini aniqlaydigan.
// let num = [1,2,3,4,5,6,7,6,7,8,3]
// function unikal(num) {
//  return num.filter((value,index)=>{
//  return  num.indexOf(value)==index
//   }).length
// }
// console.log(unikal(num));


// 4-masala
// Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.
// function sum(num) {
//   const num1 = Math.max(...num)
//   const num2 = Math.min(...num);
//   return num1 - num2
// } 
// let num = [1,2,3,4,5,6,7,8,9,10]
// console.log(sum(num));


// 5-masala
// Funksiya yozing, massivning barcha elementlarini o‘zgartirmasdan teskari tartibda qaytaradigan.
// function sum(num) {
//   return num.reverse();
//   }
// let num = [1,2,3,4,5,6,7]
// console.log(sum(num));


// 6-masala
// Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.
// tushunmadim


// 7-masala
// Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.

// function res(num) {
//   return num.sort((a,b)=> a.length - b.length)
// }
// let num = ['Banan','Apelsin','Anor','Qulupnay','Hurmo']
// console.log(res(num));



// 8-masala
// Funksiya yozing, massivni ikki qismga bo‘lib, yangi massiv yaratadigan (birinchi yarmi va ikkinchi yarmi alohida massivlarda).
// function sum(num) {
//   let res = Math.floor(num.length/2)

//   let num1 = num.slice(0,res)
//   let num2 = num.slice(res)
//   return [num1,num2]
// }
// let num = [1,2,3,4,5,6,7,8,9,10]
// console.log(sum(num));



// 9-masala
// Funksiya yozing, massiv ichidan faqat musbat sonlarni yig‘ib yangi massiv yaratadigan.
// function sum(num) {
//   let res = num.filter(value =>value > 0)
//   return res
// }
// let num = [1,-2,3,4,-5,-6,7,8,9]
// console.log(sum(num));


// 10-masala
// Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.
// function sumfull(num) {
//     if (num.length == 0) {
//         return 0;
//     }

//  let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum += num[i]
// }
// return sum/num.length
// }
// let num = [1,2,3,4,5,6,7,8,9]
// let res = sumfull(num)
// console.log(res);

// 11-masala
// Funksiya yozing, massiv ichidagi barcha elementlarni ikki marta takrorlab qaytaradigan.
// function sum(num) {
//      let result = [];
//      for (let i = 0; i < num.length; i++) {
//         result.push(num[i],num[i])
//      }
//      return result
// }

// let num = [1,2,3,4,5,6,7]
// let res = sum(num)
// console.log(res);

// 12-masala
// Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan.
// function sum(num) {
//     return num.map(value=>{
//         if (typeof value == 'string' && value.length > 0 ) {
//             return value.charAt(0).toLocaleUpperCase()+value.slice(1).toLocaleLowerCase()
//         }
//         return value
//     })
// }
// let num = ['hello', 'world','bye','snow']
// let res = sum(num);
// console.log(res);


// 13-masala
// Funksiya yozing, massiv ichidagi raqamlar massivini saralash uchun, ammo tartibni belgilovchi flag qabul qilsin (o‘sish yoki kamayish tartibi).



// 14-masala
// // Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.

// function sumfull(num) {
//     if (num.length ==0) return [];

//      let uzun = num[0];
//      let qisqa = num[0];   
    
//    for (let i = 0; i < num.length; i++) {
//     if (num[i].length < qisqa.length) {
//         qisqa = num[i]
//     }
//     if (num[i].length > uzun.length) {
//         uzun = num[i]
//     }
//    }
//    return [qisqa, uzun];
    
// }
// let num = ['hurmo','banan','quluqnay','nok']
// console.log(sumfull(num));

// 15-masala
// Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun).
// function sum(num) {
//     return num.map(value => value.toString())
// }
// let num = [1,2,3,4,5,6]
// let res = sum(num);
// console.log(res);


// Stringlarga oid masalalar 16-25




// 16-masala
// Funksiya yozing, satr ichida nechta unli harf borligini qaytaradigan.
// function sum(num) {
    
// }


// 17-masala
// Funksiya yozing, berilgan satrdan barcha probellarni olib tashlaydigan va yangi satr qaytaradigan.

// function sum(str) {
//     return str.replace( / /,'')
// }
// let str='Hi Bro'
// let res = sum(str)
// console.log(res);

// 18-masala
// Funksiya yozing, satr ichidagi barcha so‘zlarni o‘zaro joyini almashtiradigan.
// function res(str) {
//     const word =str.split(' ');
//     for (let i = 0; i < word.length; i++) {
//         console.log(word[i]);
//     }
//     return word.reverse().join(' ')
// }
// let str = 'assalomu alekum hammaga'
// console.log(res(str));

// 19-masala
// Funksiya yozing, satr ichidagi so‘zlarni uzunligi bo‘yicha tartiblaydigan.
// function res(str) {
//     let strr = str.split(' ')
//     strr.sort((a,b)=> a.length - b.length)
//     return strr.join(' ')
// }
// let str = 'salom alekum bro'
// console.log(res(str));

// 20-masala
// Funksiya yozing, satr ichida ma’lum bir so‘z necha marta takrorlanganini aniqlaydigan.
// ishlay olmadim


// 21-masala
// Funksiya yozing, satr ichidagi barcha kichik harflarni katta harfga aylantiradigan va aksincha.
// function sum(str) {
//     return str.toUpperCase()
// }
// let str = "salom bolalar yaxwimiszlar"
// console.log(sum(str));


// 22-masala
// Funksiya yozing, satrdagi barcha raqamlarni yig‘indisini hisoblaydigan.
// function sumfull(str) {
//     let sum = 0;
//    for (let iterator of str) {
//     if (!isNaN(iterator) && iterator !== ' ') {
//       sum+= parseInt(iterator)
//     }
//    }
//    return sum
// }
// let res = sumfull('123asd4d58edwdq7sdid')
// console.log(res);

// 23-masala
// Funksiya yozing, satrdan faqat unikal harflarni qoldiradigan va takroriylarini olib tashlaydigan.



// 24-masala
// Funksiya yozing, satrdan barcha belgilarni o‘z o‘rniga teskari tartibda chiqaradigan.
// function res(str) {
//   return str.split('').reverse().join('')
// }

// let result = res("salomalekum")
// console.log(result);


// 25-masala
// Funksiya yozing, satr ichidagi barcha so‘zlarning birinchi harfini katta harfga o‘zgartiradigan.
// function sum(params) {
    
// }




// Massiv va string metodlarini birgalikda ishlatadigan masalalar  26-30


// 26-masala
// Funksiya yozing, satrdan barcha so‘zlarni massivga ajratadigan va so‘zlarni alfavit tartibida qaytaradigan.
// function sort(str) {
//   let text = str.split(" ").filter((text) => text !== ""); 
//   text.sort()
//   return text;
// }
// let str = "olma mandarin banan qulupnay malina anor ananas"
// console.log(sort(str));



// 27-masala
// Funksiya yozing, massiv ichidagi barcha so‘zlarni birlashtirib, yagona satr yaratadigan.

// function sum(arr) {
//   return arr.join(" ")
// }
// let arr = ["banan","olma","nok","kivi"]
// console.log(sum(arr));


// 28-masala
// Funksiya yozing, massiv ichidagi satrlardan uzunligi bo‘yicha eng katta bo‘lganini qaytaradigan.
// function sum(arr) {
//   return arr.reduce((a,b)=>{
// return a.length > b.length?
// a:b  })
// }
// let arr= ["olma","uzum","nok","hurmo"]
// console.log(sum(arr));



// 29-masala
// Funksiya yozing, massiv ichidagi har bir elementni teskari qilib, yangi massiv qaytaradigan.
// function sum(arr) {
//   return arr.map(value=> value.split('').reverse().join(''))
// }
// let arr = ["olma","banan","uzum","nok"]
// console.log(sum(arr));

// 30-masala
// Funksiya yozing, satr ichidagi barcha takrorlanmagan so‘zlarni ajratib, massivga joylashtiradigan.
// function sum(str) {
//   let words = str.split('').filter(word => word  !== '');
//   let res = [];

//   words.forEach(word=>{
//     if (words.indexOf(word)== words.lastIndexOf(word)) {
//       res.push(word)
//     }
//   })
//   return res
// }
// let result = sum("hurmo uzum mandarin kivi");
// console.log(result);
