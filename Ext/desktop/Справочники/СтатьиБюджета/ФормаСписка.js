Ext.define('Справочники.СтатьиБюджета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи бюджета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:462px;height:259px;',
			height: 259,width: 462,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'81',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Статья оборотов',
					width:'120',
				},
				{
					text:'Знак',
					width:'48',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'211',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
			]
		},
	]
});