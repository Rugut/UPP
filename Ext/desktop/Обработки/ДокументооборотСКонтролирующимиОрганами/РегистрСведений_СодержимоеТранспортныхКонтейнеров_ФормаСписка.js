Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СодержимоеТранспортныхКонтейнеров_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 696,
	iconCls: 'bogus',
	title: 'Список Содержимое транспортных контейнеров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:680px;height:259px;',
			height: 259,width: 680,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ТранспортноеСообщение',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'Тип',
				},
				{
					text:'Размер',
				},
				{
					text:'ТипФайлаОтчетностиПФР',
				},
				{
					text:'ЭЦПСтатусПроверки',
				},
				{
					text:'ЭЦПСертификат',
				},
				{
					text:'ЭЦПИмяПодписанногоФайла',
				},
				{
					text:'ЭЦПЭтоПодписьАбонента',
				},
				{
					text:'Идентификатор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:696px;height:25px;',
			items:
			[
				{
					text:'ВыгрузитьВФайл',
				},
				{
					text:'Разделитель4',
				},
			]
		},
	]
});