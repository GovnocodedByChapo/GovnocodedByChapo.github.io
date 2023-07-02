const heroes = [
    { codename: 'abaddon', pos: [1] },
    { codename: 'abyssal_underlord', pos: [1] },
    { codename: 'alchemist', pos: [1] },
    { codename: 'ancient_apparition', pos: [1] },
    { codename: 'antimage', pos: [1] },
    { codename: 'arc_warden', pos: [1] },
    { codename: 'armadillo', pos: [1] },
    { codename: 'axe', pos: [1] },
    { codename: 'bane', pos: [1] },
    { codename: 'batrider', pos: [1] },
    { codename: 'beastmaster', pos: [1] },
    { codename: 'bloodseeker', pos: [1, 2] },
    { codename: 'bounty_hunter', pos: [1] },
    { codename: 'brewmaster', pos: [1] },
    { codename: 'bristleback', pos: [1] },
    { codename: 'broodmother', pos: [1] },
    { codename: 'centaur', pos: [1] },
    { codename: 'chaos_knight', pos: [1] },
    { codename: 'chen', pos: [1] },
    { codename: 'clinkz', pos: [1] },
    { codename: 'crystal_maiden', pos: [1] },
    { codename: 'dark_seer', pos: [1] },
    { codename: 'dark_willow', pos: [1] },
    { codename: 'dawnbreaker', pos: [1] },
    { codename: 'dazzle', pos: [1] },
    { codename: 'death_prophet', pos: [1] },
    { codename: 'disruptor', pos: [1] },
    { codename: 'doom_bringer', pos: [1] },
    { codename: 'dragon_knight', pos: [1, 2] },
    { codename: 'drow_ranger', pos: [1] },
    { codename: 'earth_spirit', pos: [1] },
    { codename: 'earthshaker', pos: [1] },
    { codename: 'elder_titan', pos: [1] },
    { codename: 'ember_spirit', pos: [1] },
    { codename: 'enchantress', pos: [1] },
    { codename: 'enigma', pos: [1] },
    { codename: 'faceless_void', pos: [1] },
    { codename: 'furion', pos: [1] },
    { codename: 'grimstroke', pos: [1] },
    { codename: 'gyrocopter', pos: [1] },
    { codename: 'hoodwink', pos: [1] },
    { codename: 'huskar', pos: [1] },
    { codename: 'invoker', pos: [1] },
    { codename: 'jakiro', pos: [1] },
    { codename: 'juggernaut', pos: [1] },
    { codename: 'keeper_of_the_light', pos: [1] },
    { codename: 'kunkka', pos: [1] },
    { codename: 'legion_commander', pos: [1] },
    { codename: 'leshrac', pos: [1] },
    { codename: 'lich', pos: [1] },
    { codename: 'life_stealer', pos: [1] },
    { codename: 'lina', pos: [1] },
    { codename: 'lion', pos: [1] },
    { codename: 'lone_druid', pos: [1] },
    { codename: 'luna', pos: [1] },
    { codename: 'lycan', pos: [1] },
    { codename: 'magnataur', pos: [1] },
    { codename: 'marci', pos: [1] },
    { codename: 'mars', pos: [1] },
    { codename: 'medusa', pos: [1] },
    { codename: 'meepo', pos: [1] },
    { codename: 'mirana', pos: [1] },
    { codename: 'monkey_king', pos: [1] },
    { codename: 'morphling', pos: [1] },
    { codename: 'naga_siren', pos: [1] },
    { codename: 'necrolyte', pos: [1] },
    { codename: 'nevermore', pos: [1] },
    { codename: 'night_stalker', pos: [1] },
    { codename: 'nyx_assassin', pos: [1] },
    { codename: 'obsidian_destroyer', pos: [1] },
    { codename: 'ogre_magi', pos: [1] },
    { codename: 'omniknight', pos: [1] },
    { codename: 'oracle', pos: [1] },
    { codename: 'pangolier', pos: [1] },
    { codename: 'phantom_assassin', pos: [1, 2] },
    { codename: 'phantom_lancer', pos: [1, 2] },
    { codename: 'phoenix', pos: [1] },
    { codename: 'primal_beast', pos: [1] },
    { codename: 'puck', pos: [1] },
    { codename: 'pudge', pos: [1] },
    { codename: 'pugna', pos: [1] },
    { codename: 'queenofpain', pos: [1] },
    { codename: 'rattletrap', pos: [1] },
    { codename: 'razor', pos: [1] },
    { codename: 'riki', pos: [1] },
    { codename: 'rubick', pos: [1] },
    { codename: 'sand_king', pos: [1] },
    { codename: 'shadow_demon', pos: [1] },
    { codename: 'shadow_shaman', pos: [1] },
    { codename: 'shredder', pos: [1] },
    { codename: 'silencer', pos: [1] },
    { codename: 'skeleton_king', pos: [1] },
    { codename: 'skywrath_mage', pos: [1] },
    { codename: 'slardar', pos: [1] },
    { codename: 'slark', pos: [1] },
    { codename: 'snapfire', pos: [1] },
    { codename: 'sniper', pos: [1] },
    { codename: 'spectre', pos: [1] },
    { codename: 'spirit_breaker', pos: [1] },
    { codename: 'storm_spirit', pos: [1] },
    { codename: 'sven', pos: [1] },
    { codename: 'sylph', pos: [1] },
    { codename: 'techies', pos: [1] },
    { codename: 'templar_assassin', pos: [1] },
    { codename: 'terrorblade', pos: [1] },
    { codename: 'tidehunter', pos: [1] },
    { codename: 'tinker', pos: [1] },
    { codename: 'tiny', pos: [1] },
    { codename: 'treant', pos: [1] },
    { codename: 'troll_warlord', pos: [1] },
    { codename: 'tusk', pos: [1] },
    { codename: 'undying', pos: [1] },
    { codename: 'ursa', pos: [1] },
    { codename: 'vengefulspirit', pos: [1] },
    { codename: 'venomancer', pos: [1] },
    { codename: 'viper', pos: [1] },
    { codename: 'visage', pos: [1] },
    { codename: 'void_spirit', pos: [1] },
    { codename: 'warlock', pos: [1] },
    { codename: 'weaver', pos: [1] },
    { codename: 'windrunner', pos: [1] },
    { codename: 'winter_wyvern', pos: [1] },
    { codename: 'wisp', pos: [1] },
    { codename: 'witch_doctor', pos: [1] },
    { codename: 'zuus', pos: [1] },
];

const getHeroName = id => id.match(/^(?<name>.+)/)?.groups?.name?.split('_')?.map(v => v[0].toUpperCase() + v.slice(1))?.join(' ') ?? null;
const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
const getRandomHero = (positions) => {
    const list = heroes.filter( (hero) => {
        for (const posIndex of positions)
            if (hero.pos.includes(posIndex)) return true;
    });
    return list[getRandomInt(0, list.length - 1)];
};

const generateRandomHero = () => {
    const flags = [];
    for (let posIndex = 1; posIndex < 5; posIndex ++)
        if (document.getElementById(`pos${posIndex}`).checked) flags.push(posIndex);

    if (flags.length === 0) return alert('Choose position'); 
    const hero = getRandomHero(flags);
    console.log(hero);
    document.getElementById('heroImage').src = `https://raw.githubusercontent.com/GovnocodedByChapo/d2drp-dota2-discord-rich-presence/main/heroes/npc_dota_hero_${hero.codename}.gif`
    document.getElementById('heroName').textContent = getHeroName(hero.codename);
}
