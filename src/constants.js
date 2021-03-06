/**
 * Буквы алфавита
 * @type {object}
 */
const CHARS = new Proxy({
  CON:  'бвгджзйклмнпрстфхцчшщ',  // Согласные
  VOW:  'аеёиоуыэюя',             // Гласные
  // Буквы для специфичных окончаний
  ACON: 'гжкхчшщ',                // ГлинкИ
  BCON: 'бвдзлмнпрстфц',          // ЛиндЫ
  AVOW: 'аеёоуыэюя',              // О НиколаЕ, о ДмитриИ
  CCON: 'бвгдзклмнпрстфх',        // ДельвигОМ
  DCON: 'жйцчшщь',                // АбрамовичЕМ
}, {
  get(target, name) {
    return target[name].split('')
  }
})

/**
 * Окончания сокращенных отчеств
 * @type {Array}
 */
const SHORT_MIDDLE_FLEX = CHARS.CON
  .filter(item => item !== 'в')
  .map(item => item + 'ич')

/**
 * Константы родов
 * @type {number}
 */
const M = 1 << 0 // Мужской
const W = 1 << 1 // Женский

/**
 * Падежи
 * @type {Array<string>}
 */
const CASES = [
  'именительный', // Есть кто?
  'родительный',  // Нет кого?
  'дательный',    // Дать кому?
  'винительный',  // Винить кого?
  'творительный', // Доволен кем?
  'предложный',   // Думать о ком?
]

/**
 * Индексы частей имени
 * @type {object}
 */
const NAME = {
  FIRST:  0,
  MIDDLE: 1,
  LAST:   2,
}

/**
 * Склоняемые исключения женских имён с мягким знаком на конце
 * @type {Array<string>}
 */
const EXCEP = [
  'любовь',
  'адель',
  'жизель',
  'агарь',
  'рахиль',
  'руфь',
  'суламифь',
  'эсфирь',
  'юдифь',
  'сесиль',
  'нинель'
].map(item => item.substr(0, item.length - 1))

/**
 * @exports
 */
module.exports = {
  CHARS,
  SHORT_MIDDLE_FLEX,
  M,
  W,
  CASES,
  NAME,
  EXCEP,
}
