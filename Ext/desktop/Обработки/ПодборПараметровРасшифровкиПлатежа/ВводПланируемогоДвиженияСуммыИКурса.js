Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ВводПланируемогоДвиженияСуммыИКурса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:302px;height:228px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод параметров расшифровки платежа',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'ДоговорКонтрагента',
			style: 'position:absolute;left:8px;top:8px;width:286px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументПланируемогоДвиженияДС',
			width: 283,
			height: 19,
			style: 'position:absolute;left:8px;top:151px;width:283px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Планируемое поступление денежных средств',
			style: 'position:absolute;left:8px;top:109px;width:286px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только включенные в платежный календарь',
			style: 'position:absolute;left:8px;top:176px;width:256px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:244px;height:73px;',
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
			text: 'Сумма счета:',
			style: 'position:absolute;left:0px;top:54px;width:126px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПлатежа',
			style: 'position:absolute;left:126px;top:54px;width:118px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:126px;top:30px;width:118px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:126px;top:6px;width:118px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сумма счета:',
			style: 'position:absolute;left:0px;top:6px;width:126px;height:19px;',
		},
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
			xtype: 'label',
			name: 'Надпись6',
			text: 'Сумма взаиморасчетов:',
			style: 'position:absolute;left:0px;top:54px;width:126px;height:19px;',
		},
					]
				},
				{
					title:'ПоСуммеПлатежа',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПлатежа1',
			style: 'position:absolute;left:126px;top:6px;width:118px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетов1',
			style: 'position:absolute;left:126px;top:30px;width:118px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетов1',
			style: 'position:absolute;left:126px;top:54px;width:118px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Ручной выбор',
			style: 'position:absolute;left:8px;top:130px;width:93px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Автоподбор',
			style: 'position:absolute;left:136px;top:130px;width:98px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'По сумме платежа',
			style: 'position:absolute;left:8px;top:151px;width:118px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По сумме взаиморасчетов',
			style: 'position:absolute;left:136px;top:151px;width:158px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:203px;width:302px;height:25px;',
			dock: 'bottom',
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