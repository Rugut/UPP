Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ВводСуммыИКурса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:260px;height:138px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод суммы и курса',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:113px;width:260px;height:25px;',
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
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'ДоговорКонтрагента',
			style: 'position:absolute;left:8px;top:8px;width:244px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:244px;height:73px;',
			height: 73,width: 244,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ПоСуммеВзаиморасчетов',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Курс счета:',
			style: 'position:absolute;left:0px;top:30px;width:126px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Сумма платежа:',
			style: 'position:absolute;left:0px;top:54px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежа',
			style: 'position:absolute;left:126px;top:54px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:126px;top:30px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:126px;top:6px;width:118px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сумма счета:',
			style: 'position:absolute;left:0px;top:6px;width:126px;height:19px;',
		},
					]
				},
				{
					title:'ПоСуммеПлатежа',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Курс взаиморасчетов:',
			style: 'position:absolute;left:0px;top:30px;width:126px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Сумма платежа:',
			style: 'position:absolute;left:0px;top:6px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежа1',
			style: 'position:absolute;left:126px;top:6px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов1',
			style: 'position:absolute;left:126px;top:30px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов1',
			style: 'position:absolute;left:126px;top:54px;width:118px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Сумма взаиморасчетов:',
			style: 'position:absolute;left:0px;top:54px;width:126px;height:19px;',
		},
					]
				},
			]
		},
	]
});