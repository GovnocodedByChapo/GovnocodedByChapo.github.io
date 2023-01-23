const { Manipulation } = require("swiper")

const lessons = [
    {name: '���������', teacher: '��������� ����������'},
    {name: '����������� ������������', teacher: '��������� ����������'},
    {name: '������ �����������', teacher: '��������� ����������'},
    {name: '���������� ����', teacher: '��������������'},
    {name: '����������������', teacher: '��������� �������� ��������', classroom: 38},
    {name: '������ ������������� �����', teacher: '����� ����� ���� ���'},
    {name: '���������� ��������', teacher: '������� ������ �������������'},
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
        {name: '����������� ������������', teacher: '��������� ����������'},
        {name: '����������������', teacher: '��������� �������� ��������', classroom: 38},
        {name: '������ ������������� �����', teacher: '����� ����� ���� ���'},
    ],
    [
        {name: '������ �����������', teacher: '��������� ����������'},

        {name: '����������� ������������', teacher: '��������� ����������'},
        {name: '����������������', teacher: '��������� �������� ��������', classroom: 38},
    ], 
    [
        {name: '���������', teacher: '��������� ����������'},
        {name: '����������������', teacher: '��������� �������� ��������', classroom: 38},
        {name: '������ ������������� �����', teacher: '����� ����� ���� ���'},
        {name: '���������', teacher: '��������� ����������'},
    ], 
    [
        {name: '���������� ����', teacher: '��������������'},
        {name: '���������', teacher: '��������� ����������'},
        {name: '������ ������������� �����', teacher: '����� ����� ���� ���'},
        {name: '������ �����������', teacher: '��������� ����������'},
    ],
    [
        {name: '����������� ������������', teacher: '��������� ����������'},
        {name: '����������������', teacher: '��������� �������� ��������', classroom: 38},
        {name: '������ �����������', teacher: '��������� ����������'},
        {name: '������ ������������� �����', teacher: '����� ����� ���� ���'},
    ]
]

const getCurrentLessonIndex = () => {
    const date = new Date(Date.now())
    const h = 10//date.getHours()
    const m = 20//date.getMinutes()
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

const getCurrentLesson = () => {
    const dayIndex = 3//new Date(Date.now()).getDay() - 1
    const index = getCurrentLessonIndex();
    
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

console.log(getCurrentLesson())

function main() {
    const date = new Date(Date.now())
    const h = date.getHours()
    const m = date.getMinutes()
    alert(`Current Time: ${h}:${m}`)
    const currentLesson = getCurrentLesson();
    const nextLessonName = document.getElementById('nextLessonName');
    const nextLessonTip = document.getElementById('nextLessonTip');
    nextLessonName.textContent = currentLesson.name
    nextLessonTip.textContent = currentLesson.teacher + (currentLesson.classroom ? `(${currentLesson.classroom})` : '')
}