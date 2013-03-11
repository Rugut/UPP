Ext.define('Обработки.КонсольОтчетов.ФормаВыбораОтчета',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 400,
	iconCls: 'bogus',
	title: 'Выбор отчета для расшифровки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:7px;width:384px;height:252px;',
			height: 252,width: 384,
			columns:
			[
				{
					text:'Отчет',
				},
			]
		},
	]
});