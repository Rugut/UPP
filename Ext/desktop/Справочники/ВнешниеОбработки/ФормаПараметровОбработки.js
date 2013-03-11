Ext.define('Справочники.ВнешниеОбработки.ФормаПараметровОбработки',
	{
	extend: 'Ext.window.Window',
	height: 341,width: 400,
	iconCls: 'bogus',
	title: 'Дополнительные параметры обработки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:316px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
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
					text:'ИмяПараметра',
				},
				{
					text:'ЗначениеПараметра',
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