Ext.define('Справочники.ВнешниеОбработки.ФормаПараметровОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:341px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительные параметры обработки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:316px;width:400px;height:25px;',
			items:
			[
				'-',
				{
					text:'Принять',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:384px;height:276px;',
			height: 276,width: 384,
			columns:
			[
				{
					text:'Имя',
					width:'149',
				},
				{
					text:'Значение',
					width:'152',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:24px;',
			items:
			[
			]
		},
	]
});