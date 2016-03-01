exports.Regex = {
  rule:          /^(.+?)\[(.+)\]$/,
  numeric:       /^[0-9]+$/,
  integer:       /^\-?[0-9]+$/,
  decimal:       /^\-?[0-9]*\.?[0-9]+$/,
  email:         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  alpha:         /^[a-z]+$/i,
  alphaNumeric:  /^[a-z0-9]+$/i,
  alphaDash:     /^[a-z0-9_\-]+$/i,
  natural:       /^[0-9]+$/i,
  naturalNoZero: /^[1-9][0-9]*$/i,
  ip:            /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
  base64:        /[^a-zA-Z0-9\/\+=]/i,
  numericDash:   /^[\d\-\s]+$/,
  url:           /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
};