function take_screenshot()
{
 html2canvas(document.getElementById("bg"), {
  onrendered: function(canvas)
  {
    var img = canvas.toDataURL()
    $.post("save_screenshot.php", {data: img}, function (file){
	window.location.href =  "save_screenshot.php?file="+ file
    });
  }
 });
}
