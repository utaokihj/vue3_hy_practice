/**
 * @param {*} val
 * @return {String} val type
 */
export const typeCheckFn = (val) => {
  const class2type = {}
  'Boolean Number String Function Array Date RegExp Object Error'.split(' ').map((item, idx) => {
    class2type[`[object ${item}]`] = item.toLowerCase()
  })
  if (val == null) return val + ''
  return typeof val === 'object' || typeof val === 'function'
    ? class2type[Object.prototype.toString.call(val)] || 'object'
    : typeof val
}
