
      //验证输入框内容
      $('#inputAttr').bootstrapValidator({
        feedbackIcons : {/* 输入框不同状态，显示图片的样式 */
          valid : 'glyphicon glyphicon-ok',
          invalid : 'glyphicon glyphicon-remove',
          validating : 'glyphicon glyphicon-refresh'
        },

        fields : {
          content : {
            trigger : 'blur',
            validators : {
              notEmpty : {
                message : '内容不能为空',
              },

            }
          },
          intervalTime : {
            trigger : 'blur',
            validators : {
              notEmpty : {
                message : '发车间隔不能为空',
              },
              numeric : {
                message : '只能是数字',
              },

            }
          },
          times : {
            trigger : 'blur',
            validators : {
              notEmpty : {
                message : '发车次数不能为空',
              },
              numeric : {
                message : '只能是数字',
              },

            }
          },

        }
      });
    