
function chiq(text) {
    let bottom1 = document.getElementById(`bottom`).innerHTML = `<h2> ${text} </h2>`
}



document.getElementById(`BMI`).onclick =
    function () {

        let vazn = prompt(`vazningizni kiriting kg`)

        let boy = prompt(`boyingizni kiriting m`)
        let BMI = (vazn / (boy * boy)).toFixed(2)

        chiq(`sizning BMI ko'rsatkchingiz: ${BMI}`)
    }



document.getElementById(`yosh`).onclick =

    function () {
        let yil = prompt(`nechanchi yilda tug'ilgansiz?`)


        chiq(`sizning yoshingiz: ${2025 - yil} da`)
    }
document.getElementById(`pul`).onclick =

    function () {
        let dollar = prompt(`nechta dollarni almashtirmoqchisiz`)

        chiq(`siz oladigan summa: ${dollar * 12000} so'm`)
    }
document.getElementById(`soliq`).onclick =

    function () {
        let oylik = prompt(`oylik maoshingizni kiriting`)


        chiq(`sizning maoshingiz ${oylik}
        soliq miqdori: 12%
        soliqdan keyingi maoshingiz: ${oylik - (oylik * 0.12)}`)
    }
document.getElementById(`energiya`).onclick =


    function () {

        let tok = prompt(`nechta kwt ishlatdingiz`)

        if (tok < 200) {
            chiq(`siz to'laysiz: ${tok * 450} so'm`)
        }

        else if (200 < tok > 1000) {
            chiq(`siz to'laysiz: ${tok * 900} so'm`)
        }
        else if (1000 < tok > 5000) {
            chiq(`siz to'laysiz: ${tok * 1350} so'm`)
        }
        else if (5000 < tok < 10000) {
            chiq(`siz to'laysiz: ${tok * 1575} so'm`)
        }
    }

document.getElementById(`taom`).onclick =

    function () {
        let taom = ['osh', 'shashlik', 'manti', 'lag\'mon', 'norin', 'somsa', 'qozonkabob', 'chuchvara', 'shurva', 'mastava']


        let randomTaom = Math.floor(Math.random() * taom.length)

        chiq(`Bugungi tamongiz: ${taom[randomTaom]}`)
    }
document.getElementById(`yol`).onclick =

    function () {
        let mashina = prompt(`qaysi mashinada yuribsiz? (taxi, avtobus) faqat to'g'ri yozing`)

        let km = prompt(`necha km yo'l bosib o'tdingiz?`)

        if (mashina == `taxi`) {
            chiq(`siz to'laysiz: ${km * 1500} so'm`)
        }
        if (mashina == `avtobus`) {
            chiq(`siz to'laysiz: ${km * 200} so'm`)
        }
    }
document.getElementById(`byudjet`).onclick =

    function () {

        let daromad = prompt(`oylik daromadingizni kiriting`)

        let xarajat = prompt(`oylik xarajatingizni kiriting`)

        chiq(`sizning oylik byudjetingiz: ${daromad - xarajat} so'm`)
    }



document.getElementById(`soz`).onclick =

    function () {
        let soz = ['Hech qachon taslim bo\'lma!', 'Muvaffaqiyat kaliti mehnatda.', 'Harakat qilgin, natija albatta bo\'ladi.', 'Orzularingni ro\'yobga chiqaring!', 'Har bir kun yangi imkoniyatlar olib keladi.', 'Ishonch bilan oldinga yur!', 'Harakatlaring samara beradi.', 'O\'zingga ishon, hamma narsa mumkin!', 'Har doim eng yaxshisini kut!', 'Maqsadingga erishish uchun harakat qil!']


        let randomSoz = Math.floor(Math.random() * soz.length)

        chiq(` ${soz[randomSoz]}`)
    }
document.getElementById(`baho`).onclick =

    function () {
        let matematika = prompt(`matematika fanidan olgan bahoyingizni kiriting`)
        let fizika = prompt(`fizika fanidan olgan bahoyingizni kiriting`)
        let tarix = prompt(`tarix fanidan olgan bahoyingizni kiriting`)
        let ingiliz = prompt(`ingilis tili fanidan olgan bahoyingizni kiriting`)
        let informatika = prompt(`informatika fanidan olgan bahoyingizni kiriting`)
        let bialogiya = prompt(`bialogiya fanidan olgan bahoyingizni kiriting`)
        let kimyo = prompt(`kimyo fanidan olgan bahoyingizni kiriting`)
        let chizmachilik = prompt(`chizmachilik fanidan olgan bahoyingizni kiriting`)
        let texnalogiya = prompt(`texnalogiya fanidan olgan bahoyingizni kiriting`)
        let rus = prompt(`rus tili fanidan olgan bahoyingizni kiriting`)

        let orta = matematika + fizika + tarix + ingiliz + informatika + bialogiya + kimyo + chizmachilik + texnalogiya + rus / 10

        chiq(`sizning baholaringiz o'rtachasi: ${orta}`)

    }

















