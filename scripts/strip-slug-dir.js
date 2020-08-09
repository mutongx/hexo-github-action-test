// Not sure why hexo insist on such a stupid directory reference. So disappointed.
// This regular expression cannot handle all conditions correctly. Just don't put square brackets in your alt text.
hexo.extend.filter.register('before_post_render', function(data) {
  var exp = '\\[(.*?)\\]\\(' + data.slug + '/(.*?)\\)'
  var re = new RegExp(exp, 'g')
  data.content = data.content.replace(re, '[$1]($2)')
  return data
});
