Ext.define('Документы.ПланированиеОбучения.ФормаРаспределенияОбучения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:458px;height:88px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помощник равномерного распределения обучения по периоду ',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КурсОбученияДляРаспределения',
			style: 'position:absolute;left:151px;top:8px;width:299px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Курс обучения:',
			style: 'position:absolute;left:8px;top:8px;width:141px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Количество человек:',
			style: 'position:absolute;left:8px;top:36px;width:141px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РаспределяемоеКоличество',
			style: 'position:absolute;left:151px;top:36px;width:31px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Период с:',
			style: 'position:absolute;left:186px;top:36px;width:50px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаС',
			style: 'position:absolute;left:241px;top:36px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'по:',
			style: 'position:absolute;left:329px;top:36px;width:15px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаПо',
			style: 'position:absolute;left:346px;top:36px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:431px;top:36px;width:19px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:63px;width:458px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Распределить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});