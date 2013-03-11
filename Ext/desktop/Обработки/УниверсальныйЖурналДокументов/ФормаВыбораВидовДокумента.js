Ext.define('Обработки.УниверсальныйЖурналДокументов.ФормаВыбораВидовДокумента',
	{
	extend: 'Ext.window.Window',
	height: 290,width: 292,
	iconCls: 'bogus',
	title: 'Выбор объектов: Документ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:276px;height:25px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:265px;width:292px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});