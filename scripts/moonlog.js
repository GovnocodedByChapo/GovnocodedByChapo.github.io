const errors = [
    {
        pattern: "'(.+)' expected near '(.+)'",
        tip: '%s ожидается рядом с %s'
    },
    {
        pattern: "module '(.+)' not found:",
        tip: 'Модуль %s не найден'
    },
    {
        pattern: "unexpected symbol near '(.+)'",
        tip: 'Неизвестный символ рядом с "%s"'
    },
    {
        pattern: "'(.+)' expected near '(.+)'",
        tip: '"%s" ожидается рядом с "%s"'
    },
    {
        pattern: "'(.+)' expected \(to close '(.+)' at line (.+)\) near '<eof>'",
        tip: 'ожидается "%s" для закрытия "%s", которая начинается со строки %s'
    },
    {
        pattern: "attempt to call global '(.+)' \(a nil value\)",
        tip: 'Не удается вызвать %s (пустое значение)'
    },
    {
        pattern: "cannot load incompatible bytecode",
        tip: 'Скрипту требуется другая версия MoonLoader'
    },
    {
        pattern: "table overflow",
        tip: 'Таблица переполнена'
    },
    {
        pattern: "attempt to index (.+) '(.+)' \(a nil value\)",
        tip: 'не удается получить доступ к %s, значение "%s" не указано (%s == nil)'
    },
    {
        pattern: "samp\.events requires SAMPFUNCS",
        tip: 'Для работы SAMP.lua необходимо установить SAMPFUNCS ( https://www.blast.hk/threads/17/ )'
    }
]

const libs = {
    'imgui': 'https://www.blast.hk/threads/19292/',
    'mimgui': 'https://www.blast.hk/threads/66959/',
    'samp.events': 'https://www.blast.hk/threads/14624/',
    'lib.samp.events': 'https://www.blast.hk/threads/14624/',
    'faIcons': 'https://www.blast.hk/threads/111224/',
    'fAwesome5': 'https://www.blast.hk/threads/111224/',
    'fAwesome6': 'https://www.blast.hk/threads/111224/',
    'lanes': 'https://www.blast.hk/threads/122603/post-977695',
    'requests': 'https://www.blast.hk/threads/16031/post-182937',
    'SAMemory': 'https://google.com',
    'lfs': 'https://www.blast.hk/threads/16031/post-815938',
    'crypto_lua': 'https://google.com',
    'imgui_addons': 'https://google.com'
}

String.format = function(string, items) {
    for (const val of items) string = string.replace('%s', val);
    return string;
}

function showErrors(text) {
    const list = text.split('\n');
    const info = {
        moonloaderVersion: 'none',
        totalErrors: 0
    }

    for (const line of list) {
        info.moonloaderVersion = line.match(/MoonLoader (.+) loaded./)?.[1] ?? info.moonloaderVersion;
        let data = line.match(/\[\d+:\d+:\d+\.\d+\]\s\(error\)\s+(.+):\s.+:(\d+):\s(.+)/);
        if (!data) continue;
        info.totalErrors++;
        let tip = null;

        // check for module error ("module '*' not found")
        const moduleError = data[3].match(/module '(.+)' not found/)
        if (moduleError) {
            tip = `Модуль "${moduleError[1]}" не найден. ${!libs[moduleError[1]] ? 'Ссылка на скачивание не найдена' : ''}`
            appendError(data, tip, libs[moduleError[1]] ? {
                text: `СКАЧАТЬ "${moduleError[1]}"`,
                url: libs[moduleError[1]],
                style: 'border-width:1px'
            } : null);
            continue
        }

        // get error description
        const error = data[3];
        for (const err of errors) {
            const result = error.match(err.pattern)
            if (!result) continue;
            tip = String.format(err.tip, result.slice(1, 4))
        }
        appendError(data, tip)
    }
    document.getElementById('moonloaderVersion').textContent = `версия moonloader: ${info.moonloaderVersion}`
    document.getElementById('errorsCount').textContent = `Найденные ошибки: ${info.totalErrors}`
}

function appendError(data, tip, button) {
    let div = document.createElement('div');
    div.setAttribute('class', 'mlerror');

    let title = document.createElement('h3');
    title.textContent = `${data[1]} (${data[2]}): ${data[3]}`;
    div.appendChild(title);

    if (tip) {
        let h_tip = document.createElement('h4');
        h_tip.textContent = tip ?? 'Решение данной проблемы не найдено :(';
        div.appendChild(h_tip);
    }

    if (button) {
        let buttonElement = document.createElement('button');
        buttonElement.textContent = button?.text ?? 'none';
        buttonElement.setAttribute('style', button?.style ?? '')
        buttonElement.onclick = () => window.location = button?.url ?? 'https://google.com' 
        div.appendChild(buttonElement)
    }
    
    document.getElementById('errorsList').appendChild(div);
}

function readText(filePath) {
    const reader = new FileReader();
    let output = "";
    if (filePath.files && filePath.files[0]) {           
        reader.onload = function (e) {
            output = e.target.result;
            showErrors(output);
        };
        reader.readAsText(filePath.files[0]);
    } else if(ActiveXObject && filePath) {
        try {
            reader = new ActiveXObject("Scripting.FileSystemObject");
            const file = reader.OpenTextFile(filePath, 1); 
            output = file.ReadAll();
            file.Close()
            showErrors(output);
        } catch (e) {
            if (e.number == -2146827859) {
                alert(`Unable to access local files due to browser security settings.
To overcome this, go to Tools->Internet Options->Security->Custom Level.
Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"`); 
            }
        }       
    } else {
        return false;
    }       
    return true;
}   