$(function(){
  $('#geneBtn').click(function(){
    $('#inputAttr').data('bootstrapValidator').validate();
    if ($('#inputAttr').data('bootstrapValidator').isValid()) {
      var content = $('#content').val();
      var intervalTimes = $('#intervalTime')
          .val();
      var times = $('#times').val();
      var geneCode = "var setContent =\'"
          + content
          + "\'\;\nvar setIntervalTime ="
          + intervalTimes
          + "\;\nvar setTimes = "
          + times
          + ";\nvar realTime=1;\nvar realContent = setContent;\nvar realIntervalTime\nvar autoSendMsg;\nvar $sendButton = $('div[data-type=\"send\"],#sendmsg_but');\nsendMsg();\nfunction sendMsg(){\nif(!checkCanSend()){return;}\nrealContent=setContent+'-'+realTime++;\n $('textarea').val(realContent);\n$sendButton.click();\nvar roomMsgCd = getRoomMsgCd();\nif(roomMsgCd>setIntervalTime){\nrealIntervalTime=roomMsgCd;\n}else{\n realIntervalTime=setIntervalTime;\n}\nautoSendMsg = setTimeout(\"sendMsg()\",realIntervalTime*1000+300);\nrealContent=setContent;\nif(realTime>setTimes){\nclearTimeout(autoSendMsg);\n}\n}\nfunction getRoomMsgCd(){\nif(!isNaN(Number($sendButton.text()))){\nreturn Number($sendButton.text());\n}else{\ngetRoomMsgCd();\n}\n}\nfunction checkCanSend(){\nif($('div[data-type=\"send\"]').hasClass(\"b-btn-gray\")){\n$('a[data-type=\"login\"]\').click();\nreturn false;\n}else{\nreturn true;\n}\n}\n$('textarea').dblclick(function(){\nclearTimeout(autoSendMsg);\n});\n"

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


