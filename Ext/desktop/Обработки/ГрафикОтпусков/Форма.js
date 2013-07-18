Ext.require(['Данные.Обработки.ГрафикОтпусков'], function () 
{
	Ext.define('Обработки.ГрафикОтпусков.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'График отпусков',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:777px;top:33px;width:215px;height:539px;',
			height: 539,width: 215,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:33px;width:764px;height:539px;',
			height: 539,width: 764,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:107px;top:3px;width:322px;height:19px;',
			height: 19,width: 322,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По центрам ответственности',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:0px;top:2px;width:83px;height:15px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Подразделение',
			width: 234,
			height: 19,
			style: 'position:absolute;left:88px;top:0px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'По структуре юридических лиц',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация',
			width: 245,
			height: 19,
			style: 'position:absolute;left:77px;top:0px;width:245px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВыборГода',
			width: 48,
			height: 19,
			style: 'position:absolute;left:20px;top:3px;width:48px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗа',
			text: 'За',
			style: 'position:absolute;left:1px;top:3px;width:14px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'год',
			style: 'position:absolute;left:72px;top:2px;width:22px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПолеВводаРежимПланированияОтпусков',
			width: 243,
			height: 19,
			style: 'position:absolute;left:521px;top:3px;width:243px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСгруппироватьПо',
			text: 'Сгруппировать',
			style: 'position:absolute;left:441px;top:3px;width:76px;height:19px;',
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
			style: 'position:absolute;left:926px;top:0px;width:74px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:926px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Запланировать отпуск',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Остатки отпусков',
				},
				'-',
				{
					text:'Дополнительные дни отпуска',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});