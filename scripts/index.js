

const buttons = [
    {short: 'vk', text: 'VK', url: 'https://vk.com/ya_chapo'},
    {short: 'vk_group', text: 'ГРУППА В VK', url: 'https://vk.com/chaposcripts'},
    {short: 'tg', text: 'TELEGRAM', url: 'https://telegram.me/ya_chapo'},
    {short: 'discord', text: 'DISCORD', url: 'https://discord.com/invite/4fNcFYE6WP'},
    {short: 'bh', text: 'BlastHack', url: 'https://www.blast.hk/members/112329/'},
    {short: 'github', text: 'GITHUB', url: 'https://github.com/GovnocodedByChapo?tab=repositories'},
    {short: 'moonlogcheck', text: 'MoonLog Checker', url: 'https://govnocodedbychapo.github.io/moonlog.html'},
    {short: 'bitstreamgen', text: 'BitStream Generator', url: 'https://govnocodedbychapo.github.io/bitstream_generator.html'}
]

function openUrl(url) {
    window.location.replace(url)
    //document.location.href = url;
}

function drawButtons() {
    const div = document.getElementById('buttons')
    for (const button of buttons) {
        let newButton = document.createElement('button')
        newButton.setAttribute('class', 'urlbtn')
        newButton.addEventListener('click', () => openUrl(button.url))
        newButton.textContent = button.text
        div.append(newButton)
        //alert(button.text)
    }
}

function createParticle(count = 50) {
    //const div = document.getElementById('particlesdiv')
    //for (let i = 0; i < count; i++) {
    //    let newp = document.createElement('span')
    //    newp.setAttribute('class', 'particle')
    //    newp.setAttribute('style', 'z-index: 0')
    //    div.append(newp)
    //    console.log('spawned')
    //}
}

const domain = 'https://govnocodedbychapo.github.io/'

const main = () => {
    //alert('load')
    drawButtons();
    //createParticle();
    console.log('document.location', document.location.href)
    for (const item of buttons) {
        if (document.location.href.endsWith(item.short)) {
            openUrl(item.url)
        }
    }
    
}

function openSchedule() {
    window.open("schedule.html")
}
