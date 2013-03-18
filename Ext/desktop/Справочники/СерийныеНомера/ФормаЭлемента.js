Ext.define('Справочники.СерийныеНомера.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:422px;height:110px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Серийные номера',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Серийный номер:',
			style: 'position:absolute;left:8px;top:58px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:100px;top:58px;width:314px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:100px;top:33px;width:314px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:422px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:85px;width:422px;height:25px;',
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