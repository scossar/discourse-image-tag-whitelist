(function () {
  Discourse.Markdown.whiteListTag('img', 'class', 'img-left');
  Discourse.Markdown.whiteListTag('img', 'class', 'img-right');
  Discourse.Markdown.whiteListTag('img', 'class', 'img-center');
  Discourse.Markdown.whiteListTag('img', 'class', 'img-custom');
  Discourse.Markdown.whiteListTag('img', 'data-max-height', /\d+\%?$/ );
  Discourse.Markdown.whiteListTag('img', 'data-max-width', /\d+\%?$/ );
})();