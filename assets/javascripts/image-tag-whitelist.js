(function () {
  Discourse.Markdown.whiteListTag('figure', 'class', 'left-half');
  Discourse.Markdown.whiteListTag('figure', 'class', 'right-half');
  Discourse.Markdown.whiteListTag('figure', 'class', 'left-third');
  Discourse.Markdown.whiteListTag('figure', 'class', 'right-third');
  Discourse.Markdown.whiteListTag('figure', 'class', 'left-quarter');
  Discourse.Markdown.whiteListTag('figure', 'class', 'right-quarter');
  Discourse.Markdown.whiteListTag('figure', 'data-max-width', /\d+\%?$/ );
})();