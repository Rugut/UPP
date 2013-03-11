Ext.define('Справочники.СчетаБюджета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 776,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'СтатьяБаланса',
				},
				{
					text:'Знак',
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
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:25px;',
			items:
			[
				{
					text:'КоманднаяПанельПереместитьВниз1',
				},
				{
					text:'КоманднаяПанельПереместитьВверх1',
				},
			]
		},
	]
});