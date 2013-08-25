Ext.require(['Данные.Обработки.ПодборПараметровРасшифровкиПлатежа'], function () 
{
	Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ВводСуммыИКурса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:260px;height:138px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ввод суммы и курса',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'ДоговорКонтрагента',
			style: 'position:absolute;left:8px;top:8px;width:244px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:32px;width:244px;height:73px;',
			height: 73,width: 244,
			tabBar:{hidden:true},
			items:
			[
				{
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
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПлатежа',
			style: 'position:absolute;left:126px;top:54px;width:118px;height:19px;',
			width: 118,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:126px;top:30px;width:118px;height:19px;',
			width: 118,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:126px;top:6px;width:118px;height:19px;',
			width: 118,
			height: 19,
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
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПлатежа1',
			style: 'position:absolute;left:126px;top:6px;width:118px;height:19px;',
			width: 118,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетов1',
			style: 'position:absolute;left:126px;top:30px;width:118px;height:19px;',
			width: 118,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетов1',
			style: 'position:absolute;left:126px;top:54px;width:118px;height:19px;',
			width: 118,
			height: 19,
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
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:113px;width:260px;height:25px;',
			width: 260,
			height: 25,
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
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});