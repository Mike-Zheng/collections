define("formLimit",["utility"],function(require,exports,module){var e=require("utility");module.exports={obj:"datalimit",keyup:function(t,o){t.keyup(function(){String(o)===String(/\D/g)&&$(this).val(e.CtoH($(this).val())),"phone"===$(this).attr("id")&&"09"===$("#areaCode").val()||$(this).val($(this).val().replace(o,""))})},check:function(){var t=$("["+module.exports.obj+"]");$.each(t,function(t,o){var e=$(o).attr(module.exports.obj),i=module.exports[e];module.exports.keyup($(o),i)})}},module.exports.zero=/^0|\D/g,module.exports.num=/\D/g,module.exports.numEn=/[^a-zA-Z0-9]/g,module.exports.point=/[^0-9.]/g,module.exports._num=/^0|[^0-9~]/g,module.exports.zero_point=/^0|[^0-9.]/g});