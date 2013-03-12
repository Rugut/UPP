Ext.define('Справочники.КатегорииОбъектов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:482px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Категории объектов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:300px;height:280px;',
			height: 280,width: 300,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'Код',
					width:'64',
				},
				{
					text:'Наименование категории',
					width:'214',
				},
				{
					text:'Назначение категории',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:482px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Назначение категории',
					width:'350',
				},
			]
		},
	]
});