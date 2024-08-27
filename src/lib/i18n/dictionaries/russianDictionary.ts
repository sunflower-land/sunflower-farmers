import { ENGLISH_TERMS } from "./englishDictionary";
import {
  AchievementsTerms,
  Auction,
  AddSFL,
  AvailableSeeds,
  Base,
  BasicTreasure,
  Beehive,
  BirdiePlaza,
  BoostDescriptions,
  BoostEffectDescriptions,
  BountyDescription,
  BuildingDescriptions,
  BumpkinDelivery,
  BumpkinItemBuff,
  BumpkinPart,
  BumpkinPartRequirements,
  BumpkinSkillsDescription,
  BumpkinTrade,
  BuyFarmHand,
  ClaimAchievement,
  Chat,
  ChickenWinner,
  ChoresStart,
  ChumDetails,
  Community,
  CompostDescription,
  ComposterDescription,
  ConfirmSkill,
  ConfirmationTerms,
  Conversations,
  CropBoomMessages,
  CropFruitDescriptions,
  CropMachine,
  CropsAndChickensMessages,
  DeliveryItem,
  DefaultDialogue,
  DecorationDescriptions,
  Delivery,
  DeliveryHelp,
  DepositWallet,
  Detail,
  DiscordBonus,
  Donation,
  DraftBid,
  ErrorAndAccess,
  ErrorTerms,
  ExoticShopItems,
  Factions,
  FestiveTree,
  FishDescriptions,
  FishermanModal,
  FishermanQuest,
  FishingChallengeIntro,
  FishingGuide,
  FishingQuests,
  FlowerBed,
  Flowerbreed,
  FlowerShopTerms,
  FoodDescriptions,
  GameDescriptions,
  GameOptions,
  GameTerms,
  GarbageCollector,
  GeneralTerms,
  GenieLamp,
  GetContent,
  GetInputErrorMessage,
  GOBLIN_MESSAGES,
  GoldTooth,
  GreenhouseKeys,
  GuideCompost,
  GuideTerms,
  Harvestflower,
  HarvestBeeHive,
  HayseedHankV2,
  Helper,
  HeliosSunflower,
  HenHouseTerms,
  Islandupgrade,
  InteractableModals,
  IntroPage,
  IslandName,
  IslandNotFound,
  LandscapeTerms,
  Leaderboard,
  LevelUpMessages,
  Loser,
  LostSunflorian,
  MegaStore,
  Minigame,
  ModalDescription,
  Noaccount,
  NoBumpkin,
  NoTownCenter,
  NotOnDiscordServer,
  NFTMinting,
  NPC_MESSAGE,
  Npc,
  NpcDialogues,
  NyeButton,
  ObsessionDialogue,
  Offer,
  Onboarding,
  OnCollectReward,
  OrderHelp,
  Pending,
  PersonHood,
  PirateChest,
  PirateQuest,
  Pickserver,
  PlayerTrade,
  Portal,
  PurchaseableBaitTranslation,
  Quest,
  Questions,
  Reaction,
  ReactionBud,
  Refunded,
  RemoveCropMachine,
  RemoveHungryCaterpillar,
  RemoveKuebiko,
  Resale,
  ResourceTerms,
  Restock,
  RetreatTerms,
  Resources,
  RewardTerms,
  RulesGameStart,
  RulesTerms,
  SceneDialogueKey,
  SeasonTerms,
  Share,
  SharkBumpkinDialogues,
  ShopItems,
  ShowingFarm,
  SnorklerDialogues,
  SomethingWentWrong,
  SpecialEvent,
  Statements,
  StopGoblin,
  Swarming,
  TieBreaker,
  ToolDescriptions,
  TransactionTerms,
  TranslationKeys,
  Transfer,
  TreasureModal,
  TutorialPage,
  VisitislandEnter,
  VisitislandNotFound,
  Wallet,
  WarningTerms,
  WelcomeTerms,
  WishingWell,
  Withdraw,
  Winner,
  WornDescription,
  World,
  MilestoneMessages,
  Event,
  Promo,
  Trader,
  NyonStatue,
  Trading,
  TimeUnits,
  PwaInstall,
  GoblinTrade,
  RestrictionReason,
  Username,
  EasterEggKeys,
  ChangeLanguage,
  FactionShopDescription,
  GuideFactionPet,
  DesertKeys,
  MarketplaceTerms,
} from "./types";

const generalTerms: Record<GeneralTerms, string> = {
  "2x.sale": "2x монет",
  achievements: "Достижения",
  "amount.matic": "Сумма в MATIC",
  deposit: "Внести",
  add: "Добавить",
  addSFL: "Добавить SFL",
  "add.liquidity": "Добавить ликвидность",
  "alr.claim": "Уже получено!",
  "alr.completed": "Уже завершено",
  "alr.crafted": "Уже создано",
  "alr.minted": "Уже сминчено!",
  "are.you.sure": "Ты уверен?",
  auction: "Аукцион",
  available: "Доступно",
  back: "Назад",
  bait: "Наживка",
  balance: "Баланс",
  "balance.short": "Бал",
  banner: "Баннер",
  banners: "Баннеры",
  basket: "Корзина",
  beta: "Бета",
  bid: "Ставка",
  bounty: "Сокровища",
  build: "Построить",
  buy: "Купить",
  cancel: "Отмена",
  "card.cash": "Карта / Наличные",
  check: "Проверить",
  chest: "Сундук",
  chores: "Список дел",
  "choose.wisely": "Выбирай с умом!",
  claim: "Забрать",
  "claim.gift": "Забрать подарок",
  "claim.skill": "Получить навык",
  clear: "Очистить",
  close: "Закрыть",
  coins: "Монеты",
  collect: "Собрать",
  "coming.soon": "Скоро",
  completed: "Завершено",
  complete: "Завершить",
  confirm: "Подтвердить",
  congrats: "Поздравляем",
  connecting: "Подключение",
  continue: "Продолжить",
  cook: "Приготовить",
  copied: "Скопировано",
  "copy.address": "Скопировать адрес",
  "copy.link": "Скопировать ссылку",
  "copy.failed": "Копирование не удалось",
  coupons: "Купоны",
  craft: "Создать",
  crops: "Растения",
  danger: "Опасно",
  date: "Дата",
  deliver: "Доставить",
  deliveries: "Доставки",
  "deliveries.closed": "Доставки билетов закрыты",
  delivery: "Доставка",
  details: "Подробнее",
  donate: "Пожертвовать",
  donating: "Жертвуем",
  donations: "Пожертвования",
  earn: "Заработай",
  "easter.eggs": "Пасхальные яйца",
  egg: "Яйцо",
  empty: "Пусто",
  "enjoying.event": "Наслаждаешься этим событием?",
  equip: "Экипировка",
  error: "Ошибка",
  exchange: "Обмен",
  exotics: "Экзотика",
  "expand.land": "Расширяй свою территорию",
  expand: "Расширить",
  expired: "Закончился",
  explore: "Исследовать",
  faction: "Фракция",
  farm: "Ферма",
  featured: "Рекомендуемый",
  fee: "комиссия",
  "feed.bumpkin": "Покормить бампкина",
  fertilisers: "Удобрения",
  fish: "Рыба",
  "fish.caught": "Поймано рыбы: ",
  flowers: "Цветы",
  "flowers.found": "Найденные цветы",
  foods: "Еда",
  for: "для",
  forbidden: "Запрещено",
  free: "Бесплатно",
  fruit: "Фрукт",
  fruits: "Фрукты",
  gift: "Подарить",
  "go.home": "Домой",
  gotIt: "Понятно",
  "grant.wish": "Исполнить желание",
  greenhouse: "Теплица",
  growing: "растет",
  guide: "Гайд",
  honey: "Мед",
  "hungry?": "Голоден?",
  info: "Инфо",
  item: "Предмет",
  inventory: "Инвентарь",
  land: "Земля",
  landscaping: "Благоустройство",
  "last.updated": "Последнее обновление",
  "lets.go": "Погнали!",
  limit: "Лимит",
  "linked.wallet": "Подключенный кошелек",
  list: "Список",
  "list.trade": "Выставить",
  loading: "Загрузка",
  locked: "Недоступно",
  "loser.refund": "Вернуть ресурсы",
  lvl: "Уровень",
  maintenance: "Технические работы",
  "make.wish": "Загадать желание",
  "making.wish": "Загадываем желание",
  marks: "Марки",
  max: "Максимум",
  "max.reached": "Достигнут максимум",
  minimum: "Минимум",
  mint: "Сминтить",
  minting: "Минтится",
  music: "Музыка",
  next: "Следующее",
  "next.order": "Следующий заказ",
  nextSkillPtLvl: "Следующий скилл-поинт на уровне",
  no: "Нет",
  "no.delivery.avl": "Больше нет доставок",
  "no.limits.exceeded": "Лимиты не превышены",
  "no.mail": "Нет писем",
  "no.obsessions": "Нет одержимостей",
  "no.thanks": "Нет, спасибо",
  "ocean.fishing": "Рыбалка в океане",
  off: "Выключено",
  "offer.end": "Предложение заканчивается через ",
  ok: "Ок",
  on: "В",
  open: "Открыть",
  opened: "Открыто",
  optional: "Дополнительно",
  "open.gift": "Открыть подарок",
  place: "Место",
  "place.map": "Место на карте",
  "place.bid": "Сделать ставку",
  "placing.bid": "Делаем ставку",
  plant: "Посадить",
  player: "Игрок",
  "play.again": "Сыграть снова",
  "please.try.again": "Пожалуйста, попробуй позже.",
  "pay.attention.feedback": "Обрати внимание на значки обратной связи",
  print: "Распечатать",
  purchased: "куплено",
  purchasing: "Покупаем",
  rank: "Ранг",
  "read.more": "Подробнее",
  refresh: "Обновить",
  refreshing: "Обновляем",
  remaining: "осталось",
  "remaining.free.listings": "Осталось {{listingsRemaining}} продаж",
  "remaining.free.listing": "Осталась 1 продажа",
  "remaining.free.purchases": "Осталось {{purchasesRemaining}} покупок",
  "remaining.free.purchase": "Осталась 1 покупка",
  remove: "Удалить",
  reqSkillPts: "Необходимо скилл-поинтов",
  reqSkills: "Необходимые навыки",
  required: "Необходимое",
  requires: "Требуется",
  requirements: "Требования",
  resources: "Ресурсы",
  "resource.nodes": "Ноды ресурсов",
  restock: "Пополнить запасы",
  retry: "Попробовать снова",
  reward: "Награда",
  "reward.discovered": "Получена награда",
  "reward.whatsNew": "Что нового",
  sale: "Распродажа",
  save: "Сохранить",
  saving: "Сохранение",
  searching: "Ищем",
  seeds: "Семена",
  selected: "Выбрано",
  "select.resource": "Выбери ресурс: ",
  sell: "Продать",
  "sell.all": "Продать все",
  "sell.one": "Продать 1",
  "sell.ten": "Продать 10",
  "sell.inBulk": "Продать партию",
  "session.expired": "Сессия истекла!",
  share: "Поделиться",
  skillPts: "Очки навыков",
  skills: "Навыки",
  skipped: "Пропущено",
  skipping: "Пропускаем",
  "skip.order": "Пропустить заказ",
  "sound.effects": "Звуковые эффекты",
  start: "Начать",
  submit: "Отправить",
  submitting: "Отправляем",
  success: "Успех!",
  swapping: "Меняем",
  syncing: "Синхронизируем",
  task: "Задание",
  test: "Тест",
  "thank.you": "Спасибо!",
  "time.remaining": "Оставшееся время: {{time}}",
  tools: "Инструменты",
  total: "Всего",
  trades: "Сделки",
  trading: "Торгуем",
  transfer: "Отправить",
  "try.again": "Попробовать еще раз",
  uhOh: "ой-ой!",
  "unlock.land": "Открой больше земель",
  unlocking: "Открываем",
  unmute: "Включить звук",
  upcoming: "Следующие",
  "use.craft": "Используется для создания предметов",
  verify: "Проверить",
  version: "Версия",
  viewAll: "Просмотреть все",
  visit: "Посетить",
  warning: "Предупреждение",
  welcome: "Добро пожаловать!",
  "wishing.well": "Колодец желаний",
  withdraw: "Вывести",
  wish: "желание",
  yes: "Да",
  "yes.please": "Да, пожалуйста",
  opensea: ENGLISH_TERMS["opensea"],
  layouts: "Схемы",
  labels: "Ярлыки",
  buff: "Буст",
  speed: "Скорость",
  treasure: "Сокровище",
  special: "Особый",
  default: "По умолчанию",
  formula: "Формула",
  chill: "Спокойный",
  full: "Полный",
  collectibles: "Коллекционные предметы",
  collectible: "Коллекционный предмет",
  cosmetic: "Косметика",
  buds: "Бады",
  wearables: "Одежда",
  wearable: "Предмет одежды",
  skip: "Пропустить",
  docs: "Документация",
  exit: "Выйти",
  compost: "Загрузить",
  chicken: "Курица",
  recipes: "Рецепты",
  unlocked: "Разблокировано",
  reel: "Подсечь",
  "new.species": "Новые виды",
  buildings: "Строения",
  boosts: "Усилители",
  decorations: "Украшения",
  decoration: "Украшение",
  "sfl/coins": "SFL/Монеты",
  vipAccess: "VIP-доступ",
  bought: "Купил",
  "sell.amount": "Продать {{amount}}",
};

const timeUnits: Record<TimeUnits, string> = {
  // Full Singular
  "time.second.full": "секунда",
  "time.minute.full": "минута",
  "time.hour.full": "час",
  "time.day.full": "день",

  // Full Plural
  "time.seconds.full": "секунд",
  "time.minutes.full": "минут",
  "time.hours.full": "часов",
  "time.days.full": "дней",

  // Medium Singular
  "time.sec.med": "сек",
  "time.min.med": "мин",
  "time.hr.med": "ч",
  "time.day.med": "день",

  // Medium Plural
  "time.secs.med": "сек",
  "time.mins.med": "мин",
  "time.hrs.med": "ч",
  "time.days.med": "дней",

  // Short
  "time.second.short": "с",
  "time.minute.short": "м",
  "time.hour.short": "ч",
  "time.day.short": "д",

  // Relative Time
  "time.seconds.ago": "{{time}} {{secondORseconds}} назад",
  "time.minutes.ago": "{{time}} {{minuteORminutes}} назад",
  "time.hours.ago": "{{time}} {{hourORhours}} назад",
  "time.days.ago": "{{time}} {{dayORdays}} назад",
};

const achievementTerms: Record<AchievementsTerms, string> = {
  "breadWinner.description": "Заработать 0,001 SFL",
  "breadWinner.one": "Так-так-так, приятель.. Кажется, тебе нужно немного SFL!",
  "breadWinner.two":
    "В Sunflower Land, большой запас SFL - это ключ к созданию инструментов, строений и редких NFT",
  "breadWinner.three":
    "Выращивание и продажа урожая - это самый быстрый способ заработка SFL.",

  "sunSeeker.description": "Собрать Sunflower 100 раз",
  "cabbageKing.description": "Собрать Cabbage 200 раз",
  "jackOLantern.description": "Собрать Pumpkin 500 раз",
  "coolFlower.description": "Собрать Cauliflower 100 раз",
  "farmHand.description": "Собрать урожай 10,000 раз",
  "beetrootBeast.description": "Собрать Beetroot 2,000 раз",
  "myLifeIsPotato.description": "Собрать Potato 5,000 раз",
  "rapidRadish.description": "Собрать Radish 200 раз",
  "twentyTwentyVision.description": "Собрать Carrot 10,000 раз",
  "stapleCrop.description": "Собрать Wheat 10,000 раз",
  "sunflowerSuperstar.description": "Собрать Sunflower 100,000 раз",
  "bumpkinBillionaire.description": "Заработать 5,000 SFL",
  "patientParsnips.description": "Собрать Parsnip 5,000 раз",
  "cropChampion.description": "Собрать урожай 1 миллион раз",

  "busyBumpkin.description": "Достичь 2 уровня",
  "busyBumpkin.one":
    "Привет, мой амбициозный друг! Для открытия новых растений, участков земли, строений и многого другого, тебе придется повышать свой уровень.",
  "busyBumpkin.two":
    "Загляни в Fire Pit, приготовь вкусное блюдо согласно рецепту и покорми им своего бампкина.",

  "kissTheCook.description": "Приготовить 20 блюд",
  "bakersDozen.description": "Испечь 13 тортов",
  "brilliantBumpkin.description": "Достичь 20 уровня",
  "chefDeCuisine.description": "Приготовить 5,000 блюд",

  "scarecrowMaestro.description":
    "Создай Scarecrow, чтобы увеличить количество урожая",
  "scarecrowMaestro.one":
    "Привет, приятель! Пришло время научить тебя искусству крафта предметов и улучшить твои фермерские навыки",
  "scarecrowMaestro.two":
    "Отправляйся на Плазу, загляни к Blacksmith и создай Scarecrow.",

  "bigSpender.description": "Потратить 10 SFL",
  "museum.description":
    "Разместить 10 различных редких предметов на своей земле",
  "highRoller.description": "Потратить 7500 SFL",
  "timbeerrr.description": "Срубить 150 деревьев",
  "craftmanship.description": "Создать 100 инструментов",
  "driller.description": "Добыть камень 50 раз",
  "ironEyes.description": "Добыть железо 50 раз",
  "elDorado.description": "Добыть золото 50 раз",
  "timeToChop.description": "Создать 500 топоров",
  "canary.description": "Добыть камень 1000 раз",
  "somethingShiny.description": "Добыть железо 500 раз",
  "bumpkinChainsawAmateur.description": "Срубить 5000 деревьев",
  "goldFever.description": "Добыть золото 500 раз",

  // Explorer
  "explorer.one":
    "Давай соберем немного древесины, срубив эти деревья, и расширим остров. Вперёд! Узнай, как лучше всего это сделать!",
  "expansion.description": "Расширить свою землю до новых горизонтов.",

  // Well of Prosperity
  "wellOfProsperity.description": "Построить колодец",
  "wellOfProsperity.one": "Так-так-так, что тут у нас?",
  "wellOfProsperity.two":
    "Кажется, твоему урожаю нужна вода. Чтобы выращивать большее количество урожая, сначала нужно построить колодец.",

  "contractor.description": "Разместить 10 строений",
  "fruitAficionado.description": "Собрать 50 фруктов",
  "fruitAficionado.one":
    "Привет, сборщик фруктов! Фрукты — это самые сладкие дары природы, которые наполняют твою ферму ярким разнообразием вкусов.",
  "fruitAficionado.two":
    "Собирая различные фрукты, такие как яблоки, апельсины и голубику, ты разблокируешь уникальные рецепты, улучшишь свои кулинарные навыки и создашь восхитительные угощения",

  "orangeSqueeze.description": "Собрать Orange 100 раз",
  "appleOfMyEye.description": "Собрать Apple 500 раз",
  "blueChip.description": "Собрать Blueberry 5000 раз",
  "fruitPlatter.description": "Собрать фрукты 50000 раз",
  "crowdFavourite.description": "Завершить 100 доставок",

  "deliveryDynamo.description": "Завершить 3 доставки",
  "deliveryDynamo.one":
    "Привет, надежный фермер! Бампкины со всей округи нуждаются в твоей помощи с доставкой.",
  "deliveryDynamo.two":
    "Доставляя заказы, ты сделаешь их счастливыми и получишь взамен SFL, в качестве награды",

  "seasonedFarmer.description": "Собрать 50 сезонных ресурсов",
  "seasonedFarmer.one":
    "Привет, сезонный авантюрист! Sunflower Land известен своими особыми сезонами, которые наполнены уникальными предметами и сюрпризами.",
  "seasonedFarmer.two":
    "Собирая Сезонные ресурсы, ты получишь доступ к ограниченным по времени наградам, эксклюзивным крафтам и редким сокровищам. Это как оказаться в первом ряду, наслаждаясь всеми чудесами сезона.",
  "seasonedFarmer.three":
    "Для полного наслаждения всем тем, что может предложить тебе Sunflower Land, выполняй задания, участвуй в событиях и собирай Сезонные Билеты!",
  "treasureHunter.description": "Выкопать 10 ям",
  "treasureHunter.one":
    "Эхей, искатель сокровищ! Sunflower Land кишит спрятанными сокровищами, которые так и ждут своего часа.",
  "treasureHunter.two":
    "Хватай лопату и отправляйся на Остров Сокровищ, где ты можешь выкопать ценные предметы и редкие сюрпризы.",
  "eggcellentCollection.description": "Собрать яйца 10 раз",
  "eggcellentCollection.one":
    "Хэй, собиратель яиц! Куры — замечательные фермерские компаньоны, которые обеспечивают нас вкусными яйцами.",
  "eggcellentCollection.two":
    "Собирая яйца, у тебя будет свежий запас ингредиентов для приготовления еды, и также откроются особые рецепты и бонусы.",
};

const auction: Record<Auction, string> = {
  "auction.title": "Аукцион",
  "auction.bid.message": "Ты сделал ставку.",
  "auction.reveal": "Показать победителей",
  "auction.live": "Аукцион стартовал!",
  "auction.requirement": "Ставки в",
  "auction.start": "Старт через",
  "auction.period": "Период аукциона",
  "auction.closed": "Аукцион завершен",
  "auction.const": "Новые аукционы не за горами...",
  "auction.const.soon": "Эта функция скоро появится.",
};

const addSFL: Record<AddSFL, string> = {
  "addSFL.swapDetails":
    "Sunflower Land предоставляет быстрый способ обмена Matic на SFL с помощью Quickswap.",
  "addSFL.referralFee":
    "Sunflower Land берет комиссию в размере 5% за совершение сделки.",
  "addSFL.swapTitle": "Детали Обмена",
  "addSFL.minimumReceived": "Минимум: {{sflReceived}} SFL",
};

const availableSeeds: Record<AvailableSeeds, string> = {
  "availableSeeds.select": "Семя не выбрано",
  "availableSeeds.select.plant": "Какое семя ты бы хотел выбрать и посадить?",
  "quickSelect.empty": "Нет тепличных семян.",
  "quickSelect.purchase": "Сначала купи {{name}} в магазине.",
  "quickSelect.label": "Быстрый выбор",
  "quickSelect.cropSeeds": "Семена",
  "quickSelect.greenhouseSeeds": "Семена для теплицы",
};

const base: Record<Base, string> = {
  "base.far.away": "Ты слишком далеко",
  "base.iam.far.away": "Я слишком далеко",
};

const basicTreasure: Record<BasicTreasure, string> = {
  "giftGiver.description":
    "Поздравляем, ты нашел одного из гифтгиверов! Каждый день ты можешь получать от них бесплатный приз.",
  "giftGiver.label": "Гифтгивер",
  "basic.treasure.missingKey": "Отсутствует ключ",
  "basic.treasure.needKey":
    "Тебе нужен Treasure Key, чтобы открыть этот сундук",
  "rare.treasure.needKey": "Тебе нужен Rare Key, чтобы открыть этот сундук",
  "luxury.treasure.needKey": "Тебе нужен Luxury Key, чтобы открыть этот сундук",
  "basic.treasure.getKey":
    "Ты можешь получать Treasure Keys, помогая бампкинам с заданиями",
  "basic.treasure.congratsKey": "Поздравляю, у тебя есть Treasure Key!",
  "basic.treasure.openChest": "Хочешь ли ты открыть сундук и забрать награду?",
  "budBox.open": "Открыть",
  "budBox.opened": "Уже открыт сегодня",
  "budBox.title": "Сундук бадов",
  "budBox.description":
    "Каждый день определенный вид бада поможет получить тебе награду.",
  "budBox.today": "Сегодня - {{timeLeft}} осталось",
  "raffle.title": "Розыгрыш от гоблинов",
  "raffle.description":
    "Каждый месяц у тебя есть шанс выиграть награды. Победители будут объявлены в Discord.",
  "raffle.entries": "записи",
  "raffle.noTicket": "Отсутствует Prize Ticket",
  "raffle.how":
    "Prize Tickets можно получить бесплатно, участвуя в особых событиях и осуществляя доставки бампкинам.",
  "raffle.enter": "Участвовать",
};

const beehive: Record<Beehive, string> = {
  "beehive.harvestHoney": "Собрать Honey",
  "beehive.noFlowersGrowing": "Нет растущих цветов",
  "beehive.beeSwarm": "Пчелиный рой",
  "beehive.pollinationCelebration":
    "Праздник опыления! Твои посевы получают +0.2 к урожаю от дружелюбного пчелиного роя!",
  "beehive.honeyProductionPaused": "Производство меда остановлено",
  "beehive.yield": "Доход",
  "beehive.honeyPerFullHive": "{{multiplier}} меда/полный сбор",
  "beehive.speed": "Скорость",
  "beehive.fullHivePerDay": "{{speed}} полного {{hive}} / день",
  "beehive.estimatedFull": "Ожидаемое заполнение",
  "beehive.hive.singular": "улей",
  "beehive.hives.plural": "улья",
};

const birdiePlaza: Record<BirdiePlaza, string> = {
  "birdieplaza.birdieIntro":
    "Привет, я - Birdie, самый красивый бампкин в округе!",
  "birdieplaza.admiringOutfit":
    "Я заметила, что ты восхищаешься моим нарядом. Ну разве он не великолепен?!?",
  "birdieplaza.currentSeason":
    "На данный момент мы в {{currentSeason}} сезоне, и бампкины сходят с ума по {{seasonalTicket}}.",
  "birdieplaza.collectTickets":
    "Собери достаточно {{seasonalTicket}} и ты сможешь купить редкие NFTs. Так у меня и появился этот редкий наряд!",
  "birdieplaza.whatIsSeason": "Что такое сезон?",
  "birdieplaza.howToEarnTickets": "{{seasonalTicket}}’ы?",
  "birdieplaza.earnTicketsVariety":
    "Ты можешь заработать {{seasonalTicket}} различными способами.",
  "birdieplaza.commonMethod":
    "Самый распространенный способ заработать {{seasonalTicket}} - это собирать ресурсы и доставлять их бампкинам в плазе.",
  "birdieplaza.choresAndRewards":
    "Ты также можешь заработать {{seasonalTicket}} за прохождение списка дел у Hank’а и собирая ежедневные награды!",
  "birdieplaza.gatherAndCraft":
    "Собери достаточно {{seasonalTicket}} и ты сможешь купить некоторые редкие предметы, как я.",
  "birdieplaza.newSeasonIntro":
    "Каждые 3 месяца в Sunflower Land начинается новый сезон.",
  "birdieplaza.seasonQuests":
    "В этом сезоне тебя ждут увлекательные задания и редкие коллекционные предметы, которые ты можешь заработать.",
  "birdieplaza.craftItems":
    "Чтобы купить эти предметы, ты должен собирать {{seasonalTicket}} и обменивать их в магазинах или в аукционном доме.",
};

const boostDescriptions: Record<BoostDescriptions, string> = {
  // Mutant Chickens
  "description.speed.chicken.one":
    "Твои куры теперь будут производить яйца на 10% быстрее.",
  "description.speed.chicken.two": "Яйца производятся на 10% быстрее",
  "description.fat.chicken.one":
    "Твои куры теперь будут требовать на 10% меньше Wheat на корм.",
  "description.fat.chicken.two": "На корм курице нужно на 10% меньше пшеницы",
  "description.rich.chicken.one":
    "Твои куры теперь будут производить на 10% больше яиц.",
  "description.rich.chicken.two": "Производится на 10% больше яиц",
  "description.ayam.cemani": "Самая редкая курица на свете!",
  "description.el.pollo.veloz.one":
    "Твои куры будут нести яйца на 4 часа быстрее!",
  "description.el.pollo.veloz.two":
    "Дай мне эти яйца, быстро! Яйца несутся на 4 часа быстрее.",
  "description.banana.chicken":
    "Курица, которая повышает урожай бананов. В каком мире мы живем.",
  "description.pharaoh.chicken": "Правящий цыпленок, +1 копка.",

  // Boosts
  "description.lab.grow.pumpkin": "+0.3 к урожаю Pumpkin",
  "description.lab.grown.radish": "+0.4 к урожаю Radish",
  "description.lab.grown.carrot": "+0.2 к урожаю Carrot",
  "description.purple.trail":
    "Завораживающий и уникальный Purple Trail оставит за твоими противниками след зависти",
  "description.obie": "Свирепый баклажановый солдат",
  "description.maximus": "Раздави соперников с помощью пухлого Maximus",
  "description.mushroom.house":
    "Причудливый грибной дом, в котором очарованием пропитаны не только стены, но и мебель!",
  "description.Karkinos":
    "Колючий, но добрый. Отличное дополнение к твоей ферме в виде буста к cabbage!",
  "description.heart.of.davy.jones":
    "Тот, кто владеет этим, обладает огромной властью над семью морями, может без устали копать сокровища",
  "description.tin.turtle":
    "Tin Turtle дает +0.1 к Stones, которые ты добываешь в области ее действия.",
  "description.emerald.turtle":
    "Emerald Turtle дает +0.5 к любым минералам, которые ты добываешь в области ее действия.",
  "description.iron.idol":
    "Idol добавляет 1 iron каждый раз, когда ты добываешь iron.",
  "description.crim.peckster":
    "Детектив, который обладает умением находить Crimstones.",
  "description.knight.chicken":
    "Сильная и благородная курица поможет тебе с добычей нефти..",
  "description.skill.shrimpy":
    "Shrimpy's здесь, чтобы помочь! Он позаботится о том, чтобы ты получил дополнительный опыт с рыбы.",
  "description.soil.krabby":
    "Быстрое просеивание с улыбкой! Крабообразный чемпион, увеличивающий скорость компостирования на 10%.",
  "description.nana":
    "Эта редкая прелесть - верный способ увеличить урожай твоих бананов.",
  "description.grain.grinder":
    "Перемалывай зерна и получай аппетитный прирост к опыту с тортов!",
  "description.kernaldo": "Волшебный заклинатель кукурузы.",
  "description.kernaldo.1":
    "Волшебный заклинатель кукурузы. +25% скорости роста corn.",
  "description.poppy": "Мистическое кукурузное зерно.",
  "description.poppy.1": "Мистическое кукурузное зерно. +0.1 Corn с урожая.",
  "description.victoria.sisters": "Сестры, любящие тыкву",
  "description.undead.rooster":
    "Несчастная жертва войны. Производство яиц увеличивается на 10%.",
  "description.observatory": "Изучай звезды и улучшай научное развитие",
  "description.engine.core": "Сила подсолнуха",
  "description.time.warp.totem":
    "Время роста урожая(овощи и фрукты), готовки, восстановления минералов и деревьев уменьшается на 50%. Длится только 2 часа",
  "description.time.warp.totem.expired":
    "Срок действия твоего Time Warp Totem закончился. Отправляйся на Плазу, чтобы найти и создать больше волшебных предметов, которые улучшат твои фермерские навыки!",
  "description.time.warp.totem.temporarily":
    "Time Warp Totem временно дает буст к времени роста урожая, готовки, восстановления минералов и деревьев. Используй его по максимуму!",
  "description.cabbage.boy": "Не разбуди ребенка!",
  "description.cabbage.girl": "Тссс, она спит",
  "description.wood.nymph.wendy":
    "Накладывает чары для того, чтобы завлечь лесный фей.",
  "description.peeled.potato":
    "Прекрасный картофель, поощряет бонусным картофелем при сборе.",
  "description.potent.potato":
    "Мощный! Дает 3% шанс на получение +10 potatoes при сборе.",
  "description.radical.radish":
    "Коренной! Дает 3% шанс на получение +10 radishes при сборе.",
  "description.stellar.sunflower":
    "Звездный! Дает 3% шанс на получение +10 sunflowers при сборе.",
  "description.lady.bug":
    "Потрясающая букашка, которая питается тлей. Улучшает качество яблок.",
  "description.squirrel.monkey":
    "Естественный оранжевый хищник. Апельсиновые деревья пугаются, когда Squirrel Monkey рядом с ними.",
  "description.black.bearry":
    "Его любимое лакомство - пухлая, сочная голубика. Съедает её горстями!",
  "description.maneki.neko":
    "Манящая кошка. Потяни ее за ручку, и удача придет",
  "description.easter.bunny": "Редкий пасхальный предмет",
  "description.pablo.bunny": "Волшебный Easter bunny",
  "description.foliant": "Книга заклинаний.",
  "description.tiki.totem":
    "Tiki Totem добавляет 0.1 wood к каждому дереву, которое ты рубишь.",
  "description.lunar.calendar":
    "Растения теперь следуют лунному циклу! Скорость роста культур увеличивается на 10%.",
  "description.heart.davy.jones":
    "Тот, кто владеет этим, обладает огромной властью над семью морями, может без устали копать сокровища.",
  "description.treasure.map":
    "Зачарованная карта, которая приведет владельца к ценным сокровищам. +20% прибыли с пляжных сокровищ.",
  "description.genie.lamp":
    "Волшебная лампа, в которой живет джин, исполняющий три твоих желания.",
  "description.basic.scarecrow":
    "Увеличивает урожай находящихся рядом Sunflowers, Potatoes и Pumpkins.",
  "description.scary.mike":
    "Увеличивает урожай находящихся рядом Carrots, Cabbages, Soybeans, Beetroots, Cauliflowers и Parsnips",
  "description.laurie.chuckle.crow":
    "Увеличивает урожай находящихся рядом Eggplant, Corn, Radish, Wheat и Kale",
  "description.immortal.pear": "Увеличивает время жизни фруктовых лунок.",
  "description.bale": "Бустит находящихся рядом кур.",
  "description.sir.goldensnout":
    "Член королевской семьи, Sir Goldensnout наполняет твою ферму процветанием благодаря своему золотому навозу.",
  "description.freya.fox":
    "Очаровательная хранительница, своим мистическим шармом увеличивает скорость роста pumpkin. Собери много pumpkins под ее пристальным взглядом.",
  "description.queen.cornelia":
    "Воспользуйся силой Queen Cornelia и испытай внушительное увеличение урожая corn в области ее действия. +1 Corn.",
};

const resourceTerms: Record<ResourceTerms, string> = {
  "chicken.description": "Используется для откладывания яиц",
  "magicMushroom.description":
    "Используется для приготовления продвинутых блюд",
  "wildMushroom.description": "Используется для приготовления базовых блюд",
  "honey.description": "Используется для подслащивания твоих блюд",
};

const boostEffectDescriptions: Record<BoostEffectDescriptions, string> = {
  "description.obie.boost": "-25% времени роста Eggplant",
  "description.purple.trail.boost": "+0.2 Eggplant",
  "description.freya.fox.boost": "+0.5 Pumpkin",
  "description.sir.goldensnout.boost": "+0.5 урожая (область 4x4)",
  "description.maximus.boost": "+1 Eggplant",
  "description.basic.scarecrow.boost": "-20% времени роста",
  "description.scary.mike.boost": "+0.2 к средним растениям",
  "description.laurie.chuckle.crow.boost": "+0.2 к продвинутым растениям",
  "description.bale.boost": "+0.2 Eggs",
  "description.immortal.pear.boost": "+1 к сбору фруктов",
  "description.treasure.map.boost": "+20% монет за продажу сокровищ",
  "description.poppy.boost": "+0.1 Corn",
  "description.kernaldo.boost": "-25% времени роста Corn",
  "description.grain.grinder.boost": "+20% опыта с торта",
  "description.nana.boost": "-10% времени роста Banana",
  "description.soil.krabby.boost": "-10% времени компостирования у Composter",
  "description.skill.shrimpy.boost": "+20% опыта с рыбы",
  "description.iron.idol.boost": "+1 Iron",
  "description.emerald.turtle.boost": "+0.5 Stone, Iron, Gold (область 3x3)",
  "description.tin.turtle.boost": "+0.1 Stone (область 3x3)",
  "description.heart.of.davy.jones.boost": "+20 копок на пляже",
  "description.Karkinos.boost": "+0.1 Cabbage (не работает с Cabbage Boy)",
  "description.mushroom.house.boost": "+0.2 Wild Mushroom",
  "description.boost.gilded.swordfish": "+0.1 Gold",
  "description.nancy.boost": "-15% времени роста урожая",
  "description.scarecrow.boost": "-15% времени роста урожая; +20% к урожаю",
  "description.kuebiko.boost":
    "-15% времени роста урожая; +20% к урожаю; бесплатные семена",
  "description.gnome.boost":
    "+10 к урожаю средних/продвинутых культур (область 1х1)",
  "description.lunar.calendar.boost": "-10% времени роста урожая",
  "description.peeled.potato.boost": "20% шанс на +1 Potato",
  "description.victoria.sisters.boost": "+20% Pumpkin",
  "description.easter.bunny.boost": "+20% Carrot",
  "description.pablo.bunny.boost": "+0.1 Carrot",
  "description.cabbage.boy.boost": "+0.25 Cabbage (+0.5 с Cabbage Girl)",
  "description.cabbage.girl.boost": "-50% времени роста Cabbage",
  "description.golden.cauliflower.boost": "+100% Cauliflower",
  "description.mysterious.parsnip.boost": "-50% времени роста Parsnip",
  "description.queen.cornelia.boost": "+1 Corn (область 3x4)",
  "description.foliant.boost": "+0.2 Kale",
  "description.hoot.boost": "+0.5 Wheat, Radish, Kale, Rice",
  "description.hungry.caterpillar.boost": "Бесплатные семена цветов",
  "description.black.bearry.boost": "+1 Blueberry",
  "description.squirrel.monkey.boost": "-50% времени роста Orange",
  "description.lady.bug.boost": "+0.25 Apple",
  "description.banana.chicken.boost": "+0.1 Banana",
  "description.carrot.sword.boost": "4x шанс на урожай мутантов",
  "description.stellar.sunflower.boost": "3% шанс на +10 Sunflower",
  "description.potent.potato.boost": "3% шанс на +10 Potato",
  "description.radical.radish.boost": "3% шанс на +10 Radish",
  "description.lg.pumpkin.boost": "+0.3 Pumpkin",
  "description.lg.carrot.boost": "+0.2 Carrot",
  "description.lg.radish.boost": "+0.4 Radish",
  "description.fat.chicken.boost": "-0.1 Wheat для корма Chickens",
  "description.rich.chicken.boost": "+0.1 Egg",
  "description.speed.chicken.boost": "-10% времени производства Egg",
  "description.ayam.cemani.boost": "+0.2 Egg",
  "description.el.pollo.veloz.boost": "-4ч времени производства Egg",
  "description.rooster.boost": "2x шанс на курицу-мутанта",
  "description.undead.rooster.boost": "+0.1 Egg",
  "description.chicken.coop.boost":
    "+1 к производству Egg; +5 к лимиту Chicken на Hen House",
  "description.gold.egg.boost": "Для кормления кур не требуется Wheat",
  "description.woody.beaver.boost": "+20% Wood",
  "description.apprentice.beaver.boost":
    "+20% Wood; -50% времени восстановления Tree",
  "description.foreman.beaver.boost":
    "+20% Wood; -50% времени восстановления Tree; для рубки деревьев не требуются топоры",
  "description.wood.nymph.wendy.boost": "+0.2 Wood",
  "description.tiki.totem.boost": "+0.1 Wood",
  "description.tunnel.mole.boost": "+0.25 Stone",
  "description.rocky.mole.boost": "+0.25 Iron",
  "description.nugget.boost": "+0.25 Gold",
  "description.rock.golem.boost": "10% шанс на +2 Stone",
  "description.crimson.carp.boost": "+0.05 Crimstone",
  "description.battle.fish.boost": "+0.05 Oil",
  "description.lemon.shark.boost": "+0.2 Lemons",
  "description.crim.peckster.boost": "+0.1 Crimstone",
  "description.knight.chicken.boost": "+0.1 Oil",
  "description.pharaoh.chicken.boost": "+1 Desert Dig",
  "description.queen.bee.boost": "Удваивает скорость производства Honey",
  "description.beekeeper.hat.boost": "+20% скорость производства Honey",
  "description.flower.fox.boost": "-10% времени роста цветов",
  "description.humming.bird.boost": "20% шанс на +1 цветок",
  "description.beehive.boost": "10% шанс на +0.2 урожая когда улей заполнен",
  "description.walrus.boost": "+1 рыба",
  "description.alba.boost": "50% шанс на +1 базовую рыбу",
  "description.knowledge.crab.boost": "Двойной эффект от Sprout Mix",
  "description.maneki.neko.boost": "1 бесплатное блюдо в день",
  "description.genie.lamp.boost": "Исполняет 3 желания",
  "description.observatory.boost": "+5% опыта",
  "description.blossombeard.boost": "+10% опыта",
  "description.desertgnome.boost": "+10% Cooking Speed",
  "description.christmas.festive.tree.boost": "Бесплатный подарок на рождество",
  "description.grinxs.hammer.boost": "Снижает стоимость расширений вдвое",
  "description.time.warp.totem.boost":
    "Время роста урожая (овощи и фрукты), готовки, восстановления минералов и деревьев уменьшается на 50%",
  "description.radiant.ray.boost": "+0.1 Iron",
  "description.babyPanda.boost": "2x буст к опыту для новичков",
  "description.hungryHare.boost": "2x опыта от Fermented Carrots",
  "description.turbo.sprout.boost": "-50% к времени роста тепличных культур",
  "description.soybliss.boost": "+1 Soybean",
  "description.grape.granny.boost": "+1 Grape",
  "description.non.la.hat.boost": "+1 Rice",
  "description.oil.can.boost": "+2 Oil",
  "description.olive.shield.boost": "+1 Olive",
  "description.pan.boost": "+25% XP",
  "description.paw.shield.boost":
    "+25% к насыщению питомца фракции и к получаемым маркам",
  "description.vinny.boost": "+0.25 Grape",
  "description.rice.panda.boost": "+0.25 Rice",
  "description.olive.shirt.boost": "+0.25 Olive",
  "description.tofu.mask.boost": "+0.1 Soybean",
  "description.gourmet.hourglass.boost": "-50% времени на готовку (4 часа)",
  "description.harvest.hourglass.boost":
    "-25% времени роста на грядках (6 часов)",
  "description.timber.hourglass.boost":
    "-25% времени на восстановление деревьев  (4 часа)",
  "description.ore.hourglass.boost":
    "-50% времени на восстановление минералов  (3 часа)",
  "description.orchard.hourglass.boost": "-25% времени роста фруктов (6 часов)",
  "description.fishers.hourglass.boost":
    "50% Шанс поймать дополнительную рыбу (4 часа)",
  "description.blossom.hourglass.boost": "-25% Времени роста цветов (4 часа)",
  "description.hourglass.running":
    "Этот {{hourglass}} дает временное ускорение для {{boost}}.",
  "description.hourglass.expired":
    "Твой {{hourglass}} закончился. Время найти еще один!",
  "description.desert.rose.boost": "10% шанс получить 1 дополнительный цветок",
  "description.pharaoh.gnome.boost": "+2 урожайность в теплице",
  "description.lemon.tea.bath.boost": "-50% времени роста у Lemon",
  "description.tomato.clown.boost": "-50% времени роста у Tomato",
  "description.cannonball.boost": "-25% времени роста у Tomato",
  "description.tomato.bombard.boost": "+1 Tomato",
  "description.camel.boost": "+1 Sand и +30% монет за продажу сокровищ",
  "description.reveling.lemon.boost": "+0.25 Lemon",
  "description.lemon.frog.boost": "-25% времени роста у Lemon",
};

const bountyDescription: Record<BountyDescription, string> = {
  "description.clam.shell": "Ракушка моллюска.",
  "description.sea.cucumber": "Морской огурец",
  "description.coral": "Кусочек коралла, красивый",
  "description.crab": "Краб, остерегайся его клешней!",
  "description.starfish": "Морская звезда.",
  "description.pirate.bounty": "Награда за пирата. Она стоит больших денег.",
  "description.wooden.compass":
    "Может он и не хай-тек, но всегда направит тебя в нужное направление, не так ли?",
  "description.iron.compass":
    "Проложи свой путь к сокровищам! Этот компас притягателен, и не только к Северному полюсу!",
  "description.emerald.compass":
    "Проложи свой путь через сочные тайны жизни! Этот компас не просто указывает на Север, он указывает на роскошь и величие!",
  "description.old.bottle":
    "Антикварная пиратская бутылка, напоминающая о приключениях в открытом море.",
  "description.pearl": "Переливается на солнце.",
  "description.pipi": "Plebidonax deltoides, встречается в Тихом океане.",
  "description.seaweed": "Морская водоросль.",
};

const buildingDescriptions: Record<BuildingDescriptions, string> = {
  // Buildings
  "description.water.well": "Растениям нужна вода!",
  "description.kitchen": "Улучши свои кулинарные навыки",
  "description.compost.bin":
    "Производит наживки и удобрения на регулярной основе.",
  "description.hen.house": "Развивай свою куриную империю",
  "description.bakery": "Испеки свои любимые торты",
  "description.greenhouse": "Теплица для нежных культур",
  "description.turbo.composter":
    "Производит продвинутые наживки и удобрения на регулярной основе.",
  "description.deli": "Утоли свой аппетит этими деликатесами!",
  "description.smoothie.shack": "Свежевыжатый!",
  "description.warehouse": "Увеличь свой запас семян на 20%",
  "description.toolshed": "Увеличь свой запас инструментов на 50%",
  "description.premium.composter":
    "Производит экспертные наживки и удобрения на регулярной основе.",
  "description.town.center":
    "Пройдись по центру города, если хочешь узнать последние новости",
  "description.market": "Покупай и продавай на фермерском рынке",
  "description.fire.pit":
    "Поджарь свои подсолнухи, накорми и подними уровень своему бампкину",
  "description.workbench": "Создавай инструменты для сбора ресурсов",
  "description.tent": "(Отменено)",
  "description.house": "Место, где можно отдохнуть",
  "description.crop.machine": "Автоматизируй свои посадки.",
  "building.oil.remaining": "{{oil}} Нефти в домике",

  "cooking.building.oil.description":
    "Ты можешь ускорить приготовление блюд на {{boost}}% добавив нефть в {{buildingName}}. .",
  "cooking.building.oil.boost": "Нефтяное ускорение",
  "cooking.building.runtime": "Время работы {{time}}",
};

const bumpkinDelivery: Record<BumpkinDelivery, string> = {
  "bumpkin.delivery.selectFlower": "Выбери цветок",
  "bumpkin.delivery.noFlowers": "О нет, у тебя нет цветов для подарка!",
  "bumpkin.delivery.thanks": "Вот здорово, спасибо, бампкин!!!",
  "bumpkin.delivery.waiting":
    "То что надо. Огромное спасибо! Возвращайся позже за новыми доставками.",
  "bumpkin.delivery.proveYourself":
    "Докажи, что достоин. Получи еще {{missingLevels}} уровней.",
  "bumpkin.delivery.earnTickets":
    "Зарабатывай {{ticket}}’ы, чтобы скрафтить эксклюзивные предметы.",
  "bumpkin.delivery.earnSFL":
    "Зарабатывай SFL, чтобы торговать и строить свою империю.",
};

const bumpkinItemBuff: Record<BumpkinItemBuff, string> = {
  "bumpkinItemBuff.chef.apron.boost": "+20% прибыли от торта",
  "bumpkinItemBuff.fruit.picker.apron.boost":
    "+0.1 Apple, Blueberry, Orange, Banana",
  "bumpkinItemBuff.angel.wings.boost": "Мгновенный урожай",
  "bumpkinItemBuff.devil.wings.boost": "Мгновенный урожай",
  "bumpkinItemBuff.eggplant.onesie.boost": "+0.1 Eggplant",
  "bumpkinItemBuff.golden.spatula.boost": "+10% опыта",
  "bumpkinItemBuff.mushroom.hat.boost": "+0.1 Mushrooms",
  "bumpkinItemBuff.parsnip.boost": "+20% Parsnip",
  "bumpkinItemBuff.sunflower.amulet.boost": "+10% к урожаю подсолнухов",
  "bumpkinItemBuff.carrot.amulet.boost": "-20% времени роста моркови",
  "bumpkinItemBuff.beetroot.amulet.boost": "+20% Beetroot",
  "bumpkinItemBuff.green.amulet.boost": "Шанс на 10x урожая",
  "bumpkinItemBuff.Luna.s.hat.boost": "-50% времени готовки",
  "bumpkinItemBuff.infernal.pitchfork.boost": "+3 урожая",
  "bumpkinItemBuff.cattlegrim.boost": "+0.25 продукции от животных",
  "bumpkinItemBuff.corn.onesie.boost": "+0.1 Corn",
  "bumpkinItemBuff.sunflower.rod.boost": "10% шанс на +1 рыбу",
  "bumpkinItemBuff.trident.boost": "20% шанс на +1 рыбу",
  "bumpkinItemBuff.bucket.o.worms.boost": "+1 Червь",
  "bumpkinItemBuff.luminous.anglerfish.topper.boost": "+50% опыта с рыбы",
  "bumpkinItemBuff.angler.waders.boost": "+10 к лимиту рыбалки",
  "bumpkinItemBuff.ancient.rod.boost": "Ловля без удочки",
  "bumpkinItemBuff.banana.amulet.boost": "+0.5 Bananas",
  "bumpkinItemBuff.banana.boost": "-20% времени роста Banana",
  "bumpkinItemBuff.deep.sea.helm": "3x шанс на Marine Marvels",
  "bumpkinItemBuff.bee.suit": "+0.1 Honey за полный улей",
  "bumpkinItemBuff.crimstone.hammer": "+2 кримстоуна на 5й копке",
  "bumpkinItemBuff.crimstone.amulet": "-20% времени восстановления кримстоуна",
  "bumpkinItemBuff.crimstone.armor": "+0.1 Crimstones",
  "bumpkinItemBuff.hornet.mask": "2x шанс на пчелиный рой",
  "bumpkinItemBuff.honeycomb.shield": "+1 Honey за полный улей",
  "bumpkinItemBuff.flower.crown": "-50% времени роста цветов",
  "bumpkinItemBuff.goblin.armor": "+20% Marks",
  "bumpkinItemBuff.goblin.helmet": "+10% Marks",
  "bumpkinItemBuff.goblin.axe": "+10% Marks",
  "bumpkinItemBuff.goblin.pants": "+5% Marks",
  "bumpkinItemBuff.goblin.sabatons": "+5% Marks",
  "bumpkinItemBuff.nightshade.armor": "+20% Marks",
  "bumpkinItemBuff.nightshade.helmet": "+10% Marks",
  "bumpkinItemBuff.nightshade.sword": "+10% Marks",
  "bumpkinItemBuff.nightshade.pants": "+5% Marks",
  "bumpkinItemBuff.nightshade.sabatons": "+5% Marks",
  "bumpkinItemBuff.sunflorian.armor": "+20% Marks",
  "bumpkinItemBuff.sunflorian.helmet": "+10% Marks",
  "bumpkinItemBuff.sunflorian.sword": "+10% Marks",
  "bumpkinItemBuff.sunflorian.pants": "+5% Marks",
  "bumpkinItemBuff.sunflorian.sabatons": "+5% Marks",
  "bumpkinItemBuff.bumpkin.armor": "+20% Marks",
  "bumpkinItemBuff.bumpkin.helmet": "+10% Marks",
  "bumpkinItemBuff.bumpkin.sword": "+10% Marks",
  "bumpkinItemBuff.bumpkin.pants": "+5% Marks",
  "bumpkinItemBuff.bumpkin.sabatons": "+5% Marks",
  "bumpkinItemBuff.crab.trap": "+1 Crab при поиске сокровищ",
  "bumpkinItemBuff.bionic.drill": "+5 копок",
  "bumpkinItemBuff.infernal.drill.boost":
    "Добыча нефти без использования Oil Drill",
  "bumpkinItemBuff.lemon.shield.boost": "+1 Lemon",
  "bumpkinItemBuff.dev.wrench.boost": "-50% времени добычи нефти",
  "bumpkinItemBuff.oil.overalls.boost": "+10 Oil",
  "bumpkinItemBuff.ancient.shovel.boost":
    "Поиск сокровищ без использования Sand Shovel",
  "bumpkinItemBuff.grape.pants": "+0.2 Grapes",
  "bumpkinItemBuff.pirate.potion": "Открывает пиратский сундук",
  "bumpkinItemBuff.bumpkin.crown.boost":
    "+25% SFL & Coin за доставки, +10% Marks",
  "bumpkinItemBuff.goblin.crown.boost":
    "+25% SFL & Coin за доставки, +10% Marks",
  "bumpkinItemBuff.nightshade.crown.boost":
    "+25% SFL & Coin за доставки, +10% Marks",
  "bumpkinItemBuff.sunflorian.crown.boost":
    "+25% SFL & Coin за доставки, +10% Marks",
  "bumpkinItemBuff.bumpkin.shield.boost": "+0.25 дерева и минералов",
  "bumpkinItemBuff.goblin.shield.boost": "+0.25 дерева и минералов",
  "bumpkinItemBuff.nightshade.shield.boost": "+0.25 дерева и минералов",
  "bumpkinItemBuff.sunflorian.shield.boost": "+0.25 дерева и минералов",
  "bumpkinItemBuff.bumpkin.quiver.boost": "+0.25 к урожаю овощей и фруктов",
  "bumpkinItemBuff.goblin.quiver.boost": "+0.25 к урожаю овощей и фруктов",
  "bumpkinItemBuff.nightshade.quiver.boost": "+0.25 к урожаю овощей и фруктов",
  "bumpkinItemBuff.sunflorian.quiver.boost": "+0.25 к урожаю овощей и фруктов",
  "bumpkinItemBuff.bumpkin.medallion.boost": "-25% к времени готовки",
  "bumpkinItemBuff.goblin.medallion.boost": "-25% к времени готовки",
  "bumpkinItemBuff.nightshade.medallion.boost": "-25% к времени готовки",
  "bumpkinItemBuff.sunflorian.medallion.boost": "-25% к времени готовки",
};

const bumpkinPart: Record<BumpkinPart, string> = {
  "equip.background": "Фон",
  "equip.hair": "Прическа",
  "equip.body": "Туловище",
  "equip.shirt": "Рубашка",
  "equip.pants": "Штаны",
  "equip.shoes": "Обувь",
  "equip.tool": "Инструмент",
  "equip.necklace": "Ожерелье",
  "equip.coat": "Плащ",
  "equip.hat": "Шапка",
  "equip.secondaryTool": "Доп инструмент",
  "equip.onesie": "Кигуруми",
  "equip.suit": "Костюм",
  "equip.wings": "Крылья",
  "equip.dress": "Платье",
  "equip.beard": "Борода",
  "equip.aura": "Аура",
};

const bumpkinPartRequirements: Record<BumpkinPartRequirements, string> = {
  "equip.missingHair": "Требуется прическа",
  "equip.missingBody": "Требуется туловище",
  "equip.missingShoes": "Требуется обувь",
  "equip.missingShirt": "Требуется рубашка",
  "equip.missingPants": "Требуются брюки",
  "equip.missingBackground": "Требуется фон",
};

const bumpkinSkillsDescription: Record<BumpkinSkillsDescription, string> = {
  // Crops
  "description.green.thumb": "Растения дают на 5% больше урожая",
  "description.cultivator": "Растения растут на 5% быстрее",
  "description.master.farmer": "Растения дают на 10% больше урожая",
  "description.golden.flowers": "Шанс на выпадение Gold с Sunflowers",
  "description.happy.crop": "Шанс получить двойной урожай",
  // Trees
  "description.lumberjack": "На 10% больше дерева при рубке",
  "description.tree.hugger": "Деревья вырастают на 20% быстрее",
  "description.tough.tree": "Шанс получить 3x дерева",
  "description.money.tree": "Шанс на выпадение монет",
  // Rocks
  "description.digger": "На 10% больше камня при добыче",
  "description.coal.face": "Stones восстанавливаются на 20% быстрее",
  "description.seeker": "Привлечение каменных монстров",
  "description.gold.rush": "Шанс получить 2.5x золота",
  // Cooking
  "description.rush.hour": "Блюда готовятся на 10% быстрее",
  "description.kitchen.hand": "Блюда дают дополнительно 5% опыта",
  "description.michelin.stars":
    "Высококачественная еда, зарабатывайте на 5% больше SFL",
  "description.curer":
    "Употребление деликатесов с deli добавляет дополнительно 15% опыта",
  // Animals
  "description.stable.hand": "Животные производят на 10% быстрее",
  "description.free.range": "Животные производят на 10% больше",
  "description.horse.whisperer": "Увеличение шанса на получение мутантов",
  "description.buckaroo": "Шанс на двойной сбор",
};

const bumpkinTrade: Record<BumpkinTrade, string> = {
  "bumpkinTrade.minLevel": "Чтобы торговать, тебе нужен 10 уровень",
  "bumpkinTrade.noTradeListed": "Ты ничего не выставил на продажу.",
  "bumpkinTrade.sell": "Продавай свои ресурсы другим игрокам за SFL.",
  "bumpkinTrade.like.list": "Что бы ты хотел выставить на продажу",
  "bumpkinTrade.purchase": "Приобрести в Goblin Retreat",
  "bumpkinTrade.available": "В наличии",
  "bumpkinTrade.quantity": "Количество",
  "bumpkinTrade.price": "Цена",
  "bumpkinTrade.listingPrice": "Цена при листинге",
  "bumpkinTrade.pricePerUnit": "Цена за {{resource}}",
  "bumpkinTrade.tradingFee": "Комиссия",
  "bumpkinTrade.youWillReceive": "Ты получишь",
  "bumpkinTrade.cancel": "Отмена",
  "bumpkinTrade.list": "Выставить",
  "bumpkinTrade.maxListings": "Достигнут лимит листингов",
  "bumpkinTrade.visitBoard":
    "На доске объявлений ты сможешь разместить больше.",
  "bumpkinTrade.unlockMoreTrades": "Разблокируй больше продаж в день",
  "bumpkinTrade.max": "Максимум: {{max}}",
  "bumpkinTrade.min": "Минимум: {{min}}",
  "bumpkinTrade.minimumFloor": "Минимальная цена: {{min}}",
  "bumpkinTrade.maximumFloor": "Максимальная цена: {{max}}",
  "bumpkinTrade.floorPrice": "Минимальная цена: {{price}} SFL",
  "bumpkinTrade.sellConfirmation":
    "Продать {{quantity}} {{resource}} за {{price}} SFL?",
  "bumpkinTrade.cant.sell.all": "Нельзя продать все",
  "bumpkinTrade.price/unit": "{{price}}/шт",
  "bumpkinTrade.listed": ENGLISH_TERMS["bumpkinTrade.listed"],
};

const goblinTrade: Record<GoblinTrade, string> = {
  "goblinTrade.bulk": "количество",
  "goblinTrade.conversion": "Конвертация",
  "goblinTrade.select": "Выбери ресурсы на продажу",
  "goblinTrade.hoarding": "О нет! Ты достиг максимума SFL.",
  "goblinTrade.vipRequired": "Необходим VIP доступ",
  "goblinTrade.vipDelivery":
    "Хммм, похоже, ты обычный бампкин. Я торгую только с VIP-персонами.",
};

const buyFarmHand: Record<BuyFarmHand, string> = {
  "buyFarmHand.howdyBumpkin": "Привет, бампкин.",
  "buyFarmHand.confirmBuyAdditional":
    "Ты уверен, что хочешь купить еще одного бампкина?",
  "buyFarmHand.farmhandCoupon": "1 Купон помощника фермы",
  "buyFarmHand.adoptBumpkin": "Усыновить бампкина",
  "buyFarmHand.additionalBumpkinsInfo":
    "Дополнительного бампкина можно использовать, чтобы экипировать его одеждой и дать ферме буст.",
  "buyFarmHand.notEnoughSpace": "Не хватает места - улучши свой остров",
  "buyFarmHand.buyBumpkin": "Купить бампкина",
  "buyFarmHand.newFarmhandGreeting":
    "Я твой новый новый помощник. Мне не терпится приступить к работе!",
};

const claimAchievement: Record<ClaimAchievement, string> = {
  "claimAchievement.alreadyHave": "У тебя уже есть это достижение",
  "claimAchievement.requirementsNotMet": "Не выполнены все условия",
};

const chat: Record<Chat, string> = {
  "chat.Fail": "Проблемы с подключением",
  "chat.mute": "Ты в муте",
  "chat.again": "Ты снова сможешь общаться через",
  "chat.Kicked": "Кикнут",
};

const chickenWinner: Record<ChickenWinner, string> = {
  "chicken.winner.playagain": "нажми здесь, чтобы сыграть еще раз",
};

const choresStart: Record<ChoresStart, string> = {
  "chores.harvestFields": "Собери урожай с грядок",
  "chores.harvestFieldsIntro":
    "Эти грядки сами себя не вспашут. Собери 3 подсолнуха.",
  "chores.earnSflIntro":
    "Если ты хочешь добиться больших успехов в фермерских делах, то лучше начни с продажи sunflowers, покупки семян и получения прибыли.",
  "chores.reachLevel": "Прокачайся до 2 уровня",
  "chores.reachLevelIntro":
    "Если ты хочешь повысить уровень и открыть новые возможности, то тебе следует приготовить еду и заточить ее.",
  "chores.chopTrees": "Срубить 3 дерева",
  "chores.helpWithTrees":
    "Мои старые кости уже не такие как раньше, не поможешь ли ты мне срубить эти проклятые деревья? Наш местный кузнец поможет тебе смастерить немного инструментов.",
  "chores.noChore": "К сожалению, у меня сейчас нет дел, которые надо сделать.",
  "chores.newSeason": "Приближается новый сезон, список дел временно закрыт.",
  "chores.choresFrozen": "Скоро появится новый сезонный список дел.",
  "kingdomChores.preparing": "Секунду, думаю, какие задание тебе еще дать.",
  "kingdomChores.completed": " Ого! Похоже, ты уже все сделал! Заходи позже.",
  "kingdomChores.noChores":
    "Ох, сейчас у меня нет для тебя заданий. Возможно, позже еще появятся.",
  "kingdomChores.noUpcoming": "Больше нет заданий",
  "kingdomChores.progress": "Прогресс: {{progress}}",
  "kingdomChores.nextSkip": "Следующий пропуск задания: {{skip}}",
  "kingdomChores.skipWarning":
    "Ты можешь пропустить только одно задание в день",
  "kingdomChores.completeActive":
    "Заверши активные задания, чтобы получить доступ к следующим",
  "kingdomChores.loading": "Ищем еще задания",
  "kingdomChores.reset": "Новые задания через: {{timeLeft}}",
};

const chumDetails: Record<ChumDetails, string> = {
  "chumDetails.gold": "Сияющее золото, которое можно увидеть за 100 миль",
  "chumDetails.iron":
    "Сверкающий блеск, который можно увидеть под любым ракурсом во время Dusk",
  "chumDetails.stone":
    "Возможно, забросив несколько камней, получится привлечь какую-нибудь рыбу",
  "chumDetails.egg": "Хммм, не знаю какой рыбе понравятся яйца...",
  "chumDetails.sunflower": "Солнечная, яркая насадка для любопытных рыб.",
  "chumDetails.potato": "Из картофеля получится необычное угощение для рыбы.",
  "chumDetails.pumpkin": "Рыб может заинтересовать оранжевое сияние тыкв.",
  "chumDetails.carrot":
    "Лучше всего использовать вместе с Earthworms для ловли Anchovies!",
  "chumDetails.cabbage": "Листовый соблазн для подводных травоядных.",
  "chumDetails.beetroot": "Свекла - подводное лакомство для отважных рыб.",
  "chumDetails.cauliflower":
    "Рыбы могут считать цветочки весьма привлекательными",
  "chumDetails.parsnip": "Землянистая, корневая насадка  для любопытных рыб.",
  "chumDetails.eggplant": "Баклажаны: подводное приключения для отважных рыб.",
  "chumDetails.corn":
    "Кукуруза в початках - странное, но интригующее угощение.",
  "chumDetails.radish": "Редис - зарытое сокровище для подводных обитателей.",
  "chumDetails.wheat":
    "Пшеница - зернистое лакомство для подводных обитателей.",
  "chumDetails.kale": "Лиственно-зеленый сюрприз для любопытных рыб.",
  "chumDetails.blueberry":
    "Голубые рыбы часто путают с потенциальными приятелями.",
  "chumDetails.orange":
    "Апельсины - цитрусовая диковинка для подводных обитателей.",
  "chumDetails.apple": "Яблоки - хрустящая тайна под волнами.",
  "chumDetails.banana": "Легче воды!",
  "chumDetails.seaweed": "Вкус океана в листовой подводной закуске.",
  "chumDetails.crab": "Манящее лакомство для любопытных подводных рыб.",
  "chumDetails.anchovy": "Анчоусы, таинственно манящие морских разбойников.",
  "chumDetails.redSnapper": "Тайна, скрытая в глубинах океана.",
  "chumDetails.tuna": "Что может быть настолько большим, чтобы съесть тунца?",
  "chumDetails.squid": "Пробуди ray его любимым угощением!",
  "chumDetails.wood": "Древесина. Интересный выбор....",
  "chumDetails.redPansy": "Пламенная приманка для неуловимой рыбы.",
  "chumDetails.fatChicken":
    "Настоящее белое мясо, перед которым не устоит самый крупный хищник.",
  "chumDetails.speedChicken":
    "Фастфудный перекус для хищника с острыми зубами.",
  "chumDetails.richChicken": "Деликатес для ужасающего яркобрюхого хищника.",
  "chumDetails.horseMackerel": "Только для настоящих обжор",
  "chumDetails.sunfish": "Идеально для полнолуния...",
  "chumDetails.zebraFish": "Чудесный деликатес для любителей перекусить.",
};

const community: Record<Community, string> = {
  "community.toast": "Текст тоста пуст",
  "community.url": "Введи URL-адрес своего репозитория",
  "comunity.Travel": "Отправиться на острова, построенные сообществом",
};

const cropBoomMessages: Record<CropBoomMessages, string> = {
  "crop.boom.welcome": "Добро пожаловать в Crop Boom",
  "crop.boom.reachOtherSide":
    "Доберись до другой стороны опасного поля, чтобы получить Arcade Token",
  "crop.boom.bewareExplodingCrops":
    "Остерегайся взрывающихся растений. Если ты наступишь на них, то начнешь с самого начала.",
  "crop.boom.newPuzzleDaily": "Каждый день будет появляться новая головоломка",
  "crop.boom.back.puzzle":
    "Возвращайся позже, чтобы увидеть новую головоломку!",
};

const compostDescription: Record<CompostDescription, string> = {
  "compost.fruitfulBlend":
    "Фруктовый компост увеличивает урожай с фруктовых деревьев на +0.1",
  "compost.sproutMix": "Компост увеличивает твой урожай с грядок на +0.2",
  "compost.sproutMixBoosted":
    "Компост увеличивает твой урожай с грядок на +0.4",
  "compost.rapidRoot": "Турбо компост уменьшает время роста на грядках на 50%",
};

const composterDescription: Record<ComposterDescription, string> = {
  "composter.compostBin": "Детали Compost Bin...",
  "composter.turboComposter": "Детали Turbo Composter...",
  "composter.premiumComposter": "Детали Premium Composter...",
};

const confirmSkill: Record<ConfirmSkill, string> = {
  "confirm.skillClaim": "Ты точно хочешь выбрать этот навык?",
};

const confirmationTerms: Record<ConfirmationTerms, string> = {
  "confirmation.sell":
    "Ты уверен, что хочешь продать {{amount}} {{name}} за {{coinAmount}} монет?",
  "confirmation.buyCrops":
    "Ты точно хочешь потратить {{coinAmount}} Монет для покупки {{seedNo}} {{seedName}}?",
  "confirmation.enterAmount": "Сколько всего продать:",
  "confirmation.sellSeasonalArtefact":
    "Это же сезонный артефакт! Ты точно хочешь продать его?",
  "confirmation.valuableTreasure":
    "Этот клад очень ценный! Ты точно хочешь продать его?",
};

const conversations: Record<Conversations, string> = {
  "faction-intro.one":
    "Добро пожаловать в дом твоей фракции. Вместе мы станем сильнее и захватим королевство.",
  "faction-intro.two":
    "Ты будешь награжден марками за выполнения заданий, доставки на кухню и заботу за нашим духовным животным.",
  "faction-intro.three":
    "В конце каждой недели самые достойные будут награждены ценными призами, удачи!",
  "home-intro.one":
    "Привет, фермер, добро пожаловать домой… Тут пока пустовато, но должны же мы с чего то начинать!",
  "home-intro.two":
    "Ты можешь хранить тут все свои сокровища и находки со своих приключений.",
  "home-intro.three":
    "Чем больше дом, тем больше бампкинов смогут жить на твоем острове.",
  "hank-intro.headline": "Поможешь старику?",
  "hank-intro.one":
    "Привет, бампкин! Добро пожаловать в наше маленькое райское местечко.",
  "hank-intro.two":
    "Я работаю на этой земле уже пятьдесят лет, и мне бы точно пригодилась помощь.",
  "hank-intro.three":
    "Я могу научить тебя основам фермерства, при условии, что ты поможешь мне с моим ежедневным списком дел.",
  "hank.crafting.scarecrow": "Создать Scarecrow",
  "hank-crafting.one":
    "Хммм, этот урожай растет до ужаса медленно. У меня нет времени ждать.",
  "hank-crafting.two": "Создай Scarecrow, чтобы ускорить рост своего урожая.",
  "hank.choresFrozen":
    "Что ж, похоже, мы все на сегодня сделали. Отдохни немного и насладись остатком дня!",
  "betty-intro.headline": "Как развить твою ферму",
  "betty-intro.one": "Привет-привет! Добро пожаловать ко мне на рынок.",
  "betty-intro.two":
    "Приноси мне свой лучший урожай, и я предложу тебе справедливую цену за него!",
  "betty-intro.three":
    "Тебе нужны семена? У меня есть все, от картошки до пастернака!",
  "betty.market-intro.one":
    "Отличные новости фермер, ты только что научился сажать растения",
  "betty.market-intro.two":
    "Собирай урожай и продавай его на рынке, чтобы развить свой остров.",
  "betty.market-intro.three":
    "Собирай и продавай овощи на моем рынке, чтобы заработать монеты и развить свою фермерскую империю",
  "betty.market-intro.four":
    "Собери эти Sunflowers и начинай развивать свою фермерскую империю.",
  "firepit-intro.one": "На костре все вкуснее!!",
  "firepit-intro.two":
    "Если захочешь поднять уровень и выучить новые навыки, то собирай урожай и неси его мне. Я смогу приготовить пару сытных блюд для тебя. ",
  "firepit.increasedXP": "Получен опыт",
  "bruce-intro.headline": "Введение в кулинарию",
  "bruce-intro.one": "Я владелец этого маленького уютного бистро.",
  "bruce-intro.two":
    "Принеси мне ингредиенты, и я приготовлю столько еды, сколько ты сможешь съесть!",
  "bruce-intro.three":
    "Привет, фермер! Я могу за милю учуять голодного бампкина.",
  "blacksmith-intro.headline": "Поторапливайся.",
  "blacksmith-intro.one":
    "Я мастер по крафту инструментов, и с правильными ресурсами я могу сделать все, что ты пожелаешь... включая еще больше инструментов!",
  "pete.first-expansion.one":
    "Мои поздравления, бампкин! Твоя ферма развивается быстрее, чем бобовый стебель в ливень!",
  "pete.first-expansion.two":
    "С каждым расширением ты будешь открывать новые возможности, такие как: особые ресурсы, новые деревья и многое другое!",
  "pete.first-expansion.three":
    "Не пропускай подарки от щедрых гоблинов после расширений - они не только опытные строители, но и искусные дарители!",
  "pete.first-expansion.four": "Поздравляю, бампкин! Продолжай в том же духе.",
  "pete.craftScarecrow.one": "Хмм, эти растения медленно растут.",
  "pete.craftScarecrow.two":
    "Sunflower Land полон волшебных предметов, которые ты можешь создать, чтобы усилить свои фермерские навыки.",
  "pete.craftScarecrow.three":
    "Подойди к workbench и создай scarecrow, чтобы увеличить скорость роста Sunflowers.",
  "pete.levelthree.one": "Поздравляю, твои навыки действительно хороши!",
  "pete.levelthree.two": "Похоже у тебя есть невыполненные доставки на Плазе.",
  "pete.levelthree.three":
    "Посмотри свои доставки слева внизу экрана, как только ты соберешь необходимые ресурсы, ты сможешь их выполнить.",
  "pete.levelthree.four":
    "Ты можешь путешествовать, нажав на значок мира в левом нижнем углу.",
  "pete.help.zero":
    "Посещай fire pit, готовь и ешь еду, чтобы поднимать свой уровень.",
  "pete.pumpkinPlaza.one":
    "По мере повышения уровня, ты будешь открывать новые места для исследования. Первое - это Плаза....мой дом!",
  "pete.pumpkinPlaza.two":
    "Здесь ты можешь выполнять доставки и получать за них награды, крафтить волшебные предметы и торговать с другими игроками.",

  "richie.challenge": "Испытание",
  "richie.rewarded": "Поздравляю, ты на шаг ближе!",
  "richie.completed": "Выполнено",
  "richie.completed.description":
    "Молодец бампкин, ты выполнил все мои испытания. Следи за новыми наградами!",
  "richie.rewards": "Награды",
  "richie.onboarding": "Думаешь сможешь пройти мои испытания?",
  "richie.dailyChallenges": "Ты готов к моим ежедневным испытаниям?",
  "richie.final": "Заключительное испытание",
  "richie.intro.one":
    "Привет, бампкин! Ты готов закатать рукава и начать исследовать магический мир Sunflower Land?",
  "richie.intro.two":
    "Эта игра не только про посадку растений и ожидание их созревания. О нет! Здесь ты можешь заработать редкие web3 предметы и торговать с тысячами других игроков.",
  "richie.intro.three": "Для начала сруби те три дерева и расширь свой остров.",

  "sunflowerLand.islandDescription":
    "Sunflower Land полон захватывающих островов, где ты можешь выполнять доставки, крафтить редкие NFTs и даже раскапывать сокровища!",
  "sunflowerLand.opportunitiesDescription":
    "В разных локациях есть разные возможности потратить свои усердно заработанные ресурсы.",
  "sunflowerLand.returnHomeInstruction":
    "В любое время можно нажать на кнопку путешествия и отправиться домой.",
  "grimbly.expansion.one":
    "Приветствую тебя, начинающий фермер! Я - Grimbly, опытный гоблин-строитель.",
  "grimbly.expansion.two":
    "С помощью подходящих материалов и моего древнего таланта, мы можем превратить твой остров в произведение искусства.",
  "luna.portalNoAccess":
    "Хммм, этот портал появился из ниоткуда. Что это может означать?",
  "luna.portals": "Порталы",
  "luna.rewards": "Награды",
  "luna.travel":
    "Путешествуй по построенным игроками порталам и зарабатывай награды.",
  "pete.intro.one":
    "Приветствую тебя, Бампкин! Добро пожаловать в Sunflower Land, изобильный фермерский мир, где возможно всё!",
  "pete.intro.two":
    "На каком живописном острове ты обосновался! Я - Pumpkin Pete, твой сосед.",
  "pete.intro.three":
    "Прямо сейчас в Плазе игроки отмечают праздник, получая фантастические награды и волшебные предметы.",
  "pete.intro.four":
    "Но перед тем, как присоединиться к веселью, ты должен развить свою ферму и собрать немного ресурсов. Ты же не хочешь прийти туда с пустыми руками?",
  "pete.intro.five":
    "Для начала тебе нужно срубить деревья и расширить свой остров.",
  "mayor.plaza.changeNamePrompt":
    "Ты хочешь сменить имя? К сожалению, я не могу тебе сейчас с этим помочь, слишком много документов для меня.",
  "mayor.plaza.intro":
    "Привет, дорогой бампкин, кажется, мы еще не познакомились.",
  "mayor.plaza.role":
    "Я мэр этого города! Я отвечаю за то, чтобы все были счастливы. А еще я слежу за тем, чтобы у каждого было имя!",
  "mayor.plaza.fixNamePrompt":
    "У тебя еще нет имени? Что ж, мы можем это исправить! Хочешь, чтобы я подготовил документы?",
  "mayor.plaza.enterUsernamePrompt": "Введи свое имя пользователя: ",
  "mayor.plaza.usernameValidation":
    "Пожалуйста, имей в виду, что имя пользователя должно соответствовать нашим",
  "mayor.plaza.niceToMeetYou": "Приятно познакомиться, !",
  "mayor.plaza.congratulations":
    "Поздравляю, оформление документов завершено. До встречи!",
  "mayor.plaza.enjoyYourStay":
    "Надеюсь, тебе нравится твое пребывание в Sunflower Land! Если я тебе когда-нибудь понадоблюсь, то ты знаешь где меня искать!",
  "mayor.codeOfConduct": "Кодекс поведения",
  "mayor.failureToComply":
    "Несоблюдение правил может повлечь за собой наказание, включая возможную блокировку аккаунта",
  "mayor.paperworkComplete": "Оформление документов завершено. До встречи",
};

const cropFruitDescriptions: Record<CropFruitDescriptions, string> = {
  // Crops
  "description.sunflower": "Солнечный цветок",
  "description.potato": "Полезнее, чем ты мог бы подумать.",
  "description.pumpkin": "Не только для пирога.",
  "description.carrot": "Она полезна для твоих глаз!",
  "description.cabbage": "Когда-то роскошь, а теперь просто еда.",
  "description.beetroot": "Хорошо помогает от похмелья!",
  "description.cauliflower": "Отличная замена рису!",
  "description.parsnip": "Не путать с морковью.",
  "description.eggplant": "Съедобное произведение искусства.",
  "description.corn":
    "Обожженные солнцем лакомые зернышки, летнее природное богатство.",
  "description.radish": "Придется подождать, но это того стоит!",
  "description.wheat": "Самая собираемая культура в мире.",
  "description.kale": "Мощная еда для бампкина!",
  "description.soybean": "Бобы на любой случай!",

  // Greenhouse
  "description.grape": "Пикантный и желанный фрукт.",
  "description.olive": "Роскошь для продвинутых фермеров.",
  "description.rice": "Для идеального рациона!",

  // Fruits
  "description.blueberry": "Гоблинская слабость",
  "description.orange": "Витамин С для поддержания здоровья твоего бампкина",
  "description.apple": "Идеально для домашнего пирога",
  "description.banana": "О, банан!",

  // Exotic Crops
  "description.white.carrot": "Бледная морковь с бледными корнями",
  "description.warty.goblin.pumpkin": "Причудливая, покрытая бородавками тыква",
  "description.adirondack.potato": "Прочный картофель, в стиле адирондак!",
  "description.purple.cauliflower": "Царская фиолетовая цветная капуста",
  "description.chiogga": "Радужная свекла!",
  "description.golden.helios": "Загорелое чудо!",
  "description.black.magic": "Мрачный и таинственный цветок!",

  //Flower Seed
  "description.sunpetal.seed": "Семя sunpetal",
  "description.bloom.seed": "Семя bloom",
  "description.lily.seed": "Семя lily",
};

const deliveryitem: Record<DeliveryItem, string> = {
  "deliveryitem.inventory": "Инвентарь",
  "deliveryitem.itemsToDeliver": "Предметы для отправки",
  "deliveryitem.deliverToWallet": "Отправить на твой кошелек",
  "deliveryitem.viewOnOpenSea":
    "После получения ты увидишь свои товары на OpenSea.",
  "deliveryitem.deliver": "Доставить",
};

const defaultDialogue: Record<DefaultDialogue, string> = {
  "defaultDialogue.intro":
    "Привет, друг! Я здесь для того, чтобы узнать, нет ли у тебя нужной мне вещи!",
  "defaultDialogue.positiveDelivery":
    "О, замечательно! Ты принес именно то, что мне нужно. Спасибо!",
  "defaultDialogue.negativeDelivery":
    "О нет! Похоже, у тебя нет того, что мне нужно. Впрочем, не переживай. Продолжай поиски и мы найдем другую возможность.",
  "defaultDialogue.noOrder":
    "Сейчас нет активного заказа, который я мог бы выполнить.",
};

const cropsAndChickens: Record<CropsAndChickensMessages, string> = {
  "crops-and-chickens.portal.title": "Миниигра - Кропсы и Чикены",
  "crops-and-chickens.portal.description": "Поможешь мне собрать весь урожай?",
  "crops-and-chickens.portal.missionObjectives":
    "Цель: Набрать {{targetScore}} очков собирая урожай",
  "crops-and-chickens.portal.rewardMessage":
    "Поздравляем, ты выполнил задание! Вот твоя награда.",
};

const decorationDescriptions: Record<DecorationDescriptions, string> = {
  // Decorations
  "description.wicker.man":
    "Возьмитесь за руки и образуйте цепь, и тень Wicker Man появится вновь",
  "description.golden bonsai": "Гоблины тоже любят бонсай",
  "description.christmas.bear": "Любимец Санты",
  "description.war.skull": "Украшает землю костями твоих врагов.",
  "description.war.tombstone": "R.I.P",
  "description.white.tulips":
    "Отгораживает от запаха гоблинов как можно дальше.",
  "description.potted.sunflower": "Украшает твою землю.",
  "description.potted.potato": "В твоем бампкине течет картофельная кровь.",
  "description.potted.pumpkin": "Pumpkins для бампкинов",
  "description.cactus": "Экономит воду и придает твоей ферме превосходный вид!",
  "description.basic.bear":
    "Базовый медведь. Используй его в Goblin Retreat, чтобы создать медведя!",
  "description.bonnies.tombstone":
    "Жуткое дополнение к любой ферме, от Bonnie's Human Tombstone у тебя пойдут мурашки по спине.",
  "description.grubnashs.tombstone":
    "Добавь немного зловещего обаяния с помощью Grubnash's Goblin Tombstone.",
  "description.town.sign": "С гордостью показывает номер твоей фермы!",
  "description.dirt.path":
    "Не пачкает твою фермерскую обувь благодаря хорошо протоптанной дорожке.",
  "description.bush": "Что затаилось в кустах?",
  "description.fence": "Добавляет нотку деревенского стиля твоей ферме.",
  "description.stone.fence":
    "Насладись неустаревающей элегантностью каменного забора.",
  "description.pine.tree": "Стоит высокая и могучая, покрытая иголками.",
  "description.shrub": "Укрась свой игровой ландшафт красивым кустарником",
  "description.field.maple":
    "Маленький клен, раскинувший свои листья в виде нежно-зеленого купола.",
  "description.red.maple":
    "Пламенные листья и сердце, наполненное осенним теплом.",
  "description.golden.maple":
    "Излучает блеск своими мерцающими золотыми листьями.",
  "description.crimson.cap":
    "Возвышающийся и красочный гриб, Crimson Cap Giant Mushroom оживит твою ферму.",
  "description.toadstool.seat":
    "Устраивайся поудобнее и расслабься на причудливом Toadstool Mushroom Seat.",
  "description.chestnut.fungi.stool":
    "Chestnut Fungi Stool - прочное и деревенское дополнение к любой ферме.",
  "description.mahogany.cap":
    "Добавь нотку изысканности с помощью Mahogany Cap Giant Mushroom.",
  "description.candles":
    "Зачаровывает твою ферму мерцающим призрачным пламенем во время Witches' Eve.",
  "description.haunted.stump":
    "Призывает духов и добавляет мрачности твоей ферме.",
  "description.spooky.tree":
    "Невероятно забавное дополнение к декору на твоей ферме!",
  "description.observer": "Вечно бдящее глазное яблоко, которое всегда начеку!",
  "description.crow.rock": "Ворона, сидящее на загадочном камне.",
  "description.mini.corn.maze":
    "В память о любимом лабиринте с 2023 Witches' Eve сезона.",
  "description.lifeguard.ring":
    "Оставайся на плаву со стилем, вместе с морским спасателем!",
  "description.surfboard": "Оседлай волну чудес и пляжного счастья на доске!",
  "description.hideaway.herman":
    "Herman здесь, чтобы спрятаться, но он всегд заглядывает на вечеринку!",
  "description.shifty.sheldon":
    "Скользкий Sheldon, всегда убегает к следующему песчаному сюрпризу!",
  "description.tiki.torch":
    "Освети ночь, потому что тропический вайб горит ярко!",
  "description.beach.umbrella":
    "Тенек, навес и морской шик в одном солнечном устройстве!",
  "description.magic.bean": "Что же вырастет?",
  "description.giant.potato": "Гигантский картофель.",
  "description.giant.pumpkin": "Гигантская тыква.",
  "description.giant.cabbage": "Гигантская капуста.",
  "description.chef.bear": "Каждому шеф-повару нужна помощь",
  "description.construction.bear": "Всегда производится на медвежьем рынке",
  "description.angel.bear":
    "Пришло время выйти за рамки крестьянского фермерства",
  "description.badass.bear": "Ничто тебя не остановит",
  "description.bear.trap": "Это ловушка!",
  "description.brilliant.bear": "Чистейшее великолепие!",
  "description.classy.bear": "Здесь больше SFL, чем тебе нужно!",
  "description.farmer.bear": "Ничто не сравнится с тяжелым рабочим днем!",
  "description.rich.bear": "Ценная вещь",
  "description.sunflower.bear": "Любимое растение медведя",
  "description.beta.bear": "Медведь, полученный в ходе особых тестовых событий",
  "description.rainbow.artist.bear": "Его владелец прекрасно рисует медведя!",
  "description.devil.bear":
    "Лучше тот дьявол, которого знаешь, чем тот, которого не знаешь",
  "description.collectible.bear":
    "Ценный медведь, до сих пор в отличном состоянии!",
  "description.cyborg.bear": "Hasta la vista, медвежонок",
  "description.christmas.snow.globe":
    "Потряси шар и смотри за тем, как он оживает",
  "description.kraken.tentacle":
    "Окунись в тайны морских глубин! Это щупальце расскажет о древних океанских легендах и морских чудесах.",
  "description.kraken.head":
    "Окунись в тайны морских глубин! Эта голова расскажет о древних океанских легендах и морских чудесах.",
  "description.abandoned.bear": "Медведь, которого оставили на острове.",
  "description.turtle.bear": "Хватит для черепашьего клуба.",
  "description.trex.skull": "Череп Ти-Рекса! Потрясающе!",
  "description.sunflower.coin": "Монета, сделанная из подсолнухов.",
  "description.skeleton.king.staff": "Да здравствует Skeleton King!",
  "description.lifeguard.bear": "Lifeguard Bear здесь, чтобы выручить!",
  "description.snorkel.bear": "Snorkel Bear обожает плавать.",
  "description.parasaur.skull": "Череп Паразавра!",
  "description.goblin.bear": "Медведь-гоблин. Немного пугающе.",
  "description.golden.bear.head": "Жуткий, но клевый.",
  "description.pirate.bear": "Аррр, старый пройдоха! Обними меня!",
  "description.galleon": "Игрушечный корабль, все еще в хорошем состоянии.",
  "description.dinosaur.bone": "Кость динозавра! Интересно, чья она?",
  "description.human.bear":
    "Медведь-человек. Даже страшнее, чем медведь-гоблин.",
  "description.flamingo":
    "Представляет собой символ любви, стоящей высоко и уверенно.",
  "description.blossom.tree":
    "Эти нежные лепестки символизируют красоту и хрупкость любви.",
  "description.heart.balloons":
    "Используй их в качестве декорации для романтических свиданий.",
  "description.whale.bear":
    "У него круглое пушистое тело, как у медведя, но плавники, хвост и дыхало кита.",
  "description.valentine.bear": "Для тех, кто любит.",
  "description.easter.bear": "Как кролик может откладывать яйца?",
  "description.easter.bush": "Что там внутри?",
  "description.giant.carrot":
    "Стояла гигантская морковка, отбрасывая забавные тени, а кролики с удивлением смотрели на нее.",
  "description.beach.ball":
    "Надувной мяч, создающий пляжный вайб и прогоняющий скуку.",
  "description.palm.tree":
    "Высокие, пляжные, тенистые и изысканные пальмы заставляют волны колыхаться.",
  "description.battleCryDrum": "Боевой барабан",
  "description.bullseyeBoard": "Доска для стрельбищ",
  "description.chessRug": "Шахматный коврик",
  "description.cluckapult": "Курапульта",
  "description.goldenGallant": "Золотой конь",
  "description.goldenGarrison": "Золотая ладья",
  "description.goldenGuardian": "Золотая пешка",
  "description.noviceKnight": "Новенький конь",
  "description.regularPawn": "Базовая пешка",
  "description.rookieRook": "Простая ладья",
  "description.silverSentinel": "Серебряная ладья",
  "description.silverSquire": "Серебряная пешка",
  "description.silverStallion": "Серебряный конь",
  "description.traineeTarget": "Тренировочная мишень",
  "description.twisterRug": "Коврик для твистера",

  //other
  "description.sunflower.amulet": "Урожай Sunflower увеличен на 10%.",
  "description.carrot.amulet": "Carrots растут на 20% быстрее.",
  "description.beetroot.amulet": "Урожай Beetroot увеличен на 20%.",
  "description.green.amulet": "Шанс на 10х урожая.",
  "description.warrior.shirt": "Знак настоящего воина.",
  "description.warrior.pants": "Защитит твои бедра.",
  "description.warrior.helmet": "Иммунитет к стрелам.",
  "description.sunflower.shield":
    "Герой Sunflower Land. Бесплатные семена Sunflower!",
  "description.skull.hat": "Редкая шляпа для твоего бампкина.",
  "description.sunflower.statue": "Символ священного токена",
  "description.potato.statue": "Настоящий картофельный барыга",
  "description.christmas.tree": "Получает подарок от Санты на Рождество",
  "description.gnome": "Везучий гном",
  "description.homeless.tent": "Красивая и уютная палатка",
  "description.sunflower.tombstone": "В память о Sunflower Farmers",
  "description.sunflower.rock": "Игра, сломавшая Polygon",
  "description.goblin.crown": "Призывает предводителя гоблинов",
  "description.fountain": "Расслабляющий фонтан для твоей фермы",
  "description.nyon.statue": "В память о Nyon Lann",
  "description.farmer.bath": "Ванна с ароматом свеклы для фермеров",
  "description.woody.Beaver": "Выпадение wood увеличено на 20%",
  "description.apprentice.beaver": "Деревья восстанавливаются на 50% быстрее",
  "description.foreman.beaver": "Руби деревья без топоров",
  "description.egg.basket": "Дает доступ к пасхальной охоте",
  "description.mysterious.head": "Статуя, призванная защищать фермеров",
  "description.tunnel.mole": "Дает 25% увеличение к выпадению камня",
  "description.rocky.the.mole": "Дает 25% увеличение к выпадению железа",
  "description.nugget": "Дает 25% увеличение к выпадению золота",
  "description.rock.golem": "Дает 10% шанс на получение 3х stone",
  "description.chef.apron": "Дает дополнительно 20% SFL с продажи тортов",
  "description.chef.hat": "Корона легендарного французкого пекаря!",
  "description.nancy": "Отгоняет ворон. Растения растут на 15% быстрее",
  "description.scarecrow": "Пугало-гоблин. Урожай с растений увеличен на 20%",
  "description.kuebiko":
    "Даже торговцы боятся этого пугала. Семена теперь бесплатные",
  "description.golden.cauliflower": "Удваивает урожай с cauliflower",
  "description.mysterious.parsnip": "Parsnips растут на 50% быстрее",
  "description.carrot.sword": "Увеличивает шанс на появление растений-мутантов",
  "description.chicken.coop": "Собирает в 2 раза больше eggs",
  "description.farm.cat": "Отгоняет крыс",
  "description.farm.dog": "Паси овец вместе со своим фермерским песиком",
  "description.gold.egg": "Курицам больше не нужен корм",
  "description.easter.bunny": "Приносит на 20% больше моркови",
  "description.rooster": "Удваивает шанс на выпадение курицы-мутанта",
  "description.chicken": "Производит eggs. Нужна wheat для корма",
  "description.cow": "Производит milk. Нужна wheat для корма",
  "description.pig": "Производит manure. Нужна wheat для корма",
  "description.sheep": "Производит wool. Нужна wheat для корма",
  "description.basic.land": "Базовая земля",
  "description.crop.plot": "Пустая грядка для выращивания растений",
  "description.gold.rock": "Горная порода пригодная для добычи gold",
  "description.iron.rock": "Горная порода пригодная для добычи iron",
  "description.stone.rock": "Горная порода пригодная для добычи stone",
  "description.crimstone.rock": "Горная порода пригодная для добычи crimstone",
  "description.oil.reserve": "Источник нефти",
  "description.flower.bed": "Пустая клумба для выращивания цветов",
  "description.tree": "Дерево, которое можно срубить для сбора wood",
  "description.fruit.patch": "Пустая лунка для выращивания фруктов",
  "description.boulder":
    "Мифический камень, из которого могут выпасть редкие минералы",
  "description.catch.the.kraken.banner":
    "Кракен здесь! Знак участника Catch the Kraken.",
  "description.luminous.lantern": "Яркий бумажный фонарь, освещающий путь.",
  "description.radiance.lantern":
    "Сияющий бумажный фонарь, излучающий мощный свет.",
  "description.ocean.lantern":
    "Волнистый бумажный фонарь, покачивающийся в такт приливу.",
  "description.solar.lantern":
    "Используя яркую силу подсолнухов, Солнечный фонарь излучает теплое и сияющее свечение.",
  "description.aurora.lantern":
    "Бумажный фонарь, который превращает любое пространство в волшебную страну чудес.",
  "description.dawn.umbrella":
    "С помощью Dawn Umbrella Seat, баклажаны будут сухими даже в дождливые дни.",
  "description.eggplant.grill":
    "Приступай к готовке с Eggplant Grill, который идеально подходит для любой трапезы на открытом воздухе.",
  "description.giant.dawn.mushroom":
    "Giant Dawn Mushroom - величественное и волшебное дополнение к любой ферме.",
  "description.shroom.glow":
    "Освети свою ферму чарующим сиянием от Shroom Glow.",
  "description.clementine":
    "Clementine Gnome - веселый компаньон для твоих фермерских увлечений.",
  "description.blossombeard":
    "Blossombeard Gnome - мощный компаньон для твоих фермерских увлечений.",
  "description.desertgnome": "Гном, который переживет самые суровые условия.",
  "description.cobalt":
    "Cobalt Gnome добавит красок твоей ферме своей яркой шляпкой.",
  "description.hoot": "Ух-уху-ху! Ты уже разгадал мою загадку?",
  "description.genie.bear": "Именно то, что я хотел!",
  "description.betty.lantern":
    "Это выглядит так реалистично! Интересно, как они это сделали?",
  "description.bumpkin.lantern":
    "Подойдя ближе, ты слышишь шорохи живого бампкина... жуть!",
  "description.eggplant.bear": "Знак щедрого баклажанного кита.",
  "description.goblin.lantern": "Страшный фонарь",
  "description.dawn.flower":
    "Насладись сияющей красотой Dawn Flower, когда его нежные лепестки мерцают при первых лучах солнца",
  "description.kernaldo.bonus": "+25% скорости роста кукурузы",
  "description.white.crow": "Таинственная и неземная белая ворона",
  "description.sapo.docuras": "Настоящее удовольствие!",
  "description.sapo.travessuras": "Ой-ой...кто-то был непослушным",
  "description.walrus":
    "Благодаря его надежным бивням и любви к глубинам, ты всегда будешь вылавливать дополнительную рыбу.",
  "description.alba":
    "Благодаря её острому чутью, ты будешь вылавливать дополнительную рыбу. 50% шанс на +1 обычную рыбу!",
  "description.knowledge.crab":
    "Умный краб удваивает эффект от обычного компоста, делая твои посевы такими же богатыми, как морская добыча!",
  "description.anchor":
    "Брось якорь с помощью этой морской драгоценности, которая придает любому месту морской и восхитительный стиль!",
  "description.rubber.ducky":
    "Веселись вместе с этой классической уточкой, которая приподнимает настроение в любом уголке!",
  "description.arcade.token":
    "Токен, получаемый с мини-игр и приключений. Можно обменять на награды.",
  "description.bumpkin.nutcracker": "Праздничная декорация 2023.",
  "description.festive.tree":
    "Праздничное дерево, доступное каждый праздничный сезон. Интересно, достаточно ли она большая, чтобы Санта мог ее увидеть?",
  "description.white.festive.fox":
    "Благословение White Fox обитает на щедрых фермах",
  "description.grinxs.hammer":
    "Волшебный молот от Grinx, легендарного гоблина-кузнеца.",
  "description.angelfish":
    "Водная небесная красавица, украшенная палитрой ярких цветов.",
  "description.halibut":
    "Обитатель океанского дна, мастер маскировки в песчаном камуфляже.",
  "description.parrotFish":
    "Эта рыба, представляющая собой калейдоскоп цветов под волнами, является живым произведением искусства.",
  "description.Farmhand": "Полезный помощник",
  "description.Beehive":
    "Шумный рой, производящий Honey из активно растущих цветов; 10% шанс при сборе Honey вызвать пчелиный рой, который опылит все посевы и даст +0.2 к урожаю!",
  // Flowers
  "description.red.pansy": "Красная фиалка.",
  "description.yellow.pansy": "Желтая фиалка.",
  "description.purple.pansy": "Фиолетовая фиалка.",
  "description.white.pansy": "Белая фиалка.",
  "description.blue.pansy": "Голубая фиалка.",

  "description.red.cosmos": "Красный космос.",
  "description.yellow.cosmos": "Желтый космос.",
  "description.purple.cosmos": "Фиолетовый космос.",
  "description.white.cosmos": "Белый космос.",
  "description.blue.cosmos": "Голубой космос.",

  "description.red.balloon.flower": "Красный колокольчик.",
  "description.yellow.balloon.flower": "Желтый колокольчик.",
  "description.purple.balloon.flower": "Фиолетовый колокольчик.",
  "description.white.balloon.flower": "Белый колокольчик.",
  "description.blue.balloon.flower": "Голубой колокольчик.",

  "description.red.carnation": "Красная гвоздика.",
  "description.yellow.carnation": "Желтая гвоздика.",
  "description.purple.carnation": "Фиолетовая гвоздика.",
  "description.white.carnation": "Белая гвоздика.",
  "description.blue.carnation": "Голубая гвоздика.",

  "description.humming.bird":
    "Маленькая небесная драгоценность, Humming Bird порхает с красочной грацией.",
  "description.queen.bee":
    "Величественная правительница улья, Queen Bee жужжит с королевской властью.",
  "description.flower.fox":
    "Flower Fox - игривое существо, украшенное лепестками, приносит радость в сад.",
  "description.hungry.caterpillar":
    "Жуя листья, Hungry Caterpillar всегда готов к вкусным приключениям.",
  "description.sunrise.bloom.rug":
    "Встань на Sunrise Bloom Rug, где лепестки танцуют вокруг цветочного рассвета.",
  "description.gauchoRug": "Памятный ковер о поддержке Южной Бразилии.",
  "description.blossom.royale":
    "Blossom Royale - гигантский цветок в ярких голубых и розовых тонах, величественно цветущий.",
  "description.rainbow":
    "Веселая радуга, соединяющая небо и землю своей разноцветной аркой.",
  "description.enchanted.rose":
    "Enchanted Rose - символ вечной красоты, завораживает своим волшебным очарованием.",
  "description.flower.cart":
    "Flower Cart, наполненная цветами, представляет собой передвижной сад цветочных прелестей.",
  "description.capybara":
    "Capybara - спокойный друг, наслаждающийся ленивыми деньками у берега.",
  "description.prism.petal":
    "Вау! Какой красивый цветок! Думаю, он достоин того, чтобы разместить его на ферме.",
  "description.celestial.frostbloom":
    "Вау! Вечный морозоцвет! Думаю, он достоин того, чтобы разместить его на ферме.",
  "description.primula.enigma":
    "Вау! Какой красивый цветок! Думаю, он достоин того, чтобы разместить его на ферме.",

  "description.red.daffodil": "Красный нарцисс.",
  "description.yellow.daffodil": "Желтый нарцисс.",
  "description.purple.daffodil": "Фиолетовый нарцисс.",
  "description.white.daffodil": "Белый нарцисс.",
  "description.blue.daffodil": "Голубой нарцисс.",

  "description.red.lotus": "Красный лотос.",
  "description.yellow.lotus": "Желтый лотос.",
  "description.purple.lotus": "Фиолетовый лотос.",
  "description.white.lotus": "Белый лотос.",
  "description.blue.lotus": "Голубой лотос.",

  // Banners
  "description.goblin.war.banner": "Демонстрирует преданность гоблинскому делу",
  "description.human.war.banner":
    "Демонстрирует преданность человеческому делу",
  "description.earnAllianceBanner": "Баннер особого события",
  "description.sunflorian.faction.banner":
    "Демонстрация верности Sunflorian фракции",
  "description.goblin.faction.banner": "Демонстрация верности Goblin фракции",
  "description.nightshade.faction.banner":
    "Демонстрация верности Nightshade фракции",
  "description.bumpkin.faction.banner": "Демонстрация верности Bumpkin фракции",

  // Clash of Factions
  "description.turbo.sprout":
    "Турбина для ускорения роста посадок в теплице на 50%.",
  "description.soybliss": "Уникальное создание, дающее +1 к сое..",
  "description.grape.granny":
    "Мудрая матушка выращивает виноград так, чтобы он процветал и давал +1 к урожаю..",
  "description.royal.throne": "Трон, для короля фермера..",
  "description.lily.egg":
    "Крошечное наслаждение, великая красота, бесконечное чудо.",
  "description.goblet": "Кубок, для самых изысканных вин.",
  "description.clock": "Часы, которые отсчитывают время с мягким тиканьем.",
  "description.fancy.rug":
    "Ковер, который привнесет нотку элегантности в любую комнату..",
  "description.vinny":
    "Vinny, дружелюбная виноградная лоза, всегда готова поболтать..",
  "description.ricePanda":
    "Умная панда, которая никогда не забудет полить рис.",
  "description.benevolenceFlag":
    "Для тех, кто проявил большую щедрость и внес значительный вклад в фракцию Бампкинов..",
  "description.devotionFlag":
    "Для тех, кто проявил непоколебимую преданность, сделав значительные пожертвования Nightshades.",
  "description.generosityFlag":
    "Для игроков, которые пожертвовали значительные ресурсы для фракции гоблинов.",
  "description.splendorFlag":
    "Для тех, кто проявил великую щедрость и поддержал Sunflorians..",
  "description.jellyLamp":
    "Лампа, которая привнесет нотку роскоши в любую комнату..",
  "description.paintCan": "Банка с красками, кусочек яркого фестиваля красок",
};

const delivery: Record<Delivery, string> = {
  "delivery.resource": "Хочешь, чтобы я доставил ресурсы?",
  "delivery.feed": "Это не бесплатно, мне надо кормить целое племя!",
  "delivery.fee": "Я возьму с тебя 30% ресурсов для сокровищницы гоблинов",
  "delivery.goblin.comm.treasury": "Сокровищница гоблинов",
};

const deliveryHelp: Record<DeliveryHelp, string> = {
  "deliveryHelp.pumpkinSoup":
    "Собери ингредиенты и отправляйся на лодке на Pumpkin Plaza, чтобы доставить заказы бампкинам за вознаграждение!",
  "deliveryHelp.hammer":
    "Расширь свою землю, чтобы разблокировать больше слотов + ускорить появление новых заказов",
  "deliveryHelp.axe":
    "Выполняй список дел и найди Hank на Плазе, чтобы забрать свою награду.",
  "deliveryHelp.chest":
    "Строй отношения с бампкинами, завершая различные заказы для разблокировки наград.",
};

const depositWallet: Record<DepositWallet, string> = {
  "deposit.errorLoadingBalances":
    "Произошла ошибка при загрузке твоего баланса.",
  "deposit.yourPersonalWallet": "Твой личный кошелек",
  "deposit.farmWillReceive": "Твоя ферма получит",
  "deposit.depositDidNotArrive": "Депозит не поступил?",
  "deposit.goblinTaxInfo":
    "Когда игроки выводят любое количество SFL, гоблинам платится налог.",
  "deposit.sendToFarm": "Отправить на ферму",
  "deposit.toDepositLevelUp":
    "Для отправки, тебе сначала нужно поднять свой уровень",
  "deposit.level": "3 уровень",
  "deposit.noSflOrCollectibles": "SFL или коллекционные предметы не найдены!",
  "deposit.farmAddress": "Адрес фермы",
  "question.depositSFLItems":
    "Хочешь добавить в Sunflower Land предметы, одежду или токен SFL?",
};

const detail: Record<Detail, string> = {
  "detail.how.item": "Как получить этот предмет?",
  "detail.Claim.Reward": "Забрать награду",
  "detail.basket.empty": "Твоя корзина пуста!",
  "detail.view.item": "Посмотреть на",
};

const discordBonus: Record<DiscordBonus, string> = {
  "discord.bonus.niceHat": "Ого, красивая шляпа!",
  "discord.bonus.attentionEvents":
    "Не забывай следить за особыми событиями и розыгрышами в Discord, чтобы не пропустить их.",
  "discord.bonus.bonusReward": "Бонусная награда",
  "discord.bonus.payAttention":
    "Следи за особыми событиями и розыгрышами в Discord, чтобы не пропустить их.",
  "discord.bonus.enjoyCommunity":
    "Мы надеемся, что тебе нравится быть частью нашего сообщества!",
  "discord.bonus.communityInfo":
    "Ты знал, что в нашем активном Discord сообществе больше 100,000 игроков?",
  "discord.bonus.farmingTips":
    "Если ты ищешь фермерских советов и фишек, то тебе сюда.",
  "discord.bonus.freeGift":
    "И самая лучшая часть...каждый, кто присоединится, получит бесплатный подарок!",
  "discord.bonus.connect": "Подключиться к Discord",
};

const donation: Record<Donation, string> = {
  "donation.one":
    "Это была инициатива от художников нашего сообщества, и они будут очень признательны за пожертвования!",
  "donation.rioGrandeDoSul.one":
    "Ола, Юг Бразилии пострадал от недавнего наводнения, и мы собираем пожертвования на еду и воду для приютов.",
  "donation.rioGrandeDoSul.two":
    "Каждый, кто сделает пожертвование, получит памятную награду.",
  "donation.matic": "Донат в MATIC",
  "donation.minimum": "Минимум 1 MATIC",
  "donation.airdrop":
    "Украшения будут выданы после окончания сбора пожертвований..",
  "donation.specialEvent": "Благотворительное мероприятие",
  "donation.toPortal":
    "Ты собираешься пожертвовать {{amount}} MATIC разработчикам {{portalName}}?",
};

const draftBid: Record<DraftBid, string> = {
  "draftBid.howAuctionWorks": "Как работает аукцион?",
  "draftBid.unsuccessfulParticipants":
    "Проигравшим участникам будут возвращены их ресурсы.",
  "draftBid.termsAndConditions": "Правила и условия",
};

const errorAndAccess: Record<ErrorAndAccess, string> = {
  "errorAndAccess.blocked.betaTestersOnly":
    "Доступ открыт только для бета-тестеров",
  "errorAndAccess.denied.message": "У тебя пока что нет доступа к игре",
  "errorAndAccess.instructions.part1": "Убедись, что ты присоединился к ",
  "errorAndAccess.sflDiscord": "Sunflower Land Discord сервер",
  "errorAndAccess.instructions.part2":
    ", зайди в канал #verify и получи роль 'farmer'.",
  "error.cannotPlaceInside": "Нельзя разместить в помещении",
};

const errorTerms: Record<ErrorTerms, string> = {
  "error.file": "Файл с ошибкой",
  "error.betaTestersOnly": "Только для бета-тестеров!",
  "error.congestion.one":
    "Мы стараемся изо всех сил, но, похоже, у Polygon большой трафик или ты потерял соединение.",
  "error.congestion.two":
    "Если эта ошибка повторяется, пожалуйста, попробуйте изменить свой Metamask RPC",
  "error.connection.one":
    "Похоже мы столкнулись с проблемой. Обычно это просто проблема с соединением. Попробуй снова или свяжись с нами, если проблема не уходит.",
  "error.connection.two": "Получить помощь",
  "error.connection.three":
    "Пожалуйста, передай следующую информацию службе поддержки:",
  "error.connection.four":
    "Если проблема не устранена, ты можешь обратиться за помощью в нашу службу поддержки, либо перейти в наш discord и спросить у нашего сообщества",
  "error.diagnostic.info": "Диагностическая информация",
  "error.forbidden.goblinVillage": "Тебе нельзя тут быть!",
  "error.multipleDevices.one": "Открыто несколько устройств",
  "error.multipleDevices.two":
    "Пожалуйста, закройте все другие вкладки в браузере или на устройствах, которые ты используешь.",
  "error.multipleWallets.one": "Несколько кошельков",
  "error.multipleWallets.two":
    "Похоже, что у тебя установлено несколько кошельков. Это может привести к непредсказуемому поведению. Попробуй отключить все кошельки, кроме одного.",
  "error.polygonRPC":
    "Пожалуйста, попробуй еще раз или проверь настройки своего Polygon RPC.",
  "error.toManyRequest.one": "Слишков много запросов!",
  "error.toManyRequest.two":
    "Похоже, ты был занят! Пожалуйста, повтори попытку позже.",
  "error.Web3NotFound": "Web3 не найден",
  "error.wentWrong": "Упс! Что-то пошло не так!",
  "error.getHelp": "Получить помощь",
  "error.contactSupport": "Связаться с поддержкой",
  "error.askOnDiscord": "Спроси в discord’е",
  "error.tooManyFarms":
    "Притормози, бампкин! Похоже, что у тебя слишком много аккаунтов. Пожалуйста, повтори попытку позже.",
  "error.clock.not.synced": "Часы не синхронизированы",
  "error.polygon.cant.connect": "Не удается подключиться к сети Polygon",
  "error.composterNotExist": "Компостер не установлен",
  "error.composterNotProducing": "Компостер не работает",
  "error.composterAlreadyDone": "Компост готов",
  "error.composterAlreadyBoosted": "Буст уже применен",
  "error.missingEggs": "Отсутствуют Eggs",
  "error.insufficientSFL": "Недостаточно SFL",
  "error.dailyAttemptsExhausted": "Ежедневные попытки потрачены",
  "error.missingRod": "Отсутствует удочка",
  "error.missingBait": "Отсутствует наживка",
  "error.alreadyCasted": "Уже заброшена",
  "error.unsupportedChum": "{{chum}} не поддерживаемая наживка",
  "error.insufficientChum": "Недостаточно наживок",
  "error.alr.composter": "Компостер уже полон",
  "error.no.alr.composter": "Компостер не готов к производству",
  "error.missing": "Отсутствуют требуемые материалы",
  "error.no.ready": "Компост еще не готов",
  "error.noprod.composter": "Компостер ничего не производит",
  "error.buildingNotExist": "Строения не существует",
  "error.buildingNotCooking": "В строении ничего не готовится",
  "error.recipeNotReady": "Рецепт не готов",
  "error.npcsNotExist": "NPCs не найдены",
  "error.noDiscoveryAvailable": "Нет доступных открытий",
  "error.obsessionAlreadyCompleted": "Эта одержимость уже удовлетворена",
  "error.collectibleNotInInventory": "У тебя нет требуемого предмета",
  "error.wearableNotInWardrobe": "У тебя нет требуемой одежды",
  "error.requiredBuildingNotExist": "Нужное строение не установлено",
  "error.cookingInProgress": "Приготовление в процессе",
  "error.insufficientIngredient": "Недостаточно ингредиентов",
  "error.ClientRPC": "Ошибка клиентского RPC",
  "error.walletInUse.one": "Кошелек уже используется",
  "error.walletInUse.two":
    "Этот кошелек уже привязан к ферме. Пожалуйста, используйте вход через социальные сети или выберите другой кошелек.",
  "error.walletInUse.three": "Попробуйте другой способ входа в систему",
  "error.notEnoughOil": "Недостаточно нефти",
  "error.oilCapacityExceeded": "Для нефти больше нет места.",
};

const exoticShopItems: Record<ExoticShopItems, string> = {
  "exoticShopItems.line1":
    "Наш магазин бобов закрывается, так как наши бобы отправляются в новое путешествие с безумным ученым.",
  "exoticShopItems.line2":
    "Спасибо за то, что был частью нашего сообщества любителей бобов.",
  "exoticShopItems.line3": "С наилучшими пожеланиями,",
  "exoticShopItems.line4": "Бобовая команда",
};

const factions: Record<Factions, string> = {
  "faction.join": "Присоединиться к {{faction}}",
  "faction.description.sunflorians":
    "Санфлорианцы - это королевские особы, которые правят Страной Подсолнухов. Веришь ли ты во власть и правила?",
  "faction.description.bumpkins":
    "Бампкины - это фермеры и все основные жители Страны Подсолнухов. Веришь ли ты в трудолюбие и сообщество?",
  "faction.description.goblins":
    "Гоблины - озорные промышленники Страны Подсолнухов. Веришь ли ты в прогресс и инновации?",
  "faction.description.nightshades":
    "Ночные тени - загадочные и волшебные существа Страны Подсолнухов. Веришь ли ты в магию и тайны?",
  "faction.countdown": "Через {{timeUntil}} начнется битва фракций.",
  "faction.join.confirm": "Ты согласен присоединиться к {{faction}}?",
  "faction.cannot.change": "Ты не можешь сменить фракцию.",
  "faction.joined.sunflorians.intro":
    "Приветствую тебя, благородный Санфлориан! Присоединяйся к нам, мы объединяем наши силы, чтобы утвердить превосходство и поддержать честь нашего королевства.",
  "faction.joined.bumpkins.intro":
    "Привет, дружище бампкин! Пришло время объединить наших братьев-фермеров и показать другим фракциям силу упорного труда и единства.",
  "faction.joined.goblins.intro":
    "Приветствую тебя, искусный гоблин! С нашими острыми умами и коварными планами, победа будет за нами в предстоящих сражениях.",
  "faction.joined.nightshades.intro":
    "Приветствую тебя, загадочный Найтшейд! Вместе мы пройдем через тени и раскроем секреты, которые приведут нас к победе в грядущих сражениях.",
  "faction.earn.emblems": "Зарабатывай эмблемы",
  "faction.earn.emblems.time.left": "{{timeLeft}} осталось",
  "faction.emblems.tasks":
    "Зарабатывай очки фракции, делая пожертвования или выполняя сезонные доставки, чтобы получить право на получение аирдропа фракционных эмблем.",
  "faction.view.leaderboard": "Посмотреть таблицу лидеров",
  "faction.donation.request.message":
    "Приветствую, {{faction}}! В настоящее время мы принимаем пожертвования в виде ресурсов и SFL, чтобы помочь построить нашу фракцию. За свою щедрость ты получишь очки фракции.",
  "faction.donation.label": "Пожертвование фракции {{faction}}",
  "faction.donation.sfl": "Пожертвование SFL (минимум 10)",
  "faction.donation.sfl.max.per.day": "{{donatedToday}}/500",
  "faction.donation.bulk.resources": "Пожертвования ресурсов (минимум {{min}})",
  "faction.donation.bulk.resources.unlimited.per.day":
    "{{donatedToday}}/неограниченно",
  "faction.donation.confirm":
    "Ты уверен, что хочешь пожертвовать следующее за {{factionPoints}} марок?",
  "faction.seasonal.delivery.start.at":
    "Сезонные доставки начнутся через {{days}}",
  "faction.points.with.number": "Очки фракции: {{points}}",
  "faction.points.title": "Очки фракции",
  "faction.points.pledge.warning":
    "Принеси присягу фракции для получения очков фракции",
  "faction.emblemAirdrop": "Выдача Эмблем",
  "faction.emblemAirdrop.closes": "Выдача закончится: {{date}}",
  "kingdom.noticeboard.one":
    "Добро пожаловать в королевство, самое время вступить во фракцию и добится славы!",
  "kingdom.noticeboard.two":
    "Играй в мини игры, выполняй задания фракции, покоряй лидерборд и зарабатывай марки.",
  "kingdom.noticeboard.three":
    "Каждую неделю лучшие игроки смогут получить призы!",
  "kingdom.noticeboard.four":
    "Загляни в магазин и выбери себе достойную награду.",
  "faction.noticeboard.one":
    "Доставляй ресурсы на кухню и выполняй задания, чтобы заработать марки.",
  "faction.noticeboard.two":
    "Корми нашего тотемного животного, чтобы получить увеличенный опыт! ",
  "faction.noticeboard.three":
    "Лучшие игроки каждую неделю будут получать бонусный приз.",
  "faction.noticeboard.four":
    "Покупай эмблемы и получай доступ к дополнительным навыкам.",

  // Kingdom NPCs
  "faction.restrited.area":
    "Постой, фермер! Только члены {{faction}} могут войти.",
  "faction.not.pledged":
    "Хм. Похоже, ты еще не вступил во фракцию. Хотел бы ты присоединиться к {{faction}}?",
  "faction.cost":
    "Докажи свою преданность к {{фракции}}. Вступление во фракцию стоит {{cost}} SFL.",
  "faction.pledge.reward":
    "Взамен ты получишь {{banner}} и возможность зайти в наш дом.",
  "faction.welcome": "Теперь ты {{faction}}!",
  "faction.greeting.goblins": "Слава Королю Гоблинов!",
  "faction.greeting.sunflorians": "Наша власть будет безраздельна!",
  "faction.greeting.bumpkins": "Объединим всех фермеров!",
  "faction.greeting.nightshades": "Тени приведут нас к победе!",

  "faction.leave": "Покинуть фракцию",
  "faction.leave.hasEmblems": "У тебя еще остались эмблемы",
  "faction.leave.areYouSure": "Ты уверен, что хочешь покинуть фракцию?",
  "faction.leave.isNew": "Ты не можешь покинуть фракцию в первые 24 часа.",
  "faction.leave.marks":
    "Предатели фракции будут наказаны, потеряв свой флаг и все марки.",
  "faction.leave.sellEmblems":
    "Ты должен продать свои эмблемы, прежде чем покинуть фракцию.",

  // Faction Claim Emblems
  "faction.claimEmblems.alreadyClaimed": "Привет! Ты уже получил свои эмблемы!",
  "faction.claimEmblems.emblemsEarned": "Эмблемы",
  "faction.claimEmblems.yourRank": "Ранг",
  "faction.claimEmblems.yourPercentile": "Твой бонус",
  "faction.claimEmblems.yourEmblems": "Твои эмблемы",
  "faction.claimEmblems.noContribution":
    "Ты пока не внес значимого вклада в свою фракцию.",
  "faction.claimEmblems.statistics": "Статистика",
  "faction.claimEmblems.thankYou":
    "Спасибо, {{player}}, за твой вклад в общее дело {{Faction}}! Возьми эти эмблемы, они значат многое для нашей фракции!",
  "faction.claimEmblems.claimMessage":
    "Твой вклад - {{count}} очков фракции. Твой ранг - {{rank}}. Ты входишь в лучшие {{percentile}}% в {{Faction}}.",
  "faction.claimEmblems.claim": "Получи {{count}} эмблем",
  "faction.claimEmblems.congratulations":
    "Ееехуу! Ты получил {{count}} эмблем!",
  "faction.claimEmblems.comparison":
    "Здесь ты сможешь сравнить себя с остальными членами фракции.",
  "faction.claimEmblems.totalMembers": "Всего во фракции",
  "faction.claimEmblems.totalEmblems": "Всего эмблем фракции",
  "faction.claimEmblems.percentile": "Лучшие {{percentile}}%",
  "faction.claimEmblems.travelNow": "В путешествие",
  "faction.claimEmblems.visitMe":
    "Зайди ко мне, {{recruiterName}}, чтобы получить свои эмблемы.",

  "faction.kitchen.opensIn": "Откроется через {{time}}",
  "faction.kitchen.notReady":
    "Хо-хо, вот это энтузиазм! К несчастью, кухня пока закрыта, приходи попозже.",
  "faction.kitchen.gatherResources":
    "Так много новобранцев… как же мне накормить их всех? Может, ты мне немного поможешь?",
  "faction.pet.gatherResources": "(урчит живот)...",
  "faction.pet.contributingMember": "Участник",
  "faction.kitchen.preparing":
    "Я как раз готовлю заказы, возвращайся через пару минут!",
  "faction.kitchen.newRequests": "Новые заказы: {{time}}",
  "faction.emblems": "Эмблемы",
  "faction.emblems.intro.one":
    "Ого, ты только посмотри на все эти эмблемы. Ты, похоже, настоящий воин!",
  "faction.emblems.intro.two":
    "Чем больше эмблем у тебя будет, тем выше будет твой ранг (и статус), и тем больше марок ты сможешь заработать.",
  "faction.tradeEmblems":
    "Покупай эмблемы, чтобы повысить свой ранг и получить навыки.",
  "faction.marksBoost": "Марки нужны для фракционных событий и заданий.",
  "faction.shop.onlyFor": "Только для {{faction}}",
  "faction.shop.welcome":
    "Добро пожаловать в магазин фракций! Здесь, за марки, ты сможешь купить бусты, стильную одежду и редкие артефакты!",
  "faction.goodLuck": "Удачи на новой неделе!",
  "faction.noPrizeFound": "Уф, тут нет призов",
  "faction.pet.weeklyGoal": "Цель на неделю: {{totalXP}}/{{goalXP}} XP",
  "faction.pet.hungry":
    "Наше тотемное животное нуждается в тебе! Его нужно кормить на 30% больше каждую неделю, чтобы утолить его растущий голод. Корми его каждую неделю, чтобы получить бонус на опыт и заработать еще марок!",
  "faction.pet.fed":
    "Отличная работа! Тотемное животное чувствует себя великолепно и вся фракция получает буст к опыту. Не теряй темп и дальше будет еще больше!",
  "faction.pet.sleeping":
    "Твое животное уснуло на неделю. Не забудь покормить его после пробуждения и утолить его безмерный голод.",
  "faction.pet.newRequests": "Новый запрос через {{time}}",
  "faction.pet.streak": "{{streak}} недели подряд",
  "faction.pet.wakes.in": "Проснется через {{time}}",
  "faction.boostsApplied": "Усиление получено:",
  "faction.no.boostsApplied": "Нет активных бустов",
};

const factionShopDescription: Record<FactionShopDescription, string> = {
  "description.factionShop.sunflorianThrone": "Трон для Sunflorian.",
  "description.factionShop.nightshadeThrone": "Трон для Nightshade.",
  "description.factionShop.goblinThrone": "Трон для Goblin.",
  "description.factionShop.bumpkinThrone": "Трон для Bumpkin.",
  "description.factionShop.goldenSunflorianEgg":
    "Драгоценное яйцо специально для Sunflorian.",
  "description.factionShop.goblinMischiefEgg":
    "Драгоценное яйцо специально для Goblin.",
  "description.factionShop.bumpkinCharmEgg":
    "Драгоценное яйцо специально для Bumpkin.",
  "description.factionShop.nightshadeVeilEgg":
    "Драгоценное яйцо специально для Nightshade.",
  "description.factionShop.emeraldGoblinGoblet": "Кубок с изумрудом.",
  "description.factionShop.opalSunflorianGoblet": "Кубок с драгоценным опалом.",
  "description.factionShop.sapphireBumpkinGoblet":
    "Кубок с драгоценным сапфиром.",
  "description.factionShop.amethystNightshadeGoblet":
    "Кубок с драгоценным аметистом.",
  "description.factionShop.goldenFactionGoblet": "Кубок из чистого золота.",
  "description.factionShop.rubyFactionGoblet": "Кубок с рубином.",
  "description.factionShop.sunflorianBunting":
    "Яркие флаги для фракции Sunflorian.",
  "description.factionShop.nightshadeBunting":
    "Яркие флаги для фракции Nightshade.",
  "description.factionShop.goblinBunting": "Яркие флаги для фракции Goblin.",
  "description.factionShop.bumpkinBunting": "Яркие флаги для фракции Bumpkin.",
  "description.factionShop.sunflorianCandles":
    "Декоративные свечи для фракции Sunflorian.",
  "description.factionShop.nightshadeCandles":
    "Декоративные свечи для фракции Nightshade.",
  "description.factionShop.goblinCandles":
    "Декоративные свечи для фракции Goblin.",
  "description.factionShop.bumpkinCandles":
    "Декоративные свечи для фракции Bumpkin.",
  "description.factionShop.sunflorianLeftWallSconce":
    "Освети свои Sunflorian покои с этим настенным бра.",
  "description.factionShop.nightshadeLeftWallSconce":
    "Освети свои Nightshade покои с этим настенным бра.",
  "description.factionShop.goblinLeftWallSconce":
    "Освети свои Goblin покои с этим настенным бра.",
  "description.factionShop.bumpkinLeftWallSconce":
    "Освети свои Bumpkin покои с этим настенным бра.",
  "description.factionShop.sunflorianRightWallSconce":
    "Освети свои Sunflorian покои с этим настенным бра.",
  "description.factionShop.nightshadeRightWallSconce":
    "Освети свои Nightshade покои с этим настенным бра.",
  "description.factionShop.goblinRightWallSconce":
    "Освети свои Goblin покои с этим настенным бра.",
  "description.factionShop.bumpkinRightWallSconce":
    "Освети свои Bumpkin покои с этим настенным бра.",
  "description.factionShop.cookingBoost":
    "Уменьшает время готовки на 50%, эффект длится 4 часа.",
  "description.factionShop.cropBoost":
    "Сокращает время роста на грядках на 25%, в течение 6 часов.",
  "description.factionShop.woodBoost":
    "Сокращает время роста деревьев на 25%, в течении 4 часов.",
  "description.factionShop.mineralBoost":
    "Сокращает время восстановления минералов на 50%, эффект длится 3 часов.",
  "description.factionShop.fruitBoost":
    "Уменьшает время созревания фруктов на 25%, эффект длится 6 часов.",
  "description.factionShop.flowerBoost":
    "Сокращает время роста цветов на 25%, в течение 4 часов.",
  "description.factionShop.fishBoost":
    "Добавляет 50% шанс поймать +1 рыбу, в течение 4 часов.",
  "description.factionShop.sunflorianFactionRug":
    "Великолепный ковер, созданный талантливыми мастерами фракции Sunflorian.",
  "description.factionShop.nightshadeFactionRug":
    "Великолепный ковер, созданный талантливыми мастерами фракции Nightshade.",
  "description.factionShop.goblinFactionRug":
    "Великолепный ковер, созданный талантливыми мастерами фракции Goblin.",
  "description.factionShop.bumpkinFactionRug":
    "Великолепный ковер, созданный талантливыми мастерами фракции Bumpkin.",
  "description.factionShop.goblinArmor":
    "Надежная и шумная защита, одобренная гоблинами. Добавляет 20% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется..",
  "description.factionShop.goblinHelmet":
    "Сильный и крепкий шлем, созданный для бесстрашных приключений в диких землях. Добавляет 10% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.goblinPants":
    "Эти штаны сочетают в себе ловкость и мастерство гоблинов для неожиданных маневров. Добавляет 5% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется..",
  "description.factionShop.goblinSabatons":
    "Созданы, чтобы обойти любого врага. Добавляет 5% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.goblinAxe":
    "Этот топор — доказательство силы гоблинов и их непревзойденного боевого мастерства. Добавляет 10% к маркам",
  "description.factionShop.sunflorianArmor":
    "Сверкающая защита, отражающая силу солнца. Добавляет 20% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.sunflorianHelmet":
    "Этот шлем истинный маяк света и защитник от теней. Добавляет 10% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.sunflorianPants":
    "Носи с гордостью этот наряд, он хранит теплоту и энергию всех Sunflorians. Добавляет 5% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.sunflorianSabatons":
    "Каждый шаг в этих туфлях звенит силой и красотой. Добавляет 5% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.sunflorianSword":
    "Лезвие, пылающее отвагой и блеском солнца. Добавляет 10% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.bumpkinArmor":
    "Надежная броня для тех, кто чтит традиции и силу. Добавляет 20% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.bumpkinHelmet":
    "Укрась свою голову символом деревенской силы духа и решимости. Добавляет 10% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.bumpkinPants":
    "Путешествуй по сельской местности или в городе, сочетая комфорт с духом приключений. Добавляет 5% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.bumpkinSabatons":
    "Носись по полям в этой прочной обуви, отражающей настроение сельской жизни. Добавляет 5% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.bumpkinSword":
    "Это оружие, выкованное в полях и лесах, готово к любым вызовам. Добавляет 10% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.nightshadeArmor":
    "Доспехи, созданные для скрытности и атак из тени. Добавляет 20% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.nightshadeHelmet":
    "Крепкий шлем, умеющий хранить тайну и полный тихой силы. Добавляет 10% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.nightshadePants":
    "Эти брюки сочетают в себе ловкость и тайну глубокой ночи. Добавляет 5% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.nightshadeSabatons":
    "Идеальный фасон, где каждый шаг становится шепотом в темноте. Добавляет 5% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.nightshadeSword":
    "Клинок, поражающий с точностью лунной стали. Добавляет 10% марок тем, кто присягнул этой фракции. Эффект от нескольких экземпляров этого предмета не суммируется.",
  "description.factionShop.knightGambit":
    "Надень эту шляпу и будь готов отправиться в приключение, полное игривого настроения и стиля.",
  "description.factionShop.motley":
    "Буйство красок, собранных вместе в веселом вызове моде.",
  "description.factionShop.royalBraids":
    "Прическа, достойная королевской особы.",
};

const festiveTree: Record<FestiveTree, string> = {
  "festivetree.greedyBumpkin": "Обнаружен жадный бампкин",
  "festivetree.alreadyGifted":
    "Под елкой уже оставили подарок. Подожди до следующего Рождественского праздника.",
  "festivetree.notFestiveSeason": "Сейчас не праздничный сезон. Приходи позже.",
};

const fishDescriptions: Record<FishDescriptions, string> = {
  // Fish
  "description.anchovy.one":
    "Океанический карманный акробат, всегда стремится только вперед!",
  "description.anchovy.two": "Крошечная рыбка, с сильным вкусом!",
  "description.butterflyfish.one":
    "Рыба, ориентирующаяся на моду, демонстрирующая свои яркие и стильные полоски.",
  "description.butterflyfish.two": "Вкус и цвет расплывается во рту!",
  "description.blowfish.one":
    "Круглый, надутый морской комик, который гарантированно вызовет улыбку.",
  "description.blowfish.two": "Ешь с опаской, шипастый сюрприз!",
  "description.clownfish.one":
    "Подводный шут в мандариновом смокинге и с клоунским обаянием.",
  "description.clownfish.two":
    "Никаких шуток, только чистейшее наслаждение вкусом!",
  "description.seabass.one":
    "Твой 'не-такой-интересный' друг с серебристой чешуей - отличный улов!",
  "description.seabass.two": "Основа морской кухни!",
  "description.seahorse.one":
    "Океанический танцор в слоумо, грациозно покачивающийся в водном балете.",
  "description.seahorse.two": "Изысканная, редкая и на удивление вкусная!",
  "description.horsemackerel.one":
    "Спидстер с блестящим покрытием, всегда мчится по волнам.",
  "description.horsemackerel.two": "Галопом по вкусам с каждым укусом!",
  "description.squid.one":
    "Загадка глубин с щупальцами, способными пощекотать твое любопытство.",
  "description.squid.two": "Проложи путь к изысканным вкусам!",
  "description.redsnapper.one":
    "Улов на вес золота, окрашенный в огненно-малиновый цвет.",
  "description.redsnapper.two": "Окунись в богатый и пикантный вкус океана!",
  "description.morayeel.one":
    "Скользкое, зловещее существо, скрывающееся в темных уголках океана. ",
  "description.morayeel.two": "Скользкая, пикантная и сенсационная!",
  "description.oliveflounder.one":
    "Мастер маскировки на морском дне, всегда сливающийся с толпой.",
  "description.oliveflounder.two": "Утопай в богатстве и вкусе!",
  "description.napoleanfish.one":
    "Встречай рыбу с комплексом Наполеона - короткая, но властная!",
  "description.napoleanfish.two": "Преодолей свой голод с помощью этого улова!",
  "description.surgeonfish.one":
    "Океанический неоновый воин, вооруженный острым шипом.",
  "description.surgeonfish.two":
    "Развивай свои вкусовые рецепторы с точностью до мелочей!",
  "description.zebraturkeyfish.one":
    "Полосы, шипы и пикантный вид, эта рыба - настоящее зрелище!",
  "description.zebraturkeyfish.two":
    "Полосатая, колючая и невероятно аппетитная!",
  "description.ray.one":
    "Подводный глайдер, спокойный крылатый красавец, летящий по волнам.",
  "description.ray.two": "Окунись в царство насыщенных вкусов!",
  "description.hammerheadshark.one":
    "Встречай, акула с головой для охоты, и телом для приключений",
  "description.hammerheadshark.two": "Лобовое столкновение со вкусом!",
  "description.tuna.one":
    "Океанический мускулистый спринтер, готовый к финальной гонке!",
  "description.tuna.two": "Титанический вкус в каждом ломтике!",
  "description.mahimahi.one":
    "Рыба, которая верит в красочную жизнь с золотыми плавниками.",
  "description.mahimahi.two": "Двойное название - двойной вкус!",
  "description.bluemarlin.one":
    "Океаническая легенда, марлин, чье отношение к жизни столь же глубоко, как и море.",
  "description.bluemarlin.two": "Утоли свой аппетит этим королевским уловом!",
  "description.oarfish.one":
    "Длинный–предлинный - загадочный океанический странник.",
  "description.oarfish.two": "Проложи себе путь к легендарному вкусу!",
  "description.footballfish.one":
    "MVP глубин, биолюминесцентная звезда, готовая играть!",
  "description.footballfish.two": "Забей вкусовой тачдаун!",
  "description.sunfish.one":
    "Океанический любитель солнца, греющийся в лучах света с высоко поднятыми плавниками.",
  "description.sunfish.two": "Насладись этим аппетитнейшим вкусом!",
  "description.coelacanth.one":
    "Доисторический реликт, относящийся со вкусом к прошлому и настоящему.",
  "description.coelacanth.two":
    "Доисторический вкус, выдержавший испытание временем!",
  "description.whaleshark.one":
    "Бережный гигант из глубин, добывающий сокровища из океанского буфета.",
  "description.whaleshark.two":
    "Огромное лакомство для тех, кто испытывает невероятную тягу к еде!",
  "description.barredknifejaw.one":
    "Океанический преступник с черно-белыми полосами и золотым сердцем.",
  "description.barredknifejaw.two": "Утоли голод резким вкусом!",
  "description.sawshark.one":
    "С похожим на пилу рылом, этот океанический плотник, который всегда на виду!",
  "description.sawshark.two": "Новейший вкус из глубин!",
  "description.whiteshark.one":
    "Акула с убийственной улыбкой, правящая морями!",
  "description.whiteshark.two": "Погрузись в океан захватывающего вкуса!",

  // Marine Marvels
  "description.twilight.anglerfish":
    "Глубоководный удильщик со встроенной лампочкой, прокладывающей путь в темноте.",
  "description.starlight.tuna":
    "Тунец, затмевающий звезды, готов украсить твою коллекцию.",
  "description.radiant.ray":
    "Скат, предпочитающий светиться в темноте с сияющим секретом, которым хочет поделиться.",
  "description.phantom.barracuda":
    "Неуловимая и призрачная глубоководная рыба, скрывающаяся в тенях.",
  "description.gilded.swordfish":
    "Рыба-меч с чешуей, сверкающей, как золото. Лучший улов!",
  "description.crimson.carp": "Редкая и яркая драгоценность весенних вод.",
  "description.battle.fish":
    "Редчайший бронированный пловец из сезона фракций!",
};

const fishermanModal: Record<FishermanModal, string> = {
  "fishermanModal.attractFish": "Привлеки рыбу, бросив в воду насадку.",
  "fishermanModal.fishBenefits":
    "Рыба отлично подходит для еды, доставки и получения наград!",
  "fishermanModal.baitAndResources":
    "Принеси мне наживку и ресурсы, и мы вытащим редчайшие призы, которые только может предложить океан!",
  "fishermanModal.crazyHappening":
    "Ух ты, происходит что-то безумное......это рыбное безумие!",
  "fishermanModal.fullMoon":
    "Огого, вот это полнолуние! Старые рыбаки рассказывают, что только с такой луной у тебя есть шанс поймать самых невероятных морских чудищ.",
  "fishermanModal.bonusFish":
    "Поторопись, за каждый улов ты получишь дополнительную рыбу!",
  "fishermanModal.dailyLimitReached":
    "Ты исчерпал свой суточный лимит в ({{limit}}) уловов",
  "fishermanModal.needCraftRod": "Сперва ты должен изготовить удочку.",
  "fishermanModal.craft.beach": "Сделай на пляже",
  "fishermanModal.zero.available": "0 в наличии",
  "fishermanmodal.greeting":
    "Эхой, земляк! Я - {{name}}, твой верный островной рыбак, и я поставил перед собой грандиозную задачу - собрать всю рыбу!",
};

const fishermanQuest: Record<FishermanQuest, string> = {
  "fishermanQuest.Ohno": "О нет! Она сорвалась",
  "fishermanQuest.Newfish": "Новая рыба",
};

const fishingChallengeIntro: Record<FishingChallengeIntro, string> = {
  "fishingChallengeIntro.powerfulCatch": "Ты подсек мощный улов!",
  "fishingChallengeIntro.useStrength":
    "Используй всю свою силу, чтобы выловить его.",
  "fishingChallengeIntro.stopGreenBar":
    "Останавливай зеленую полоску на рыбе, чтобы добиться успеха.",
  "fishingChallengeIntro.beQuick":
    "Не медли - 3 неудачные попытки, и она сорвется!",
};

const fishingGuide: Record<FishingGuide, string> = {
  "fishingGuide.catch.rod":
    "Изготовь удочку и собери наживку, для того чтобы ловить рыбу.",
  "fishingGuide.bait.earn":
    "Наживку можно собрать с компостера или создать самому.",
  "fishingGuide.eat.fish":
    "Ешь рыбу, чтобы поднять уровень бампкина или выполняй рыбные доставки за вознаграждение.",
  "fishingGuide.discover.fish":
    "Изучай воды для открытия редких рыб, прохождения миссий и разблокировки уникальных наград в кодексе.",
  "fishingGuide.condition":
    "Следи за изменением времени суток и событиями; Некоторые рыбы доступны только при определенных условиях.",
  "fishingGuide.bait.chum":
    "Экспериментируй с разными комбинациями приманок и насадок, чтобы увеличить шанс на ловлю различных видов рыб.",
  "fishingGuide.legendery.fish":
    "Остерегайся легендарных рыб; их ловля требует исключительного мастерства и силы.",
};

const fishingQuests: Record<FishingQuests, string> = {
  "quest.basic.fish": "Вылови каждую базовую рыбу!",
  "quest.advanced.fish": "Вылови каждую продвинутую рыбу!",
  "quest.all.fish": "Открой каждую базовую, продвинутую и экспертную рыбу",
  "quest.300.fish": "Вылови 300 рыб",
  "quest.1500.fish": "Вылови 1500 рыб",
  "quest.marine.marvel": "Вылови каждое морское чудище",
  "quest.5.fish": "Вылови по 5 штук каждой рыбы",
  "quest.sunpetal.savant": "Открой 12 разновидностей с Sunpetal",
  "quest.bloom.bigshot": "Открой 12 разновидностей с Bloom",
  "quest.lily.luminary": "Открой 12 разновидностей с Lily",
};

const flowerBed: Record<FlowerBed, string> = {
  "flowerBedGuide.buySeeds": "Покупай семена в магазине семян.",
  "flowerBedGuide.crossbreedWithCrops":
    "Скрещивай с урожаем и другими цветами, чтобы открыть новые виды цветов.",
  "flowerBedGuide.collectAllSpecies": "Собери все виды цветов в кодексе!",
  "flowerBedGuide.beesProduceHoney":
    "Пчелы производят мед во время роста цветов.",
  "flowerBedGuide.fillUpBeehive":
    "Если собрать мед с заполненного улья, то появится шанс на пчелиный рой.",
  "flowerBedGuide.beeSwarmsBoost":
    "Пчелиные рои дают +0.2 к урожаю любым посевам.",
  "flowerBed.newSpecies.discovered": "Боже мой, ты открыл новый вид цветка!",
  "flowerBed.newSpecies.superLucky":
    "Ого! Сегодня твой счастливый день, ты сделал два открытия за один раз! Ты открыл новый вид цветка, и появился дополнительный мутантный цветок",
  "flowerBed.newSpecies.mutant": "А вот и цветок-мутант!",
  "flowerBedContent.select.combination": "Выбери свою комбинацию",
  "flowerBedContent.select.seed": "Выбери семя",
  "flowerBedContent.select.crossbreed": "Выбери скрещивание",
};

const flowerbreed: Record<Flowerbreed, string> = {
  "flower.breed.sunflower": "Бампкины-ботаники клянутся, что это не цветы.",
  "flower.breed.cauliflower":
    "Не совсем уверен, что скажут об этом бампкины-ботаники.",
  "flower.breed.beetroot": "У него красивый фиолетовый цвет.",
  "flower.breed.parsnip":
    "Пастернак может стать хорошим выбором для скрещивания.",
  "flower.breed.eggplant":
    "У баклажана яркий цвет, возможно, он будет хорошо скрещиваться.",
  "flower.breed.radish": "Вау, этот редис красный!",
  "flower.breed.kale": "Он зеленый, но не такой, как другие зеленые.",
  "flower.breed.blueberry":
    "Эта голубика очень спелая, надеюсь, она не красит.",
  "flower.breed.apple": "Хрустящие яблоки!",
  "flower.breed.banana": "Связка бананов.",
  "flower.breed.redPansy": "Красная фиалка.",
  "flower.breed.yellowPansy": "Желтая фиалка.",
  "flower.breed.purplePansy": "Фиолетовая фиалка.",
  "flower.breed.whitePansy":
    "Белая фиалка. Лишена цвета, я задаюсь вопросом, редкость ли это.",
  "flower.breed.bluePansy": "Голубая фиалка.",
  "flower.breed.redCosmos": "Красный космос.",
  "flower.breed.yellowCosmos": "Желтый космос.",
  "flower.breed.purpleCosmos": "Фиолетовый космос.",
  "flower.breed.whiteCosmos": "Белый космос.",
  "flower.breed.blueCosmos": "Голубой космос. Весьма познавательно.",
  "flower.breed.prismPetal":
    "Крайне редкая мутация, ты уверен, что хочешь скрестить её?",
  "flower.breed.redBalloonFlower":
    "Колокольчики очень красивые. Особенно красные.",
  "flower.breed.yellowBalloonFlower": "Желтый колокольчик.",
  "flower.breed.purpleBalloonFlower": "Фиолетовый колокольчик.",
  "flower.breed.whiteBalloonFlower": "Белый колокольчик. Он редкий.",
  "flower.breed.blueBalloonFlower":
    "Самый обычный колокольчик. Нечем похвастаться.",
  "flower.breed.redDaffodil": "Красный нарцисс",
  "flower.breed.yellowDaffodil": "Желтый нарцисс",
  "flower.breed.purpleDaffodil": "Фиолетовый нарцисс",
  "flower.breed.whiteDaffodil": "Белый нарцисс",
  "flower.breed.blueDaffodil": "Голубой нарцисс",
  "flower.breed.celestialFrostbloom":
    "Крайне редкая мутация, ты уверен, что хочешь скрестить её?",
  "flower.breed.redCarnation":
    "Бампкины ценят красную гвоздику за её редкость.",
  "flower.breed.yellowCarnation": "Бампкины не ценят желтую гвоздику.",
  "flower.breed.purpleCarnation":
    "Бампкины ценят фиолетовую гвоздику за её красоту.",
  "flower.breed.whiteCarnation":
    "Бампкины ценят белую гвоздику за её простоту.",
  "flower.breed.blueCarnation":
    "Бампкины ценят голубую гвоздику за её возможность скрещиваться с семенами Bloom.",
  "flower.breed.redLotus": "Красный лотос",
  "flower.breed.yellowLotus": "Желтый лотос",
  "flower.breed.purpleLotus": "Фиолетовый лотос",
  "flower.breed.whiteLotus": "Белый лотос",
  "flower.breed.blueLotus": "Голубой лотос",
  "flower.breed.primulaEnigma":
    "Крайне редкая мутация, ты уверен, что хочешь скрестить её?",
};

const flowerShopTerms: Record<FlowerShopTerms, string> = {
  "flowerShop.desired.dreaming":
    "О, я так давно мечтаю вырастить {{desiredFlowerName}}!",
  "flowerShop.desired.delightful":
    "Как восхитительно было бы иметь {{desiredFlowerName}}!",
  "flowerShop.desired.wonderful":
    "Как прекрасно было бы иметь {{desiredFlowerName}}!",
  "flowerShop.desired.setMyHeart":
    "Я очень сильно хочу вырастить {{desiredFlowerName}}!",
  "flowerShop.missingPages.alas":
    "Но увы! Я потеряла страницы своей книги по скрещиванию! Они должны быть где-то на плазе.",
  "flowerShop.missingPages.cantBelieve":
    "Но я не могу поверить, что страницы с моими лучшими рецептами скрещивания цветов пропали. Они должны быть где-то на плазе.",
  "flowerShop.missingPages.inABind":
    "Однако, я попала в затруднительное положение - страницы, содержащие мои методы скрещивания, похоже, пропали. Они должны быть где-то на плазе.",
  "flowerShop.missingPages.sadly":
    "К сожалению, мои записи о скрещивании пропали! Я уверена, что они где-то здесь. Они должны быть где-то на плазе.",
  "flowerShop.noFlowers.noTrade":
    "Извини, но сейчас у меня нет цветов для обмена.",
  "flowerShop.do.have.trade":
    "У тебя есть {{desiredFlower}}, которым ты бы мог со мной обменяться?",
  "flowerShop.do.have.trade.one":
    "У тебя есть {{desiredFlower}}, которым ты бы хотел обменяться?",
};

const foodDescriptions: Record<FoodDescriptions, string> = {
  // Fire Pit
  "description.pumpkin.soup": "Кремовый суп, который любят гоблины",
  "description.mashed.potato": "Моя жизнь - пюре",
  "description.bumpkin.broth":
    "Питательный бульон для восполнения сил твоего бампкина",
  "description.boiled.eggs": "Вареные яйца - отличный вариант для завтрака",
  "description.kale.stew": "Идеальный усилитель бампкина!",
  "description.mushroom.soup": "Согрей душу своему бампкину.",
  "description.reindeer.carrot": "Рудольф(кролик) не может перестать их есть!",
  "description.kale.omelette": "Полезный завтрак",
  "description.cabbers.mash": "Капуста и картофельное пюре",
  "description.popcorn": "Классическая домашняя хрустящая закуска.",
  "description.gumbo":
    "Кастрюля, полная волшебства! Каждая ложка - это парад Марди Гра!",
  "description.rapidRoast": "Для голодных фермеров...",
  "description.antipasto": "Ассорти закусок, идеальный перекус.",
  "description.carrotJuice":
    "Освежающий сок, свежевыжатый заботливыми руками .",
  "description.fishBasket": "Океанические вкусы из гоблинских глубин.",
  "description.fishBurger": "Сочный бургер, любимый у морских исследователей.",
  "description.fishnChips": "Классическая морская еда, на любой случай.",
  "description.fishOmelette": "Ароматный омлет, полный сокровищами океана.",
  "description.friedCalamari":
    "Хрустящие кольца кальмара – восхитительное лакомство.",
  "description.friedTofu": "Золотой тофу, зажаренный с любовью.",
  "description.grapeJuice": "Свежевыжатый, насыщенный и сладкий.",
  "description.oceansOlive":
    "Восхитительное океаническое блюдо, настоящий деликатес.",
  "description.quickJuice": "Быстрый заряд энергии, любимое блюдо гоблинов.",
  "description.riceBun": "Мягкая и пышная рисовая булочка.",
  "description.slowJuice":
    "Богатый питательными веществами сок, приготовленный фермерами вручную .",
  "description.steamedRedRice":
    "Идеально приготовленный на пару красный рис, услада любого фермера.",
  "description.sushiRoll": "Умело приготовленные суши-роллы.",
  "description.theLot": "Насыщенное фруктовое пюре, освежающее и питательное..",
  "description.tofuScramble": "Сытный омлет, полный белка.",

  // Kitchen
  "description.beetrootBlaze":
    "Пикантное блюдо из волшебных грибов, настоянное на свекле.",
  "description.roast.veggies": "Даже гоблины должны есть овощи!",
  "description.bumpkin.salad": "Нужно следить за здоровьем своего бампкина!",
  "description.goblins.treat": "Гоблины сходят с ума от этой штуки!",
  "description.cauliflower.burger": "Призываю всех любителей цветной капусты!",
  "description.club.sandwich":
    "С начинкой из моркови и обжаренных семян подсолнуха",
  "description.mushroom.jacket.potatoes": "Запихивайте в них все, что есть!",
  "description.sunflower.crunch":
    "Хрустящая вкуснятина. Старайтесь не обжечься.",
  "description.bumpkin.roast": "Традиционное блюдо бампкинов",
  "description.goblin.brunch": "Традиционное блюдо гоблинов",
  "description.fruit.salad": "Фруктовый салат, вкуснятина",
  "description.bumpkin.ganoush": "Пикантный спред из обжаренных баклажанов.",
  "description.chowder":
    "Морское удовольствие в миске! Ныряйте, там внутри сокровища!",
  "description.pancakes": "Отличное начало дня для бампкина",

  // Bakery
  "description.apple.pie": "Знаменитый рецепт Betty",
  "description.kale.mushroom.pie": "Традиционный рецепт Sapphiron",
  "description.cornbread": "Пышный золотистый фермерский хлеб.",
  "description.sunflower.cake": "Подсолнечный пирог",
  "description.potato.cake": "Картофельный пирог",
  "description.pumpkin.cake": "Тыквенный пирог",
  "description.carrot.cake": "Морковный пирог",
  "description.cabbage.cake": "Капустный пирог",
  "description.beetroot.cake": "Свекольный пирог Cake",
  "description.cauliflower.cake": "Пирог с цветной капустой",
  "description.parsnip.cake": "Пастернак в виде торта",
  "description.radish.cake": "Пирог с редиской",
  "description.wheat.cake": "Пшеничный пирог",
  "description.honey.cake": "Медовый коржик!",
  "description.eggplant.cake": "Сладкий фермерский десерт-сюрприз.",
  "description.orange.cake": "Апельсин ты рад, что мы не готовим яблоки?",
  "description.pirate.cake":
    "Отлично подходит для пиратских вечеринок на день рождения.",

  // Deli
  "description.fermented.shroomSyrup": "Сущность пчел и зачарованных грибов",
  "description.blueberry.jam":
    "Гоблины сделают всё что угодно ради этого варенья",
  "description.fermented.carrots": "Квас из моркови?",
  "description.sauerkraut": "Больше никакой скучной капусты!",
  "description.fancy.fries": "Фантастический картофель фри",
  "description.fermented.fish":
    "Смелый деликатес! Дай волю викингу, который живет в тебе с каждым кусочком!",

  // Smoothie Shack
  "description.apple.juice": "Освежающий напиток",
  "description.orange.juice": "Сок отлично сочетается с клаб-сэндвичем",
  "description.purple.smoothie": "Ты едва ощутишь вкус капусты",
  "description.power.smoothie":
    "Официальный напиток Деревенского Тяжелоатлетического Клуба",
  "description.bumpkin.detox": "Смой грехи прошлой ночи",
  "description.banana.blast":
    "Идеальная заправка фруктами для тех, кому нужна энергия!",

  // Unused foods
  "description.roasted.cauliflower": "Любимое у гоблинов",
  "description.radish.pie": "Люди презирают, а гоблины любят.",
};

const garbageCollector: Record<GarbageCollector, string> = {
  "garbageCollector.welcome": "Добро пожаловать в мой скромный магазин.",
  "garbageCollector.description":
    "Я - Garbage Trader, и я куплю все, что у тебя есть - если только это мусор.",
};

const gameDescriptions: Record<GameDescriptions, string> = {
  // Quest Items
  "description.goblin.key": "Гоблинский ключ",
  "description.sunflower.key": "Подсолнечный ключ",
  "description.ancient.goblin.sword": "Старинный гоблинский меч",
  "description.ancient.human.warhammer": "Старинный человеческий молот",

  // Coupons
  "description.community.coin":
    "(WIP) Ценная монета, которую можно обменять на награду",
  "description.bud.seedling":
    "(LEGACY) Саженец для обмена на бесплатный Bud NFT",
  "description.gold.pass":
    "(LEGACY) Эксклюзивный пропуск, который позволяет создавать редкие NFTs, торговать, дает доступ к выводу и бонусному контенту.",
  "description.rapid.growth":
    "(LEGACY) Наносится на культуру для ускорения роста в два раза",
  "description.bud.ticket":
    "(LEGACY) Гарантированное место на минт Bud в Sunflower Land Buds NFT drop.",
  "description.potion.ticket":
    "Награда из Potion House. Используй её для покупки предметов у Garth’а.",
  "description.trading.ticket": "Бесплатные листинги! Урааа!",
  "description.block.buck": "Ценный билет в Sunflower Land!",
  "description.beta.pass":
    "(LEGACY) Дает ранний доступ к тестированию функций.",
  "description.war.bond": "(LEGACY) Признак настоящего воина",
  "description.allegiance": "(LEGACY) Демонстрация преданности",
  "description.jack.o.lantern":
    "(LEGACY) Хэллоуинский предмет с особого события",
  "description.golden.crop": "(LEGACY) Блестящий золотой урожай",
  "description.red.envelope": "(LEGACY) Ого, ты счастливчик!",
  "description.love.letter": "(LEGACY) Передай чувства любви",
  "description.solar.flare.ticket":
    "(LEGACY) Билет, используемый во время Solar Flare сезона",
  "description.dawn.breaker.ticket":
    "(LEGACY) Билет, используемый во время Dawn Breaker сезона",
  "description.crow.feather":
    "(LEGACY) Билет, используемый во время Witches' Eve сезона",
  "description.mermaid.scale":
    "(LEGACY) Билет, используемый во время Catch the Kraken сезона",
  "description.sunflower.supporter": "Признак настоящего сторонника игры!",
  "description.arcade.coin":
    "Токен, зарабатываемый в мини-играх и приключениях. Можно обменять на награды.",
  "description.farmhand.coupon": "Купон для обмена на помощника.",
  "description.farmhand": "Бампкин, принятый для помощи на ферме",
  "description.tulip.bulb":
    "(LEGACY) Билет, используемый во время Spring Blossom",
  "description.treasure.key": "Посети плазу для получения награды",
  "description.rare.key": "Посети пляж для получения награды",
  "description.luxury.key": "Посети плазу рядом с лесом для получения награды",
  "description.prizeTicket":
    "Призовой билет. С его помощью можно принять участие в ежемесячном гоблинском розыгрыше.",
  "description.babyPanda":
    "Милая панда из события с Gas Hero. Удваивает опыт для новичков в течение марта.",
  "description.baozi": "Вкусное угощение с Лунного Нового Года.",
  "description.communityEgg":
    "Ого, ты, должно быть, действительно заботишься о сообществе!",
  "description.hungryHare":
    "Этот прожорливый кролик скачет по твоей ферме. Предмет особого события на Пасху 2024",
  "description.scroll": "Билет, используемый во время сезона Clash of Factions",
  "description.amberFossil":
    "Кусок янтаря, используемый для сезона Pharaoh's Treasure",

  // Easter Items
  "description.egg.basket": "Событие на Пасху",
  "description.blue.egg": "Голубое пасхальное яйцо",
  "description.orange.egg": "Оранжевое пасхальное яйцо",
  "description.green.egg": "Зеленое пасхальное яйцо",
  "description.yellow.egg": "Желтое пасхальное яйцо",
  "description.red.egg": "Красное пасхальное яйцо",
  "description.pink.egg": "Розовое пасхальное яйцо",
  "description.purple.egg": "Фиолетовое пасхальное яйцо",

  //Home
  "description.homeOwnerPainting":
    "Картина с изображением владельца этого дома.",

  // Emblems
  "description.goblin.emblem": "Доказательство твоей преданности делу гоблинов",
  "description.sunflorian.emblem":
    "Доказательство твоей преданности делу Sunflorians",
  "description.bumpkin.emblem":
    "Доказательство твоей преданности делу Bumpkins",
  "description.nightshade.emblem":
    "Доказательство твоей преданности делу Nightshades",
  "description.faction.mark": "Используй их в фракционном магазине",
};

const gameTerms: Record<GameTerms, string> = {
  "auction.winner": "Победитель аукциона!",
  "bumpkin.level": "Уровень бампкина",
  bumpkinBuzz: "Почтовый ящик",
  dailyLim: "Дневной лимит SFL",
  "farm.banned": "Эта ферма забанена",
  gobSwarm: "Толпа гоблинов!",
  "granting.wish": "Исполнит твое желание",
  "harvest.number": "{{minHarvest}}-{{maxHarvest}} урожай",
  "level.number": "Уровень {{level}}",
  "new.delivery.in": "Новые доставки: {{timeLeft}}",
  "new.delivery.levelup":
    "Поднимай уровень, чтобы разблокировать больше доставок.",
  "no.sfl": "Токены SFL не найдены",
  polygonscan: "PolygonScan",
  potions: "Зелья",
  "proof.of.humanity": "Доказательство человечности",
  sflDiscord: "Discord сервер игры",
  "in.progress": "В процессе",
  "compost.complete": "Компост готов",
  "aoe.locked": "Применен буст по площади",
  sunflowerLandCodex: "Кодекс игры",
  "visiting.farmId": "В гостях у #{{farmId}}",
  "stock.inStock": "{{stock}} в наличии",
  "stock.left": "{{stock}} осталось",
  "pirate.chest": "Пиратский сундук",
  "pirate.chest.opened": "Пиратский сундук открыт",
  "pirate.potion.equipped": "Pirate Potion применен",
  "missing.pirate.potion": "Отсутствует Pirate Potion",
  "comeBackIn.time": "Возвращайся через {{timeToReset}}",
};

const genieLamp: Record<GenieLamp, string> = {
  "genieLamp.ready.wish": "Готов загадать желание?",
  "genieLamp.cannotWithdraw":
    "Ты не сможешь вывести лампу, после того как потрешь её",
};

const getContent: Record<GetContent, string> = {
  "getContent.error": "Ошибка!",
  "getContent.joining": "Входим",
  "getContent.accessGranted":
    "Теперь у тебя есть доступ. Загляни на канал в Discord",
  "getContent.connectToDiscord":
    "Ты должен быть подключен к Discord’у, чтобы присоединиться к каналу с ограниченным доступом.",
  "getContent.connect": "Подключиться",
  "getContent.getAccess": "Получи доступ к ограниченным группам в Discord",
  "getContent.requires": "Требуется",
  "getContent.join": "Присоединиться",
};

const getInputErrorMessage: Record<GetInputErrorMessage, string> = {
  "getInputErrorMessage.place.bid": "Ты уверен, что хочешь сделать эту ставку?",
  "getInputErrorMessage.cannot.bid":
    "Ставки нельзя изменить после того, как они были сделаны.",
};

const goblin_messages: Record<GOBLIN_MESSAGES, string> = {
  "goblinMessages.msg1": "Эй, ты! Человек! Принеси мне еды, иначе...",
  "goblinMessages.msg2":
    "Я всегда голоден. Ты принес для меня какие-нибудь угощения?",
  "goblinMessages.msg3": "Мне все равно, что это. Просто дай мне еды!",
  "goblinMessages.msg4":
    "Если ты не дашь мне чего-то поесть, то я, возможно, попробую тебя на вкус.",
  "goblinMessages.msg5":
    "Я слышал, что человеческая еда самая лучшая. Принеси мне немного!",
  "goblinMessages.msg6":
    "Эй, у тебя есть какая-нибудь еда, от которой меня не стошнит?",
  "goblinMessages.msg7":
    "Мне уже немного надоело есть одно и то же, у тебя есть что-нибудь необычное?",
  "goblinMessages.msg8":
    "Я жажду чего-то нового, у тебя есть что-нибудь экзотическое?",
  "goblinMessages.msg9":
    "Привет, у тебя не найдется чего-нибудь перекусить? Обещаю, что не украду это...может быть.",
  "goblinMessages.msg10": "Мне все равно, что это. Просто дай мне еды!",
};

const goldTooth: Record<GoldTooth, string> = {
  "goldTooth.intro.part1":
    "Аррр, мои дорогие! Район, где копают сокровища, полон богатств и приключений, и скоро он откроет свои ворота для тебя, отважного фермера!",
  "goldTooth.intro.part2":
    "Будьте готовы присоединиться к моей команде, ведь охота за богатством начнется уже совсем скоро!",
};

const guideCompost: Record<GuideCompost, string> = {
  "guide.compost.addEggs.speed":
    "Добавь яйца, чтобы ускорить процесс производства",
  "guide.compost.addEggs": "Добавить яйца",
  "guide.compost.eggs": "яиц",
  "guide.compost.cropGrowthTime": "-50% времени роста урожая",
  "guide.compost.fishingBait": "Рыболовная наживка",
  "guide.compost.placeCrops":
    "Помести растения в компостер, чтобы накормить червей",
  "guide.compost.compostCycle":
    "В процессе компостирования образуется множество удобрений, которые можно применять для буста к урожаю и фруктам.",
  "guide.compost.yieldsWorms":
    "Из каждого компоста получаются черви, которых можно использовать в качестве наживки для рыбалки",
  "guide.compost.useEggs":
    "Устал ждать? Добавь яйца, чтобы ускорить производство компоста",
  "guide.compost.addEggs.confirmation":
    "Точно хочешь добавить {{noEggs}}? Яйца сократят время производство компоста на {{time}}",
};

const guideFactionPet: Record<GuideFactionPet, string> = {
  "guide.factionPet.one":
    "Каждую неделю питомец будет просить 3 разных вида еды. При кормежке, опыт будет идти в общий счет фракции.",
  "guide.factionPet.two":
    "У твоей фракции будет цель, которую необходимо будет достигать каждую неделю. Если фракция достигнет цели, следующая цель будет на 15% больше, чем собранный опыт к концу недели! Если цель не достигнута, то цель на следующей неделе будет сброшена на начальное значение (1000 x количество участников во фракции).",
  "guide.factionPet.three":
    "Если фракция не достигнет цели, питомец проспит целую неделю.",
  "guide.factionPet.four":
    "Если цель будет выполнена несколько недель подряд, то все, кто принимал участие в кормежке, получат бонус к опыту!",
  "guide.factionPet.five":
    "Чтобы иметь право на буст опыта на следующей неделе, игроку необходимо покормить животного каждой едой.",
  "guide.factionPet.six":
    "Ты будешь получать марки за каждую доставленную еду. После каждой доставки, награда будет уменьшаться. Эти награды будут сбрасываться ежедневно. Игроки с бонусом за эмблемы получат дополнительные марки, основанные на бонусном ранге их фракции.",
  "guide.streak.one":
    "2 недели подряд дают бонус в 10% опыта в течение 3 и 4 недели*",
  "guide.streak.two":
    "4 недели подряд дают бонус в 20% опыта в течение 5 и 6 недели*",
  "guide.streak.three":
    "6 недель подряд дают бонус в 30% опыта в течение 7 и 8 недели*",
  "guide.streak.four":
    "Если животное живо на 8 неделю, то все, кто его кормил, на 7 неделе получат бонус в 50% опыта в течение 8 недели и далее*",
  "guide.streak.beyond":
    "После 8-й недели питомец должен быть сытым каждую неделю, чтобы сохранить бонус.",
  "guide.streak.furtherInfo":
    "*Если к концу недели животное все еще голодное, то весь прогресс сбрасывается, и питомец будет спать в течение недели.",
};

const guideTerms: Record<GuideTerms, string> = {
  "guide.intro":
    "От скромных начинаний до экспертного фермерства, этот гайд ответит на все твои вопросы!",
  "gathering.guide.one":
    "Чтобы преуспеть в Sunflower Land, необходимо овладеть искусством сбора ресурсов. Начни с создания инструментов для сбора различных ресурсов. Используй надежный топор, чтобы срубить деревья и добыть древесину. Чтобы создать инструменты, посети местный верстак и обменяй монеты/ресурсы на нужный инструмент.",
  "gathering.guide.two":
    "По мере продвижения и сбора достаточного количества ресурсов ты откроешь возможность расширить свою территорию. Расширение территории открывает новые горизонты в Sunflower Land. Новые территории открывают сокровищницу ресурсов, включая плодородную почву для выращивания сельскохозяйственных культур, деревья, залежи ценных камней, драгоценные железные жилы, мерцающие золотые месторождения, восхитительные фруктовые грядки и многое другое.",
  "gathering.guide.three":
    "Помните, что сбор ресурсов и расширение земель - это основа твоего фермерского пути. Принимай вызовы и награды, которые приходят с каждым шагом, и наблюдай, как твоя ферма процветает, наполняясь щедрыми ресурсами и бесконечными возможностями.",

  "crops.guide.one":
    "В Sunflower Land посевы играют решающую роль на твоем пути к процветанию. Сажая и собирая урожай, ты можешь зарабатывать монеты или использовать их для создания ценных рецептов и предметов в игре.",
  "crops.guide.two":
    "Чтобы вырастить культуры, тебе нужно приобрести соответствующие семена во внутриигровом магазине. У каждой культуры разное время роста: от 1 минуты для Sunflower до 36 часов для Kale. Когда культуры полностью вырастут, ты сможешь собрать урожай и извлечь из него пользу.",
  "crops.guide.three":
    "Помни, что по мере того, как ты будешь расширять свои угодья и продвигаться по игре, тебе будет доступно все больше культур, что откроет новые возможности для заработка монет и изучения огромного потенциала фермерской экономики Sunflower Land. Не бойся испачкать руки, сажай семена и наблюдай за тем, как расцветают твои посевы, собирая урожай на пути к успеху!",

  "building.guide.one":
    "Изучи разнообразные постройки, доступные по мере продвижения в Sunflower Land. От курятников до мастерских и не только - каждое строение дает уникальные преимущества твоей ферме. Воспользуйся этими зданиями, чтобы оптимизировать свои сельскохозяйственные операции, повысить производительность и открыть новые возможности. Тщательно спланируй свою территорию и наслаждайся наградами, которые принесет тебе процветающая ферма в Sunflower Land.",
  "building.guide.two":
    'В Sunflower Land, здания - это краеугольный камень твоего фермерского пути. Чтобы открыть меню построек, нажми на значок инвентаря и выбери вкладку "Постройки". Выбери нужное строение и вернись на экран фермы. Найди свободное место, отмеченное зеленым цветом, и подтверди размещение. Дождись окончания таймера, и твое новое здание будет готово к использованию. Здания дают различные преимущества и открывают захватывающие игровые возможности. Стратегически правильно расположи их на своей ферме, чтобы добиться максимальной эффективности, и наблюдай, как растет и процветает твоя империя.',

  "cooking.guide.one":
    "Приготовление пищи позволяет тебе накормить своего бампкина и помочь ему получить ценные очки опыта (XP). Используя собранный урожай, ты можешь приготовить вкусную еду в различных зданиях, предназначенных для ее приготовления.",
  "cooking.guide.two":
    "Начиная с Fire Pit, на каждой ферме есть базовые возможности для приготовления пищи. Однако по мере развития ты сможешь открыть более продвинутые здания, такие как Kitchen, Bakery, Deli и Smoothie Shack, каждое из которых предлагает более широкий выбор рецептов и кулинарных изысков.",
  "cooking.guide.three":
    "Чтобы приготовить еду, просто выберите здание и укажите рецепт, который ты хочешь приготовить. В рецепте будут указаны необходимые ингредиенты, количество XP, получаемое при употреблении, и время приготовления. Запустив процесс приготовления, следите за таймером, чтобы знать, когда еда будет готова к получению.",
  "cooking.guide.four":
    "Когда еда будет готова, заберите ее из здания, щелкнув по ней и переместив в инвентарь. После этого ты сможешь взаимодействовать со своим бампкином на ферме и накормить его приготовленной едой, помогая ему получить XP и продвинуться дальше по игре.",
  "cooking.guide.five":
    "Экспериментируйте с различными рецептами, открывайте новые здания и познавайте радость кулинарии, воспитывая своего бампкина и отправляясь в восхитительное кулинарное приключение в Sunflower Land.",

  "animals.guide.one":
    "Куры в Sunflower Land - это прекрасное дополнение к твоей ферме, производящие яица, которые можно использовать в различных рецептах и крафте. Чтобы завести кур, тебе нужно достичь 9-го уровня и построить Hen House. После этого ты сможешь купить кур или разместить уже имеющихся. Просто перетащите их на ферму, как и здания. На стандартной ферме каждый курятник вмещает до 10 кур, а если ты владеешь Chicken Coop NFT, то это ограничение увеличивается до 15.",
  "animals.guide.two":
    "У каждой курицы над головой есть индикатор, отображающий ее текущее настроение или потребности. Она может быть голодной, уставшей, счастливой или готовой к кладке. Чтобы твои куры были довольны и продуктивны, корми их пшеницей из инвентаря. Кормление запускает таймер яиц, по которому яйца появляются на свет через 48 часов. Когда яйца будут готовы, посети свою ферму, проверь значок над каждой курицей и нажмите на нее, чтобы узнать тип яйца, которое вылупилось. Иногда ты можешь даже обнаружить редких цыплят-мутантов, которые дают особые преимущества: ускоренное производство яиц, повышенную урожайность или уменьшенное потребление пищи.",
  "animals.guide.three":
    "Выращивание цыплят и сбор их яиц добавляет динамику и пользу твоей ферме в Sunflower Land. Экспериментируйте с рецептами, используйте яйца в своих ремесленных начинаниях и наслаждайтесь сюрпризами, которые приносят редкие куры-мутанты. Постройте процветающее птицеводческое хозяйство и пожинайте плоды своего труда, погружаясь в очаровательный мир Sunflower Land.",

  "crafting.guide.one":
    "В Sunflower Land создание NFT - важнейший аспект повышения производительности фермерского хозяйства и ускорения прогресса. Эти особые предметы дают различные бонусы, такие как ускорение роста урожая, улучшение приготовления пищи и увеличение ресурсов, что может значительно ускорить твой путь. Максимально используя монеты, ты сможешь создавать инструменты, собирать ресурсы и расширять свои земли, чтобы еще больше укрепить свою фермерскую империю.",
  "crafting.guide.two":
    "Чтобы начать изготавливать предметы, мы посетим Игоря, искусного ремесленника в Санфлории. После того как ты сядешь на лодку и прибудешь в Санфлорию, отправляйся на вершину острова, чтобы поговорить с Игорем. В настоящее время он предлагает Базовое пугало, которое повышает скорость выращивания подсолнухов, картофеля и тыкв. Это отличная сделка, которая требует обмена твоих ресурсов на пугало. Получив его, вернись на главный остров и войди в режим проектирования, нажав на значок белой руки в правом верхнем углу игры.",
  "crafting.guide.three":
    "В режиме дизайна ты можешь стратегически правильно расставить предметы и распределить ресурсы на своей ферме, чтобы оптимизировать ее планировку и повысить привлекательность. Этот шаг имеет решающее значение для максимальной эффективности фермы. Например, поставь пугало над участками, которые ты хочешь усилить. Кроме того, подумай о приобретении украшений, которые придадут твоей земле шарм и опрятность.",
  "crafting.guide.four":
    "Создавая оборудование и размещая его в стратегически важных местах, ты сможешь усилить свои фермерские способности, превратить остров в дом, которым можно гордиться, и ускорить свой прогресс в Стране подсолнухов.",

  "deliveries.guide.one":
    "Доставки в Sunflower Land - это увлекательная возможность помочь голодным гоблинам и собратьям-бампкинам, получая за это вознаграждение. Каждый день ты сможешь увидеть все заказы, которые у тебя есть, нажав на доску доставки в левой нижней части экрана. Заказы были сделаны некоторыми местными NPC, которых можно найти в окрестностях Плазы. Чтобы выполнить заказ, тебе нужно отправиться на лодке на Тыквенную Плазу и отыскать NPC, ожидающего доставку. Как только ты их найдешь, нажми на них, чтобы доставить заказ и получить награду.",
  "deliveries.guide.two":
    "Как новый игрок, ты начинаешь с тремя слотами для заказов, но по мере развития твоей фермы ты откроешь дополнительные слоты, что позволит продвинутым игрокам брать на себя больше заказов. Новые заказы поступают каждые 24 часа, предлагая различные задания - от выращивания продуктов до приготовления еды и сбора ресурсов. Выполняя заказы, ты получишь бонусы за прохождение этапов, включая блок-баксы, SFL, монеты, вкусные пирожные и другие награды. Система вознаграждений зависит от сложности задания, поэтому для получения максимального выигрыша отдавай предпочтение тем заказам, которые предлагают большее вознаграждение. Следи за доской и выполняй разнообразные заказы, повышая уровень и открывая новые здания, чтобы выполнять более сложные задания.",
  "deliveries.intro":
    "Путешествуй и доставляй товары, чтобы заработать награды.",
  "deliveries.new": "Новые доставки",
  "chores.hank": "Ежедневные задания",
  "chores.hank.intro":
    "Выполняйте задания на ферме, чтобы получить вознаграждение от бампкинов.",
  "chores.kingdom": "Задания фракции",
  "chores.kingdom.intro":
    "Выполняй задания на ферме и зарабатывай марки в доме фракции",
  "scavenger.guide.one":
    "Занимаясь копанием в Sunflower Land, ты сможешь обнаружить спрятанные сокровища и собрать ценные ресурсы. Первый аспект - это поиск сокровищ на Острове сокровищ, где ты можешь стать пиратом-кладоискателем. Создав песчаную лопату и отправившись на Остров сокровищ, ты сможешь копать в темных песчаных местах, чтобы обнаружить разнообразные сокровища, включая богатства, украшения и даже древние NFT с полезными свойствами.",
  "scavenger.guide.two":
    "Еще одна возможность это сбор диких грибов, которые спонтанно появляются на твоей ферме и близлежащих островах. Эти грибы можно собирать бесплатно и использовать в рецептах, квестах и крафте. Следи за грибами, так как они появляются каждые 16 часов, а максимальное количество грибов на твоей ферме не должно превышать 5 штук. Если на ферме нет места, грибы появятся на соседних островах, чтобы ты не упустил эти ценные ресурсы.",

  "fruit.guide.one":
    "В Sunflower Land фрукты играют роль ценного ресурса, который можно продать за монеты или использовать в различных рецептах и крафтах. В отличие от урожая, фруктовые лунки обладают уникальной способностью неоднократно восстанавливаться после сбора, обеспечивая игрокам надежный источник фруктов.",
  "fruit.guide.two":
    "Чтобы выращивать фрукты, тебе сначала нужно получить фруктовые лунки, которые появятся на 9 или 10 расширении твоей фермы.",
  "fruit.guide.three":
    "Путем выращивания фруктов и использования их в своей фермерской стратегии, ты сможешь значительно увеличить свою прибыль, создать вкусные рецепты и открыть для себя новые возможности в Sunflower Land.",

  "seasons.guide.one":
    "Сезоны в Sunflower Land привносят в игру оживление и свежесть, предлагая игрокам новые задачи и возможности. С наступлением каждого сезона игроков ожидает множество новых предметов для крафта, украшений, выпущенных ограниченным тиражом, животных-мутантов и редких сокровищ. Эти сезонные изменения создают динамичный и развивающийся игровой процесс, побуждая игроков адаптировать свои стратегии и исследовать новые возможности на своих фермах. Кроме того, сезонные билеты добавляют в игру стратегический элемент: игроки должны решить, как грамотно распределить свои билеты, будь то сбор редких предметов, приобретение украшений с большим запасом или обмен билетов на SFL. Механика сезонных билетов делает игру увлекательной и гарантирует, что в Sunflower Land всегда есть, чего ждать.",
  "seasons.guide.two":
    "Использование сезонных предметов в кузнице гоблинов добавляет еще один уровень азарта. Игроки должны собрать необходимые ресурсы и сезонные билеты, чтобы изготовить эти предметы с ограниченным запасом, что придает ощущение соперничества и безотлагательности. Планирование наперед и выработка стратегии становятся решающими факторами, поскольку игроки стремятся получить желаемые предметы до того, как закончится их запас. Более того, возможность обменивать сезонные билеты на монеты обеспечивает гибкость и позволяет игрокам делать выбор в соответствии с их конкретными игровыми целями. Благодаря уникальным предложениям каждого сезона и предвкушению неожиданных событий Sunflower Land позволяет игрокам оставаться вовлеченными и развлекаться в течение всего года, создавая яркий и постоянно развивающийся фермерский опыт.",
  "pete.teaser.one": "Руби деревья",
  "pete.teaser.three": "Собери урожай подсолнухов",
  "pete.teaser.four": "Продай подсолнухи",
  "pete.teaser.five": "Купи семена",
  "pete.teaser.six": "Посади семена",
  "pete.teaser.seven": "Смастерите Scarecrow",
  "pete.teaser.eight": "Готовь еду и повышай уровень",
};

const harvestflower: Record<Harvestflower, string> = {
  "harvestflower.noFlowerBed": "Цветочная клумба отсутствует",
  "harvestflower.noFlower": "На клумбе нет цветка",
  "harvestflower.notReady": "Цветок не готов к сбору",
  "harvestflower.alr.plant": "Цветок уже посажен",
};

const harvestBeeHive: Record<HarvestBeeHive, string> = {
  "harvestBeeHive.notPlaced": "Этот улей не установлен.",
  "harvestBeeHive.noHoney": "В этом улье нет мёда.",
};

const hayseedHankV2: Record<HayseedHankV2, string> = {
  "hayseedHankv2.dialog1":
    "Ну здравствуй, малец! Я - Hayseed Hank, опытный фермер, ухаживающий за землей как в старые добрые времена.",
  "hayseedHankv2.dialog2":
    "Однако мои кости уже не те, что прежде. Если ты поможешь мне с повседневными делами, я вознагражу тебя {{seasonalTicket}}.",
  "hayseedHankv2.action": "Приступим",
  "hayseedHankv2.title": "Ежедневные дела Hank'а",
  "hayseedHankv2.newChoresAvailable": "Новые дела: {{timeLeft}}",
  "hayseedHankv2.skipChores": "Можно пропускать задания каждый новый день",
  "hayseedHankv2.greeting": "Ну здравствуй, малец! Я - Hayseed Hank...",
  "hayseedHankv2.confirmSkipChore": "Уверен что хочешь пропустить это задание?",
};

const heliosSunflower: Record<HeliosSunflower, string> = {
  "heliosSunflower.title": "Подсолнух Клайти",
  "heliosSunflower.description":
    "Только истинный спаситель может вернуться и собрать урожай этого Подсолнуха.",
  "confirmation.craft": "Ты уверен, что хочешь создать {{item}}?",
};

const helper: Record<Helper, string> = {
  "helper.highScore1": "Невероятно! Ты осваиваешь искусство зельеварения!",
  "helper.highScore2": "Великолепно! Благодаря твоим навыкам растение оживает!",
  "helper.highScore3": "Потрясающе! Растение в восторге от твоего мастерства!",
  "helper.midScore1": "Почти! Твоё зелье положительно повлияло на растение!",
  "helper.midScore2":
    "Так держать! Растение начинает процветать благодаря твоему мастерству!",
  "helper.midScore3":
    "Хорошо! Твое зелье начинает оказывать волшебное действие на растение!",
  "helper.lowScore1": "Продолжаем. Растение подает признаки счастья.",
  "helper.lowScore2":
    "Хорошая работа. Твое зелье принесло растению немного радости.",
  "helper.lowScore3":
    "Неплохо. Твои навыки начинают производить хорошее впечатление на растение.",
  "helper.veryLowScore1":
    "Продолжай пробовать. Растение оценит твою целеустремленность.",
  "helper.veryLowScore2": "Ты на верном пути. Растение видит твои успехи.",
  "helper.veryLowScore3":
    "Не совсем так, но растение чувствует твое стремление.",
  "helper.noScore1":
    "О нет! Растению что-то не понравилось в твоем зелье! Попробуй еще раз.",
  "helper.noScore2":
    "Упс! Растение плохо отреагировало на что-то в твоем зелье! Попробуй еще раз.",
  "helper.noScore3":
    "Ой-ой! Что-то в твоем зелье совершенно не подходит для растения! Попробуй еще раз.",
};

const henHouseTerms: Record<HenHouseTerms, string> = {
  "henHouse.chickens": "Куры",
  "henHouse.text.one": "Корми пшеницей и собирай яйца",
  "henHouse.text.two": "Ленивая курица",
  "henHouse.text.three":
    "Заставь свою курицу работать, чтобы начать собирать яйца!",
  "henHouse.text.four": "Работающая курица",
  "henHouse.text.five": "Уже размещены и усердно трудятся!",
  "henHouse.text.six":
    "Построй дополнительный курятник, чтобы разводить больше кур",
};

const islandupgrade: Record<Islandupgrade, string> = {
  "islandupgrade.confirmUpgrade":
    "Ты уверен, что хочешь перейти на новый остров?",
  "islandupgrade.warning":
    "Убедись, что у тебя нет урожая, фруктов,цветов, зданий или кур в процессе работы. Они будут возвращены в твой инвентарь.",
  "islandupgrade.upgradeIsland": "Улучшить остров",
  "islandupgrade.newOpportunities":
    "Тебя ждет экзотический остров с новыми ресурсами и возможностями для развития твоей фермы.",
  "islandupgrade.confirmation":
    "Хочешь сделать апгрейд? Ты начнешь на маленьком острове со всеми своими предметами.",
  "islandupgrade.locked": "Заблокировано",
  "islandupgrade.exploring": "Исследование",
  "islandupgrade.welcomePetalParadise": "Добро пожаловать в Лепестковый рай!",
  "islandupgrade.welcomeDesertIsland": "Ну допрыгался, теперь ты в пустыне!",
  "islandupgrade.itemsReturned":
    "Твои предметы были благополучно возвращены в твой инвентарь.",
  "islandupgrade.notReadyExpandMore":
    "Ты еще не готов. Расширься еще {{remainingExpansions}} раз",
  "islandupgrade.exoticResourcesDescription":
    "Этот район Страны подсолнухов известен своими экзотическими ресурсами. Расширяйте свои земли, чтобы обнаружить фрукты, цветы, пчелиные ульи и редкие минералы!",
  "islandupgrade.desertResourcesDescription":
    "Суровые условия пустыни требуют новых технологий для выживания. Расширяйте свою территорию, чтобы открыть для себя новые здания и то, что внутри!",
  "islandupgrade.requiredIsland": "Разблокируй {{islandType}}",
  "islandupgrade.otherIsland": "{{island}} остров",
};

const interactableModals: Record<InteractableModals, string> = {
  "interactableModals.returnhome.message": "Ты хотел бы вернуться домой?",
  "interactableModals.fatChicken.message":
    "Почему эти бампкины не оставят меня в покое, я просто хочу отдохнуть.",
  "interactableModals.lazyBud.message": "Иип! Я так устал.....",
  "interactableModals.bud.message":
    "Хммм, лучше оставлю его в покое. Уверен, что хозяин ищет его.",
  "interactableModals.walrus.message":
    "Аррррр! Рыбный магазин не откроется, пока я не получу свою рыбу.",
  "interactableModals.plazaBlueBook.message1":
    "Чтобы призвать искателей, мы должны собрать сущность земли - тыквы, вскормленные землей, и яйца, обещающие новое начало.",
  "interactableModals.plazaBlueBook.message2":
    "Когда наступают сумерки и луна отбрасывает свой серебристый отблеск, мы преподносим свои скромные дары, надеясь вновь пробудить их бдительный взор.",
  "interactableModals.plazaOrangeBook.message1":
    "Наши храбрые защитники доблестно сражались, но, увы, мы проиграли великую войну, и Лунные Искатели изгнали нас с родной земли. И все же мы не теряем надежды, ведь однажды мы вернем себе то, что когда-то было нашим.",
  "interactableModals.plazaOrangeBook.message2":
    "До тех пор мы будем хранить Sunflower Land в наших сердцах и мечтах, ожидая дня нашего триумфального возвращения.",
  "interactableModals.beachGreenBook.message1":
    "Когда ты охотишьися за желанными Red Snappers, попробуй применить неожиданный прием.",
  "interactableModals.beachGreenBook.message2":
    "Используй яблоки с приманкой Red Wiggler и смотри, как эти малиновые красавцы практически прыгают в твою сеть.",
  "interactableModals.beachBlueBook.message1":
    'Я пытаюсь приманить "Saw Sharks" на пляж!',
  "interactableModals.beachBlueBook.message2":
    "В последнее время я экспериментирую с различными приманками, но единственная, которая, похоже, работает, - это Red Snapper.",
  "interactableModals.beachBlueBook.message3":
    "Эти океанские охотники чуют пиршество Red Snappers за много миль, так что не удивляйтесь, если они приплывут.",
  "interactableModals.beachOrangeBook.message1":
    "На поверхности появился сияющий плавник, я не мог поверить своим глазам!",
  "interactableModals.beachOrangeBook.message2":
    "К счастью, Tango был со мной, должно быть, он мой талисман удачи..",
  "interactableModals.plazaGreenBook.message1":
    "Эти острова находятся под контролем бампкинов, а у нас, гоблинов, мало работы и еще меньше еды.",
  "interactableModals.plazaGreenBook.message2":
    "Мы стремимся к равенству, к месту, которое можно назвать своим, где мы можем жить и процветать.",
  "interactableModals.fanArt.winner": "Победитель конкурса фан-артов",
  "interactableModals.fanArt1.message":
    "Поздравляем Palisman, победителя первого конкурса фан-арта",
  "interactableModals.fanArt2.message":
    "Поздравляем Vergelsxtn, победитель конкурса фан-арта Dawn Breaker Party",
  "interactableModals.fanArt2.linkLabel": "Подробнее",
  "interactableModals.fanArt3.message":
    "Идеальное место для прекрасной картины. Интересно, что они поставят здесь в следующий раз...",
  "interactableModals.clubhouseReward.message1":
    "Терпение, дружище, вознаграждение придет...",
  "interactableModals.clubhouseReward.message2":
    "Присоединись к #bud-clubhouse в Discord, чтобы следить за новостями.",
  "interactableModals.plazaStatue.message":
    "В честь храброго сердцем бампкина, стойкого фермера, который сплотил наш город против орды гоблинов в темные дни древней войны.",
  "interactableModals.dawnBook1.message1":
    "На протяжении веков наша семья защищала остров Dawn Breaker. Как звонарь острова, мы предупреждали об опасностях с севера, даже когда теневые существа угрожали нашему дому.",
  "interactableModals.dawnBook1.message2":
    "Наша семья стоит на первой линии обороны от тьмы, распространяющейся с севера, но, увы, наши жертвы остаются незамеченными.",
  "interactableModals.dawnBook1.message3":
    "Настанет ли день, когда наша преданность будет признана?",
  "interactableModals.dawnBook2.message1":
    "Баклажаны - это нечто большее, чем кажется. Несмотря на свою темную внешность, привлекающую теневых существ, они привносят свет в наши блюда.",
  "interactableModals.dawnBook2.message2":
    'Приготовленные на гриле или в виде пюре в "Бампкин гануш", они обладают непревзойденной универсальностью. Овощи семейства пасленовых - символ нашей стойкости перед лицом невзгод.',
  "interactableModals.dawnBook3.message1":
    "Дорогой дневник, приезд бампкинов принес луч надежды.",
  "interactableModals.dawnBook3.message2":
    "Я мечтаю о том дне, когда смогу направить свою собственную лодку в Sunfloria - страну, где собираются искатели приключений и путешественники.",
  "interactableModals.dawnBook3.message3":
    "Я слышал, как там шепчутся об особых приготовлениях бампкинов - маяк надежды в эти трудные времена.",
  "interactableModals.dawnBook4.message1":
    "Гномы - их очарование было слишком сильным, чтобы перед ним устоять.",
  "interactableModals.dawnBook4.message2":
    'В голове эхом отдавались наставления колдуньи: "Соедини три, и сила будет твоей".',
  "interactableModals.dawnBook4.message3":
    "Увы, даже баклажанные солдаты не смогли устоять перед соблазном. Но я не дрогну. Однажды я получу власть, которую заслужил по праву?",
  "interactableModals.timmyHome.message":
    "О, Боже, я очень хочу, чтобы ты исследовал мой дом, но мама сказала мне не разговаривать с незнакомцами, может, это и к лучшему.",
  "interactableModals.windmill.message":
    "А, моя ветряная мельница в ремонте, не могу допустить, чтобы кто-то подглядывал, пока я ее починю, приходите позже.",
  "interactableModals.igorHome.message":
    "Проваливай! Я не в настроении принимать гостей, особенно таких любопытных, как ты!",
  "interactableModals.potionHouse.message1":
    "Осторожно, друг, там живет сумасшедший ученый!",
  "interactableModals.potionHouse.message2":
    "Ходят слухи, что они ищут подмастерьев, чтобы вместе с ними выращивать урожай мутантов.",
  "interactableModals.guildHouse.message":
    "Погоди, бампкин! Тебе нужен питомец, если ты хочешь войти в дом гильдии.",
  "interactableModals.bettyHome.message":
    "О, дорогой, как бы я ни любила свой урожай, мой дом - это личное пространство, сейчас он не открыт для посетителей.",
  "interactableModals.bertHome.message":
    "Нарушители! Они, должно быть, хотят заполучить мою коллекцию редких предметов и секретов, но я не могу их впустить!",
  "interactableModals.beach.message1": "Ты был на пляже?",
  "interactableModals.beach.message2":
    "Ходят слухи, что он наполнен роскошными сокровищами! К сожалению, он находится в стадии строительства.",
  "interactableModals.castle.message":
    "Постой, крестьянин! Я ни за что не позволю тебе посетить замок.",
  "interactableModals.woodlands.message":
    "Отправляешься в путешествие в лес? Не забудь собрать вкусные грибы!",
  "interactableModals.port.message":
    "Стоять! Гоблины все еще строят порт. Скоро он будет готов для путешествий и рыбалки.",
};

const introPage: Record<IntroPage, string> = {
  "introPage.welcome":
    "Добро пожаловать в комнату зелий, мой любознательный ученик!",
  "introPage.description":
    "Я - Безумный Ученый Бампкин, помогу тебе в этом волшебном путешествии в мир зельеварения. Приготовься раскрыть секреты страны подсолнухов! Каждая попытка будет стоить 320 монет.",
  "introPage.mission":
    "Твоя задача: расшифровать правильную комбинацию зелий в заколдованной таблице.",
  "introPage.tip":
    "Помни, чем больше правильных зелий ты выберешь, тем счастливее будет растение, что увеличит твои шансы на получение редких предметов!",
  "introPage.chaosPotion": "Остерегайтесь зелья хаоса, оно все разрушает!",
  "introPage.playButton": "Давайте сыграем",
};

const islandName: Record<IslandName, string> = {
  "island.home": "Дом",
  "island.pumpkin.plaza": "Тыквенная Плаза",
  "island.beach": "Пляж",
  "island.kingdom": "Царство",
  "island.woodlands": "Лес",
  "island.helios": "Гелиос",
  "island.goblin.retreat": "Обитель гоблинов",
};

const islandNotFound: Record<IslandNotFound, string> = {
  "islandNotFound.message": "Ты попал в самую настоящую глушь!",
  "islandNotFound.takeMeHome": "Отправиться домой",
};

const landscapeTerms: Record<LandscapeTerms, string> = {
  "landscape.intro.one": "Создай остров своей мечты!",
  "landscape.intro.two":
    "В режиме дизайнера ты можешь захватывать и перетаскивать предметы.",
  "landscape.intro.three": "Создавай редкие украшения",
  "landscape.intro.four": "Размещай коллекционные предметы из сундука",
  "landscape.expansion.one":
    "На каждом участке земли ты найдешь уникальные ресурсы, которые помогут тебе построить свою фермерскую империю!",
  "landscape.expansion.two": "Скоро появятся новые расширения...",
  "landscape.timerPopover": "Новое расширение",
  "landscape.dragMe": "Перетащи меня",
  "landscape.expansion.date": "Новые расширения появятся в игре 7 февраля.",
  "landscape.great.work": "Отличная работа, дружище!",
  "landscape.confirmation.resourceNodes.one":
    "После установки на острове, ты не сможешь убрать его обратно в сундук.",
  "landscape.confirmation.resourceNodes.two": "Точно уверен?",
  "landscape.confirmation.hourglass.one":
    "После установки эффект {{selectedChestItem}} начнет действовать немедленно и не может быть приостановлен или отменен.",
  "landscape.confirmation.hourglass.two":
    "Ты точно хочешь установить и активировать {{selectedChestItem}}?",
  "landscape.hourglass.resourceNodeCondition.fishers":
    "Пожалуйста проверь, что у тебя остались силы на рыбную ловлю перед активацией {{selectedChestItem}}.",
  "landscape.hourglass.resourceNodeCondition.gourmet":
    "Перед активацией  {{selectedChestItem}} убедитесь, что ни одно из зданий, где можно готовить, не работает.",
  "landscape.hourglass.resourceNodeCondition.harvest":
    "Перед активацией {{selectedChestItem}} помни, что буст не работает на уже посаженные растения.",
  "landscape.hourglass.resourceNodeCondition.timber":
    "Перед активацией  {{selectedChestItem}} убедитесь, что деревья не восстанавливаются.",
  "landscape.hourglass.resourceNodeCondition.orchard":
    "Перед активацией  {{selectedChestItem}} убедитесь, что фруктовые деревья не растут.",
  "landscape.hourglass.resourceNodeCondition.blossom":
    "Перед активацией {{selectedChestItem}}  помни, что буст не работает на уже растущие цветы.",
  "landscape.hourglass.resourceNodeCondition.ore":
    "Перед активацией {{selectedChestItem}} убедитесь, что минералы не восстанавливаются.",
  "landscape.timeWarpTotem.resourceNodeCondition":
    "Перед активацией {{selectedChestItem}} убедитесь, что никакие минералы или деревья не восстанавливаются, а также не растут никакие культуры, фрукты или цветы.",
};

const levelUpMessages: Record<LevelUpMessages, string> = {
  "levelUp.2": "Ура, ты достиг второго уровня! Посевы уже трепещут.",
  "levelUp.3":
    "Поздравляем с третьим уровнем! Ты развиваешься как дикий бурьян...",
  "levelUp.4":
    "Поздравляем с четвертым уровнем! Ты официально перерос свой фермерский уровень.",
  "levelUp.5": "Пятый уровень и все еще жив! Твоя тяжелая работа окупается...",
  "levelUp.6":
    "Ого, уже шестой уровень? Ты, должно быть, силен как бык. Или, по крайней мере, твой плуг.",
  "levelUp.7":
    "Поздравляем с достижением 7-го уровня! Твоя ферма просто великолепна.",
  "levelUp.8": "Уровень 8, отличная работа! Ты сеешь семена успеха.",
  "levelUp.9":
    "Девять девяток, девятый уровень! Твой урожай растет так же быстро, как и твои навыки.",
  "levelUp.10":
    "Десятый уровень, двузначное число! Твоя ферма выглядит так хорошо, что даже куры впечатлены.",
  "levelUp.11": "Уровень 11, ты заставляешь пролиться дождь!",
  "levelUp.12":
    "Поздравляем с 12-м уровнем! Твоя ферма действительно начинает приобретать характер.",
  "levelUp.13":
    "Счастливый 13-й уровень! Ты действительно начинаешь разбираться в фермерском деле.",
  "levelUp.14": "Уровень 14, поразительно, как много ты сделал!",
  "levelUp.15":
    "Пятнадцатый и процветающий! Твоя ферма выглядит лучше, чем когда-либо.",
  "levelUp.16":
    "Поздравляем с 16-м уровнем! Твои навыки фермерства действительно набирают обороты.",
  "levelUp.17": "Уровень 17, ты пожинаешь то, что посеял (и это хорошо!).",
  "levelUp.18": "Восемнадцатый и потенциал только растет!",
  "levelUp.19":
    "Поздравляем с 19-м уровнем! Твоя ферма растет так же быстро, как и твои навыки.",
  "levelUp.20": "Уровень 20, ты - лучший из лучших!",
  "levelUp.21": "Двадцать первый, а урожай собираешь как профи!",
  "levelUp.22": "Поздравляем с 22-м уровнем! Твоя ферма успешно возделывается.",
  "levelUp.23": "Уровень 23, твои навыки начинают расцветать!",
  "levelUp.24": "Ты действительно расцветаешь на 24-м уровне!",
  "levelUp.25":
    "Отметка в четверть века! Ты делаешь прибыль, пока светит солнце.",
  "levelUp.26":
    "Поздравляем с 26 уровнем! Ты действительно погрузился в эту фермерскую тему.",
  "levelUp.27":
    "Уровень 27, ты действительно начинаешь выделяться на общем фоне!",
  "levelUp.28": "Ты действительно поднял планку до 28 уровня!",
  "levelUp.29":
    "Поздравляем с 29-м уровнем! Ты демонстрируешь серьезные навыки.",
  "levelUp.30": "30-й уровень, теперь ты настоящий фермер!",
  "levelUp.31": "Тридцать первый и все еще растет!",
  "levelUp.32": "Поздравляем с 32-м уровнем! Твоя ферма расцветает.",
  "levelUp.33": "Уровень 33, твои фермерские навыки набирают обороты!",
  "levelUp.34": "Ты действительно растешь, уже 34-го уровня!",
  "levelUp.35": "Уровень 35, ты просто комбайн!",
  "levelUp.36":
    "Поздравляем с 36-м уровнем! Твоя ферма действительно начинает приносить успех.",
  "levelUp.37": "Уровень 37, твои навыки действительно начинают проявляться!",
  "levelUp.38":
    "Ты действительно закладываешь семена успеха, уже на 38-м уровне!",
  "levelUp.39":
    "Поздравляем с 39-м уровнем! Твоя ферма действительно начинает взрослеть.",
  "levelUp.40": "Уровень 40, ты - герой труда!",
  "levelUp.41": "Сорок первый и все крепчает!",
  "levelUp.42":
    "Поздравляем с 42-м уровнем! Твоя ферма начинает приносить плоды.",
  "levelUp.43": "43-й уровень, ты демонстрируешь серьезные навыки.",
  "levelUp.44": "Ты по-настоящему собираешь плоды успеха, уже на 44-м уровне!",
  "levelUp.45": "45-й уровень - ты настоящий мастер жатвы!",
  "levelUp.46":
    "Поздравляем с 46-м уровнем! Твои фермерские навыки начинают приносить хорошие плоды.",
  "levelUp.47": "Уровень 47 - ты поистине превращаешься в легенду фермерства.",
  "levelUp.48": "Ты преуспеваешь, уже на 48-м уровне!",
  "levelUp.49":
    "Поздравляем тебя с 49-м уровнем! Ты по-настоящему начинаешь пожинать плоды своего упорного труда.",
  "levelUp.50":
    "На полпути к 100! Теперь ты настоящий профессионал в сельском хозяйстве.",
  "levelUp.51": "Пятьдесят первый, а он все еще силен!",
  "levelUp.52":
    "Поздравляем с 52-м уровнем! Твоя ферма - настоящее произведение искусства.",
  "levelUp.53": "Уровень 53, твои навыки начинают укореняться.",
  "levelUp.54":
    "Ты действительно получаешь удовольствие от сбора урожая, уже на 54-м уровне!",
  "levelUp.55":
    "55-й уровень - ты настоящий фермер, с которым нужно считаться.",
  "levelUp.56":
    "Поздравляем с 56-м уровнем! Твоя ферма достигла своего расцвета.",
  "levelUp.57": "Уровень 57 - ты начинаешь приобретать серьезные навыки.",
  "levelUp.58": "Ты действительно сеешь семена успеха, уже на 58-м уровне!",
  "levelUp.59":
    "Поздравляем с 59-м уровнем! Твоя ферма - лучший представитель своего класса.",
  "levelUp.60": "60-й уровень - ты настоящая суперзвезда фермерского дела!",
};

const loser: Record<Loser, string> = {
  "loser.unsuccess": "Не повезло",
  "loser.longer": "Аукцион закрыт",
  "loser.refund.one": "Возврат средств",
};

const lostSunflorian: Record<LostSunflorian, string> = {
  "lostSunflorian.line1": "Мой отец послал меня сюда, чтобы я правил Гелиосом.",
  "lostSunflorian.line2":
    "К сожалению, этим бампкинам не нравится, что я за ними наблюдаю.",
  "lostSunflorian.line3": "Я не могу дождаться возвращения в Санфлорию.",
};

const megaStore: Record<MegaStore, string> = {
  "megaStore.visit": "Посети Мегамагазин в плазе, прежде чем истечет время!",
  "megaStore.message":
    "Добро пожаловать в Мегамагазин! Ознакомься с лимитированными товарами этого месяца. Если тебе что-то понравится, успей купить это, пока оно не исчезло в царстве времени.",
  "megaStore.month.sale": "Распродажи этого месяца",
  "megaStore.wearable":
    "Отличная покупка! Твоя новая одежда надежно хранится в твоем гардеробе. Оттуда ты можешь надеть его на бампкина.",
  "megaStore.collectible":
    "Отличная покупка! Твой новый коллекционный предмет надежно хранится в твоем инвентаре.",
  "megaStore.timeRemaining": "{{timeRemaining}} осталось!",
};

const modalDescription: Record<ModalDescription, string> = {
  "modalDescription.friend": "Привет, дружище!",
  "modalDescription.love.fruit":
    "Вау, ты действительно любишь фрукты так же сильно, как и я!",
  "modalDescription.gift":
    "У меня больше нет для тебя подарков. Не забудь надеть свои новые вещи!",
  "modalDescription.limited.abilities":
    "Я создал лимитированную серию предметов одежды, которые могут помочь тебе со сбором фруктов.",
  "modalDescription.trail":
    "Я ищу преданных собирателей фруктов, которые смогут опробовать эту одежду.... БЕСПЛАТНО!",
};

const noaccount: Record<Noaccount, string> = {
  "noaccount.newFarmer": "Новый фермер",
  "noaccount.addPromoCode": "Добавить промокод?",
  "noaccount.alreadyHaveNFTFarm": "Уже есть NFT ферма?",
  "noaccount.createFarm": "Создать ферму",
  "noaccount.noFarmNFTs": "У тебя нет NFT фермы.",
  "noaccount.createNewFarm": "Создать новую ферму",
  "noaccount.selectNFTID": "Выбери номер NFT фермы",
  "noaccount.welcomeMessage":
    "Добро пожаловать в Sunflower Land. Хочешь создать новую ферму?",
  "noaccount.promoCodeLabel": "Промокод",
  "noaccount.haveFarm": "Нет, у меня уже есть",
  "noaccount.letsGo": "Да, давай!",
};

const noBumpkin: Record<NoBumpkin, string> = {
  "noBumpkin.readyToFarm": "Потрясающе, твой бампкин готов к фермерству!",
  "noBumpkin.play": "Играть",
  "noBumpkin.missingBumpkin": "У тебя нет бампкина",
  "noBumpkin.bumpkinNFT":
    "Хмммм, это странно. Похоже, у тебя старый аккаунт без бампкина.",
  "noBumpkin.bumpkinHelp":
    "Тебе нужен бампкин, который поможет сажать, собирать урожай, рубить, добывать и расширять землю.",
  "noBumpkin.mintBumpkin": "Ты можешь купить бампкина на OpenSea: ",
  "noBumpkin.allBumpkins": "Ух ты, посмотрите на всех этих бампкинов!",
  "noBumpkin.chooseBumpkin": "С кем из бампкинов ты хотел бы сыграть?",
  "noBumpkin.deposit": "Депозит",
  "noBumpkin.advancedIsland":
    "Это продвинутый остров. Требуется сильный бампкин: ",
  "dequipper.noBumpkins": "Нет бампкинов",
  "dequipper.missingBumpkins": "У тебя в кошельке нет ни одного NFT бампкина.",
  "dequipper.intro": "Отправь одежду с бампкина на свой кошелек.",
  "dequipper.success":
    "Поздравляем, вещи отправлены на твой кошелек. Перемести их на свою ферму, чтобы пользоваться ими.",
  "dequipper.dequip": "Раздеться",
  "dequipper.warning":
    "После снятия экипировки, бампкин больше не может использоваться.",
  "dequipper.nude": "Бампкин уже раздет",
  "noBumpkin.nude": "Нельзя снять экипировку с пустого бампкина",
};

const noTownCenter: Record<NoTownCenter, string> = {
  "noTownCenter.reward": "Награда: 1 x Town Center!",
  "noTownCenter.news": "Твои последние новости и сообщения здесь.",
  "noTownCenter.townCenterPlacement":
    'Ты можешь разместить городской центр через инвентарь > раздел "Здания".',
};

const notOnDiscordServer: Record<NotOnDiscordServer, string> = {
  "notOnDiscordServer.intro":
    "Похоже, ты еще не присоединился к Discord серверу Sunflower Land.",
  "notOnDiscordServer.joinDiscord": "Присоединись к нашему ",
  "notOnDiscordServer.discordServer": "Discord серверу",
  "notOnDiscordServer.completeVerification":
    "2. Пройди верификацию и приступай к фермерству",
  "notOnDiscordServer.acceptRules": "3. Прими правила в #rules",
};

const npc_message: Record<NPC_MESSAGE, string> = {
  // Betty
  "npcMessages.betty.msg1":
    "О божечки, я не могу дождаться, когда смогу получить свежих продуктов!",
  "npcMessages.betty.msg2":
    "Мне так не терпится попробовать новые культуры, что у тебя есть для меня?",
  "npcMessages.betty.msg3":
    "Я весь день ждала возможности собрать вкусных фруктов!",
  "npcMessages.betty.msg4":
    "Мне не терпится увидеть, какой сегодня урожай ты для меня приготовил.",
  "npcMessages.betty.msg5":
    "Мне не терпится попробовать плоды своего труда, какие продукты у тебя есть?",
  "npcMessages.betty.msg6":
    "У меня настоящая страсть к фермерству, и я всегда ищу новые и интересные культуры для выращивания.",
  "npcMessages.betty.msg7":
    "Ничто не сравнится с ощущением сбора небывалого урожая, ведь в этом и заключается суть фермерства!",
  // Blacksmith
  "npcMessages.blacksmith.msg1":
    "Мне нужны кое-какие материалы для моего последнего изобретения, есть что-нибудь?",
  "npcMessages.blacksmith.msg2":
    "Я хочу запастись кое-каким сырьем, есть что-нибудь на продажу?",
  "npcMessages.blacksmith.msg3":
    "Мне нужны кое-какие материалы для крафта, есть что-нибудь, что я могу использовать?",
  "npcMessages.blacksmith.msg4":
    "Есть ли у тебя какие-нибудь редкие или уникальные ресурсы, которые я мог бы использовать?",
  "npcMessages.blacksmith.msg5":
    "Я заинтересован в приобретении высококачественных материалов, что у тебя есть?",
  "npcMessages.blacksmith.msg6":
    "Я ищу кое-какие материалы для своего следующего проекта, что можешь мне предложить?",
  "npcMessages.blacksmith.msg7":
    "Мне нужно немного сырья, можешь что-то продать?",
  // Pumpkin' pete
  "npcMessages.pumpkinpete.msg1": "Эй, новичок! Есть свежие овощи?",
  "npcMessages.pumpkinpete.msg2":
    "Вкусные овощи? Кто-нибудь? Заберу по выгодной цене!",
  "npcMessages.pumpkinpete.msg3":
    "Свежий и восхитительный - вот мой девиз. А что у тебя есть?",
  "npcMessages.pumpkinpete.msg4":
    "Новичок в городе? Давай скрасим твой день каким-нибудь урожаем!",
  "npcMessages.pumpkinpete.msg5":
    "Нужна помощь, друг? У меня есть для тебя самые разнообразные культуры!",
  "npcMessages.pumpkinpete.msg6":
    "Энергичный Пит к твоим услугам! Урожай? Кто-нибудь?",
  "npcMessages.pumpkinpete.msg7":
    "Добро пожаловать на плазу! Давай сделаем твой день ярче с помощью урожая!",
  // Cornwell
  "npcMessages.cornwell.msg1":
    "Ах, старые добрые времена... Упорный труд - вот мой девиз. Что у тебя есть?",
  "npcMessages.cornwell.msg2":
    "У этих молодых людей совсем никакой трудовой этики! Принеси мне чего-то интересного.",
  "npcMessages.cornwell.msg3":
    "Я помню, когда... Упорный труд, вот чего не хватает!",
  "npcMessages.cornwell.msg4":
    "Знания, добытые упорным трудом, заслуживают лучшего урожая. Впечатли меня!",
  "npcMessages.cornwell.msg5":
    "История и упорный труд - вот, что нас объединяет. А ты что выберешь?",
  "npcMessages.cornwell.msg6":
    "Меня зовут Корнуэлл, и я здесь, чтобы по-настоящему познакомиться с фермой.",
  "npcMessages.cornwell.msg7":
    "Сложные задания, стоящие награды. Покажи мне, на что ты способен!",
  // Raven
  "npcMessages.raven.msg1":
    "Тьма и таинственность - вот мой стиль. Я буду брать трудный урожай.",
  "npcMessages.raven.msg2":
    "В душе я гот, и для моих зелий мне нужны самые темные растения.",
  "npcMessages.raven.msg3":
    "Сверхъестественное и зловещее - такой вайб мне нужен. Впечатли меня.",
  "npcMessages.raven.msg4":
    "Я жажду теневого урожая для своих заклинаний. Дай мне их.",
  "npcMessages.raven.msg5":
    "Принеси мне урожай, который прячется в тенях. И я не разочаруюсь.",
  "npcMessages.raven.msg6":
    "Ворон, хранитель тьмы, хочет, чтобы ты собрал богатый урожай.",
  "npcMessages.raven.msg7":
    "Мрачные наслаждения для готического сердца. Покажи мне свой самый темный урожай.",
  // Bert
  "npcMessages.bert.msg1":
    "Чувак, эти грибы... они - ключ ко всему. Есть какие-нибудь волшебные?",
  "npcMessages.bert.msg2": "Грибное безумие - это я. У тебя есть грибы?",
  "npcMessages.bert.msg3": "Все дело в грибах, детка. Отдай мне зачарованные.",
  "npcMessages.bert.msg4":
    "Я вижу разные вещи, понимаешь? Волшебные грибы - вот что мне нужно.",
  "npcMessages.bert.msg5":
    "Жизнь - это путешествие, чувак, и мне нужны эти волшебные грибы, чтобы прокатиться по ней!",
  "npcMessages.bert.msg6":
    "Берт - это имя, а грибы - это игра. Зачарованные, пожалуйста!",
  "npcMessages.bert.msg7":
    "Волшебные грибы, друг мой. Это то, что помогает мне двигаться дальше.",
  // Timmy
  "npcMessages.timmy.msg1":
    "Р-р-рар! Я медвежонок Тимми! Дай мне все фруктовые лакомства!",
  "npcMessages.timmy.msg2":
    "Я медведь, а медведи любят фрукты! У тебя есть какие-нибудь фруктовые лакомства для меня?",
  "npcMessages.timmy.msg3":
    "Фруктовые вкусности, вот в чем секрет. Это фишка Timmy, понимаешь?",
  "npcMessages.timmy.msg4":
    "Медвежьи обнимашки за фрукты! Это в стиле Тимми, понимаешь?",
  "npcMessages.timmy.msg5":
    "Жизнь в костюме медведя - сплошное удовольствие. Фрукты - это мой конек, есть какие-нибудь?",
  "npcMessages.timmy.msg6":
    "Медвежонок Тимми пришел за фруктовым весельем! Сдавай фрукты!",
  "npcMessages.timmy.msg7":
    "Фруктовые беседы с медведем! Поделись фруктовой любовью!",
  // Tywin
  "npcMessages.tywin.msg1":
    "Золото, золото и еще раз золото! Покажите мне богатства, крестьяне!",
  "npcMessages.tywin.msg2":
    "Я слежу за фермерами, чтобы они платили свои пошлины. Золото, живо!",
  "npcMessages.tywin.msg3":
    "Крестьяне, несите мне свои богатства! Я - Тайвин, требовательный принц!",
  "npcMessages.tywin.msg4":
    "Тыквенная плаза ниже моего достоинства, но золота всегда недостаточно!",
  "npcMessages.tywin.msg5":
    "Это жизнь принца, и я требую твоего богатства. Плати налоги!",
  "npcMessages.tywin.msg6":
    "Богатство принца не знает границ. Золото, золото и еще раз золото!",
  "npcMessages.tywin.msg7":
    "Золото - моя корона, и я хочу получить все! Принеси мне свои богатства!",
  // Tango
  "npcMessages.tango.msg1":
    "Болтай, жуй и еще раз болтай! Фрукты, фрукты и еще раз фрукты!",
  "npcMessages.tango.msg2":
    "Я Танго, фруктовая беличья обезьянка! Принеси мне фруктовые сокровища!",
  "npcMessages.tango.msg3":
    "Оранжевая, дерзкая и игривая - это я. Фрукты? У кого-нибудь?",
  "npcMessages.tango.msg4":
    "Фруктовые секреты? У меня они есть! Поделись со мной фруктовыми чудесами!",
  "npcMessages.tango.msg5":
    "Фруктовое озорство и фруктовые удовольствия. Давай повеселимся!",
  "npcMessages.tango.msg6":
    "Танго - это имя, фруктовые игры - моя стихия. Дай мне!",
  "npcMessages.tango.msg7":
    "В моей семье знают толк во фруктах. Расскажи мне свои самые фруктовые истории!",
  // Miranda
  "npcMessages.miranda.msg1":
    "Потанцуй со мной, друг! Добавь что-нибудь в мою фруктовую шляпку, хорошо?",
  "npcMessages.miranda.msg2":
    "Самба и фрукты идут рука об руку. Что ты мне предложишь?",
  "npcMessages.miranda.msg3":
    "В ритме самбы фрукты просто необходимы. Не хочешь поделиться?",
  "npcMessages.miranda.msg4":
    "Все дело в ритме самбы и фруктовых лакомствах. Принеси что-нибудь!",
  "npcMessages.miranda.msg5":
    "Присоединяйся к празднованию самбы с фруктовым подарком для моей шляпы!",
  "npcMessages.miranda.msg6":
    "Моя шляпа любит аромат фруктов. Что ты можешь предложить?",
  "npcMessages.miranda.msg7":
    "Самба, фрукты и дружба. Давай устроим вечеринку!",
  // Finn
  "npcMessages.finn.msg1":
    "Я поймал самый большой улов в своей жизни! Есть желающие?",
  "npcMessages.finn.msg2":
    "Жизнь - это сказка рыбака, и мне есть что рассказать. Поймал столько рыбин!",
  "npcMessages.finn.msg3":
    "Финн - рыбак, легенда и заклинатель рыб. Поймал немного рыбы?",
  "npcMessages.finn.msg4":
    "Большая рыба, большие истории и большое эго. Принеси мне свои рыбные сокровища!",
  "npcMessages.finn.msg5":
    "Крючок, леска и гордыня - это я. Ловля рыбы - это то, чем я занимаюсь!",
  "npcMessages.finn.msg6":
    "Рыбные истории, хвастовство и немного скромности. Рыбу, пожалуйста!",
  "npcMessages.finn.msg7":
    "А ты знаешь, что Surgeonfish питает слабость к пикантному вкусу апельсинов?",
  "npcMessages.finn.msg8":
    "Поймал самую большую рыбу в своей жизни. Это не просто история, это реальность!",
  // Findley
  "npcMessages.findley.msg1":
    "Не позволю Финну заполучить всю славу! Мне нужна наживка и насадка для моего большого улова!",
  "npcMessages.findley.msg2":
    "Финн не единственный, кто умеет рыбачить. Мне нужна наживка и насадка, срочно!",
  "npcMessages.findley.msg3":
    "Я покажу Финну, кто настоящий рыбак! Наживка и насадка, они должны быть у меня!",
  "npcMessages.findley.msg4":
    "Хотите поймать тунца на крючок? Они питают особую симпатию к апельсинам.",
  "npcMessages.findley.msg5":
    "В моей семье соперничество из-за рыбы. Я хочу доказать свою правоту. Наживку и насадку, пожалуйста!",
  "npcMessages.findley.msg6":
    "Финн не единственный, кто умеет ловить рыбу. Я собираюсь поймать улов всей своей жизни!",
  "npcMessages.findley.msg7":
    "Соревноваться с Финном просто необходимо. Наживку и насадку, мне нужна твоя помощь!",
  "npcMessages.findley.msg8":
    "Рыболовное соревнование брата и сестры. Наживка и насадка - мое секретное оружие!",
  "npcMessages.findley.msg9":
    "Ты знал, что Mahi Mahi не может устоять перед сладким хрустом кукурузы?",
  // Corale
  "npcMessages.corale.msg1":
    "Океан зовет, и мне нужна рыба. Помоги мне освободить моих друзей!",
  "npcMessages.corale.msg2":
    "Рыбы - мои друзья, и я должна освободить их. Ты поможешь мне?",
  "npcMessages.corale.msg3":
    "Ради любви к морю, принеси мне рыбок. Я отпущу их домой.",
  "npcMessages.corale.msg4":
    "Под волнами меня ждут друзья. Рыбачь, чтобы они могли свободно плавать!",
  "npcMessages.corale.msg5":
    "Русалка просит тебя защитить её друзей. Принеси мне рыбу, добрая душа.",
  "npcMessages.corale.msg6":
    "Свободу рыбам - вот моя цель. Помоги мне с рыбой, хорошо?",
  "npcMessages.corale.msg7":
    "Присоединяйся ко мне в морской танец жизни. Рыбачь, чтобы освободить моих друзей!",

  // gambit
  "npcMessages.gambit.msg1":
    "Чувствуешь, что сегодня повезет? У меня есть предложение, которое может тебя заинтересовать!",
  "npcMessages.gambit.msg2":
    "Сделай шаг вперед! Готов испытать свою удачу и сыграть в игру?",
  "npcMessages.gambit.msg3": "Ставки высоки, и игра продолжается. Ты в игре?",
  "npcMessages.gambit.msg4":
    "У меня есть для тебя рискованное предложение. Хочешь сделать ставку?",
  "npcMessages.gambit.msg5":
    "Удача сопутствует смелым! Посмотрим, удастся ли тебе перехитрить меня.",
  "npcMessages.gambit.msg6":
    "Хочешь сыграть в азартную игру? Шансы могут быть в твою пользу.",
  "npcMessages.gambit.msg7": "Готов к вызову? У меня есть для тебя игра.",
  "npcMessages.gambit.msg8":
    "Делай ставки и посмотрим, кто окажется победителем!",
  "npcMessages.gambit.msg9":
    "Смельчак? Специально для тебя я приготовил игру с высокими ставками.",

  "npcMessages.queenVictoria.msg1":
    "Крестьянин, ты принес мне налоги? Сундуки должны быть заполнены.",
  "npcMessages.queenVictoria.msg2":
    "Я ожидаю не меньшего, чем совершенства. Ты идеально выполнил мои заказы?",
  "npcMessages.queenVictoria.msg3":
    "У тебя есть то, что мне нужно, или ты попусту тратишь мое время?",
  "npcMessages.queenVictoria.msg4":
    "Трон простаивает, как и моя казна. Где моя дань?",
  "npcMessages.queenVictoria.msg5":
    "Я надеюсь, что ты принес то, о чем я просила. Не разочаруй меня.",
  "npcMessages.queenVictoria.msg6":
    "У меня нет времени на пустую болтовню. Покажи мне, что ты принес.",
  "npcMessages.queenVictoria.msg7":
    "Богатство королевства должно расти. Выполняй свой долг.",
  "npcMessages.queenVictoria.msg8":
    "Крестьянин, твоя королева ждет. Выполнил ли ты свою задачу?",
  "npcMessages.queenVictoria.msg9": "Я требую совершенства. Плати налоги.",

  "npcMessages.jester.msg1":
    "Добро пожаловать во двор! Готов к анекдотам о королевской семье?",
  "npcMessages.jester.msg2": "А, новое лицо! Есть свежие шуточки?",
  "npcMessages.jester.msg3":
    "Во дворе всегда людно! Но может есть хорошие шутки?",
  "npcMessages.jester.msg4":
    "Привет, путешественник! Давай посмеемся над членами королевской семьи.",
  "npcMessages.jester.msg5":
    "Эй! Готовы услышать последние шутки о нашей дорогой королеве?",
  "npcMessages.jester.msg6":
    "Выходи во двор и наслаждайтесь юмором. Может, ты и сам готов пошутить?",
  "npcMessages.jester.msg7": "Привет, друг! При дворе всегда много шутов.",
  "npcMessages.jester.msg8":
    "Ну-ну, посмотрите, кто здесь! Есть у тебя какие-нибудь смешные истории?",
  "npcMessages.jester.msg9":
    "Королева любит посмеяться. Готов присоединиться к ее веселью?",

  "npcMessages.oldSalty.msg1":
    "Аррр, как я рад! Море зовет за сокровищами. Поможешь ли ты помочь старому пирату найти его удачу?",
  "npcMessages.oldSalty.msg2":
    "Ахой, матрос! Нас ждет славная охота. Принеси мне сокровища глубин!",
  "npcMessages.oldSalty.msg3":
    "Эти волны полны сокровищ! Готов ли ты к этому приключению?",
  "npcMessages.oldSalty.msg4":
    "Йо-хо-хо! Секреты моря ждут, чтобы их раскрыли. Поможешь мне, ладно?",
  "npcMessages.oldSalty.msg5":
    "Аррр, в воздухе пахнет золотом! Принеси мне сокровища и поделим добычу!",
  "npcMessages.oldSalty.msg6":
    "Море — жестокая проказница, но таит в себе несметные богатства. Помоги мне ограбить ее глубины!",
  "npcMessages.oldSalty.msg7":
    "Крестом отмечено место, где спрятанно сокровище. Помоги мне отыскать его матрос!",
  "npcMessages.pharaoh.msg1":
    "Приветствую тебя, путник. Песком покрыто много тайн. Поможешь ли ты мне отыскать реликвии моих предков?",
  "npcMessages.pharaoh.msg2":
    "Странник, я ищу мудрость прошлых веков. Принеси мне артефакты, хранящие ключ к нашей истории.",
  "npcMessages.pharaoh.msg3":
    "In the desert sands lie forgotten treasures. Will you aid me in discovering them?",
  "npcMessages.pharaoh.msg4":
    "The ancients whisper in the wind. Find the relics that will unlock their secrets.",
  "npcMessages.pharaoh.msg5":
    "Lost languages and forgotten lore await. Help me uncover the artifacts that will reveal our past.",
  "npcMessages.pharaoh.msg6":
    "The relics of my people are scattered and lost. Can you bring them to me, so we may learn from them?",
  "npcMessages.pharaoh.msg7":
    "The sands of time have hidden much. Assist me in recovering the treasures of a bygone era.",
};

const nftminting: Record<NFTMinting, string> = {
  "nftminting.mintAccountNFT": "Minting Account NFT",
  "nftminting.mintingYourNFT":
    "Minting your NFT and storing progress on the Blockchain",
  "nftminting.almostThere": "Почти",
};

const npc: Record<Npc, string> = {
  "npc.Modal.Hammer": "Собирайтесь, друзья, аукцион вот-вот начнется!",
  "npc.Modal.Petro":
    "С небольшим количеством нефти и усилий я могу открыть что угодно!",
  "npc.Modal.Marcus":
    "Эй! Тебе запрещено входить в мой дом. Не смей трогать мои вещи!",
  "npc.Modal.Billy": "Всем привет! Меня зовут Билли.",
  "npc.Modal.Billy.one":
    "Я нашел эти маленькие саженцы, но никак не могу понять, что с ними делать.",
  "npc.Modal.Billy.two":
    "Наверняка они как-то связаны с червеобразными бадами, которые появляются вокруг плазы.",
  "npc.Modal.Gabi": "Эй, бампкин!",
  "npc.Modal.Gabi.one":
    "Ты выглядишь творчески, ты когда-нибудь думал о том, чтобы внести свой вклад в игру?",
  "npc.Modal.Craig": "Почему ты так странно смотришь на меня?",
  "npc.Modal.Craig.one": "Что-то застряло в моих зубах...",
};

const npcDialogues: Record<NpcDialogues, string> = {
  // Blacksmith Intro
  "npcDialogues.blacksmith.intro1":
    "Что тебе надо? Говори быстро, время - деньги.",
  "npcDialogues.blacksmith.intro2":
    "Что привело тебя в мою мастерскую? Я занят, так что поторопись.",
  "npcDialogues.blacksmith.intro3":
    "Добро пожаловать в мое скромное местечко. Что привело тебя сюда?",
  "npcDialogues.blacksmith.intro4":
    "Озвучь свою цель. Я занят, и у меня нет времени на пустую болтовню. Что привело тебя в мою мастерскую?",
  // Blacksmith Positive Delivery
  "npcDialogues.blacksmith.positiveDelivery1":
    "Наконец-то! Ты принес все, что мне нужно. Отойди в сторону, сейчас я буду творить волшебство.",
  "npcDialogues.blacksmith.positiveDelivery2":
    "О, как раз вовремя! Ты принес именно то, что я искал. Приготовься, снаряжение теперь будет изготовлено с высокой точностью.",
  "npcDialogues.blacksmith.positiveDelivery3":
    "Хорошо. Ты доставил нужные мне материалы. Я не разочарую тебя, мои творения будут замечательными.",
  "npcDialogues.blacksmith.positiveDelivery4":
    "Впечатляет! Ты принес нужные материалы. Я превращу их в настоящие фермерские чудеса!",
  "npcDialogues.blacksmith.positiveDelivery5":
    "Хмм, тебе действительно удалось найти то, что я хотел. Отличная работа.",
  // Blacksmith Negative Delivery
  "npcDialogues.blacksmith.negativeDelivery1":
    "У тебя нет того, что мне нужно? Время потрачено впустую. Приходи, когда у тебя будет все необходимое.",
  "npcDialogues.blacksmith.negativeDelivery2":
    "Нет-нет. У тебя нет нужных материалов. Не трать мое время. Возвращайся, когда будешь готов.",
  "npcDialogues.blacksmith.negativeDelivery3":
    "Неприемлемо. У тебя нет того, что мне нужно. У меня нет времени на некомпетентность. Возвращайся, когда будешь готов.",
  "npcDialogues.blacksmith.negativeDelivery4":
    "Неудовлетворительный. У тебя нет того, что мне нужно. Возвращайся, когда будешь готов выполнить свою часть сделки.",
  "npcDialogues.blacksmith.negativeDelivery5":
    "Некомпетентно. У тебя нет нужных материалов. Не трать мое время, приходи, когда будешь готов.",
  // Blacksmith NoOrder
  "npcDialogues.blacksmith.noOrder1":
    "На данный момент у меня нет активных заказов, но если тебе нужны инструменты или материалы для крафта, я всегда готов тебе помочь. Просто скажи, и мы приступим к работе.",
  "npcDialogues.blacksmith.noOrder2":
    "Активных заказов сейчас у меня нет, но если тебе требуется прочное оборудование или материалы, нуждающиеся в обработке, я - тот кто тебе нужен.",
  // Betty Into
  "npcDialogues.betty.intro1":
    "Привет, солнышко! Сегодня был насыщенный день на рынке. Я пришла узнать, есть ли у тебя ингредиенты, которые я заказала. Они у тебя с собой?",
  "npcDialogues.betty.intro2":
    "Привет, привет! Я хотела узнать, есть ли у тебя ингредиенты, которые я заказала. Ты их взял?",
  "npcDialogues.betty.intro3":
    "Добро пожаловать на рынок Бетти! Готов узнать, есть ли у тебя нужные мне ингредиенты? Давай посмотрим, что ты приготовил для меня!",
  "npcDialogues.betty.intro4":
    "Привет, привет! Мне не терпится узнать, принес ли ты ингредиенты, которые я заказала. Покажи мне, что у тебя есть!",
  "npcDialogues.betty.intro5":
    "Приветствую тебя, мой друг! Мне не терпится узнать, есть ли у тебя ингредиенты, о которых я просила. Что у тебя в корзинке?",
  // Betty Positive Delivery
  "npcDialogues.betty.positiveDelivery1":
    "Ура! Ты принес ингредиенты, которые я заказывала. Они настолько свежие и сочные, насколько это возможно. Спасибо тебе, мой гениальный садовод!",
  "npcDialogues.betty.positiveDelivery2":
    "Вот о чем я и говорю! У тебя есть именно те ингредиенты, которые мне были нужны. Ты порадовал меня своей быстрой доставкой. Спасибо!",
  "npcDialogues.betty.positiveDelivery3":
    "О, фантастика! Это именно те ингредиенты, которые я просила. Рынок будет в восторге. Спасибо за твою усердную работу!",
  "npcDialogues.betty.positiveDelivery4":
    "О мой сад! Эти ингредиенты просто идеальны. У тебя талант находить лучшие продукты. Спасибо тебе, мой green-thumbed герой!",
  "npcDialogues.betty.positiveDelivery5":
    "Браво! Ты принес именно те ингредиенты, которые мне были нужны. Мне не терпится использовать их для создания чего-нибудь необычного. Спасибо за быструю доставку!",
  // Betty Negative Delivery
  "npcDialogues.betty.negativeDelivery1":
    "Упси-дупси! Кажется, у тебя нет тех ингредиентов, которые я заказывала. Но не волнуйся. Продолжай поиски, и мы найдем другую возможность.",
  "npcDialogues.betty.negativeDelivery2":
    "О нет! Похоже, в данный момент у тебя нет нужных мне ингредиентов. Но не волнуйсяь. Я верю в твою находчивость. Приходи, когда у тебя будет то, что мне нужно!",
  "npcDialogues.betty.negativeDelivery3":
    "Вот блин! Похоже, у тебя сейчас нет нужных мне ингредиентов. Но продолжай искать! Может быть, в следующий раз нам больше повезет.",
  "npcDialogues.betty.negativeDelivery4":
    "Вот облом! Похоже, ингредиенты, которые ты принес, не соответствуют тому, что мне нужно. Но не падай духом, продолжай трудиться и возвращайся поскорее.",
  "npcDialogues.betty.negativeDelivery5":
    "Елки-палки! Похоже, у тебя нет именно тех ингредиентов, которые я ищу. Но не волнуйся, мой друг. Продолжай усердно трудиться, и мы отпразднуем, когда ты их найдешь!",
  // Betty NoOrder
  "npcDialogues.betty.noOrder1":
    "Сейчас у меня нет активных заказов, но это не помешает мне предложить тебе лучшие семена и урожай. Подходи и давай посмотрим, что ты хочешь прикупить!",
  "npcDialogues.betty.noOrder2":
    "На сегодняшний день у меня нет конкретного заказа, но это не проблема. Я здесь, чтобы с удовольствием предоставить тебе лучшие семена и купить твой восхитительный урожай!",
  // Grimbly Intro
  "npcDialogues.grimbly.intro1":
    "Голоден. Нужна еда. Есть что-нибудь вкусненькое для голодного гоблина?",
  "npcDialogues.grimbly.intro2":
    "Голодному гоблину нужна еда. У тебя она есть?",
  "npcDialogues.grimbly.intro3":
    "Голодающий гоблин здесь. Есть что-нибудь вкусненькое для меня?",
  "npcDialogues.grimbly.intro4":
    "Гримбли голоден. Ты принес мне что-нибудь вкусненькое?",
  // Grimbly Positive Delivery
  "npcDialogues.grimbly.positiveDelivery1":
    "Ах, наконец-то! Что-то вкусное, что утолит мой голод. Ты просто спаситель, мой друг!",
  "npcDialogues.grimbly.positiveDelivery2":
    "Ты принес еду! Гримбли утолил свой голод. Спасибо, спасибо тебе!",
  "npcDialogues.grimbly.positiveDelivery3":
    "Ура! Ты принес мне еды, чтобы я набил свой голодный желудок. Гримбли ценит твое великодушие!",
  "npcDialogues.grimbly.positiveDelivery4":
    "Праздник для Гримбли! Ты принес мне именно то, что я хотел. Твоя доброта не будет забыта!",
  // Grimbly Negative Delivery
  "npcDialogues.grimbly.negativeDelivery1":
    "Нет еды? Гримбли все еще голоден. Найди еду, принеси еду. Гримбли благодарен.",
  "npcDialogues.grimbly.negativeDelivery2":
    "Нет еды для Гримбли? У Гримбли урчит в животе. Приходи, когда найдешь что-нибудь вкусненькое.",
  "npcDialogues.grimbly.negativeDelivery3":
    "Гримбли все еще голоден. Нет еды? Продолжай искать, и, может быть, в следующий раз ты удовлетворишь мой гоблинский аппетит.",
  "npcDialogues.grimbly.negativeDelivery4":
    "С пустыми руками? У Гримбли заурчало в животе. Продолжай поиски и не забывай о гоблинском голоде!",
  // Grimbly NoOrder
  "npcDialogues.grimbly.noOrder1":
    "У Гримбли нет активного заказа для тебя, но это не значит, что я не голоден!",
  "npcDialogues.grimbly.noOrder2":
    "Сегодня нет активного заказа от Гримбли, но не переживай! Я всегда нахожусь в поисках вкусняшек. Если ты найдешь что-нибудь вкусненькое, то ты знаешь, кому это принести!",
  // Grimtootk Intro
  "npcDialogues.grimtooth.intro1":
    "Приветствую тебя, усталый путник. Ты меня ищешь?",
  "npcDialogues.grimtooth.intro2":
    "Шагни в царство теней. Ты выполнил мой заказ?",
  "npcDialogues.grimtooth.intro3":
    "Добро пожаловать, странник, в мое мистическое царство. У тебя есть то, что мне нужно?",
  "npcDialogues.grimtooth.intro4":
    "Заходи, дорогой путешественник, и раскрой секреты, которые я накопил. Ты нашел то, что я просил?",
  // Grimtooth Positive Delivery
  "npcDialogues.grimtooth.positiveDelivery1":
    "Невероятно! Ты нашел ингредиенты, которые мне нужны. Магия Санфлории у тебя под рукой!",
  "npcDialogues.grimtooth.positiveDelivery2":
    "Чудесно! Ты нашел то, что я искал. Вместе мы проникнем в самые глубины магии!",
  "npcDialogues.grimtooth.positiveDelivery3":
    "Невероятно! Ты собрал необходимые мне мистические компоненты. Твое путешествие в царство магии начинается!",
  "npcDialogues.grimtooth.positiveDelivery4":
    "Ах, великолепно! Ты получил те неуловимые ингредиенты, которые я искал. Твое путешествие в царство магии начинается!",
  // Grimtooth Negative Delivery
  "npcDialogues.grimtooth.negativeDelivery1":
    "Увы, необходимые ингредиенты ускользают от тебя. Но не бойся. Продолжай искать, и тайны раскроются сами собой!",
  "npcDialogues.grimtooth.negativeDelivery2":
    "О, тьма и печаль. Ты не обладаешь тем, что мне нужно. Но не волнуйся; продолжай работать, и тени будут продолжать направлять тебя.",
  "npcDialogues.grimtooth.negativeDelivery3":
    "Не бойся. Продолжай работать, и волшебство проявится.",
  "npcDialogues.grimtooth.negativeDelivery4":
    "Эх, увы. У тебя нет того, что мне нужно. Возвращайся, когда найдешь.",
  // Grimtooth NoOrder
  "npcDialogues.grimtooth.noOrder1":
    "На данный момент у меня нет активных заказов, но не волнуйся. Если ты нуждаешься в изысканном мастерстве или у тебя есть материалы, с которыми я могу работать, я буду здесь, готовый творить.",
  "npcDialogues.grimtooth.noOrder2":
    "У меня нет активного заказа, который ты мог бы выполнить, но если тебе потребуется опытный мастер или у тебя есть материалы, которые нуждаются в преобразовании, то я к твоим услугам.",
  // Old Salty Intro
  "npcDialogues.oldSalty.intro1":
    "Аааарррр, добро пожаловать, мой друг! Меня зовут Старый Солти, а моя фишка - поиск сокровищ. Есть ли у тебя то, что я ищу?",
  "npcDialogues.oldSalty.intro2":
    "Ахой, сухопутный! Старый Солти - тот кладоискатель, который тебе нужен. Покажи мне, что ты нашел в своих приключениях?",
  "npcDialogues.oldSalty.intro3": "",
  // Old Salty Positive Delivery
  "npcDialogues.oldSalty.positiveDelivery1":
    "Аааааррррр, ты нашел сокровище, которое я ищу. У тебя сердце настоящего искателя приключений, приятель!",
  "npcDialogues.oldSalty.positiveDelivery2":
    "Победа! Ты принес то самое сокровище, о котором я мечтал. Ты заслужил мое уважение!",
  "npcDialogues.oldSalty.positiveDelivery3":
    "Эгегей, ты нашел сокровище, за которым я охотился. Ты будешь настоящей легендой в этих водах!",
  //  Old Salty Negative Delivery
  "npcDialogues.oldSalty.negativeDelivery1":
    "Арррр, нет сокровищ для Старого Солти? Держи глаза открытыми, приятель. Скрытые драгоценности ждут тебя!",
  "npcDialogues.oldSalty.negativeDelivery2":
    "Ух, подлец! Нет сокровищ для Старого Солти? Продолжай искать, и ты найдешь самый большой сундук!",
  "npcDialogues.oldSalty.negativeDelivery3":
    "Встряхни Кости! Нет сокровищ для Старого Солти? Продолжай плыть, приятель. Добыча где то там, ждет тебя!",
  // Old Salty NoOrder
  "npcDialogues.oldSalty.noOrder1":
    "У тебя нет активных заказов для бухты сокровищ Старого Солти, но это не значит, что здесь не будет приключений. Следи за скрытыми сокровищами и неизведанными водами!",
  "npcDialogues.oldSalty.noOrder2":
    "На данный момент Старый Солти не ищет сокровищ, но не волнуйся, мой дорогой! В открытом море таятся бесчисленные богатства, ожидающие, что их найдут.",
  // Old Salty Pirate Chest
  "npcDialogues.oldSalty.missingPotion1":
    "Эй, матросы! Я придержу эту добычу для моей верной команды.",
  "npcDialogues.oldSalty.missingPotion2":
    "Возвращайся, когда у тебя будет тело и сердце настоящего пирата!",
  "npcDialogues.oldSalty.chestUnopened1":
    "Ахой, приятель! Кажется, я нашел среди нас пирата!",
  "npcDialogues.oldSalty.chestUnopened2":
    "Ты имеешь право на получение одного подарка из сокровищницы в день.",
  "npcDialogues.oldSalty.chestOpened1":
    "Сегодня ты уже вскрыл пиратский сундук!",
  "npcDialogues.oldSalty.chestOpened2":
    "Верниcь завтра, чтобы снова разграбить пиратский сундук!",
  // Raven Intro
  "npcDialogues.raven.intro1":
    "Добро пожаловать в мою скромную обитель. Но будь осторожен, тут везде варятся зелья. Ты нашел то, что я заказывала?",
  "npcDialogues.raven.intro2":
    "Шагни в царство теней. Ищи мудрость, а находи очарование. У тебя есть то, что мне нужно?",
  "npcDialogues.raven.intro3":
    "Добро пожаловать, странник, в мое мистическое царство. Если ищешь что-то волшебное, то я готова к обмену, если у тебя есть то, что мне.",
  "npcDialogues.raven.intro4":
    "Заходи, дорогой путешественник. Тени укажут тебе путь. Ты принес то, о чем я просила?",
  // Raven Positive Delivery
  "npcDialogues.raven.positiveDelivery1":
    "Невероятно! Ты нашел нужные мне ингредиенты. Магия Санфлории у тебя в крови!",
  "npcDialogues.raven.positiveDelivery2":
    "Чудесно! Ты нашел то, о чем я просила. Вместе мы сможем погрузиться в самые глубины магии!",
  "npcDialogues.raven.positiveDelivery3":
    "Невероятно! Ты собрал нужные мне ингредиенты. Путешествие в мир духов начинается!",
  "npcDialogues.raven.positiveDelivery4":
    "Ах, великолепно! Ты нашел труднодостижимые ингредиенты, которые я искала. Путешествие в мир духов начинается!",
  // Raven Negative Delivery
  "npcDialogues.raven.negativeDelivery1":
    "Увы, необходимые ингредиенты ускользают от тебя. Но не бойся, все тайны раскроются сами собой!",
  "npcDialogues.raven.negativeDelivery2":
    "Ох, тьма и смятение. У тебя нет того, что мне нужно. Но не волнуйся, тени укажут тебе путь.",
  "npcDialogues.raven.negativeDelivery3":
    "Не переживай. Продолжай свои поиски, и магия проявится.",
  // Raven NoOrder
  "npcDialogues.raven.noOrder1":
    "Похоже, в моем темном владении нет заказов для тебя. Однако, если ты обратишься за советом, или возникнут вопросы о мистических искусствах, не стесняйся спрашивать.",
  "npcDialogues.raven.noOrder2":
    "Нет заказов от меня, путник. Но не волнуйся! Тени всегда бдительны, и когда придет время, мы вместе окунемся в глубины магии.",
  // Tywin Intro
  "npcDialogues.tywin.intro1":
    "Ха, еще один простолюдин, награжденный моим присутствием. У тебя есть то, что я хочу? Говори быстро.",
  "npcDialogues.tywin.intro2":
    "О, здорово, еще один крестьянин. Что тебе нужно от такого как я? Может, ты мне что-то принес?",
  "npcDialogues.tywin.intro3":
    "Здравствуй, простолюдин. Ищешь мудрости, да? А что ты мне дашь взамен?",
  "npcDialogues.tywin.intro4":
    "Что тебе нужно? Говори быстро, время - деньги. Полагаю, у тебя есть то, за чем я тебя посылал?",
  // Tywin Positive Delivery
  "npcDialogues.tywin.positiveDelivery1":
    "Хм, на удивление, ты не такой бесполезный, как мне казалось. Тебе удалось добыть то, что я хотел!",
  "npcDialogues.tywin.positiveDelivery2":
    "Удивительно, но ты действительно доставил то, что я хотел. Возможно, ты не так бесполезен, как я предполагал.",
  "npcDialogues.tywin.positiveDelivery3":
    "Ого, чудесная работа! Ты принес нужные мне материалы. Вместе мы покорим этот мир!",
  "npcDialogues.tywin.positiveDelivery4":
    "Хорошо. Ты доставил мне необходимые материалы. Igor не будет разочарован, инструменты получатся замечательными.",
  // Tywin Negative Delivery
  "npcDialogues.tywin.negativeDelivery1":
    "Убого. У тебя нет того, что я просил. Не трать мое время на свою некомпетентность. Уйди!",
  "npcDialogues.tywin.negativeDelivery2":
    "Какое разочарование. У тебя нет того, что я просил. Типичный представитель твоего вида. А теперь сгинь!",
  "npcDialogues.tywin.negativeDelivery3":
    "У тебя нет того, что мне нужно. У меня нет времени на некомпетентность. Возвращайся, когда сможешь сделать хоть что-то.",
  "npcDialogues.tywin.negativeDelivery4":
    "Некомпетентность высшего уровня. Тебе же не хватает необходимых материалов. Не трать мое время и вернись, когда будешь готов.",
  // Tywin NoOrder
  "npcDialogues.tywin.noOrder1":
    "Похоже, у меня нет для тебя заказов, простолюдин. Но, если тебе нужно мое почтенное присутствие, или у тебя есть просьба, то излагай ее. Время - деньги, в конце концов.",
  "npcDialogues.tywin.noOrder2":
    "Никаких заказов для тебя сегодня, простолюдин. Однако, если ты наткнешься на то, что достойно моего внимания, или тебе понадобится мой опыт, ты знаешь, где меня искать.",
  //Bert Intro
  "npcDialogues.bert.intro1":
    "Пссс! Исследователь тайного! Тебя ждет много разнообразных открытий...",
  "npcDialogues.bert.intro2":
    "Ох, родственная душа! Санфлория является домом для бесчисленных сокровищ...",
  "npcDialogues.bert.intro3":
    "Приветствую тебя, искатель тайн! Некоторые товары ожидают доставки...",
  "npcDialogues.bert.intro4":
    "Привет, искатель сокровенного! Чары можно разделить на две категории...",
  "bert.day":
    "Ты не сможешь вывести этот предмет в течение 3 дней после получения {{seasonalTicket}}",
  //Bert Positive Delivery
  "npcDialogues.bert.positiveDelivery1":
    "Невероятно! Ты принес мне все, что мне нужно...",
  "npcDialogues.bert.positiveDelivery2":
    "О, восхитительная находка! Ты принес мне именно то, что я искал...",
  "npcDialogues.bert.positiveDelivery3":
    "Ах, как раз вовремя! Ты нашел именно те предметы, которые я искал. Отлично!",
  "npcDialogues.bert.positiveDelivery4":
    "Впечатляет! Ты принес мне именно то, что мне нужно для раскрытия секретов этого места.",
  //Bert Negative Delivery
  "npcDialogues.bert.negativeDelivery1":
    "Увы, но у тебя нет того, что я ищу. Продолжай исследовать, и найди меня тогда, когда у тебя будет то, что мне нужно!",
  "npcDialogues.bert.negativeDelivery2":
    "Вот черт! У тебя есть все, кроме того, что мне нужно. Продолжай работать над моим заказом, и вместе мы разгадаем тайны этого места!",
  "npcDialogues.bert.negativeDelivery3":
    "Хмммм, не совсем то, что я ожидал. Но ничего страшного! Еще есть время, чтобы принести то, что мне нужно.",
  "npcDialogues.bert.negativeDelivery4":
    "Ох, это не совсем то, что я искал. Возвращайся, когда у тебя будет неоходимое. И держи глаза открытыми, страницы истории знают многое.",
  //Bert NoOrder
  "npcDialogues.bert.noOrder1":
    "Сегодня у меня нет заказов, которые ты смог бы выполнить, но это не значит, что у меня нет никаких интригующих секретов, которыми я мог бы поделиться.",
  "npcDialogues.bert.noOrder2":
    "У тебя нет загадочных артефактов, которые можно было бы изучить вместе с Бертом, но это не значит, что у него мало необычных фактов и скрытых истин.",
  // Timmy Intro
  "npcDialogues.timmy.intro1":
    "Приветики, друг! Я - Тимми, и мне не терпится узнать, есть ли у тебя то, что я просил.",
  "npcDialogues.timmy.intro2":
    "Приветствую тебя, любитель приключений! Тимми здесь, и ему интересно, нашел ли ты то, о чем он просил.",
  "npcDialogues.timmy.intro3":
    "Привет-привет! Я - Тимми, самый дружелюбный на плазе. Можешь помочь мне, проверив, есть ли у тебя то, что мне нужно?",
  "npcDialogues.timmy.intro4":
    "Привет! Готов повеселиться на солнышке? Я - Тимми, и мне не терпится узнать, есть ли у тебя то, о чем я просил.",
  "npcDialogues.timmy.intro5":
    "Привет, дружище! Тимми здесь, и надеюсь, у тебя есть то, о чем я просил. Давай првоерим.",
  // Timmy Positive Delivery
  "npcDialogues.timmy.positiveDelivery1":
    "Яхуу! У тебя есть как раз то, что мне было нужно. Твоя щедрость наполняет мое сердце радостью. Спасибо!",
  "npcDialogues.timmy.positiveDelivery2":
    "Вот о чем я говорю! Ты принес именно то, что я искал. Ты суперзвезда!",
  "npcDialogues.timmy.positiveDelivery3":
    "О, фантастика! Ты как раз вовремя и с таким хорошеньким предложением. Спасибо!",
  "npcDialogues.timmy.positiveDelivery4":
    "Ура! Ты доставил мне товар. Нам повезло иметь такого замечательного человека, как ты!",
  "npcDialogues.timmy.positiveDelivery5":
    "Ты снова это сделал! Твоя доброта и щедрость не перестают меня удивлять. Спасибо, что сделал мой день лучше!",
  // Timmy Negative Delivery
  "npcDialogues.timmy.negativeDelivery1":
    "Упс! Кажется, у тебя нет того, что мне сейчас нужно. Но не переживай. Продолжай исследовать, и у нас будет другая возможность.",
  "npcDialogues.timmy.negativeDelivery2":
    "О нет! Похоже, у тебя нет того, что мне нужно. Но не волнуйся. Я верю в тебя, возвращайся поскорее!",
  "npcDialogues.timmy.negativeDelivery3":
    "Ой! У тебя нет того, что я мне сейчас нужно. Но продолжай искать! Может быть, в следующий раз, ты наткнешься именно на то, что мне нужно.",
  "npcDialogues.timmy.negativeDelivery4":
    "Вот это облом! У тебя же нет того, что я ищу. Но не сдавайся, новые возможности ждут прямо за углом.",
  "npcDialogues.timmy.negativeDelivery5":
    "Ох, как неловко! У тебя ведь нет того, что я ищу. Но не волнуйся, мой друг. Продолжай исследовать, и мы отпразднуем, когда ты найдешь хоть что-то!",
  // Timmy NoOrder
  "npcDialogues.timmy.noOrder1":
    "О, приветики! У меня сейчас нет заказов, но я всегда рад узнать что-то новое и послушать истории. Есть ли у тебя захватывающие истории о твоих приключениях? Или, может быть, ты встретил друга-медведя? Поделись ими со мной!",
  "npcDialogues.timmy.noOrder2":
    "На данный момент у меня нет заказов, но это не остановит мое любопытство! Есть ли у тебя интересные истории о твоих путешествиях? Может быть, ты встретил редкого медведя или обнаружил драгоценный камень? Давай заходи!",
  // Cornwell Intro
  "npcDialogues.cornwell.intro1":
    "Приветствую тебя, молодой искатель приключений! Ты принес мне то, что я ищу?",
  "npcDialogues.cornwell.intro2":
    "Ах, добро пожаловать, искатель знаний и реликвий! Покажи мне, что ты принес.",
  "npcDialogues.cornwell.intro3":
    "Шагни в царство древних тайн и мудрости. Ты добыл предметы, которых я хочу? Поделись со мной своими открытиями, юноша.",
  "npcDialogues.cornwell.intro4":
    "Ах, ты тот, кто отправился на благородное путешествие. Ты нашел предметы, которые я ищу? Покажи мне, что нашел на солнечных землях нашей страны.",
  "npcDialogues.cornwell.intro5":
    "Приветствую тебя, юный путешественник! Ветры любопытства привели тебя сюда. У тебя есть предметы, которые мне нужны, чтобы пополнить мою коллекцию?",
  // Cornwell Positive Delivery
  "npcDialogues.cornwell.positiveDelivery1":
    "Чудесно! Ты принес именно те реликвии, которые я хотел. Твои усилия по сохранению истории останутся в веках.",
  "npcDialogues.cornwell.positiveDelivery2":
    "Ах, великолепно! Твои находки - это именно те реликвии, которые я искал. Эти сокровища принесут великую мудрость в мою коллекцию.",
  "npcDialogues.cornwell.positiveDelivery3":
    "Впечатляет! Найденные тобой предметы — это именно то, что я искал. История этой земли будет сиять через них.",
  "npcDialogues.cornwell.positiveDelivery4":
    "Ах, юный искатель приключений, ты превзошел мои ожидания! Принесенные тобой предметы будут бесценны для моих исследований.",
  "npcDialogues.cornwell.positiveDelivery5":
    "Ах, мой зоркий друг! Доставленные тобой вещи займут почетное место в коллекции моей мельницы.",
  // Cornwell Negative Delivery
  "npcDialogues.cornwell.negativeDelivery1":
    "О, похоже, ты не нашел то, что я ищу. Не бойтесь; исследование продолжается. Смело продолжайте свое путешествие.",
  "npcDialogues.cornwell.negativeDelivery2":
    "Хм, не совсем то, что я ожидал. Но не отчаивайся! Продолжай искать, и сокровища откроются тебе сами.",
  "npcDialogues.cornwell.negativeDelivery3":
    "Оуу, похоже, желаемые мной предметы ускользают от тебя. Неважно, твое любопытство в конце концов приведет тебя к нужным открытиям.",
  "npcDialogues.cornwell.negativeDelivery4":
    "Уфф, я вижу, что ты не нашел нужные мне предметы. Не волнуйся: история этой страны хранит множество секретов, которые ждут своего открытия.",
  "npcDialogues.cornwell.negativeDelivery5":
    "О, мой дорогой путешественник, похоже, ты не привез с собой то, что я искал. Но твоя преданность истории достойна похвалы.",
  // Cornwell NoOrder
  "npcDialogues.cornwell.noOrder1":
    "Ах, похоже, сейчас нет предметов, которые ты мог бы доставить. Но не отчаивайся! Твое путешествие в нашей стране полно неисчислимых приключений, которые ждут, чтобы их нашли.",
  "npcDialogues.cornwell.noOrder2":
    "О, похоже, сейчас мне не нужны твои услуги. Но не волнуйся; страницы истории перелистываются бесконечно, и новые задания обязательно появятся.",
  "npcDialogues.cornwell.noOrder3":
    "Ах, мои извинения, но мне нечем сейчас тебя занять. Но не бойся; твой путь искателя знаний обязательно приведет тебя к новым приключениям.",
  "npcDialogues.cornwell.noOrder4":
    "Ах, похоже, для тебя пока нет никаких поручений. Но не теряй надежды; твоя любознательная натура вскоре приведет тебя к новым захватывающим задачам.",
  // Pumpkin Pete Intro
  "npcDialogues.pumpkinPete.intro1":
    "Я ждал тебя, мой друг! Ты уже приготовил мой заказ?",
  "npcDialogues.pumpkinPete.intro2":
    "Привет, тыковка! Я был занят, водил друзей по плазе. Ты выполнил мой заказ?",
  "npcDialogues.pumpkinPete.intro3":
    "Приветствую, друг! Сегодня плаза кипит от волнения. Тебе удалось найти мой заказ?",
  "npcDialogues.pumpkinPete.intro4":
    "Привет, дружок-авантюрист! Что привело тебя в мою скромную обитель? Может ты выполнил мой заказ?",
  "npcDialogues.pumpkinPete.intro5":
    "Эй, эй! Добро пожаловать на плазу! Удалось найти то, что мне нужно?",
  // Pumpkin Pete Positive Delivery
  "npcDialogues.pumpkinPete.positiveDelivery1":
    "Ура! Ты принес именно то, что мне нужно. Ты настоящий герой плазы!",
  "npcDialogues.pumpkinPete.positiveDelivery2":
    "Тыквастично! У тебя есть то, что мне было нужно. Ты делаешь наше маленькое сообщество ярче!",
  "npcDialogues.pumpkinPete.positiveDelivery3":
    "Семена радости! Ты принес именно то, что мне нужно. Плазе повезло, что у нее есть вы!",
  "npcDialogues.pumpkinPete.positiveDelivery4":
    "Фантастика! Ты прибыл именно с тем, что я хотел. Твоя доброта - как солнечный свет на нашей плазе!",
  "npcDialogues.pumpkinPete.positiveDelivery5":
    "О, тыквенные семечки! Ты принес мне именно то, что мне было нужно. Плаза благодарна тебе за помощь!",
  // Pumpkin Pete Negative Delivery
  "npcDialogues.pumpkinPete.negativeDelivery1":
    "О, нет. У тебя нет того, что я ищу. Но не волнуйся и возвращайся, когда найдешь что нибудь!",
  "npcDialogues.pumpkinPete.negativeDelivery2":
    "О, черт! У тебя нет того, что я ищу. Продолжайте искать! Может быть, в следующий раз.",
  "npcDialogues.pumpkinPete.negativeDelivery3":
    "О, семена печали! У тебя нет того, что я ищу. Но не сдавайся; новые возможности расцветают каждый день!",
  "npcDialogues.pumpkinPete.negativeDelivery4":
    "Уф! У тебя нет того, что я ищу. Продолжай исследовать, и я уверен, ты найдешь то что нужно.",
  "npcDialogues.pumpkinPete.negativeDelivery5":
    "Упси! У тебя нет того, что я ищу. Но не волнуйся, мой друг. Продолжай исследовать, и мы отпразднуем, когда ты это найдешь.",
  // Pumpkin Pete NoOrder
  "npcDialogues.pumpkinPete.noOrder1":
    "Ах, мой друг, у меня нет просьб для тебя на данный момент. Но не бойся! Я всегда здесь, чтобы предложить совет и дружелюбную тыквенную улыбку.",
  "npcDialogues.pumpkinPete.noOrder2":
    "Ох, сегодня у меня нет заказов, мой друг. Но не волнуйся! Не стесняйся исследовать плазу, и, если тебе нужна помощь, я всегда рядом.",

  // Peggy
  "npcDialogues.peggy.intro1":
    "Привет, милаха! Ты принес мне какие-нибудь деликатесы? Не терпится увидеть, что же ты приготовил!",
  "npcDialogues.peggy.intro2":
    "А ну ка, намажь мне печенье маслом!Я готова к вкусному веселью!",
  "npcDialogues.peggy.intro3":
    "Привет, напарник! Готов поделиться кулинарной радостью?",
  "npcDialogues.peggy.intro4":
    "Привет, сладуся! Ты принес мне некоторые из тех аппетитных блюд, о которых я мечтала?",
  "npcDialogues.peggy.intro5":
    "О, привет! Я так рада увидеть, какие восхитительные деликатесы ты приготовил.",

  "npcDialogues.peggy.positiveDelivery1":
    "Вкуснятина! Ты приготовила именно то, что я жаждал. Ты лучший повар на площади!",
  "npcDialogues.peggy.positiveDelivery2":
    "О, мои вкусовые рецепторы танцуют! Ты кулинарная суперзвезда!",
  "npcDialogues.peggy.positiveDelivery3":
    "Вкусность достигнута! Ты настоящий кулинарный герой!",
  "npcDialogues.peggy.positiveDelivery4":
    "Фантастический пир! Вся площадь будет наслаждаться этим!",
  "npcDialogues.peggy.positiveDelivery5":
    "Ого, какая прелесть! Ты приготовил и доставили идеальную еду. Ты сделали мой день!",
  "npcDialogues.peggy.negativeDelivery1":
    "О, боже, похоже, это не совсем то, что мне нужно. Продолжайте готовить и принесите, когда сможете.",
  "npcDialogues.peggy.negativeDelivery2":
    "Упс, это не совсем так, но не волнуйтесь! Приготовьте еще одно блюдо и возвращайтесь поскорее!",
  "npcDialogues.peggy.negativeDelivery3":
    "Это не то, на что я надеялся, но не сдавайся! Оттачивай кулинарные навыки и у тебя все получится.",
  "npcDialogues.peggy.negativeDelivery4":
    "О, это не совсем то блюдо, которое я жаждал. Продолжай изучать рецепты и принеси мне что-нибудь еще, когда сможешь!",
  "npcDialogues.peggy.negativeDelivery5":
    "Не совсем то блюдо, которое я искал, но не волнуйтесь! Попробуйте приготовить что-нибудь еще и возвращайтесь со своим кулинарным творением.",
  "npcDialogues.peggy.noOrder1":
    "Ах, похоже, у меня нет для тебя заказа на данный момент. Но ты всегда можешь приготовить бурю на площади!",
  "npcDialogues.peggy.noOrder2":
    "На сегодня у тебя нет дел, но пусть это тебя не останавливает! Если тебе нужен совет по готовке или ты просто хочешь поболтать, я здесь!",

  // NPC gift dialogues
  "npcDialogues.pumpkinPete.reward":
    "Спасибо тебе большое за твои доставки. Держи, в знак признательности.",
  "npcDialogues.pumpkinPete.flowerIntro":
    "Ты когда-нибудь видел как элегантен Yellow Cosmos? Я мечтаю о нем...",
  "npcDialogues.pumpkinPete.averageFlower":
    "Не совсем то, что я имел в виду, но это довольно мило. Спасибо.",
  "npcDialogues.pumpkinPete.badFlower":
    "Это не то, на что я надеялся. Возможно, ты сможешь найти более подходящий вариант?",
  "npcDialogues.pumpkinPete.goodFlower":
    "Этот Yellow Cosmos просто невероятен! Спасибо, что принес его мне.",

  "npcDialogues.betty.reward":
    "Я ценю твое внимание. Вот тебе кое-что в знак моей благодарности.",
  "npcDialogues.betty.flowerIntro":
    "Можешь ли ты представить себе красоту красных, желтых, фиолетовых, белых или голубых Pansy? Вот бы мне хоть один...",
  "npcDialogues.betty.averageFlower":
    "Не совсем то, что я имела в виду, но довольно привлекательно. Спасибо.",
  "npcDialogues.betty.badFlower":
    "Это не то, что я имела в виду. Не мог бы ты попробовать найти более подходящий цветок?",
  "npcDialogues.betty.goodFlower":
    "Этот Pansy просто превосходен! Спасибо, что доставил его мне.",

  "npcDialogues.blacksmith.reward":
    "Я ценю твои доставки. Вот тебе награда за твои усилия.",
  "npcDialogues.blacksmith.flowerIntro":
    "Мне нужен яркий Red Carnation. Сталкивался с ним?",
  "npcDialogues.blacksmith.averageFlower":
    "Не совсем то, что я имел в виду, но довольно мило. Спасибо.",
  "npcDialogues.blacksmith.badFlower":
    "Этот цветок не совсем подходит. Не мог бы ты поискать более подходящий вариант?",
  "npcDialogues.blacksmith.goodFlower":
    "Ах, этот Red Carnation восхитителен! Спасибо, что принес его мне.",

  "npcDialogues.bert.reward":
    "Спасибо за твою постоянную помощь. Вот небольшой подарок в знак признательности.",
  "npcDialogues.bert.flowerIntro":
    "Цветы красного, желтого, фиолетового, белого или синего Lotus действительно очаровательны. У тебя есть какой-нибудь?",
  "npcDialogues.bert.averageFlower":
    "Не совсем то, что я имел в виду, но довольно мило. Спасибо.",
  "npcDialogues.bert.badFlower":
    "Нуу, это не тот цветок, который мне нужен. Может, поищешь еще раз?",
  "npcDialogues.bert.goodFlower":
    "Этот Lotus просто восхитительный! Спасибо, что принес его мне.",

  "npcDialogues.finn.reward":
    "Твой вклад бесценен. Вот тебе немного, чтобы выразить мою благодарность.",
  "npcDialogues.finn.flowerIntro":
    "Я мечтаю о белом или синем Cosmos. Можешь ли ты найти их?",
  "npcDialogues.finn.averageFlower":
    "Не совсем то, что я имел в виду, но довольно приятно. Спасибо.",
  "npcDialogues.finn.badFlower":
    "Этот цветок не соответствует моим ожиданиям. Возможно, попробуешь еще разок?",
  "npcDialogues.finn.goodFlower":
    "Этот Cosmos просто сногсшибательный! Спасибо, что принес его мне.",

  "npcDialogues.finley.reward":
    "Спасибо за свой вклад. Вот небольшой знак признательности за твои доставки.",
  "npcDialogues.finley.flowerIntro":
    "Прекрасный Daffodil, тот, о котором я думаю, скрасил бы мой день. Может видел хоть один?",
  "npcDialogues.finley.averageFlower":
    "Не совсем то, что я имела в виду, но довольно очаровательно. Спасибо.",
  "npcDialogues.finley.badFlower":
    "Это не совсем тот цветок. Возможно, другой был бы более подходящим?",
  "npcDialogues.finley.goodFlower":
    "Этот Daffodil прекрасен! Спасибо, что принес его мне.",

  "npcDialogues.corale.reward":
    "Твои доставки очень хорошие. Вот тебе кое-что, чтобы выразить мою благодарность.",
  "npcDialogues.corale.flowerIntro":
    "Ты когда-нибудь видел сияющий Prism Petal? Он просто очаровывает...",
  "npcDialogues.corale.averageFlower":
    "Не совсем то, на что я надеялась, но довольно красиво. Спасибо.",
  "npcDialogues.corale.badFlower":
    "Это не совсем то, что я имела в виду. Не мог бы ты постараться получше?",
  "npcDialogues.corale.goodFlower":
    "Этот Prism Petal просто роскошен! Спасибо, что принес его мне.",

  "npcDialogues.raven.reward":
    "Спасибо тебе за доставки. Вот небольшой подарочек за твои усилия.",
  "npcDialogues.raven.flowerIntro":
    "Глубокий тёмно-фиолетовый — цвет моей души. Ты когда-нибудь видел что-то такое?",
  "npcDialogues.raven.averageFlower":
    "Не совсем то, чего я ожидала, но довольно приятно. Спасибо.",
  "npcDialogues.raven.badFlower":
    "Этот цветок не совсем подходящий. Возможно, тебе стоит поискать еще?",
  "npcDialogues.raven.goodFlower":
    "Этот фиолетовый цветок идеален! Спасибо, что принес его мне.",

  "npcDialogues.salty.reward":
    "О, спасибо за доставку, дружище. Вот кое-что за твои хлопоты.",
  "npcDialogues.salty.flowerIntro":
    "Да, глубокая синева океана - это то, что я ищу. Встречал ли ты цветы, синие, как море?",
  "npcDialogues.salty.averageFlower":
    "Хмм, не совсем то, что я имел в виду, но пойдет. Спасибо, дружище.",
  "npcDialogues.salty.badFlower":
    "Этот цветок никуда не годится. Может, еще раз осмотришься и найдешь то, что мне нужно?",
  "npcDialogues.salty.goodFlower":
    "Да, этот голубой цветок подходит! Премного благодарен за то, что ты принес его мне.",

  "npcDialogues.miranda.reward":
    "Спасибо за твои старания. Вот тебе небольшой знак признательности за доставки.",
  "npcDialogues.miranda.flowerIntro":
    "Яркий желтый цветок наверняка поднимет мне настроение. Ты видели что нибудь похожее?",
  "npcDialogues.miranda.averageFlower":
    "Не совсем то, на что я надеялась, но довольно приятно. Спасибо.",
  "npcDialogues.miranda.badFlower":
    "Этот цветок не совсем желтый. Может, другой вариант был бы более подходящим?",
  "npcDialogues.miranda.goodFlower":
    "Этот желтый цветок прекрасен! Спасибо, что принес его мне.",

  "npcDialogues.cornwell.reward":
    "Спасибо тебе за доставки. Вот небольшой подарок за твои усилия.",
  "npcDialogues.cornwell.flowerIntro":
    "Красный, желтый, фиолетовый, белый или синий Balloon Flower поистине восхитителен...",
  "npcDialogues.cornwell.averageFlower":
    "Не совсем то, что я ожидал, но довольно очаровательно. Спасибо.",
  "npcDialogues.cornwell.badFlower":
    "Этот цветок не совсем подходит. Возможно, попробуешь еще?",
  "npcDialogues.cornwell.goodFlower":
    "Этот Balloon Flower просто чудесен! Спасибо, что принес его.",

  "npcDialogues.tywin.reward":
    "Спасибо тебе за доставки. Вот небольшой знак признательности.",
  "npcDialogues.tywin.flowerIntro":
    "Ты слышал об изысканности Primula Enigma или завораживающем Celestial Frostbloom? Мне нужен один из них.",
  "npcDialogues.tywin.averageFlower":
    "Не совсем то, на что я надеялся, но терпимо. Спасибо.",
  "npcDialogues.tywin.badFlower":
    "Этот цветок не совсем то, что я хотел. Может, другой был бы более подходящим?",
  "npcDialogues.tywin.goodFlower":
    "Этот цветок просто захватывает дух! Спасибо, что принес его.",

  "npcDialogues.default.flowerIntro":
    "У тебя есть для меня цветок? Убедись, что он мне понравится.",
  "npcDialogues.default.averageFlower":
    "Вау, спасибо! Мне нравится этот цветок!",
  "npcDialogues.default.badFlower":
    "Хмм, это не мой любимый цветок. Но, важен не подарок, а внимание",
  "npcDialogues.default.goodFlower":
    "Это мой любимый цветок! Огромное спасибо!",
  "npcDialogues.default.reward":
    "Ого, спасибо, бампкин. Вот небольшой подарок за твою помощь!",
  "npcDialogues.default.locked": "Пожалуйста, возвращайся завтра",

  // Queen Victoria Intro
  "npcDialogues.queenVictoria.intro1":
    "Ох, это ты. Ты приготовил для меня налоги, крестьянин?",
  "npcDialogues.queenVictoria.intro2":
    "Приветствую тебя, подданный. Полагаю, ты принес требуемые мною налоги?",
  "npcDialogues.queenVictoria.intro3":
    "Чего тебе надо, крестьянин? Я занята заботами о троне. Ты принес налоги?",
  "npcDialogues.queenVictoria.intro4":
    "Ох, сколько всего мне приходится терпеть. Поторопись, крестьянин. Ты принес мне налоги?",
  "npcDialogues.queenVictoria.intro5":
    "Трон стоит без дела, а тут ты. Надеюсь, ты принес налоги, крестьянин.",

  // Queen Victoria Positive Delivery
  "npcDialogues.queenVictoria.positiveDelivery1":
    "Наконец-то хоть что-то сделано правильно. Ты принес налоги. Считай, что ты получил мое признание.",
  "npcDialogues.queenVictoria.positiveDelivery2":
    "Очень хорошо, этого будет достаточно. Ты принес налоги. Теперь можешь идти.",
  "npcDialogues.queenVictoria.positiveDelivery3":
    "Приемлемо. Ты принес налоги. Возможно, ты не совсем бесполезен.",
  "npcDialogues.queenVictoria.positiveDelivery4":
    "Впечатляет, для крестьянина. Налоги в порядке. Можешь идти.",
  "npcDialogues.queenVictoria.positiveDelivery5":
    "Хорошо. Тебе удалось принести мне налоги. Трон не должен вечно пустовать.",

  // Queen Victoria Negative Delivery
  "npcDialogues.queenVictoria.negativeDelivery1":
    "Что это? Ты не принес налоги? Какое глубокое разочарование.",
  "npcDialogues.queenVictoria.negativeDelivery2":
    "Жалко. Без налогов? Как, по-твоему, будет развиваться королевство?",
  "npcDialogues.queenVictoria.negativeDelivery3":
    "Позор. Ты приходишь ко мне без налогов. И без уважения...",
  "npcDialogues.queenVictoria.negativeDelivery4":
    "Серьёзно? Без налогов? Хотя, мне не стоило ожидать многого от крестьян.",
  "npcDialogues.queenVictoria.negativeDelivery5":
    "Бесполезно! Как я смогу сохранить богатство королевства без налогов?",

  // Queen Victoria NoOrder
  "npcDialogues.queenVictoria.noOrder1":
    "Хм, похоже, у меня нет для тебя сейчас никаких заказов. Ты можешь идти, но не забывай, кто здесь правит.",
  "npcDialogues.queenVictoria.noOrder2":
    "Пока никаких активных заказов, крестьянин. Считай, что тебе повезло. Уходи.",

  // Queen Victoria gift dialogues
  "npcDialogues.queenVictoria.reward":
    "Очень хорошо, я полагаю, ты заслуживаешь благодарности за свои услуги. Не жди, что это будет часто.",
  "npcDialogues.queenVictoria.flowerIntro":
    "Ты когда-нибудь видел великолепную Primula Enigma? Я хочу такую же...",
  "npcDialogues.queenVictoria.averageFlower":
    "Это не то, что я просила, но, думаю, сойдет. Оставь это здесь.",
  "npcDialogues.queenVictoria.badFlower":
    "Это совершенно не подходит. Найди мне что-нибудь получше, крестьянин.",
  "npcDialogues.queenVictoria.goodFlower":
    "Ах, великолепно! Эта Primula Enigma — именно то, что я хотела. Отличная работа, в кои-то веки.",

  // Gambit Intro
  "npcDialogues.gambit.intro1":
    "Хе-хе, что тут у нас? Готов сыграть в игру, мой друг?",
  "npcDialogues.gambit.intro2":
    "Так так так, не это ли мой любитель азарта? Готов сделать очередную ставку?",
  "npcDialogues.gambit.intro3":
    "Приветствую, искатель приключений. Готов проверить свою удачу?",
  "npcDialogues.gambit.intro4":
    "Ха, новое лицо! Готов испытать свою удачу, или неудачу?",
  "npcDialogues.gambit.intro5":
    "Привет! Хочешь сыграть в игру на смекалку и удачу? Ставки высоки, как раз как мы любим.",

  // Gambit Positive Delivery
  "npcDialogues.gambit.positiveDelivery1":
    "Ага! Ты справился! Кажется, сегодня удача на твоей стороне.",
  "npcDialogues.gambit.positiveDelivery2":
    "Отлично сыграно! Ты принес именно то что я просил. Удача улыбается смелым!",
  "npcDialogues.gambit.positiveDelivery3":
    "Идеально! Это именно то на что я надеялся. Давай проверим будет ли тебе и дальше везти!",
  "npcDialogues.gambit.positiveDelivery4":
    "Невероятно! Ты нашел именно то что мне нужно. Похоже шансы на твоей стороне в этот раз.",
  "npcDialogues.gambit.positiveDelivery5":
    "Браво! Ты принес то, что я просил. В следующий раз будет еще удачнее.",

  // Gambit Negative Delivery
  "npcDialogues.gambit.negativeDelivery1":
    "Ох, не повезло! У тебя нет того, что мне нужно. Повезет в следующий раз!",
  "npcDialogues.gambit.negativeDelivery2":
    "Не совсем то, что я ожидал. Давай попробуем еще разок, и, возможно, шансы будут на твоей стороне.",
  "npcDialogues.gambit.negativeDelivery3":
    "Ах, не повезло! У тебя ничего нет. Но не сдавайся, всегда есть другой шанс!",
  "npcDialogues.gambit.negativeDelivery4":
    "Близко, но не то! У тебя нет того, что мне нужно. Попробуй еще раз, игра еще не окончена.",
  "npcDialogues.gambit.negativeDelivery5":
    "Мда, похоже, в этот раз вам не повезло. Но не волнуйтесь, продолжайте играть, и в конце концов выиграете.",

  // Gambit NoOrder
  "npcDialogues.gambit.noOrder1":
    "Похоже, у меня сейчас нет ставок для тебя. Возвращайся позже, сыграем партию в нарды!",
  "npcDialogues.gambit.noOrder2":
    "Сегодня без игр, мой друг. Но оставайся рядом, ставки могут вырасти в любой момент!",

  // Jester Intro
  "npcDialogues.jester.intro1": "Ах, новое лицо на поле! Готов к шутейкам?",
  "npcDialogues.jester.intro2":
    "Приветствую, друг! Готов посмеяться за счет королевской семьи?",
  "npcDialogues.jester.intro3":
    "Ну и ну, смотрите, кто вышел на поле! Знаешь хорошие шутки?",
  "npcDialogues.jester.intro4":
    "Привет, искатель приключений! Готов к последним сплетням о нашей дорогой королеве?",
  "npcDialogues.jester.intro5":
    "Ахой! Заходи, и давай поделимся шуткой или двумя о королевской семье.",

  // Jester Positive Delivery
  "npcDialogues.jester.positiveDelivery1":
    "Хах! Ты принес именно то, что мне нужно. А ты смешнее, чем я думал!",
  "npcDialogues.jester.positiveDelivery2":
    "Идеально! Ты нашел то, что я просил. Не пробовал стать шутом?",
  "npcDialogues.jester.positiveDelivery3":
    "Чудесно! Ты сделал все точно как надо. Все будут в восторге!",
  "npcDialogues.jester.positiveDelivery4":
    "Фантастика! Ты принес то что нужно. Королева будет в восторге!",
  "npcDialogues.jester.positiveDelivery5":
    "Великолепно! Это как раз то, что мне было нужно. Похоже у тебя талант!",

  // Jester Negative Delivery
  "npcDialogues.jester.negativeDelivery1":
    "Ох, дружок, это совсем не то, что мне нужно. Но попытка засчитана!",
  "npcDialogues.jester.negativeDelivery2":
    "Упс, это немного не то! Но не переживай, даже лучшие шуты иногда шутят не очень.",
  "npcDialogues.jester.negativeDelivery3":
    "О нет, это совсем не то! Но не переживай, мы обязательно посмеемся над этим попозже.",
  "npcDialogues.jester.negativeDelivery4":
    "Ха, это же не то, что я просил! Но спасибо за усилия. Попробуем еще разок?",
  "npcDialogues.jester.negativeDelivery5":
    "Упс, это не то, что мне нужно. Но эй, у каждой шутки бывает выходной!",

  // Jester NoOrder
  "npcDialogues.jester.noOrder1":
    "Мне не о чем тебя попросить, мой друг. Но не стесняйся осмотреться и найти то, над чем тут можно посмеяться!",
  "npcDialogues.jester.noOrder2":
    "Нет ничего важного для тебя сегодня, но чувствуй себя как дома. Королевский двор всегда оживленней с шутами вокруг.",

  // Jester gift dialogues
  "npcDialogues.jester.reward":
    "Браво! Вот тебе сувенир за твои хлопоты. Продолжай в том же духе!",
  "npcDialogues.jester.flowerIntro":
    "Видел ли ты когда-нибудь красный Балун или красную Гвоздику(Карнатион)? Они всегда заставляют меня улыбаться...",
  "npcDialogues.jester.averageFlower":
    "Хммм, не похоже на удар под дых, но сойдет. Спасибо!",
  "npcDialogues.jester.badFlower":
    "Этот цветок такой же неприятный, как мокрый носок! Попробуй еще раз, ладно?",
  "npcDialogues.jester.goodFlower":
    "Великолепно! Этот цветок так же хорош, как мои шутки!",

  // Pharaoh
  "npcDialogues.pharaoh.noOrder1":
    "У меня нет для тебя задания на данный момент, но пустыня огромна и полна скрытых реликвий. Продолжайте исследовать, и вы, возможно, найдете то, что мы ищем.",
  "npcDialogues.pharaoh.noOrder2":
    "Сейчас дел нет, но пески времени скрывают множество сокровищ. Твое путешествие еще не закончено, храбрый исследователь.",
  "npcDialogues.pharaoh.negativeDelivery1":
    "Увы, тут ничего ценного. Но не отчаивайтесь, ведь пески все еще скрывают множество тайн, ожидающих когда их найдут.",
  "npcDialogues.pharaoh.negativeDelivery2":
    "Ничего не нашли сегодня? Путь открытий долог, но упорство приведет нас к цели.",
  "npcDialogues.pharaoh.negativeDelivery3":
    "Секреты древних пока остаются скрытыми. Продолжай, и ты найдешь сокровища, которые мы ищем.",
  "npcDialogues.pharaoh.positiveDelivery1":
    "Ах, ты нашел реликвию древних. Твои усилия приближают нас к разгадке тайн прошлого.",
  "npcDialogues.pharaoh.positiveDelivery2":
    "Узри сокровище из ушедшей эпохи. Твое открытие бесценно для моих поисков утраченных знаний.",
  "npcDialogues.pharaoh.positiveDelivery3":
    "Этот артефакт — ключ к забытой истории. Твой вклад высоко оценится, благородный путешественник.",
  "npcDialogues.pharaoh.intro1":
    "Приветствую тебя, путник. Я — Фараон, искатель утерянных реликвий и забытых знаний. Нашел ли ты что нибудь древние?",
  "npcDialogues.pharaoh.intro2":
    "Добро пожаловать, странник. Пески времени хранят множество секретов. Нашел ли ты какие-нибудь артефакты в своем путешествии?",
  "npcDialogues.pharaoh.intro3":
    "Приветствую тебя, исследователь. Я фараон, хранитель древних секретов. Нашел ли ты реликвии, которые могли бы помочь в разгадке тайн нашего прошлого?",
};

const nyeButton: Record<NyeButton, string> = {
  "plaza.magicButton.query":
    "На площади появилась волшебная кнопка. Хотите нажать на нее?",
};

const obsessionDialogue: Record<ObsessionDialogue, string> = {
  "obsessionDialogue.line1":
    "Уф, {{itemName}}! Я хочу только увидеть это, а не обладать. Покажи мне, и {{seasonalTicket}} будет твоей наградой.",
  "obsessionDialogue.line2":
    "Ты принес {{itemName}}? Я просто хочу на него посмотреть. Дай мне посмотреть, и {{seasonalTicket}} будут твоими.",
  "obsessionDialogue.line3":
    "{{itemName}} у тебя? Мне только посмотреть. За это ты получишь {{seasonalTicket}}.",
  "obsessionDialogue.line4":
    "{{itemName}}! Я не хочу его оставлять, просто чтобы полюбоваться. Покажи его мне, и {{seasonalTicket}} твои.",
  "obsessionDialogue.line5":
    "Ты дашь посмотреть {{itemName}}? Все, что я прошу, это взглянуть на него мельком. За твою щедрость тебе будут выписаны {{seasonalTicket}}.",
};

const offer: Record<Offer, string> = {
  "offer.okxOffer":
    "Привет, фермер, у меня для тебя эксклюзивное предложение от биржи OKX!",
  "offer.beginWithNFT":
    "Для начала тебе нужно будет создать бесплатный Farm NFT. Это будет включать:",
  "offer.getStarterPack": "Получите стартовый пакет сейчас",
  "offer.newHere": "Привет, Фармер, ты здесь как новенький!",
  "offer.getStarted": "Ну погнали",
  "offer.not.enough.BlockBucks": "У тебя недостаточно Block Bucks!",
};

const onboarding: Record<Onboarding, string> = {
  "onboarding.welcome": "Добро пожаловать в децентрализованную игру!",
  "onboarding.step.one": "Шаг 1/3",
  "onboarding.step.two": "Шаг 2/3 (Создай кошелек)",
  "onboarding.step.three": "Шаг 3/3 (Создай свою NFT)",
  "onboarding.intro.one":
    "В своих путешествиях ты будешь получать редкие NFT, которые нужно защищать. Чтобы сохранить их в безопасности, тебе понадобится кошелек Web3.",
  "onboarding.intro.two":
    "Чтобы начать свое путешествие, твой кошелек должен быть готов",
  "onboarding.cheer": "Ты почти у цели!",
  "onboarding.form.one": "Заполни свои данные",
  "onboarding.form.two":
    "и мы отправим бесплатный NFT для игры. (Это займет у нас 3-7 дней)",
  "onboarding.duplicateUser.one": "Уже зарегистрировались!",
  "onboarding.duplicateUser.two":
    "Похоже, ты уже зарегистрировался на бета-тестирование, используя другой адрес. Во время бета-тестирования можно использовать только один адрес.",
  "onboarding.starterPack": "Стартовый пакет",
  "onboarding.settingWallet": "Настрой свой кошелек",
  "onboarding.wallet.one":
    "Существует множество поставщиков кошельков, но мы сотрудничаем с Sequence, потому что они просты в использовании и безопасны.",
  "onboarding.wallet.two":
    "Выберите способ регистрации во всплывающем окне, и все. Увидимся здесь через минуту!",
  "onboarding.wallet.haveWallet": "У меня уже есть кошелек",
  "onboarding.wallet.createButton": "Создать кошелек",
  "onboarding.wallet.acceptButton": "Принять юридические штучки",
  "onboarding.buyFarm.title": "Купи свою ферму!",
  "onboarding.buyFarm.one":
    "Теперь, когда твой кошелек полностью настроен, пришло время завести собственную ферму NFT! ",
  "onboarding.buyFarm.two":
    "Этот NFT надежно сохранит весь твой прогресс в Sunflower Land и позволит тебе безопасно ухаживать за своей фермой.",
  "onboarding.wallet.already": "У меня уже есть кошелек",
};

const onCollectReward: Record<OnCollectReward, string> = {
  "onCollectReward.Missing.Seed": "Пропавшие семена",
  "onCollectReward.Market": "Идите на рынок, чтобы купить семена.",
  "onCollectReward.Missing.Shovel": "Пропавшая лопата",
  "onCollectReward.Missing.Shovel.description":
    "Расширьте свой остров, чтобы найти лопаты.",
};

const orderhelp: Record<OrderHelp, string> = {
  "orderhelp.Skip.hour": "Пропустить заказ можно только раз в сутки!",
  "orderhelp.New.Season":
    "Приближается новый сезон, доставка билетов временно прекращается.",
  "orderhelp.New.Season.arrival": "Скоро открытие сезонных поставок...",
  "orderhelp.Wisely": "Выбирайте мудро!",
  "orderhelp.SkipIn": "Пропустить через",
  "orderhelp.NoRight": "Не сейчас",
  "orderhelp.ticket.deliveries.closed":
    "Доставка билетов в настоящее время закрыта.",
};

const pending: Record<Pending, string> = {
  "pending.calcul": "Результаты подсчитываются.",
  "pending.comeback": "Заходи попозже.",
};

const personHood: Record<PersonHood, string> = {
  "personHood.Details": "Не удалось загрузить сведения о личности",
  "personHood.Identify": "Твоя личность не может быть проверена",
  "personHood.Congrat": "Поздравляем, твоя личность подтверждена!",
};

const piratechest: Record<PirateChest, string> = {
  "piratechest.greeting":
    "Ахой, приятель! Отправляйся в плавание и возвращайся позже за сундуком с наградами!",
  "piratechest.refreshesIn": "Сундук обновится через:",
  "piratechest.warning":
    "Ахой! Этот сундук наполнен сокровищами, достойными короля пиратов, но осторожно, только те, у кого есть пиратская кожа, могут открыть его и забрать добычу!",
};

const pirateQuest: Record<PirateQuest, string> = {
  "questDescription.farmerQuest1": "Собери 1000 Sunflowers",
  "questDescription.fruitQuest1": "Собери 10 Blueberries",
  "questDescription.fruitQuest2": "Собери 100 Oranges",
  "questDescription.fruitQuest3": "Собери 750 Apples",
  "questDescription.pirateQuest1": "Выкоппай 30 ямок",
  "questDescription.pirateQuest2": "Собери 10 Seaweeds",
  "questDescription.pirateQuest3": "Собери 10 Pipis",
  "questDescription.pirateQuest4": "Собери 5 Corals",
  "piratequest.welcome":
    "Добро пожаловать в открытое море приключений, где ты испытаешь себя как настоящий пират. Отправляйся в путешествие, чтобы найти самую богатую добычу и стать величайшим пиратом, когда-либо украшавшим океанские волны.",
  "piratequest.finestPirate":
    "Эй, ты будешь лучшим пиратом на семи морях со своей добычей!",
};

const pickserver: Record<Pickserver, string> = {
  "pickserver.server": "Выберите сервер, к которому хотите присоединиться",
  "pickserver.full": "Полоная коробочка",
  "pickserver.explore": "Исследуйте острова проекта.",
  "pickserver.built": "Хотите построить свой собственный остров?",
};

const playerTrade: Record<PlayerTrade, string> = {
  "playerTrade.no.trade": "Нет доступных сделок.",
  "playerTrade.max.item":
    "О нет! Ты достиг максимального количества предметов.",
  "playerTrade.Progress":
    "Пожалуйста, сохраните свой прогресс в блокчейне, прежде чем продолжить.",
  "playerTrade.transaction": "Ой-ой! Похоже, у тебя идет транзакция.",
  "playerTrade.Please":
    "Пожалуйста, подождите 5 минут, прежде чем продолжить..",
  "playerTrade.sold": "Продано",
  "playerTrade.sale": "На продажу: ",
  "playerTrade.title.congrat": "Поздравляем, твоя продажа завершена!",
};

const portal: Record<Portal, string> = {
  "portal.wrong": "Что-то пошло не так",
  "portal.unauthorised": "неавторизован",
  "portal.example.claimPrize": "Забери свой приз!",
  "portal.example.intro":
    "Привет, привет, добро пожаловать на этот тестовый портал.",
  "portal.example.purchase": "Купить поддельный пропуск",
};

const purchaseableBaitTranslation: Record<PurchaseableBaitTranslation, string> =
  {
    "purchaseableBait.fishingLure.description":
      "Отлично подходит для ловли редких рыб!",
  };

const quest: Record<Quest, string> = {
  "quest.mint.free": "Получи бесплатную одежку",
  "quest.equipWearable": "Наряди своего бампкина",
  "quest.congrats": "Поздравляем, ты получил {{wearable}}",
};

const questions: Record<Questions, string> = {
  "questions.obtain.MATIC": "Как мне получить MATIC?",
  "questions.lowCash": "Не хватает наличных денег?",
};

const reaction: Record<Reaction, string> = {
  "reaction.bumpkin": "3 уровень Бампкина",
  "reaction.bumpkin.10": "10 уровень Бампкина",
  "reaction.bumpkin.30": "30 уровень Бампкина",
  "reaction.bumpkin.40": "40 уровень Бампкина",
  "reaction.sunflowers": "Собери 100,000 Sunflowers",
  "reaction.crops": "Собери 10,000 урожая",
  "reaction.goblin": "Превратись в Гоблина",
  "reaction.crown": "Завладей Гоблинской короной",
};

const reactionBud: Record<ReactionBud, string> = {
  "reaction.bud.show": "Покажи своего Бада",
  "reaction.bud.select": "Выбери Бада",
  "reaction.bud.noFound": "Нету Бадов",
};

const refunded: Record<Refunded, string> = {
  "refunded.itemsReturned": "Твоя ставка была возвращена в инвентарь.",
  "refunded.goodLuck": "В следующий раз точно получится!",
};

const removeHungryCaterpillar: Record<RemoveHungryCaterpillar, string> = {
  "removeHungryCaterpillar.title": "Убрать Голодную гусеницу?",
  "removeHungryCaterpillar.description":
    "Ну тогда мы удалим все семена цветов из инвентаря.",
  "removeHungryCaterpillar.removeFlowerSeeds": "Ну удалить семена цветов",
  "removeHungryCaterpillar.confirmation": "Точно убираем Голодную гусеницу?",
};

const removeKuebiko: Record<RemoveKuebiko, string> = {
  "removeKuebiko.title": "Убрать Куебико?",
  "removeKuebiko.description": "Ну тогда мы удалим все семена из инвентаря.",
  "removeKuebiko.removeSeeds": "Удаляем семена",
};

const resale: Record<Resale, string> = {
  "resale.actionText": "Перепродажа",
};

const restock: Record<Restock, string> = {
  "restock.one.buck":
    "Ты потратишь 1 Block Buck, чтобы пополнить запасы всех предметов в магазинах.",
  "restock.sure": "Ты уверен, что хочешь пополнить запасы?",
  "restock.tooManySeeds": "У тебя слишком много семян в инвентаре!",
  "seeds.reachingInventoryLimit": "У тебя полная корзина!",
  "crops.noCropsToSell": "У тебя нет {{cropName}} для продажи!",
  "seeds.plantingSpot.needed": "{{plantingSpot}} нужно",
};

const retreatTerms: Record<RetreatTerms, string> = {
  "retreatTerms.lookingForRareItems": "Ищешь что то редкое?",
  "retreatTerms.resale.one":
    "Игроки могут торговать особыми предметами, которые они создали в игре.",
  "retreatTerms.resale.two":
    "Ты можешь купить их на вторичных торговых площадках, например OpenSea.",
  "retreatTerms.resale.three": "Посмотреть на OpenSea",
};

const resources: Record<Resources, string> = {
  "resources.recoversIn": "Восстановится через:",
  "resources.boulder.rareMineFound": "Ты нашел редкую жилу!",
  "resources.boulder.advancedMining": "Прокаченная добыча на подходе.",
};

const rewardTerms: Record<RewardTerms, string> = {
  "reward.daily.reward": "Ежедневная награда",
  "reward.streak": " дней подряд",
  "reward.comeBackLater": "Возвращайся позже за новыми наградами",
  "reward.nextBonus": " Следующий бонус: ",
  "reward.unlock": "Разблокировать награду",
  "reward.open": "Открыть награду",
  "reward.lvlRequirement":
    "Ты должен быть 3 уровня, чтобы получать ежедневные награды.",
  "reward.whatCouldItBe": "Что же это может быть?",
  "reward.streakBonus": "3x для в ряд",
  "reward.found": "Ты нашел",
  "reward.spendWisely": "Потрать их с умом.",
  "reward.wearable": "Одежда для твоего бампкина",
  "reward.promo.code": "Введите промокод",
  "reward.woohoo": "Ура! Ты нашел спрятанную награду.",
  "reward.connectWeb3Wallet": "Подключи Web3 кошелек для ежедневных наград.",
  "reward.factionPoints": "Зарабатывай славу для своей фракции!",
};

const rulesGameStart: Record<RulesGameStart, string> = {
  "rules.gameStart":
    "В начале игры растение случайным образом выберет комбинацию из 4 зелий и 1 зелья «хаоса». Комбинации могут быть как разными, так и одинаковыми.",
  "rules.chaosPotionRule":
    "Если ты добавишь зелье «хаоса», твой счет за эту попытку будет равен 0.",
  "rules.potion.feedback": "Выбирайте зелья и раскройте секреты растений!",
  "BloomBoost.description": "Подарите своим растениям яркое цветение!",
  "DreamDrip.description":
    "Окропите свои растения волшебными мечтами и фантазиями.",
  "EarthEssence.description":
    "Используйте силу земли для выращивания своих растений.",
  "FlowerPower.description": "Дай волю цветочной энергии своим растениям.",
  "SilverSyrup.description":
    "Сладкий сироп, который поможет твоим растениям раскрыть весь потенциал.",
  "HappyHooch.description":
    "Зелье, которое принесет радость и смех твоим растениям.",
  "OrganicOasis.description":
    "Создай пышный органический рай для своих растений.",
};

const rulesTerms: Record<RulesTerms, string> = {
  "game.rules": "Правила игры",
  "rules.oneAccountPerPlayer": "1 аккаунт на игрока",
  "rules.gameNotFinancialProduct": "Это игра. Не финансовый продукт.",
  "rules.noBots": "Без ботоводства или автоматизации",
  "rules.termsOfService": "Пользовательское соглашение",
};

const pwaInstall: Record<PwaInstall, string> = {
  "install.app": "Установить приложение",
  "magic.link": "Магическая ссылка",
  "generating.link": "Создать ссылку",
  "generating.code": "Создать код",
  "install.app.desktop.description":
    "Сканируйте код ниже, чтобы установить на свое устройство. Убедитесь что открываете в Safari или Chrome.",
  "install.app.mobile.metamask.description":
    "Скопируйте волшебную ссылку ниже и откройте ее в {{browser}} для установки!",
  "do.not.share.link": "Не шарь ссылку!",
  "do.not.share.code": "И код тоже не показывай!",
  "qr.code.not.working": "QR-код не работает?",
};

const sceneDialogueKey: Record<SceneDialogueKey, string> = {
  "sceneDialogues.chefIsBusy": "Шеф занят",
};

const seasonTerms: Record<SeasonTerms, string> = {
  "season.access": "У тебя есть доступ к",
  "season.banner": "Сезонный баннер",
  "season.bonusTickets": "Бонусные сезонные билеты",
  "season.boostXP": "+10% Опыта от еды",
  "season.buyNow": "Купить сейчас",
  "season.discount": "Скидка 25% SFL на сезонные предметы",
  "season.exclusiveOffer": "Эксклюзивное предложение!",
  "season.goodLuck": "Удачи в сезоне!",
  "season.includes": "Содержит:",
  "season.limitedOffer": "Ограниченное время!",
  "season.wearableAirdrop": "Аирдроп сезонной одежды",
  "season.place.land": "Ты должен разместить это на своей земле",
  "season.megastore.discount": "Скидка на SFL в Мегасторе",
  "season.supporter.gift": "Подарок для сторонников",
  "season.free.season.passes": "Бесплатные сезонные баннеры",
  "season.free.season.passes.description": "Получай баннеры для каждого сезона",
  "season.vip.access": "Сезонный VIP-доступ",
  "season.vip.claim": "Забери свой ежемесячный сезонный аирдроп.",
  "season.vip.description":
    "Доминируй в сезоне благодаря привилегиям, скидкам, бонусным билетам, аирдропам и многому другому!",
  "season.vip.purchase": "Приобрести VIP-предметы",
  "season.mystery.gift": "Таинственный подарок",
  "season.xp.boost": "10% XP буст",
  "season.lifetime.farmer": "Фермер на всю жизнь",
  "season.free.with.lifetime": "Бесплатно с Lifetime Farmer",
  "season.pharaohs.gift": "+5 дополнительных копок на пляже",
  "season.ticket.bonus": "+2 {{item}} (для доставок и списка дел)",
  "season.codex.intro":
    "Зарабатывай {{ticket}}, чтобы создавать эксклюзивную одежду и коллекционные предметы для твоей фермы в этом ограниченном по времени сезоне...Поторопись, пока время не истекло!",
  "season.codex.howToEarn": "Как получить {{ticket}}?",
  "season.codex.howToEarn.one": "Посещай плазу и доставляй ресурсы бампкинам.",
  "season.codex.howToEarn.two": "Завершай список дел Hank'а.",
  "season.codex.howToEarn.three": "Соревнуйся в фракционных состязаниях.",
  "season.codex.nextDrop": "Следующий аукцион",
  "season.codex.seasonalDrops": "Сезонные аукционы",
  "season.codex.seasonalDrops.description":
    "Соревнуйся с другими игроками за самые редкие предметы! За подробностями обращайся к Auctioneer на плазе.",
  "season.codex.soldOut": "Расродано",
  "season.codex.mutants": "Мутанты",
  "season.codex.mutants.discover": "Найди сезонных мутантов!",
  "season.codex.mutants.one": "Собирай яйца, чтобы найти {{item}}.",
  "season.codex.mutants.two": "Рыбачь на глубине, чтобы найти {{item}}.",
  "season.codex.mutants.three":
    "Экспериментируй с цветами, чтобы найти {{item}}.",
};

const share: Record<Share, string> = {
  "share.TweetText": "Посети мою Sunflower Land ферму",
  "share.ShareYourFarmLink": "Поделись ссылкой на свою ферму",
  "share.ShowOffToFarmers":
    "Похвастайся перед колегами-фермерами, поделившись ссылкой на свою ферму (URL: для прямого посещения твоей фермы!)",
  "share.FarmNFTImageAlt": "Sunflower-Land Farm NFT Image",
  "share.CopyFarmURL": "Скопировать URL фермы",
  "share.Tweet": "Твитнуть",
  "share.chooseServer": "Выбери сервер для входа",
  "share.FULL": "ЗАПОЛНЕН",
  "share.exploreCustomIslands": "Исследуйте острова индивидуальных проектов.",
  "share.buildYourOwnIsland": "Ты хочешь построить свой собственный остров?",
};

const sharkBumpkinDialogues: Record<SharkBumpkinDialogues, string> = {
  "sharkBumpkin.dialogue.shhhh": "Тсссс!",
  "sharkBumpkin.dialogue.scareGoblins": "Я пытаюсь напугать гоблинов.",
};

const shopItems: Record<ShopItems, string> = {
  "betty.post.sale.one": "Эй, привет! С возвращением.",
  "betty.post.sale.two":
    "Ты помог справиться с нехваткой урожая, и цены вернулись к прежним.",
  "betty.post.sale.three":
    "Теперь поднимем планку: сажаем более долгосрочные и дорогие культуры!",
  "betty.welcome": "Добро пожаловать в мой магазинчик. Чего желаешь?",
  "betty.buySeeds": "Купить семена",
  "betty.sellCrops": "Продать урожай",
};

const showingFarm: Record<ShowingFarm, string> = {
  "showing.farm": "Показать",
  "showing.wallet": "в кошыльке",
};

const snorklerDialogues: Record<SnorklerDialogues, string> = {
  "snorkler.vastOcean": "Это голубой океан!",
  "snorkler.goldBeneath": "Где-то под поверхностью должно быть золото.",
};

const somethingWentWrong: Record<SomethingWentWrong, string> = {
  "somethingWentWrong.supportTeam": "поддержка",
  "somethingWentWrong.jumpingOver": "или иди на",
  "somethingWentWrong.askingCommunity": "и попроси помощи у комьюнити.",
};

const specialEvent: Record<SpecialEvent, string> = {
  "special.event.easterIntro":
    "О нет, мои 6 кроликов снова пропали... они, должно быть, проглодались. Поможешь мне их найти? Они похожи на других кроликов, но у них есть уникальный блеск. Щелкните по ним, чтобы поймать их.",
  "special.event.rabbitsMissing": "Кроликов пропало",
  "special.event.link": "Аирдроп",
  "special.event.claimForm": "Заполни форму чтобы забрать аирдроп.",
  "special.event.airdropHandling": "Аирдроп может занять несколько дней..",
  "special.event.walletRequired": "Нужен кошелек",
  "special.event.web3Wallet": "Для получения аирдропа необходим кошелек Web3.",
  "special.event.airdrop": "Аирдроп",
  "special.event.finishedLabel": "Событие завершилось",
  "special.event.finished":
    "Это событие завершено. Следите за будущими событиями!",
  "special.event.ineligible":
    "Сейчас нет необходимости делать какую-либо работу, но спасибо, что зашел!",
};

const statements: Record<Statements, string> = {
  "statements.adventure": "Начнем это приключение!",
  "statements.auctioneer.one":
    "Я объездил всю страну Подсолнухов в поисках экзотических артефактов, чтобы привезти их моим собратьям-деревенщинам.",
  "statements.auctioneer.two":
    "Не пропусти ни один из аукционов, где взмах моего могучего молота может превратить твои с трудом заработанные ресурсы в редкие, чеканные чудеса!",
  "statements.beta.one": "Бета-версия доступна только нашим OG фермерам.",
  "statements.beta.two": "Следи за обновлениями. Скоро мы выйдем в эфир!",
  "statements.better.luck": "В следующий раз точно получится!",
  "statements.blacklist.one":
    "Система обнаружения антиботов и мультиаккаунтов обнаружила странное поведение. Действия были ограничены.",
  "statements.blacklist.two":
    "Пожалуйста, отправь сообщения с подробностями, и мы свяжемся с вами.",
  "statements.clickBottle": "Нажми на бутылку, чтобы попробовать угадать",
  "statements.clock.one":
    "Ой-ой, похоже, твои часы не синхронизированы с игрой. Установите дату и время на автоматическое, чтобы избежать сбоев",
  "statements.clock.two":
    "Нужна помощь в синхронизации часов? Ознакомьтесь с нашим руководством!",
  "statements.conversation.one": "У меня есть кое-что для тебя!",
  "statements.cooldown":
    "Чтобы защитить сообщество, нам требуется двухнедельный период ожидания, прежде чем можно будет получить доступ к этой ферме.",
  "statements.docs": "Почитать документы",
  "statements.dontRefresh": "Не обновляй браузер!",
  "statements.guide.one": "Перейти к руководству",
  "statements.guide.two":
    "Ознакомься с этим руководством, которое поможет быстро начать.",
  "statements.jigger.one":
    "Ты будешь перенаправлен на сторонний сервис, чтобы сделать быстрое селфи. Никогда не делись личной информацией или криптографическими данными.",
  "statements.jigger.two": "Ты не смог доказать свою человечность.",
  "statements.jigger.three":
    "Ты можешь продолжать играть, но некоторые действия будут ограничены, пока проводится проверка.",
  "statements.jigger.four":
    "Если ты считаешь, что это была ошибка, напиши на support@usejigger.com..",
  "statements.jigger.five":
    "Твои доказательства все еще обрабатывается. Это может занять до 2 часов.",
  "statements.jigger.six":
    "Система обнаружения нескольких аккаунтов обнаружила странное поведение.",
  "statements.lvlUp": "Корми своего бампкина, чтобы повысить свой уровень",
  "statements.maintenance":
    "Скоро будет что-то новое! Спасибо за терпение, игра скоро снова будет доступна.",
  "statements.minted": "Гоблины создали твой ",
  "statements.minting":
    "Пожалуйста, прояви терпение, пока товар будет добавлен в блокчейн.",
  "statements.mutant.chicken": "Поздравляю, твоя курица выносила мутанта!",
  "statements.news":
    "Получай последние новости, выполняй домашние дела и корми своего бампкина.",
  "statements.ohNo": "О нет! Что-то просыпалось!",
  "statements.openGuide": "Открыть руководство",
  "statements.patience": "Спасибо за твое терпение.",
  "statements.potionRule.one":
    "Цель: Разгадать комбинацию. У тебя есть 3 попытки. Игра закончится, если у тебя будет идеальное зелье или если закончатся попытки.",
  "statements.potionRule.two": "Выбери комбинацию зелий и попробуй их смешать.",
  "statements.potionRule.three":
    "Скорректируй следующую комбинацию на основе результатов.",
  "statements.potionRule.four":
    "Когда игра будет завершена, счет твоей последней попытки определит награду.",
  "statements.potionRule.five": "Идеальное зелье в идеальном месте",
  "statements.potionRule.six": "Правильное зелье, но неправильная позиция",
  "statements.potionRule.seven": "Упс, не то зелье.",
  "statements.sflLim.one": "Ты достиг дневного лимита SFL.",
  "statements.sflLim.two":
    "Ты можешь продолжить игру, но тебе придется подождать до завтра, чтобы снова синхронизироваться.",
  "statements.sniped":
    "О нет! Другой игрок увел эту сделку у тебя из под носа.",
  "statements.switchNetwork": "Добавить или переключить сеть",
  "statements.sync":
    "Пожалуйста, наберись терпения, пока мы синхронизируем все данные в блокчейне.",
  "statements.tapCont": "Нажми, чтобы продолжить",
  "statements.price.change":
    "О нет! Кажется, цена изменилась, попробуй еще раз!",

  "statements.tutorial.one":
    "Лодка прокатит тебя между островами, где ты сможешь открыть для себя новые земли и захватывающие приключения.",
  "statements.tutorial.two":
    "Многие земли находятся далеко, и для того, чтобы их посетить, тебе понадобится опытный бампкин.",
  "statements.tutorial.three":
    "Твое приключение начинается сейчас, а как далеко ты зайдешь, зависит только от тебя.",
  "statements.visit.firePit":
    "На Fire Pit можно быстро приготовит еду для Бампкина.",
  "statements.wishing.well.info.four": "обеспеч ликвидность",
  "statements.wishing.well.info.five": " в игре",
  "statements.wishing.well.info.six": "предоставление ликвидности",
  "statements.wishing.well.worthwell":
    "В настоящее время в колодце находится награда на сумму {{rewards}} SFL!",
  "statements.wishing.well.look.like":
    "Похоже, тыы пока не предоставляете ликвидность.",
  "statements.wishing.well.lucky": "Посмотрим, насколько тебе повезло!",
  "statements.wrongChain.one":
    "Ознакомьтесь с этим руководством, оно поможет тебе подключиться.",
  "statements.feed.bumpkin.one": "У тебя нет еды в инвентаре.",
  "statements.feed.bumpkin.two":
    "Тебе нужно будет приготовить еду, чтобы накормить своего бампкина.",
  "statements.empty.chest": "Твой сундук пуст, ищи редкие предметы!",
  "statements.chest.captcha": "Нажми на сундук, чтобы открыть его",
  "statements.frankie.plaza":
    "Отправляйся на Плазу, чтобы изготовить редкий декор!",
  "statements.blacksmith.plaza":
    "Отправляйся на Плазуза за еще более редкими предметами.",
  "statements.water.well.needed.one": "Требуется дополнительный колодец.",
  "statements.water.well.needed.two":
    "Чтобы вырастить больше урожая, нужен колодец.",
  "statements.soldOut": "Продано",
  "statements.soldOutWearables": "Посмотреть распроданную одежду",
  "statements.craft.composter": "Сделай Composter",
  "statements.wallet.to.inventory.transfer": "Перенеси предметы из кошелька",
  "statements.crop.water": "Этим культурам нужна вода!",
  "statements.daily.limit": "Дневной лимит: ",
  "statements.sure.buy": "Ты точно хочешь купить {{item}}?",
  "statements.perplayer": "за игрока",
  "statements.minted.goToChest":
    "Открой сундуку и поставь его на своем острове.",
  "statements.minted.withdrawAfterMint":
    "Ты сможешь забрать свой артефакт после окончания чеканки.",
  "statements.startgame": "Начать игру",

  "statements.session.expired":
    "Похоже, что твоя сессия истекла. Пожалуйста, обнови страницу, чтобы продолжить игру.",
  "statements.translation.joinDiscord": "Присоединиться к Discord серверу",
};

const stopGoblin: Record<StopGoblin, string> = {
  "stopGoblin.stop.goblin": "Останови гоблинов!",
  "stopGoblin.stop.moon": "Останови скелетов!",
  "stopGoblin.tap.one":
    "Нажимай на скелетов, прежде чем они украдут твои ресурсы",
  "stopGoblin.tap.two":
    "Нажимай на гоблинов, прежде чем они съедят всю твою еду",
  "stopGoblin.left": "Попыток осталось: {{attemptsLeft}}",
};

const swarming: Record<Swarming, string> = {
  "swarming.tooLongToFarm": "Уффффф, ты слишком долго собирал урожай!",
  "swarming.goblinsTakenOver":
    "Гоблины захватили твою ферму. Тебе придется подождать, пока они уйдут.",
};

const tieBreaker: Record<TieBreaker, string> = {
  "tieBreaker.tiebreaker": "Одинаковые ставки",
  "tieBreaker.closeBid":
    "В этом случае артефакт уходит тому, у кого больше опыта. К сожалению, ты проиграл.",
  "tieBreaker.betterLuck":
    "Время съесть еще тортов! В следующий раз повезет больше.",
  "tieBreaker.refund": "Забрать ставку",
};

const toolDescriptions: Record<ToolDescriptions, string> = {
  // Tools
  "description.axe": "Используется для сбора дерева",
  "description.pickaxe": "Используется для сбора камня",
  "description.stone.pickaxe": "Используется для сбора железа",
  "description.iron.pickaxe": "Используется для сбора золота",
  "description.gold.pickaxe": "Используется для сбора кримстоуна и санстоуна",
  "description.rod": "Используется для ловли рыбы",
  "description.rusty.shovel":
    "Используется для удаления строений и коллекционных предметов",
  "description.shovel": "Сажай и собирай с грядок.",
  "description.sand.shovel": "Используется для выкапывания сокровищ",
  "description.sand.drill":
    "Бурит глубоко в поисках необычных или редких сокровищ",
  "description.oil.drill": "Бур для добычи oil",
};

const transactionTerms: Record<TransactionTerms, string> = {
  "transaction.starterOffer": "Стартовое предложение",
  "transaction.mintFarm": "Твоя ферма уже создана!",
  "transaction.farm.ready": "Твоя ферма будет готова через",
  "transaction.networkFeeRequired":
    "Для защиты твоих NFT-токенов в блокчейне требуется небольшая сетевая комиссия.",
  "transaction.estimated.fee": "Примерная комиссия",
  "transaction.payCardCash": "Оплата картой/наличными",
  "transaction.creditCard": "*При оплате кредитной картой взимается комиссия.",
  "transaction.rejected": "Транзакция отклонена!",
  "transaction.message0":
    "Чтобы продолжить, тебе необходимо принять транзакцию во всплывающем окне.",
  "transaction.noFee":
    "Этот запрос не инициирует транзакцию в блокчейне и не повлечет за собой никаких комиссий за газ.",
  "transaction.minblockbucks": "Минимум 5 Block Bucks",
  "transaction.payCash": "Оплата наличными",
  "transaction.matic": "Matic",
  "transaction.payMatic": "Оплата через MATIC",
  "transaction.storeBlockBucks": "Block bucks будут храниться на твоей ферме.",
  "transaction.excludeFees": "*Цены не включают комиссию за транзакцию.",
  "transaction.storeProgress.blockchain.one":
    "Хочешь сохранить свой прогресс в блокчейне?",
  "transaction.storeProgress.blockchain.two":
    "Хранение данных в блокчейне не пополняет запасы магазинов.",
  "transaction.storeProgress": "Прогресс магазина",
  "transaction.storeProgress.chain": "Сохранение прогресса в блокчейне",
  "transaction.storeProgress.success": "Ура! Твои вещи записаны в блокчейн!",
  "transaction.trade.congrats": "Поздравляем, твоя сделка прошла успешно.",
  "transaction.processing": "Обработка твоей транзакции.",
  "transaction.pleaseWait":
    "Пожалуйста, дождись подтверждения транзакции блокчейном.",
  "transaction.unconfirmed.reset":
    "Через 5 минут все неподтвержденные транзакции будут сброшены.",
  "transaction.withdraw.one": "Вывод",
  "transaction.withdraw.sent": "Твои предметы/жетоны были отправлены",
  "transaction.withdraw.view": "Ты можешь просмотреть свои товары на",
  "transaction.withdraw.four":
    "Ты можешь просмотреть свои токены, импортировав SFL в свой кошелек.",
  "transaction.withdraw.five": "Импорт токена SFL в MetaMask",
  "transaction.displayItems":
    "Обрати внимание, что OpenSea может потребоваться до 30 минут, чтобы отобразить твои товары. Ты также можешь просмотреть свои товары на",
  "transaction.withdraw.polygon": "PolygonScan",
  "transaction.id": "ID транзакции",
  "transaction.buy.BlockBucks": "Купить Block Bucks",
};

const transfer: Record<Transfer, string> = {
  "transfer.sure.address":
    "Пожалуйста, убедись, что указанный адрес находится в сети Polygon, является правильным и принадлежит тебе. Восстановление чужих адресов невозможно.",
  "transfer.Account":
    "Твой аккаунт #{{farmID}} был переведен на {{receivingAddress}}!",
  "transfer.Farm": "Передача твоей фермы!",
  "transfer.Refresh": "Не обновляй страницу",
  "transfer.account": "Перенеси свой аккаунт",
  "transfer.address": "Адрес кошелька: ",
};

const treasureModal: Record<TreasureModal, string> = {
  "treasureModal.noShovelTitle": "А где лопата?",
  "treasureModal.needShovel":
    "Тебе понадобится лопата, чтобы выкопать сокровище!",
  "treasureModal.purchaseShovel":
    "Если тебе нужно ее купить, можешь отправиться в Treasure Shop в южной части острова.",
  "treasureModal.gotIt": "Понятно",
  "treasureModal.maxHolesTitle": "Хватит копаний на сегодня!",
  "treasureModal.saveTreasure": "Оставь немного сокровищ для остальных!",
  "treasureModal.comeBackTomorrow":
    "Возвращайтесь завтра, чтобы найти еще сокровища.",
  "treasureModal.drilling": "Бурение",
};

const tutorialPage: Record<TutorialPage, string> = {
  "tutorial.pageOne.text1":
    "В этом меню ты увидишь уровни, необходимые для разблокировки новых зданий.",
  "tutorial.pageOne.text2":
    "Некоторые из них можно построить несколько раз, как только ты достигнешь определенного уровня.",
  "tutorial.pageTwo.text1":
    "Здания — важный способ продвижения по игре, поскольку они помогут тебе расширяться и развивать ферму.",
  "tutorial.pageTwo.text2":
    "Давай начнем с повышения уровня бампкина, чтобы ты мог получить верстак для изготовления инструментов.",
};

const visitislandEnter: Record<VisitislandEnter, string> = {
  "visitIsland.enterIslandId": "Введи ID острова",
  "visitIsland.visit": "Посетить",
};

const visitislandNotFound: Record<VisitislandNotFound, string> = {
  "visitislandNotFound.title": "Остров не найден!",
};

const wallet: Record<Wallet, string> = {
  "wallet.connect": "Подключи свой кошелек",
  "wallet.linkWeb3": "Ссылка на  Web3 кошелек",
  "wallet.setupWeb3":
    "Чтобы получить доступ к этой функции, тебе необходимо сначала настроить кошелек Web3.",
  "wallet.wrongWallet": "Неправильный кошелек",
  "wallet.connectedWrongWallet": "Ты подключен к неправильному кошельку.",
  "wallet.missingNFT": "Отсутствует NFT",
  "wallet.requireFarmNFT":
    "Некоторые действия требуют NFT фермы. Это поможет сохранить все предметы в безопасности в блокчейне",
  "wallet.uniqueFarmNFT":
    "Будет создана уникальный Farm NFT для хранения твоего прогресса",
  "wallet.mintFreeNFT": "Создай свой NFT",
  "wallet.wrongChain": "Не та сеть",
  "wallet.walletAlreadyLinked": "Кошелек уже привязан",
  "wallet.linkAnotherWallet": "Пожалуйста, привяжи другой кошелек",
  "wallet.transferFarm":
    "Пожалуйста, перенеси ферму на другой кошелек, чтобы создать новый аккаунт.",
  "wallet.signRequest": "Подпись",
  "wallet.signRequestInWallet":
    "Подпиши запрос в своем кошельке, чтобы продолжить",
};

const warningTerms: Record<WarningTerms, string> = {
  "warning.noAxe": "Нет топоров!",
  "warning.chat.maxCharacters": "Макс. количество знаков",
  "warning.chat.noSpecialCharacters": "Никаких специальных символов!",
  "warning.level.required": "Необходимый уровень: {{lvl}}",
  "warning.hoarding.message": "Ты держишь {{indefiniteArticle}} {{itemName}}?!",
  // indefiniteArticle: 'a' or 'an' depending if first letter is vowel.
  // If this is not used in your language, leave the `{{indefiniteArticle}}` part out
  "warning.hoarding.indefiniteArticle.a": "", // Leave this blank if not needed
  "warning.hoarding.indefiniteArticle.an": "", // Leave this blank if not needed
  "warning.hoarding.one":
    "Говорят, что гоблины совершают набеги на фермы, в которых много ресурсов.",
  "warning.hoarding.two":
    "Чтобы защитить себя и сохранить эти драгоценные ресурсы в безопасности, пожалуйста, сохрани свой прогресс в блокчейне.",
  "travelRequirement.notice":
    "Перед путешествием тебе необходимо повысить свой уровень.",
};

const welcomeTerms: Record<WelcomeTerms, string> = {
  "welcome.createAccount": "Создать аккаунт",
  "welcome.creatingAccount": "Создание аккаунта",
  "welcome.email": "Вход через электронную почту и социальные сети",
  "welcome.login": "Авторизация",
  "welcome.needHelp": "Нужна помощь?",
  "welcome.otherWallets": "Другие кошельки",
  "welcome.signingIn": "Выполняется вход",
  "welcome.signIn.Message": "Для входа подпиши сообщение в кошельке.",
  "welcome.takeover.ownership":
    "Похоже, ты новичок в Sunflower Land и заявил права собственности на аккаунт другого игрока..",
  "welcome.promo": "Введи промокод",
  "welcome.offline": "Похоже, ты не в сети. Может стоит проверить подключение?",
};

const winner: Record<Winner, string> = {
  "winner.mintTime": "У тебя есть 24 часа, чтобы забрать свой приз.",
  "winner.mintTime.one": "Нет предметов, доступных для создания!",
};

const wishingWellTerms: Record<WishingWell, string> = {
  "wishingWell.newWish":
    "Для тебя создано новое желание на основе твоего текущего баланса токенов LP!",
  "wishingWell.noReward":
    "Нет доступного вознаграждения! Ликвидность должна удерживаться в течение 3 дней, чтобы получилось что то ценное!",
  "wishingWell.wish.lucky":
    "Загадай новое желание и увидишь, насколько тебе повезет!",
  "wishingWell.sflRewardsReceived": "Ты получили {{reward}} SFL!",
  "wishingWell.wish.grantTime": "Пришло время загадать твое желание!",
  "wishingWell.wish.granted": "Твое желание было исполнено.",
  "wishingWell.wish.made": "Ты загадал желание!",
  "wishingWell.wish.timeTillNextWish":
    "Время до следующего желания: {{nextWishTime}}",
  "wishingWell.wish.comeBackAfter":
    "Возвращайтесь через {{nextWishTime}}, чтобы узнать, насколько вам повезло!",
  "wishingWell.wish.warning.one":
    "Имей в виду, что при исполнении желания будут учитываться только те токены LP, которые у тебя были на момент загадывания желания.",
  "wishingWell.wish.warning.two":
    "Если ты удалишь свою ликвидность в течение этого времени, то не получишь никаких вознаграждений.",
  "wishingWell.info.one":
    "Колодец желаний — это волшебное место, где можно получить SFL, просто загадав желание!",
  "wishingWell.info.two":
    "Желания исполняются тем фермерам, кто предоставили ликвидность в игре.",
  "wishingWell.info.three":
    "Похоже, у тебя в кошельке есть волшебные жетоны LP!",
  "wishingWell.moreInfo": "Узнать подробнее",
};

const withdraw: Record<Withdraw, string> = {
  "withdraw.proof": "Для этой функции необходимо быстрое селфи.",
  "withdraw.verification": "Начать проверку",
  "withdraw.unsave": "Любой несохраненный прогресс будет утерян.",
  "withdraw.sync":
    "Ты можешь вывести только те товары, которые синхронизировали с блокчейном.",
  "withdraw.available": "Старт 9 мая",
  "withdraw.sfl.available": "SFL доступен в сети",
  "withdraw.send.wallet": "Отправить на кошелек",
  "withdraw.choose": "Выбери сумму для вывода",
  "withdraw.receive": "Ты получишь: {{sflReceived}} SFL",
  "withdraw.select.item": "Выбери товары для вывода",
  "withdraw.opensea":
    "После вывода ты сможешь просматривать свои товары на OpenSea.",
  "withdraw.restricted":
    "Некоторые предметы не могут быть выведены. Это может быть из-за того что они используются или все еще строятся.",
  "withdraw.bumpkin.wearing":
    "Твой бампкин в настоящее время носит следующие предметы, и поэтому их нельзя вывести. Сначала тебе нужно их снять, а только потом вывести.",
  "withdraw.buds": "Выберите Бада для вывода",
  "withdraw.budRestricted": "Уже открыл коробку",
};

const world: Record<World, string> = {
  "world.newArea": "Новое",
  "world.intro.one": "Привет, путешественник! Добро пожаловать в плазу.",
  "world.intro.two":
    "Плаза это дом для разнообразных голодных Бампкинов и Гоблинов, которым нужна твоя помощь!",
  "world.intro.missingDelivery":
    "Хммм, похоже, ты еще не собрал ресурсы для доставки. Ты все еще можешь наверстать в это время.",
  "world.intro.delivery":
    "О, отлично, похоже, у тебя есть ресурсы для доставки!",
  "world.intro.levelUpToTravel": "Повышайте уровень, чтобы путешествовать",
  "world.intro.findNPC": "Исследуйте площадь и найдите {{name}}.",
  "world.intro.find": "Искать",
  "world.intro.visit":
    "Посещайте NPC и выполняйте доставки, чтобы заработать SFL, монеты и редкие награды.",
  "world.intro.craft":
    "Создавайте редкие коллекционные предметы, предметы одежды и украшения в разных магазинах.",
  "world.intro.carf.limited":
    "Спешите, товары доступны только в течение ограниченного времени!",
  "world.intro.trade":
    "Обменивайтесь ресурсами с другими игроками. Чтобы торговать с игроком, пройдите рядом и нажмите на него.",
  "world.intro.auction":
    "Подготовьте свои ресурсы и посетите аукционный дом, чтобы побороться с другими игроками за редкие коллекционные предметы!",
  "world.intro.four":
    "Чтобы ходить, используйте клавиши со стрелками на клавиатуре.",
  "world.intro.five": "Или используйте джойстик сенсорном экране.",
  "world.intro.six":
    "Чтобы взаимодействовать с персонажами или объектам, подойдите к нему и щелкните по нему.",
  "world.intro.seven":
    "Никакого харамсмента, газлайтинга, ругательств или издевательств. Только фан и взаимоуважение.",
  "world.plaza": "Плаза",
  "world.beach": "Пляж",
  "world.woodlands": "Лес",
  "world.retreat": "Обитель",
  "world.home": "Дом",
  "world.kingdom": "Королевство",
  "world.faction": "Фракция",
  "world.travelTo": "Отправиться в/на {{location}}",
};

const wornDescription: Record<WornDescription, string> = {
  "worm.earthworm": "Извивающийся червяк, привлекающий мелкую рыбу.",
  "worm.grub": "Сочная личинка - идеальный вариант для продвинутых рыболовов.",
  "worm.redWiggler": "Экзотический червь, для самых элитных рыб.",
};

const milestoneMessages: Record<MilestoneMessages, string> = {
  "milestone.noviceAngler":
    "Поздравляем, ты только что достиг отметки Novice Angler! Поймав каждую основную рыбу, ты встал на путь профессионала в рыбной ловле.",
  "milestone.advancedAngler":
    "Впечатляет, ты только что достиг отметки Advanced Angler! Ты овладел искусством ловли продвинутой рыбы. Продолжайте в том же духе!",
  "milestone.expertAngler":
    "Вау, ты только что достиг отметки Expert Angler! Теперь ты настоящий эксперт по рыбной ловле! Поймать 300 рыб - это не маленький подвиг.",
  "milestone.fishEncyclopedia":
    "Поздравляем, ты только что достиг отметки Fish Encyclopedia! Ты стал настоящим знатоком рыб! Знакомство с каждой рыбой, относящейся к базовому, продвинутому и экспертному уровню, - это выдающееся достижение.",
  "milestone.masterAngler":
    "Вау, ты только что достиг отметки Master Angler! Поймать 1500 рыб - это свидетельство твоего мастерства рыболова.",
  "milestone.marineMarvelMaster":
    "Поздравляем, ты только что достиг отметки Marine Marvel Master! Ты - бесспорный чемпион морей! Поимка каждого Marvel доказывает твое рыболовное мастерство, как ничто другое.",
  "milestone.deepSeaDiver":
    "Поздравляем, ты только что достиг отметки Deep Sea Diver! Ты заслужил Deep Sea Helm - таинственную корону, которая привлекает Marvel'ов на твой крючок.",
  "milestone.sunpetalSavant":
    "Поздравляем, ты только что достиг отметки Sunpetal Savant! Ты открыл для себя все возможные варианты с Sunpetal.",
  "milestone.bloomBigShot":
    "Поздравляем, ты только что достиг отметки Bloom Big Shot! Ты открыл для себя каждый вариант с Bloom. Ты - настоящий Bloom эксперт!",
  "milestone.lilyLuminary":
    "Поздравляем, ты только что достигли отметки Lily Luminary! Ты открыл для себя все варианты цветов из Lily.",
};

const event: Record<Event, string> = {
  "event.christmas": "Рождественское событие!",
  "event.LunarNewYear": "Лунный Новый год",
  "event.GasHero": "Событие Gas Hero",
  "event.Easter": "Пасха",
  "event.valentines.rewards": "Валентиновские награды",
};

const promo: Record<Promo, string> = {
  "promo.cdcBonus": "Бонус от Crypto.com!",
  "promo.expandLand": "Дважды расширьте свою землю, чтобы получить 100 SFL.",
};

const trader: Record<Trader, string> = {
  "trader.you.pay": "Ты платишь",
  "trader.price.per.unit": "Цена за шт.",
  "trader.goblin.fee": "Комиссия гоблинов",
  "trader.they.receive": "Они получат",
  "trader.seller.receives": "Продавец получит",
  "trader.buyer.pays": "Покупатель заплатит",
  "trader.cancel.trade": "Отменить сделку",
  "trader.you.receive": "Ты получишь",
  "trader.PoH":
    'Для этой функции необходимо подтверждение "личности". Пожалуйста, сделай быстрое селфи.',
  "trader.start.verification": "Начать верификацию",
};

export const NYON_STATUE: Record<NyonStatue, string> = {
  "nyonStatue.memory": "В память о",
  "nyonStatue.description":
    "Легендарный рыцарь, ответственный за очистку шахт от гоблинов. Вскоре после одержанной победы он был отравлен гоблинским заговорщиком. Граждане Sunflower Land воздвигли эту статую в память о его победах.",
};

const trading: Record<Trading, string> = {
  "trading.select.resources": "Выбери ресурс, чтобы просмотреть объявления",
  "trading.no.listings": "Не найдено объявлений",
  "trading.listing.congrats":
    "Поздравляем, ты только что выставил свои товары на продажу!",
  "trading.listing.deleted": "Твое объявление было удалено",
  "trading.listing.fulfilled": "Сделка выполнена",
  "trading.your.listing": "Твое объявление",
  "trading.you.receive": "Ты получишь",
  "trading.burned": "сгорел.",
};

export const restrictionReason: Record<RestrictionReason, string> = {
  "restrictionReason.isGrowing": "{{item}} растет",
  "restrictionReason.beanPlanted": "Волшебные бобы растут",
  "restrictionReason.cropsGrowing": "Урожай растет",
  "restrictionReason.?cropGrowing": "{{crop}} растет",
  "restrictionReason.basicCropsGrowing": "Базовые культуры растут",
  "restrictionReason.mediumCropsGrowing": "Средние культуры растут",
  "restrictionReason.advancedCropsGrowing": "Продвинутые культуры растут",
  "restrictionReason.fruitsGrowing": "Фрукты растут",
  "restrictionReason.treesChopped": "Деревья срублены",
  "restrictionReason.stoneMined": "Камень добыт",
  "restrictionReason.ironMined": "Железо добыто",
  "restrictionReason.goldMined": "Золото добыто",
  "restrictionReason.crimstoneMined": "Кримстоун добыт",
  "restrictionReason.chickensFed": "Куры покромлены",
  "restrictionReason.treasuresDug": "Выкопаны ямы с сокровищами",
  "restrictionReason.inUse": "Используется",
  "restrictionReason.recentlyUsed": "Недавно использовалось",
  "restrictionReason.recentlyFished": "Недавно рыбачили",
  "restrictionReason.flowersGrowing": "Цветы растут",
  "restrictionReason.beesBusy": "Пчелы заняты",
  "restrictionReason.pawShaken": "Уже пожал лапку",
  "restrictionReason.festiveSeason":
    "Заблокировано во время праздничного сезона",
  "restrictionReason.noRestriction": "Нет ограничений",
  "restrictionReason.genieLampRubbed": "Волшебная лампа потерта",
  "restrictionReason.oilReserveDrilled": "Добыча идет полным ходом",
  "restrictionReason.buildingInUse": "Постройка занята",
  "restrictionReason.beehiveInUse": "Улей за работой",
};

export const leaderboardTerms: Record<Leaderboard, string> = {
  "leaderboard.leaderboard": "Таблица лидеров",
  "leaderboard.error":
    "Ошибка при загрузке таблицы лидеров. Пожалуйста, повторите попытку позже.",
  "leaderboard.initialising":
    "Рассчитываем твой ранг. Пожалуйста, повтори попытку позже.",
  "leaderboard.topTen": "Топ 10",
  "leaderboard.yourPosition": "Твоя позиция",
  "leaderboard.factionMembers": "Члены фракции",
  "leaderboard.champions": "Чемпионы",
  "leaderboard.congratulations": "Поздравляем {{faction}}!",
  "leaderboard.resultsPending": "Ожидаем результаты…",

  "leaderboard.position": "Место",
  "leaderboard.weeklyScore": "Недельные итоги",
  "leaderboard.player": "Игрок",
  "leaderboard.score": "Счет",
  "leaderboard.prizes": "Призы",
  "leaderboard.faction.description":
    "Каждую неделю ты можешь выиграть ценные призы.",
  "leaderboard.faction.champion": "Фракция чемпионов",
  "leaderboard.faction.bonusPrizeWeek": "Неделя с реально крутыми призами",
  "leaderboard.faction.championPrizes":
    "Счет твоей фракции рассчитывается на основе того, сколько очков заработали 100 лучших игроков. Все игроки победившей фракции получат:",
  "leaderboard.faction.bonusMarks": "Бонус +10% марок",
  "leaderboard.faction.topPlayers": "Призы лучшим игрокам",
  "leaderboard.faction.topPlayerPrizes":
    "50 лучших игроков каждой фракции получат:",
};

const gameOptions: Record<GameOptions, string> = {
  "gameOptions.title": "Настройки игры",
  "gameOptions.farmId": "ID фермы #{{farmId}}",
  "gameOptions.logout": "Выйти из системы",
  "gameOptions.confirmLogout": "Ты уверен, что хочешь выйти из системы?",

  // Amoy Actions
  "gameOptions.amoyActions": "Действия тестового сервера (Amoy)",
  "gameOptions.amoyActions.timeMachine": "Машина времени",

  // Blockchain Settings
  "gameOptions.blockchainSettings": "Настройки блокчейна",
  "gameOptions.blockchainSettings.refreshChain": "Обновить из цепи",
  "gameOptions.blockchainSettings.storeOnChain": "Сохранить в цепи",
  "gameOptions.blockchainSettings.swapMaticForSFL": "Обменять MATIC на SFL",
  "gameOptions.blockchainSettings.transferOwnership":
    "Передача права собственности",

  // General Settings
  "gameOptions.generalSettings": "Общие настройки",
  "gameOptions.generalSettings.connectDiscord": "Подключиться к Discord",
  "gameOptions.generalSettings.assignRole": "Назначить роль в Discord",
  "gameOptions.generalSettings.changeLanguage": "Изменить язык",
  "gameOptions.generalSettings.darkMode": "Темный режим",
  "gameOptions.generalSettings.lightMode": "Светлый режим",
  "gameOptions.generalSettings.appearance": "Внешний вид",
  "gameOptions.generalSettings.font": "Шрифт",
  "gameOptions.generalSettings.disableAnimations": "Отключить анимацию",
  "gameOptions.generalSettings.enableAnimations": "Включить анимацию",
  "gameOptions.generalSettings.share": "Поделиться",

  // Plaza Settings
  "gameOptions.plazaSettings": "Настройки Плазы",
  "gameOptions.plazaSettings.title.mutedPlayers": "Заглушенные игроки",
  "gameOptions.plazaSettings.title.keybinds": "Сочетания клавиш",
  "gameOptions.plazaSettings.mutedPlayers.description":
    "Если ты заглушил некоторых игроков с помощью команды /mute, ты можешь увидеть их здесь и убрать, если захочешь.",
  "gameOptions.plazaSettings.keybinds.description":
    "Хотите узнать, какие сочетания клавиш доступны? Проверьте их здесь.",
  "gameOptions.plazaSettings.noMutedPlayers": "Ты никого не заглушал.",
  "gameOptions.plazaSettings.changeServer": "Сменить сервер",
};

const greenhouse: Record<GreenhouseKeys, string> = {
  "greenhouse.oilDescription": "Для выращивания растений в теплице нужна нефть",
  "greenhouse.oilRequired": "Требуется нефть",
  "greenhouse.oilInMachine": "{{oil}} нефти в баке",
  "greenhouse.insertOil": "Добавь нефти: {{oil}} доступно",
  "greenhouse.numberOil": "{{oil}} Нефть",
};

const minigame: Record<Minigame, string> = {
  "minigame.chickenRescue": "Миниигра - Спасение куриц",
  "minigame.comingSoon": "Скоро...",
  "minigame.completed": "Всех спас",
  "minigame.confirm": "Ты уверен, что хочешь потратить:",
  "minigame.noPrizeAvailable": "Ежедневный приз недоступен",
  "minigame.playNow": "Играть",
  "minigame.purchase": "Купить",
  "minigame.chickenRescueHelp": "Можешь ли ты помочь мне вывести цыплят?",
  "minigame.discovered.one": "Привет, ты открыл портал!",
  "minigame.discovered.two":
    "Шагните в волшебный мир, чтобы получить награды и славу. Удачи!",
  "minigame.communityEvent": "Общественное мероприятие",
  "minigame.festivalOfColors": "Фестиваль красок",
  "minigame.festivalOfColors.comingSoon":
    "25 июня состоится общественное мероприятие...",
  "minigame.festivalOfColors.intro":
    "Отпразднуйте сезон красок на этом мероприятии, организованном сообществом.",
  "minigame.festivalOfColors.mission": "Найди цветные шары!",
};

const cropMachine: Record<CropMachine, string> = {
  "cropMachine.moreOilRequired": "Нужно больше нефти",
  "cropMachine.oilTank": "Цистерна",
  "cropMachine.machineRuntime": "Время работы {{time}}",
  "cropMachine.growTimeRemaining": "Рости осталось: {{time}}",
  "cropMachine.paused": "На паузе",
  "cropMachine.readyToHarvest": "Готово к сбору",
  "cropMachine.boosted": "Прокачено",
  "cropMachine.totalSeeds": "Всего посажено: {{total}}",
  "cropMachine.totalCrops": "Всего {{cropName}} собранно: {{total}}",
  "cropMachine.harvest": "Собрать",
  "cropMachine.pickSeed": "Выбери семя",
  "cropMachine.addSeeds": "Добавить {{seedType}}",
  "cropMachine.availableInventory": "Доступно {{amount}}",
  "cropMachine.seeds": "Семена: {{amount}}",
  "cropMachine.growTime": "Время роста: {{time}}",
  "cropMachine.all": "Все",
  "cropMachine.addSeedPack": "Добавить семя кучей",
  "cropMachine.notStartedYet": "Не запущено",
  "cropMachine.seedPacks": "Наборы семян",
  "cropMachine.readyCropPacks": "Готовые пакеты урожая",
  "cropMachine.readyCropPacks.description":
    "В настоящее время у тебя есть {{totalReady}} пакетов для сбора урожая! Щелкни на пакет, в который ты хочешь собрать.",
  "cropMachine.harvestCropPack": "Собрать урожай",
  "cropMachine.addOil": "Добавить нефти",
  "cropMachine.oil.description":
    "Для работы твоей машины необходима нефть. Каждому пакету семян потребуется определенное количество нефти в зависимости от того, как долго растут культуры. Добавляя нефть, ты можешь увидеть, как долго машина будет работать при таком количестве нефти.",
  "cropMachine.maxRuntime": "Время работы: {{time}}",
  "cropMachine.oilToAdd": "Добавить нефти: {{amount}}",
  "cropMachine.totalRuntime": "Время работы: {{time}}",
  "cropMachine.running": "Машина для сбора урожая работает",
  "cropMachine.stopped": "Машина для сбора урожая остановлена",
  "cropMachine.idle": "Машина для сбора урожая простаивает",
  "cropMachine.name": "Машина для сбора урожая",
};

const removeCropMachine: Record<RemoveCropMachine, string> = {
  "removeCropMachine.title": "Убрать машину для сбора урожая?",
  "removeCropMachine.description":
    "Это действие удалит всю нефть, хранящуюся в твоей сельскохозяйственной машине.",
};

const username: Record<Username, string> = {
  "username.tooShort": "Имя слишком короткое (минимум 3 буквы)",
  "username.tooLong": "Имя слишком длинное (не больше 12 букв)",
  "username.invalidChar": "Имя содержит странные знаки",
  "username.startWithLetter": "Имя обычно начинается с буквы",
};

export const easterEggTerms: Record<EasterEggKeys, string> = {
  "easterEgg.queensDiary": "Дневник Виктории",
  "easterEgg.jesterDiary": "Дневник Джестера",
  "easterEgg.tywinDiary": "Дневник Тайвина",
  "easterEgg.kingDiary": "Дневник короля",
  "easterEgg.lostKnight": "Потерянный Рыцарь",
  "easterEgg.knight": "Черт возьми... Не доверяй Гамбиту и его грязным трюкам!",
  "easterEgg.kingdomBook1":
    "Дорогой дневник, я боюсь, что король может никогда не вернуться. Ходит шепот при дворе, что кто-то может захватить трон в его отсутствие. Это королевство балансирует на острие ножа.",
  "easterEgg.kingdomBook2":
    "Тайвин слишком слаб и слишком мягок с деревенщиной. Им нужно платить больше налогов. Этому королевству нужна твердая рука, а не его нежное прикосновение.",
  "easterEgg.kingdomBook3":
    "Королевская семья — жестокие засранцы. Они обращаются со всеми, как с грязью под ногтями. Неудивительно, что их никто не любит! По крайней мере, они дают мне достаточно материала для моих шуток.",
  "easterEgg.kingdomBook4":
    "Власть и уважение имеют решающее значение для подавления гоблинов. Мы не для того терпели войну, чтобы передать им власть. Их нужно держать нв узде ради безопасности нашего королевства.",
  "easterEgg.kingdomBook5":
    "Чтобы быть королем, я должен быть жестоким. Когда я взойду на трон, все гоблины будут страдать. Их восстание закончится со мной, и наше королевство станет сильнее чем когда либо.",
  "easterEgg.desertBook1":
    "Верблюды — священные животные, по слухам, перевозящие редкие артефакты. Говорят, что не все прибыли в пункт назначения, и их останки разбросаны по всему месту.",
  "easterEgg.desertBook2":
    "Пустыня открывает слои истории. Каждая пустынная буря приближает нас к прошлому.",
  "easterEgg.desertBook3":
    "Древняя тайна раскрыта в пустыне, расшифрованная языком моих предков.",
  "easterEgg.desertBook4":
    "Я пересек моря от Острова Сокровищ, чтобы найти эту благодатную землю... и все ради чего? Какие-то паршивые реликвии!",
  "easterEgg.digbysDiary": "Дневник Дигби",
  "easterEgg.goldtoothsDiary": "Дневник Голдтуса",
  "easterEgg.pharaohsDiary": "Дневник Фараона",
};

export const desertTerms: Record<DesertKeys, string> = {
  "digby.streakReward":
    "Найди все предметы для получения бонусного приза. Не пропускай и для дополнительных наград.",
  "digby.streak": "Копательная серия",
  "digby.claimPrize":
    "Молодец, Бампкин! Не забудь получить свой бонусный приз!",
  "digby.noShovels":
    "Эй, тебе нужна лопата для песка, чтобы копать здесь! Поговори с Джафаром...",
  "digby.noDrills": "Похоже, у тебя нет песчаных буров! Но они есть у Джафара.",
  "digby.noDigsLeft": "Ты как будто подустал копать, может я смогу помочь...",
  "digby.puzzle": "Головоломка «Раскопки»",
  "digby.patterns": "Схема узоров",
  "digby.today":
    "Привет, исследователь, сегодня в головоломке пустыни были обнаружены следующие предметы:",
  "digby.guide.one":
    "Ты можешь найти предметы, копая в археологических раскопках. Изучите древние подсказки, чтобы найти то, что ты ищешь в пустыне.",
  "digby.guide.two": "Крабы всегда находятся рядом с сокровищами.",
  "digby.guide.three":
    "Если ты обнаружил песок, то рядом нет сокровищ(по горизонтали и вертикали).",
  "digby.guide.four":
    "Каждый день буря в пустыне перестраивает головоломку, обновляя схему и ресурсы.",
  "desert.notice.one":
    "Добро пожаловать в пустыню. Сможешь ли ты решить загадку фараона и найти спрятанные сокровища?",
  "desert.notice.two":
    "Найди {{ticket}} и обменяйте их на награды, прежде чем они исчезнут!",
  "desert.notice.three":
    "Используй hieroglyphs, чтобы улучшить свои навыки копания.",
  "desert.notice.four": "Продавай накопанное в магазине за монеты.",
  "desert.notice.five": "Или неси предметы для NPC в обмен на награды.",
  "digby.moreDigsIntro":
    "Аааа, устали копать? Не беспокойтесь! Есть несколько способов копать больше. Ознакомьтесь с вариантами ниже!",
  "digby.buyMoreDigs": "Купи на 5 копок больше за 1",
  "desert.hud.digsLeft": "{{digsLeft}} копок осталось",
  "desert.hud.noDigsLeft": "Копки закончились...",
  "desert.hud.newSite": "Новое место раскопок!",
  "desert.extraDigs": "Дополнительные копки",
  "desert.digs": "{{amount}} копаний",
  "desert.buyDigs.confirmation":
    "Ты уверен, что хочешь купить 5 копок за 1 Block Bucks?",
  "desert.noTreasureToSell": "У тебя нет {{treasure}} на продажу!",
};

const changeLanguage: Record<ChangeLanguage, string> = {
  "changeLanguage.confirm":
    "Это действие обновит страницу. Ты уверен, что хочешь сменить язык?",
  "changeLanguage.contribute": "Хочешь внести свой вклад?",
  "changeLanguage.contribute.message":
    "Если ты заинтересован в переводе на предпочитаемый тобой язык, пожалуйста, свяжись с одним из модераторов сервера Sunflower Land Discord:",
  "changeLanguage.currentLanguage": "(Текущий язык)",
};

export const marketplaceTerms: Record<MarketplaceTerms, string> = {
  "marketplace.collectibles": "Артефакты",
  "marketplace.buyNow": "Купить",
  "marketplace.description": "Описание",
  "marketplace.listForSale": "Список на продажу",
  "marketplace.walletRequired": "Нужен кошелек",
  "marketplace.listings": "Продажа",
  "marketplace.noListings": "Ничего нет.",
  "marketplace.noOffers": "И тут ничего нет.",
  "marketplace.offers": "Предлжения",
  "marketplace.topOffer": "Лучшее предложение",
  "marketplace.acceptOffer": "Принять предложение",
  "marketplace.makeOffer": "Сделать предложение",
  "marketplace.expiry": "Действительно до",
  "marketplace.from": "От",
  "marketplace.sfl": "SFL",
  "marketplace.priceHistory": "История цен",
};

export const RUSSIAN_TERMS: Record<TranslationKeys, string> = {
  ...achievementTerms,
  ...auction,
  ...addSFL,
  ...availableSeeds,
  ...base,
  ...basicTreasure,
  ...beehive,
  ...birdiePlaza,
  ...boostDescriptions,
  ...boostEffectDescriptions,
  ...bountyDescription,
  ...buildingDescriptions,
  ...bumpkinDelivery,
  ...bumpkinItemBuff,
  ...bumpkinPart,
  ...bumpkinPartRequirements,
  ...bumpkinSkillsDescription,
  ...bumpkinTrade,
  ...buyFarmHand,
  ...changeLanguage,
  ...claimAchievement,
  ...chat,
  ...chickenWinner,
  ...choresStart,
  ...chumDetails,
  ...community,
  ...compostDescription,
  ...composterDescription,
  ...confirmSkill,
  ...confirmationTerms,
  ...conversations,
  ...cropBoomMessages,
  ...cropFruitDescriptions,
  ...cropMachine,
  ...cropsAndChickens,
  ...deliveryitem,
  ...defaultDialogue,
  ...decorationDescriptions,
  ...delivery,
  ...deliveryHelp,
  ...depositWallet,
  ...desertTerms,
  ...detail,
  ...discordBonus,
  ...donation,
  ...draftBid,
  ...errorAndAccess,
  ...errorTerms,
  ...exoticShopItems,
  ...factions,
  ...factionShopDescription,
  ...festiveTree,
  ...fishDescriptions,
  ...fishermanModal,
  ...fishermanQuest,
  ...fishingChallengeIntro,
  ...fishingGuide,
  ...fishingQuests,
  ...flowerBed,
  ...flowerbreed,
  ...flowerShopTerms,
  ...foodDescriptions,
  ...garbageCollector,
  ...gameDescriptions,
  ...gameOptions,
  ...gameTerms,
  ...generalTerms,
  ...genieLamp,
  ...getContent,
  ...getInputErrorMessage,
  ...goblin_messages,
  ...goldTooth,
  ...greenhouse,
  ...guideTerms,
  ...guideCompost,
  ...guideFactionPet,
  ...harvestflower,
  ...harvestBeeHive,
  ...hayseedHankV2,
  ...helper,
  ...heliosSunflower,
  ...henHouseTerms,
  ...islandupgrade,
  ...interactableModals,
  ...introPage,
  ...islandName,
  ...islandNotFound,
  ...landscapeTerms,
  ...leaderboardTerms,
  ...levelUpMessages,
  ...loser,
  ...lostSunflorian,
  ...marketplaceTerms,
  ...megaStore,
  ...milestoneMessages,
  ...modalDescription,
  ...minigame,
  ...noaccount,
  ...noBumpkin,
  ...noTownCenter,
  ...notOnDiscordServer,
  ...nftminting,
  ...npc,
  ...npcDialogues,
  ...npc_message,
  ...nyeButton,
  ...obsessionDialogue,
  ...offer,
  ...onCollectReward,
  ...onboarding,
  ...orderhelp,
  ...pending,
  ...personHood,
  ...piratechest,
  ...pirateQuest,
  ...pickserver,
  ...playerTrade,
  ...portal,
  ...purchaseableBaitTranslation,
  ...quest,
  ...questions,
  ...reaction,
  ...reactionBud,
  ...refunded,
  ...removeCropMachine,
  ...removeHungryCaterpillar,
  ...removeKuebiko,
  ...resale,
  ...restock,
  ...retreatTerms,
  ...resources,
  ...resourceTerms,
  ...rewardTerms,
  ...rulesGameStart,
  ...rulesTerms,
  ...pwaInstall,
  ...sceneDialogueKey,
  ...seasonTerms,
  ...share,
  ...sharkBumpkinDialogues,
  ...shopItems,
  ...showingFarm,
  ...snorklerDialogues,
  ...somethingWentWrong,
  ...specialEvent,
  ...statements,
  ...stopGoblin,
  ...swarming,
  ...tieBreaker,
  ...timeUnits,
  ...toolDescriptions,
  ...transactionTerms,
  ...transfer,
  ...treasureModal,
  ...tutorialPage,
  ...visitislandEnter,
  ...visitislandNotFound,
  ...wallet,
  ...warningTerms,
  ...welcomeTerms,
  ...wishingWellTerms,
  ...withdraw,
  ...winner,
  ...world,
  ...wornDescription,
  ...event,
  ...promo,
  ...trader,
  ...NYON_STATUE,
  ...trading,
  ...goblinTrade,
  ...restrictionReason,
  ...username,
  ...easterEggTerms,
};
