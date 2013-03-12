Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Характеристики номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:219px;',
			height: 219,width: 400,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'Владелец',
					width:'120',
				},
				{
					text:'Наименование',
					width:'320',
				},
				{
					text:'ОКП',
					width:'128',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
			]
		},
	]
});