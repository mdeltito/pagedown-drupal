(function () {
    $(function() {
      var converter = new Markdown.Converter();
      $('.wmd-content').each(function() {
        var pagedown_content = $(this).html();
        var html = converter.makeHtml(pagedown_content);
        $(this).after(html);
      });
    });
})();
