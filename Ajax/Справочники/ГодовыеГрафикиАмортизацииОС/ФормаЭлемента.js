
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
		url: 'http://127.0.0.1:1337/Catalogs/GodovyeGrafikiAmortizaciiOS?callback=?',
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
	Код.value	= Ссылка.Код;
	Наименование.value	= Ссылка.Наименование;
	Комментарий.value	= Ссылка.Комментарий;
	Коэффициент1.value	= Ссылка.Коэффициент1;
	Коэффициент2.value	= Ссылка.Коэффициент2;
	Коэффициент3.value	= Ссылка.Коэффициент3;
	Коэффициент4.value	= Ссылка.Коэффициент4;
	Коэффициент5.value	= Ссылка.Коэффициент5;
	Коэффициент6.value	= Ссылка.Коэффициент6;
	Коэффициент7.value	= Ссылка.Коэффициент7;
	Коэффициент8.value	= Ссылка.Коэффициент8;
	Коэффициент9.value	= Ссылка.Коэффициент9;
	Коэффициент10.value	= Ссылка.Коэффициент10;
	Коэффициент11.value	= Ссылка.Коэффициент11;
	Коэффициент12.value	= Ссылка.Коэффициент12;
	var Стоп = new Date();
	Время.innerText = (Стоп - Старт);
	Вызов = false;
}