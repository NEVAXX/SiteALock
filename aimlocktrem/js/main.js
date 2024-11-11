const btn = document.getElementById('btn')
const divv = document.getElementById('main-center1')
const a = document.getElementById('ab')


btn.addEventListener('click', () => {
    const divv = document.getElementById('yea')
    divv.classList.toggle('aparecer')
})

divv.addEventListener('click', () => {
    const divv = document.getElementById('yea')
    divv.classList.remove('aparecer')
})

function navbarr(local) {
    if (local === 'main-products') {
        const divv = document.getElementById('yea')
        divv.classList.remove('aparecer')
        divv.classList.add('fadeOut')
    } else if (local === 'index.html') {
        const divv = document.getElementById('yea')
        divv.classList.remove('aparecer')
        divv.classList.add('fadeOut')
    } else if (local === 'showcase') {
        const divv = document.getElementById('yea')
        divv.classList.remove('aparecer')
        divv.classList.add('fadeOut')
    } else if (local === 'features') {
        const divv = document.getElementById('yea')
        divv.classList.remove('aparecer')
        divv.classList.add('fadeOut')
    } else if (local === 'ownerss') {
        const divv = document.getElementById('yea')
        divv.classList.remove('aparecer')
        divv.classList.add('fadeOut')
    }
    
}

async function profiles(userid, avatarId, globalnameId, usernameId, impulsoId) {
    const response = await fetch(`https://api.allorigins.win/get?url=https://docinho.xyz/api/profile/${userid}`);
    const data = await response.json();
    const profile = JSON.parse(data.contents);

    const avatarUrl = `https://cdn.discordapp.com/avatars/${profile.user.id}/${profile.user.avatar}.png`;
    const name = profile.user.username;
    const displayname = profile.user.global_name;
    const boost = profile.badges[1].id;

    const avatar = document.getElementById(avatarId);
    const globalname = document.getElementById(globalnameId);
    const username = document.getElementById(usernameId);
    const impulso = document.getElementById(impulsoId);
    globalname.innerText = displayname;
    username.innerText = name;
    avatar.src = avatarUrl;

    const boostMap = {
        'guild_booster_lvl1': './media/insignias/level1.webp',
        'guild_booster_lvl2': './media/insignias/level2.webp',
        'guild_booster_lvl3': './media/insignias/level3.webp',
        'guild_booster_lvl4': './media/insignias/level4.webp',
        'guild_booster_lvl5': './media/insignias/level5.webp',
        'guild_booster_lvl6': './media/insignias/level6.webp',
        'guild_booster_lvl7': './media/insignias/level7.webp',
        'guild_booster_lvl8': './media/insignias/level8.webp',
        'guild_booster_lvl9': './media/insignias/level9.webp'
    };


    if (boostMap[boost]) {
        impulso.src = boostMap[boost];
    } else {
        console.log('Badge de impulso não encontrada.');
    }
}

profiles('874342875964518480', 'avatar-1', 'globalname-1', 'username-1', 'impulso-1');
profiles('488179930140508160', 'avatar-2', 'globalname-2', 'username-2', 'impulso-2');