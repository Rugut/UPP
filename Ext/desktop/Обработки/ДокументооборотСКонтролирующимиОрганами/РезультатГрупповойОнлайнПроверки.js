Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РезультатГрупповойОнлайнПроверки',
	{
	extend: 'Ext.window.Window',
	height: 341,width: 759,
	iconCls: 'bogus',
	title: 'Результаты проверки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:316px;width:759px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:743px;height:300px;',
			height: 300,width: 743,
			columns:
			[
				{
					text:'Документ',
				},
				{
					text:'ТипФайлаОтчета',
				},
				{
					text:'РезультатПроверки',
				},
				{
					text:'Дополнительно',
				},
				{
					text:'ИмяФайлаОтчета',
				},
				{
					text:'РезультатПроверкиСтр',
				},
				{
					text:'ТипПротокола',
				},
				{
					text:'ИмяФайлаПротокола',
				},
				{
					text:'ИсходноеИмяФайлаПротокола',
				},
				{
					text:'ПолноеИмяФайлаВыгрузки',
				},
			]
		},
	]
});