$(function(){

  var wVal;
  var rVal = 0;
  var gVal = 0;
  var bVal = 0;
  var aVal = 1;
  var startX;
  var startY;
  var colorA;

  var canvas = document.getElementById('CaDraw');
  // var canvas2 = document.getElementById('AdDraw');
  var ctx = canvas.getContext('2d');

  // 線の太さ
  $('input[name=wRange]').on('input',function(){ wVal = $(this).val(); $("#wLine").text(wVal); });

  // RGBAの数値
  $('input[name=rRange]').on('input',function(){ rVal = $(this).val(); $("#rColor").text(rVal); });
  $('input[name=gRange]').on('input',function(){ gVal = $(this).val(); $("#gColor").text(gVal); });
  $('input[name=bRange]').on('input',function(){ bVal = $(this).val(); $("#bColor").text(bVal); });
  $('input[name=aRange]').on('input',function(){ aVal = $(this).val(); $("#aColor").text(aVal); });

  // 削除
  $('#clear').click(function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // 保存
  $('#save').click(function(e){
    var can = canvas.toDataURL("image/png");
    window.open(can,"save");
  });

  // 色の数値
  $('#colors img').click(function(e){
    if($(e.target).hasClass("blackImg")){ rVal = 0; $("#rColor").text(rVal); gVal = 0; $("#gColor").text(gVal); bVal = 0; $("#bColor").text(bVal); }
    if($(e.target).hasClass("whiteImg")){ rVal = 255; $("#rColor").text(rVal); gVal = 255; $("#gColor").text(gVal); bVal = 255; $("#bColor").text(bVal); }
    if($(e.target).hasClass("blueImg")){ rVal = 0; $("#rColor").text(rVal); gVal = 0; $("#gColor").text(gVal); bVal = 255; $("#bColor").text(bVal); }
    if($(e.target).hasClass("lightblueImg")){ rVal = 22; $("#rColor").text(rVal); gVal = 183; $("#gColor").text(gVal); bVal = 196; $("#bColor").text(bVal); }
    if($(e.target).hasClass("greenImg")){ rVal = 0; $("#rColor").text(rVal); gVal = 255; $("#gColor").text(gVal); bVal = 0; $("#bColor").text(bVal); }
    if($(e.target).hasClass("yellowgreenImg")){ rVal = 171; $("#rColor").text(rVal); gVal = 255; $("#gColor").text(gVal); bVal = 127; $("#bColor").text(bVal); }
    if($(e.target).hasClass("yellowImg")){ rVal = 255; $("#rColor").text(rVal); gVal = 255; $("#gColor").text(gVal); bVal = 0; $("#bColor").text(bVal); }
    if($(e.target).hasClass("orangeImg")){ rVal = 255; $("#rColor").text(rVal); gVal = 183; $("#gColor").text(gVal); bVal = 76; $("#bColor").text(bVal); }
    if($(e.target).hasClass("redImg")){ rVal = 255; $("#rColor").text(rVal); gVal = 0; $("#gColor").text(gVal); bVal = 0; $("#bColor").text(bVal); }
    if($(e.target).hasClass("grayImg")){ rVal = 140; $("#rColor").text(rVal); gVal = 140; $("#gColor").text(gVal); bVal = 140; $("#bColor").text(bVal); }
    if($(e.target).hasClass("purpleImg")){ rVal = 196; $("#rColor").text(rVal); gVal = 0; $("#gColor").text(gVal); bVal = 204; $("#bColor").text(bVal); }
    if($(e.target).hasClass("magentaImg")){ rVal = 229; $("#rColor").text(rVal); gVal = 0; $("#gColor").text(gVal); bVal = 134; $("#bColor").text(bVal); }
    if($(e.target).hasClass("babypinkImg")){ rVal = 239; $("#rColor").text(rVal); gVal = 193; $("#gColor").text(gVal); bVal = 196; $("#bColor").text(bVal); }
    if($(e.target).hasClass("brownImg")){ rVal = 124; $("#rColor").text(rVal); gVal = 96; $("#gColor").text(gVal); bVal = 53; $("#bColor").text(bVal); }
    $('input[name=rRange]').val(rVal);
    $('input[name=gRange]').val(gVal);
    $('input[name=bRange]').val(bVal);
  });

  // 鉛筆
  $("#tool .pencil").click(function(e){
    rVal = 0; $("#rColor").text(rVal);
    gVal = 0; $("#gColor").text(gVal);
    bVal = 0; $("#bColor").text(bVal);
    $('input[name=rRange]').val(rVal);
    $('input[name=gRange]').val(gVal);
    $('input[name=bRange]').val(bVal);
  });

  // 消しゴム
  $("#tool .eraser").click(function(e){
    rVal = 255; $("#rColor").text(rVal);
    gVal = 255; $("#gColor").text(gVal);
    bVal = 255; $("#bColor").text(bVal);
    $('input[name=rRange]').val(rVal);
    $('input[name=gRange]').val(gVal);
    $('input[name=bRange]').val(bVal);
  });

  // 線の描画
  function caDown(e){
    startX = e.pageX - $(this).offset().left;
    startY = e.pageY - $(this).offset().top;
    $("canvas").on("mousemove", caMove);
  }
  function caMove(e){
    var endX = e.pageX - $('canvas').offset().left;
    var endY = e.pageY - $('canvas').offset().top;
    ctx.beginPath();
    ctx.globalAlpha = aVal;
    ctx.strokeStyle = "rgb("+ rVal +", "+ gVal +", "+ bVal +")";
    ctx.lineWidth = wVal;
    ctx.lineCap = "round";
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    startX = endX;
    startY = endY;
  }
  function caUp(e){
    $("canvas").off("mousemove", caMove);
  }
  $("canvas").on("mousedown", caDown);
  $("canvas").on("mouseup", caUp);

  // 補助線
  /*
  $("canvas").mousemove(function(e){

  }).mouseout(function(e){

  });
  */

  $("canvas").on({mousedown: function(e){ return false; }});
  $("img").mouseup(function(e) { e.preventDefault(); });
  $("img").mousedown(function(e) { e.preventDefault(); });

});
