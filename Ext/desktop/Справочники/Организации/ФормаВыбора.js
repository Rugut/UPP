Ext.define('Справочники.Организации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 503,
	iconCls: 'bogus',
	title: 'Организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:487px;height:280px;',
			height: 280,width: 487,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Префикс',
				},
				{
					text:'Наименование',
				},
				{
					text:'ИНН',
				},
				{
					text:'КПП',
				},
				{
					text:'РегистрационныйНомерПФР',
				},
				{
					text:'ГоловнаяОрганизация',
				},
				{
					text:'НаименованиеПолное',
				},
				{
					text:'КодПоОКПО',
				},
				{
					text:'КодПоОКАТО',
				},
				{
					text:'КодИМНС',
				},
				{
					text:'ЮрФизЛицо',
				},
				{
					text:'РайонныйКоэффициент',
				},
				{
					text:'РайонныйКоэффициентРФ',
				},
				{
					text:'ТерриториальныеУсловияПФР',
				},
				{
					text:'ОсновнойБанковскийСчет',
				},
				{
					text:'ВидСтавокЕСНиПФР',
				},
				{
					text:'НаименованиеПлательщикаПриПеречисленииНалогов',
				},
				{
					text:'ОтражатьВРегламентированномУчете',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:503px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});