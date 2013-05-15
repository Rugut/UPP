Ext.define('Обработки.ПодборПрочихЗатрат.ФормаВводаСуммы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:241px;height:87px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Подбор прочих затрат',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьСуммаУпр',
			text: 'Сумма (упр.):',
			style: 'position:absolute;left:8px;top:8px;width:80px;height:21px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаУпр',
			style: 'position:absolute;left:88px;top:8px;width:88px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаУпр',
			text: '',
			style: 'position:absolute;left:181px;top:8px;width:52px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаРегл',
			text: 'Сумма (регл.):',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:21px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаРегл',
			style: 'position:absolute;left:88px;top:33px;width:88px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаРегл',
			text: '',
			style: 'position:absolute;left:180px;top:33px;width:52px;height:21px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:62px;width:241px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});