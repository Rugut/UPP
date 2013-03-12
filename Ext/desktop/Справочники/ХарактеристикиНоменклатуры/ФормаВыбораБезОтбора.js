Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаВыбораБезОтбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:488px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор характеристики номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:225px;width:472px;height:172px;',
			height: 172,width: 472,
			columns:
			[
				{
					text:'Свойство',
					width:'221',
				},
				{
					text:'Значение',
					width:'132',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:472px;height:172px;',
			height: 172,width: 472,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Характеристика',
					width:'246',
				},
				{
					text:'ОКП',
					width:'86',
				},
				{
					text:'Номенклатура',
					width:'198',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:488px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗначенияСвойствТекущейХарактеристикиНоменклатуры',
			text: 'Значения свойств текущей характеристики номенклатуры',
			style: 'position:absolute;left:8px;top:209px;width:472px;height:15px;',
		},
	]
});