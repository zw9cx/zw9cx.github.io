window.MathJax = {
  loader: {
    load: ['[tex]/mathtools']
  },

  tex: {
    packages: {
      '[+]': ['mathtools']
    },
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ],

    macros: {
      R: "{\\mathbb{R}}",
      C: "{\\mathbb{C}}",
      N: "{\\mathbb{N}}",
      Z: "{\\mathbb{Z}}",
      Q: "{\\mathbb{Q}}",

      supp: "{\\operatorname{supp}}"
    }
  }
};