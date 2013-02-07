
var РедактируемаяЯчейка;
$(document).ready
(
	function ()
	{
		$.extend(
		{
			getUrlVars: function () 
			{
				var vars = [], hash;
				var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
				for (var i = 0; i < hashes.length; i++)
				{
					hash = hashes[i].split('=');
					vars.push(hash[0]);
					vars[hash[0]] = hash[1];
				}
				return vars;
			},
			getUrlVar: function (name) 
			{
				return $.getUrlVars()[name];
			}
		});
		$(".Форма").draggable({cursor: 'move', handle: 'div'});
		$(".Форма").resizable();

		$('.ТабличноеПоле td').click(function(){
			РедактируемаяЯчейка = this;
			var КоординатыУгла = $(this).position();
			$('#ТабличноеПоле_Редактор').css({
				'top': (КоординатыУгла.top + 1) + 'px',
				'left': (КоординатыУгла.left + 1) + 'px',
				'width': $(this).width(),
				'height': $(this).height()
			}).val($(this).html()).show().focus();
		});

		$('#ТабличноеПоле_Редактор').blur(function(){
			$(this).hide();
			$(РедактируемаяЯчейка).html($(this).val());
		});

	}
)
var Вызов = false;
function СлучайноеЦелоеЧисло(Максимум)
{
		return Math.round(Math.random() * Максимум);
}
function ЗагрузитьДанные()
{
	if (Вызов == true)
	{
		return;
	}
	Вызов = true;
	Время.innerText = СлучайноеЦелоеЧисло(1000000000000000);
	Старт = new Date();
	var Параметры = $.getUrlVars();
	var Код = Параметры["Code"];
	if (Код == undefined)
	{
		Код=СлучайноеЦелоеЧисло(100);
	}
	$.ajaxSetup({ scriptCharset: "utf-8", contentType: "application/json; charset=utf-8" });
	$.ajax({
		url: 'http://127.0.0.1:1337/Catalogs/OrganyPFR?callback=?',
		dataType: 'json',
		data: { Code: Код },
		jsonpCallback: 'ЗаполнитьПоля',
	});
}
function ОбновитьФорму()
{
	ЗагрузитьДанные();
	//setInterval(ЗагрузитьДанные, 100);
}
function ЗаполнитьПоля(Ссылка)
{
	var Стоп = new Date();
	Время.innerText = (Стоп - Старт);
	Вызов = false;
}