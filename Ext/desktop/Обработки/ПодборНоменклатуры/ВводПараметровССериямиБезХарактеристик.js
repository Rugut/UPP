Ext.require(['Данные.Обработки.ПодборНоменклатуры'], function () 
{
	Ext.define('Обработки.ПодборНоменклатуры.ВводПараметровССериямиБезХарактеристик',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:254px;height:182px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод количества и цены',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаИзмерения',
			width: 84,
			height: 19,
			style: 'position:absolute;left:162px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:254px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаСуммы',
			text: 'Надпись',
			style: 'position:absolute;left:167px;top:82px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма:',
			style: 'position:absolute;left:8px;top:82px;width:68px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:78px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Цена',
			style: 'position:absolute;left:78px;top:58px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФомулаСумма',
			text: 'Надпись',
			style: 'position:absolute;left:78px;top:82px;width:82px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦена',
			text: 'Цена:',
			style: 'position:absolute;left:8px;top:58px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Надпись',
			style: 'position:absolute;left:162px;top:58px;width:84px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:157px;width:254px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Получить вес',
				},
				'-',
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
			name: 'НадписьВесы',
			text: 'Весы:',
			style: 'position:absolute;left:8px;top:130px;width:68px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:78px;top:130px;width:168px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерия',
			text: 'Серия:',
			style: 'position:absolute;left:8px;top:106px;width:68px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-clear-trigger',
			name: 'Серия',
			width: 166,
			height: 19,
			style: 'position:absolute;left:78px;top:106px;width:166px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});