let reviews = [
    {
        image: "https://avatars.mds.yandex.net/i?id=6bf75fc5350c7dcef03917c573fea14d87ba10a9-7015254-images-thumbs&n=13",
        title: "Креативный научно-фантастический мультсериал, который цепляет не по-детски!",
        name: "Морти",
        text: "Данный мультсериал снят в жанре научной фантастики и приключений, наполненных чёрным юмором. Он посвящён приключениям безумного учёного Рика и его наивного и робкого внука Морти. Сериал получился каким-то хулиганским, циничным, но при этом нельзя не отметить его оригинальность и превосходно-стёбное чувство юмора.",
        grade: "8 из 10",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=9937ef5b9671da34eb7ce2eeb64b731a814512ca-4371710-images-thumbs&n=13",
        title: "Строго 18+, пошлый (но угарный), временами кажется излишни идиотским и сумасшедшим!",
        name: "Джерри",
        text: "Некоторые серии в сериале пестрят отбойным юмором и приколами... Некоторые показались мне унылыми и скучноватыми. Но в целом, сериал оправдал все мои ожидания, я посмеялся от всей души, некоторые эпизоды перематывал по несколько раз",
        grade: "7 из 10",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=8876faad9595a9ef95ee2f003339f0a6e95be3a1-4429678-images-thumbs&n=13",
        title: "Скучный мультсериал, пропагандирующий сомнительные ценности!",
        name: "Саммер",
        text: "Сезоны раздуты из сюжетов на одну серию; черный юмор крайне редко выстреливает; в целом жаль потраченного времени. Три интересные и смешные серии (из трёх сезонов просмотренных)",
        grade: "3 из 10",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=ce832fa33bc0f38f7971ecaef3a52de1a98c7afb-8194230-images-thumbs&n=13",
        title: "Шикарно!",
        name: "Рик",
        text: "Приятно знать, что жанр сатирической телевизионной анимации еще не совсем зачах, и продолжает, пусть и редко, но радовать чем-то новеньким. Главное открытие за последние несколько лет - безумный, но чертовски смешной сериал «Рик и Морти»",
        grade: "10 из 10",
    },
  ]

const slider = document.getElementById("slider")
const prevButton = document.getElementById("prev-button")
const nextButton = document.getElementById("next-button")

let currentIndex = 0

prevButton.addEventListener("click", prevSlider)
nextButton.addEventListener("click", nextSlider)



function showReview() {
    let review = reviews[currentIndex]

    slider.innerHTML = `
        <div class = "slider__image">
            <img src ="${review.image}" class ="image-item"/>
        </div>
        <h2 class = "slider__title">${review.title}</h2>
        <P class = "slider__name">${review.name}</p>
        <P class = "slider__text">${review.text}</p>
        <P class = "slider__grade">${review.grade}</p>

    `
  }

  function nextSlider() {
    if (currentIndex >= reviews.length) {
        currentIndex = 0
    } else {
        currentIndex = currentIndex + 1
    }

    showReview()
  }

  function prevSlider() {
    if (currentIndex <= 0) {
        currentIndex = reviews.length
    } else {
        currentIndex = currentIndex - 1
    }

    showReview()
  }

  showReview()
