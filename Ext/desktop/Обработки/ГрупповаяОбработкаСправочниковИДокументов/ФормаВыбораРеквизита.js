Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.ФормаВыбораРеквизита',
	{
	extend: 'Ext.window.Window',
	height: 457,width: 355,
	iconCls: 'bogus',
	title: 'Выбор реквизита',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:432px;width:355px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:12px;width:339px;height:412px;',
			height: 412,width: 339,
			columns:
			[
				{
					text:'Реквизиит',
				},
			]
		},
	]
});