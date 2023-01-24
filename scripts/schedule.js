const lessons = [
    {name: 'Экономика', teacher: 'Городская сумашедшая'},
    {name: 'Организация деятельности', teacher: 'Городская сумашедшая'},
    {name: 'Основы менеджмента', teacher: 'Городская сумашедшая'},
    {name: 'Английский язык', teacher: 'Корабельникова'},
    {name: 'Электроснабжение', teacher: 'Буренкова Светлана Егоровна', classroom: 38},
    {name: 'Монтаж электрических сетей', teacher: 'Атоев Мурод Чето там'},
    {name: 'Физическая культура', teacher: 'Лагутин Кирилл Александрович'},
]

const alerts = [
    {start: {hour: 9, minute: 0}, end: {hour: 10, minute: 30}},
    {start: {hour: 10, minute: 40}, end: {hour: 12, minute: 10}},
    {start: {hour: 12, minute: 40}, end: {hour: 14, minute: 40}},
    {start: {hour: 14, minute: 50}, end: {hour: 16, minute: 20}},
    {start: {hour: 18, minute: 40}, end: {hour: 16, minute: 20}},
]

const schedule = [
    [
        {name: 'Организация деятельности', teacher: 'Городская сумашедшая'},
        {name: 'Электроснабжение', teacher: 'Буренкова Светлана Егоровна', classroom: 38},
        {name: 'Монтаж электрических сетей', teacher: 'Атоев Мурод Чето там'},
    ],
    [
        {name: 'Основы менеджмента', teacher: 'Городская сумашедшая'},

        {name: 'Организация деятельности', teacher: 'Городская сумашедшая'},
        {name: 'Электроснабжение', teacher: 'Буренкова Светлана Егоровна', classroom: 38},
    ], 
    [
        {name: 'Экономика', teacher: 'Городская сумашедшая'},
        {name: 'Электроснабжение', teacher: 'Буренкова Светлана Егоровна', classroom: 38},
        {name: 'Монтаж электрических сетей', teacher: 'Атоев Мурод Чето там'},
        {name: 'Экономика', teacher: 'Городская сумашедшая'},
    ], 
    [
        {name: 'Английский язык', teacher: 'Корабельникова'},
        {name: 'Экономика', teacher: 'Городская сумашедшая'},
        {name: 'Монтаж электрических сетей', teacher: 'Атоев Мурод Чето там'},
        {name: 'Основы менеджмента', teacher: 'Городская сумашедшая'},
    ],
    [
        {name: 'Организация деятельности', teacher: 'Городская сумашедшая'},
        {name: 'Электроснабжение', teacher: 'Буренкова Светлана Егоровна', classroom: 38},
        {name: 'Основы менеджмента', teacher: 'Городская сумашедшая'},
        {name: 'Монтаж электрических сетей', teacher: 'Атоев Мурод Чето там'},
    ]
]

function getCurrentLessonIndex() {
    const date = new Date(Date.now())
    const h = date.getHours()
    const m = date.getMinutes()
    for (let index = 0; index < alerts.length - 1; index++) {
        const start = alerts[index].start;
        const end = alerts[index].end;
        console.log('TESt', h >= start.hour)
        if ((start.hour <= h && end.hour >= h) && (start.minute < m && end.minute > m)) {
            console.log(`i:${index}, h:${h}, m:${m} || CondH: ${start.hour <= h && end.hour >= h}, CondM:${start.minute < m && end.minute > m}\nST:${start}\nEN:${end}`)
            return index;
        }
    }
    return -1;
}

function getCurrentLesson(offset = 0) {
    const dayIndex = new Date(Date.now()).getDay() - 1
    const index = getCurrentLessonIndex() + offset;
    
    if (index == -1) {
        return 'no result (lessonIndex == -1)'
    }

    if (!schedule[dayIndex]) {
        return `error, day ${dayIndex} not found in "schedule"`
    }

    if (!schedule[dayIndex][index]) {
        return `error, lesson with index ${index} not found in day ${dayIndex}`
    }
    console.log('day', dayIndex, 'index', index)

    return schedule[dayIndex][index]
}

function main() {
    const date = new Date(Date.now())
    const currentLesson = getCurrentLesson(1);
    const textName = currentLesson?.name ?? 'ERROR: currentLesson.name is NULL or UNDEFINED'
    const textTip = `${currentLesson?.teacher ?? 'teacher is UNDEFINED'} ${currentLesson?.classroom ?? ''}`
    console.log(textName, textTip)
    document.getElementById('nextLessonName').textContent = textName
    document.getElementById('nextLessonTip').textContent = textTip
    document.getElementById('servertimedebug').textContent = `ServerTime: ${date.getHours()}:${date.getMinutes()}`
}

function addCards() {
    console.log('load')
    let parent = document.getElementById('container')
    const day = new Date(Date.now()).getDay() - 1
    let index = 0;

    let w = document.createElement('div')
    w.setAttribute('class', 'swiper-wrapper')
    parent.appendChild(w)
    parent = w
    for (const lesson of schedule[day]) {
        index++
        console.log(lesson)
        let newCard = document.createElement('div')
        newCard.setAttribute('class', 'swiper-slide')

        let lessonIndex = document.createElement('h1')
        lessonIndex.textContent = index
        lessonIndex.setAttribute('class', 'lessonIndex')
        newCard.appendChild(lessonIndex)

        let lessonName = document.createElement('h1')
        lessonName.textContent = lesson.name
        lessonName.setAttribute('class', 'lessonName')
        newCard.appendChild(lessonName)

        const a = alerts[day-1]
        let lessonAlerts = document.createElement('h1')
        lessonAlerts.textContent = `${a.start.hour}:${a.start.minute} - ${a.end.hour}:${a.end.minute}`
        lessonAlerts.setAttribute('class', 'lessonAlerts')
        newCard.appendChild(lessonAlerts)

        let lessonInfo = document.createElement('h1')
        lessonInfo.textContent = lesson.teacher
        lessonInfo.setAttribute('class', 'lessonInfo')
        newCard.appendChild(lessonInfo)
        
        parent.append(newCard)
        
        // <div class="swiper-slide">
            {/* <h1 class="lessonIndex">Первая пара</h1> */}
            {/* <h1 class="lessonName">Lesson Name</h1> */}
            {/* <h1 class="lessonAlerts">9:00 - 10:30</h1> */}
            {/* <h1 class="lessonInfo">Teacher (#00)</h1> */}
        {/* </div> */}
    }
}



