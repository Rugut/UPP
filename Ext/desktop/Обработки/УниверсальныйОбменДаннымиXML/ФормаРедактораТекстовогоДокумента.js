Ext.define('Обработки.УниверсальныйОбменДаннымиXML.ФормаРедактораТекстовогоДокумента',
	{
	extend: 'Ext.window.Window',
	height: 575,width: 638,
	iconCls: 'bogus',
	title: 'Модуль отладки обработчиков и алгоритмов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'КнопкаСкопироватьВБуферОбмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:622px;height:534px;',
			height: 534,width: 622,
			items:
			[
				{
					title:'Страница_ПолеОбработчикиСобытий',
				},
				{
					title:'Страница_ПолеОшибкиВыгрузки',
				},
				{
					title:'Страница1',
				},
			]
		},
	]
});