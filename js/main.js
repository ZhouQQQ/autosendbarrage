$(function(){
  $('#geneBtn').click(function(){
    $('#inputAttr').data('bootstrapValidator').validate();
    if ($('#inputAttr').data('bootstrapValidator').isValid()) {
      var _content = $('#content').val();
      var _intervalTimes = $('#intervalTime').val();
      var _times = $('#times').val();      
      var geneCode = template('code', {content:_content,interval:_intervalTimes,times:_times});
      $('#geneCode').html(geneCode);
      $('textarea').select();
      document.execCommand('copy');
      $('textarea').popover({
        content : '复制成功',
        placement : 'right'
      }).popover('show');
      setTimeout(function() {
        $('textarea').popover('hide');
      }, 2000)
    } else {
      $('#geneCode').html("");
    }
  });
})
