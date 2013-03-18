Ext.define('Справочники.ТранспортныеУпаковки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:133px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Транспортные упаковки',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:101px;top:57px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Владелец:',
			style: 'position:absolute;left:8px;top:81px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:101px;top:81px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициент',
			text: 'Коэффициент:',
			style: 'position:absolute;left:140px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Коэффициент',
			style: 'position:absolute;left:220px;top:33px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерУпаковки',
			text: 'Номер упаковки:',
			style: 'position:absolute;left:8px;top:33px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерУпаковки',
			style: 'position:absolute;left:101px;top:33px;width:35px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:108px;width:400px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});