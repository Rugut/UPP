Ext.define('Обработки.КонсольОтчетов.ФормаВыбораОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор отчета для расшифровки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
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
					width:'100',
				},
			]
		},
	]
});