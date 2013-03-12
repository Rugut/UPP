Ext.define('Документы.КомплектацияНоменклатуры.ФормаВыбораВыпускаемойНоменклатуры',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:174px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите выпускаемую номенклатуру',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:648px;height:133px;',
			height: 133,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
					width:'168',
				},
				{
					text:'Характеристика номенклатуры',
					width:'172',
				},
				{
					text:'Количество',
					width:'67',
				},
				{
					text:'Ед. изм.',
					width:'51',
				},
				{
					text:'Спецификация',
					width:'101',
				},
			]
		},
	]
});