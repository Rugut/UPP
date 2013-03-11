Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 260,width: 416,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Владелец',
				},
				{
					text:'Наименование',
				},
				{
					text:'ОКП',
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