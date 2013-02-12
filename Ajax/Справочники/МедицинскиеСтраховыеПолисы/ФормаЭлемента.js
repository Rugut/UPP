
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
				var hashes = decodeURI(window.location.href.slice(window.location.href.indexOf('?') + 1)).split('&');
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
	var Код = Параметры["Код"];
	if (Код == undefined)
	{
		Код=СлучайноеЦелоеЧисло(100);
	}
	$.ajaxSetup({ scriptCharset: "utf-8", contentType: "application/json; charset=utf-8" });
	$.ajax({
		url: 'http://127.0.0.1:1337/Справочники/МедицинскиеСтраховыеПолисы/НайтиПоКоду/'+Код+'?callback=?',
		dataType: 'json',
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
	Код.value	= Ссылка.Код;
	Наименование.value	= Ссылка.Наименование;
	Физлицо.value	= Ссылка.Физлицо;
	ВидСтрахования.value	= Ссылка.ВидСтрахования;
	ДатаВыдачиПолиса.value	= Ссылка.ДатаВыдачиПолиса;
	ДатаОкончанияПолиса.value	= Ссылка.ДатаОкончанияПолиса;
	ПрограммаСтрахования.value	= Ссылка.ПрограммаСтрахования;
	Родственник.value	= Ссылка.Родственник;
	Пол.value	= Ссылка.Пол;
	ДатаРождения.value	= Ссылка.ДатаРождения;
	УдостоверениеЛичностиПредставление.value	= Ссылка.УдостоверениеЛичностиПредставление;
	АдресФактический.value	= Ссылка.АдресФактический;
	ТелефонДомашний.value	= Ссылка.ТелефонДомашний;
	Комментарий.value	= Ссылка.Комментарий;
	Организация.value	= Ссылка.Организация;
	var Стоп = new Date();
	Время.innerText = (Стоп - Старт);
	Вызов = false;
}