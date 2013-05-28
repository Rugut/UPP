Ext.define('Обработки.ПодборНоменклатуры.ВводПараметровБезСерийБезХарактеристик',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:254px;height:157px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод количества и цены',
	
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
			style: 'position:absolute;left:167px;top:81px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма:',
			style: 'position:absolute;left:8px;top:81px;width:68px;height:19px;',
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
			style: 'position:absolute;left:78px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФомулаСумма',
			text: 'Надпись',
			style: 'position:absolute;left:78px;top:81px;width:82px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦена',
			text: 'Цена:',
			style: 'position:absolute;left:8px;top:57px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Надпись',
			style: 'position:absolute;left:162px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:132px;width:254px;height:25px;',
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
			style: 'position:absolute;left:8px;top:105px;width:68px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:78px;top:105px;width:168px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});