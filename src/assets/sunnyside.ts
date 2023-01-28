/**
 * Sunnyside raw assets, crops and tiles are not stored in this repository
 * If you want access to these, you must download the asset pack from: https://danieldiggle.itch.io/sunnyside
 */

import { CONFIG } from "lib/config";

const { PROTECTED_IMAGE_PROXY, PROTECTED_IMAGE_URL } = CONFIG;
const protectedImageUrl = PROTECTED_IMAGE_PROXY || PROTECTED_IMAGE_URL;

export const SUNNYSIDE = {
  soil: {
    sand_dug: `${protectedImageUrl}/crops/sand_dug.png`,
    sand_hill: `${protectedImageUrl}/crops/sand_hill.png`,
    soil_dry: `${protectedImageUrl}/crops/soil_dry.png`,
    soil_not_fertile: `${protectedImageUrl}/crops/soil_not_fertile.png`,
    soil2: `${protectedImageUrl}/crops/soil2.png`,
  },
  icons: {
    arrow_down: `${protectedImageUrl}/icons/arrow_down.png`,
    arrow_left: `${protectedImageUrl}/icons/arrow_left.png`,
    arrow_right: `${protectedImageUrl}/icons/arrow_right.png`,
    arrow_up: `${protectedImageUrl}/icons/arrow_up.png`,
    basket: `${protectedImageUrl}/icons/basket.png`,
    cancel: `${protectedImageUrl}/icons/cancel.png`,
    close: `${protectedImageUrl}/icons/close.png`,
    confirm: `${protectedImageUrl}/icons/confirm.png`,
    disc_large: `${protectedImageUrl}/icons/disc_large.png`,
    disc: `${protectedImageUrl}/icons/disc.png`,
    drag: `${protectedImageUrl}/icons/drag.png`,
    expand: `${protectedImageUrl}/icons/expand.png`,
    expression_alerted: `${protectedImageUrl}/icons/expression_alerted.png`,
    expression_chat: `${protectedImageUrl}/icons/expression_chat.png`,
    expression_confused: `${protectedImageUrl}/icons/expression_confused.png`,
    hammer: `${protectedImageUrl}/icons/hammer.png`,
    heart: `${protectedImageUrl}/icons/heart.png`,
    helios: `${protectedImageUrl}/icons/helios_icon.png`,
    indicator: `${protectedImageUrl}/icons/indicator.png`,
    plant: `${protectedImageUrl}/icons/plant.png`,
    player: `${protectedImageUrl}/icons/player.png`,
    sad: `${protectedImageUrl}/icons/sad.png`,
    seedling: `${protectedImageUrl}/icons/seedling.png`,
    seeds: `${protectedImageUrl}/icons/seeds.png`,
    stopwatch: `${protectedImageUrl}/icons/stopwatch.png`,
    sunflorea: `${protectedImageUrl}/icons/sunflorea.png`,
    sword: `${protectedImageUrl}/icons/sword.png`,
    timer: `${protectedImageUrl}/icons/timer.png`,
    treasure: `${protectedImageUrl}/icons/treasure_icon.png`,
    water: `${protectedImageUrl}/icons/water.png`,
    happy: `${protectedImageUrl}/icons/happy.png`,
    neutral: `${protectedImageUrl}/icons/neutral.png`,
    unhappy: `${protectedImageUrl}/icons/sad.png`,
    stressed: `${protectedImageUrl}/icons/expression_stress.png`,
    death: `${protectedImageUrl}/icons/expression_attack.png`,
  },
  npcs: {
    betty: `${protectedImageUrl}/npcs/betty.gif`,
    bumpkin: `${protectedImageUrl}/npcs/idle.gif`,
    goblin_carry: `${protectedImageUrl}/npcs/goblin_carry.gif`,
    goblin_dig: `${protectedImageUrl}/npcs/goblin_dig.gif`,
    goblin_doing: `${protectedImageUrl}/npcs/goblin_doing.gif`,
    goblin_farting: `${protectedImageUrl}/npcs/goblin_farting.gif`,
    goblin_hammering: `${protectedImageUrl}/npcs/goblin_hammering.gif`,
    goblin_jumping: `${protectedImageUrl}/npcs/goblin_jumping.gif`,
    goblin_mining: `${protectedImageUrl}/npcs/goblin_mining.gif`,
    goblin_swimming: `${protectedImageUrl}/npcs/goblin_swimming.gif`,
    goblin_treasure: `${protectedImageUrl}/npcs/goblin_treasure.gif`,
    goblin_treasure_sheet: `${protectedImageUrl}/npcs/goblin_treasure_sheet.png`,
    goblin_watering: `${protectedImageUrl}/npcs/goblin_watering.gif`,
    goblin: `${protectedImageUrl}/npcs/goblin.gif`,
    human_carry: `${protectedImageUrl}/npcs/human_carry.gif`,
    idle: `${protectedImageUrl}/npcs/idle.gif`,
    moonseeker_death: `${protectedImageUrl}/npcs/skeleton_death.gif`,
    moonseeker_walk: `${protectedImageUrl}/npcs/skeleton_walk.gif`,
    moonseeker2: `${protectedImageUrl}/npcs/skeleton2.png`,
    moonseeker3: `${protectedImageUrl}/npcs/skeleton3.png`,
    moonseeker4: `${protectedImageUrl}/npcs/skeleton4.png`,
    moonseeker5: `${protectedImageUrl}/npcs/skeleton5.png`,
    swimmer: `${protectedImageUrl}/npcs/swimmer.gif`,
    watering: `${protectedImageUrl}/npcs/watering.gif`,
    wheat_goblin: `${protectedImageUrl}/npcs/wheat_goblin.gif`,
  },
  resource: {
    chicken: `${protectedImageUrl}/resources/chicken.png`,
    clam_shell: `${protectedImageUrl}/resources/clam_shell.png`,
    coral: `${protectedImageUrl}/resources/coral.png`,
    crab: `${protectedImageUrl}/resources/crab.png`,
    diamond: `${protectedImageUrl}/resources/diamond.png`,
    egg: `${protectedImageUrl}/resources/egg.png`,
    magic_mushroom: `${protectedImageUrl}/resources/magic_mushroom.png`,
    boulder: `${protectedImageUrl}/resources/rare_mine.png`,
    sea_cucumber: `${protectedImageUrl}/resources/sea_cucumber.png`,
    small_stone: `${protectedImageUrl}/resources/small_stone.png`,
    starfish: `${protectedImageUrl}/resources/starfish.png`,
    stone: `${protectedImageUrl}/resources/stone.png`,
    stump: `${protectedImageUrl}/resources/stump.png`,
    tree: `${protectedImageUrl}/resources/tree.png`,
    wild_mushroom: `${protectedImageUrl}/resources/wild_mushroom.png`,
    wood: `${protectedImageUrl}/resources/wood.png`,
  },
  tools: {
    axe: `${protectedImageUrl}/tools/axe.png`,
    fishing_rod: `${protectedImageUrl}/tools/fishing_rod.png`,
    hammer: `${protectedImageUrl}/tools/hammer.png`,
    iron_pickaxe: `${protectedImageUrl}/tools/iron_pickaxe.png`,
    power_shovel: `${protectedImageUrl}/tools/power_shovel.png`,
    rusty_shovel: `${protectedImageUrl}/tools/rusty_shovel.png`,
    sand_shovel: `${protectedImageUrl}/tools/sand_shovel.png`,
    shovel: `${protectedImageUrl}/tools/shovel.png`,
    stone_pickaxe: `${protectedImageUrl}/tools/stone_pickaxe.png`,
    wood_pickaxe: `${protectedImageUrl}/tools/wood_pickaxe.png`,
  },
  ui: {
    cursor: `${protectedImageUrl}/ui/cursor.png`,
    round_button: `${protectedImageUrl}/ui/round_button.png`,
    select_box: `${protectedImageUrl}/ui/select_box.png`,
  },
  decorations: {
    treasure_chest: `${protectedImageUrl}/decorations/treasure_chest.png`,
    treasure_chest_opened: `${protectedImageUrl}/decorations/treasure_opened.png`,
  },
};
