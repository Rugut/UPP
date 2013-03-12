Ext.define('Справочники.СчетаБюджета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:776px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счета бюджета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:246px;top:33px;width:522px;height:259px;',
			height: 259,width: 522,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'81',
				},
				{
					text:'Наименование',
					width:'133',
				},
				{
					text:'Статья баланса',
					width:'265',
				},
				{
					text:'Знак',
					width:'42',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:232px;height:259px;',
			height: 259,width: 232,
			columns:
			[
				{
					text:'Наименование',
					width:'229',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:25px;',
			items:
			[
				{
					text:'Переместить вниз',
				},
				{
					text:'Переместить вверх',
				},
			]
		},
	]
});