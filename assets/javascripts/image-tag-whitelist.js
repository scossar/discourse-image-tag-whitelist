(function () {
  Discourse.Markdown.whiteListTag('figure', 'class', 'quarter');
  Discourse.Markdown.whiteListTag('figure', 'class', 'third');
  Discourse.Markdown.whiteListTag('figure', 'class', 'half');
  Discourse.Markdown.whiteListTag('figure', 'class', 'two-thirds');
  Discourse.Markdown.whiteListTag('figure', 'class', 'three-quarters');
  Discourse.Markdown.whiteListTag('figure', 'class', 'right');
  Discourse.Markdown.whiteListTag('figure', 'class', 'last');

  // quarter
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(quarter|right)\s+(right|quarter)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(quarter|last)\s+(quarter|last)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(quarter|last|right)\s+(quarter|last|right)\s+(quarter|last|right)\s*$/);

  // third
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(third|right)\s+(right|third)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(third|last)\s+(third|last)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(third|last|right)\s+(third|last|right)\s+(third|last|right)\s*$/);

  // half
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(half|right)\s+(right|half)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(half|last)\s+(half|last)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(half|last|right)\s+(half|last|right)\s+(half|last|right)\s*$/);

  // two-thirds
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(two-thirds|right)\s+(right|two-thirds)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(two-thirds|last)\s+(two-thirds|last)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(two-thirds|last|right)\s+(two-thirds|last|right)\s+(two-thirds|last|right)\s*$/);

  // three-quarters
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(three-quarters|right)\s+(right|three-quarters)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(three-quarters|last)\s+(three-quarters|last)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(three-quarters|last|right)\s+(three-quarters|last|right)\s+(three-quarters|last|right)\s*$/);

  // paragraphs
  Discourse.Markdown.whiteListTag('div', 'class', 'quarter');
  Discourse.Markdown.whiteListTag('div', 'class', 'third');
  Discourse.Markdown.whiteListTag('div', 'class', 'half');
  Discourse.Markdown.whiteListTag('div', 'class', 'two-thirds');
  Discourse.Markdown.whiteListTag('div', 'class', 'three-quarters');
  Discourse.Markdown.whiteListTag('div', 'class', 'right');
  Discourse.Markdown.whiteListTag('div', 'class', 'last');

  // quarter
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(quarter|right)\s+(right|quarter)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(quarter|last)\s+(quarter|last)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(quarter|last|right)\s+(quarter|last|right)\s+(quarter|last|right)\s*$/);

  // third
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(third|right)\s+(right|third)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(third|last)\s+(third|last)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(third|last|right)\s+(third|last|right)\s+(third|last|right)\s*$/);

  // half
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(half|right)\s+(right|half)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(half|last)\s+(half|last)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(half|last|right)\s+(half|last|right)\s+(half|last|right)\s*$/);

  // two-thirds
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(two-thirds|right)\s+(right|two-thirds)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(two-thirds|last)\s+(two-thirds|last)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(two-thirds|last|right)\s+(two-thirds|last|right)\s+(two-thirds|last|right)\s*$/);

  // three-quarters
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(three-quarters|right)\s+(right|three-quarters)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(three-quarters|last)\s+(three-quarters|last)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(three-quarters|last|right)\s+(three-quarters|last|right)\s+(three-quarters|last|right)\s*$/);

  Discourse.Markdown.whiteListTag('hr', 'class', 'clear');
})();