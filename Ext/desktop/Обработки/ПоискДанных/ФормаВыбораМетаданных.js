Ext.define('Обработки.ПоискДанных.ФормаВыбораМетаданных',
	{
	extend: 'Ext.window.Window',
	height: 410,width: 365,
	iconCls: 'bogus',
	title: 'Выбор объектов поиска',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:385px;width:365px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'КнопкаЗакрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:349px;height:369px;',
			height: 369,width: 349,
			columns:
			[
				{
					text:'Колонка1',
				},
				{
					text:'КолонкаКартинки',
				},
				{
					text:'Колонка2',
				},
			]
		},
	]
});