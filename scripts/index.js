

const buttons = [
    {text: 'VK', url: 'https://vk.com/ya_chapo'},
    {text: 'Группа VK', url: 'https://vk.com/chaposcripts'},
    {text: 'Telegram', url: 'https://telegram.me/ya_chapo'},
    {text: 'Discord', url: 'https://discord.com/invite/4fNcFYE6WP'},
    {text: 'Профиль на BlastHack', url: 'https://www.blast.hk/members/112329/'},
    {text: 'GitHub', url: 'https://github.com/GovnocodedByChapo?tab=repositories'},
]

function openUrl(url) {
    document.location.href = url;
}

function drawButtons() {
    const div = document.getElementById('buttonsField')
    for (const button of buttons) {
        let newButton = document.createElement('button')
        newButton.setAttribute('class', 'cardButton')
        newButton.addEventListener('click', () => openUrl(button.url))
        newButton.textContent = button.text
        div.append(newButton)
        //alert(button.text)
    }
}

function createParticle(count = 50) {
    const div = document.getElementById('particlesdiv')
    for (let i = 0; i < count; i++) {
        let newp = document.createElement('span')
        newp.setAttribute('class', 'particle')
        newp.setAttribute('style', 'z-index: 0')
        div.append(newp)
        console.log('spawned')
    }
}

const main = () => {
    //alert('load')
    drawButtons();
    createParticle()
}