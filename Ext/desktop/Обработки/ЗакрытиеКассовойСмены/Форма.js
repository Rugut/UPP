Ext.require(['Данные.Обработки.ЗакрытиеКассовойСмены'], function () 
{
	Ext.define('Обработки.ЗакрытиеКассовойСмены.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:314px;height:108px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Закрытие кассовой смены',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКассаККМ',
			text: 'Касса ККМ:',
			style: 'position:absolute;left:8px;top:32px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'КассаККМ',
			width: 232,
			height: 19,
			style: 'position:absolute;left:74px;top:32px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'Дата:',
			style: 'position:absolute;left:8px;top:8px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Организация',
			width: 80,
			height: 19,
			style: 'position:absolute;left:74px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:83px;width:314px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть смену',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:8px;top:56px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Склад',
			width: 232,
			height: 19,
			style: 'position:absolute;left:74px;top:56px;width:232px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сверка итогов по картам',
			style: 'position:absolute;left:159px;top:8px;width:147px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});