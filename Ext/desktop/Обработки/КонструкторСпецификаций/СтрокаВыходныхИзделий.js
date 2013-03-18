Ext.define('Обработки.КонструкторСпецификаций.СтрокаВыходныхИзделий',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:335px;height:181px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Строка выходных изделий',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:335px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:156px;width:335px;height:25px;',
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
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:57px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:95px;top:57px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:105px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:95px;top:105px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:238px;top:105px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоляСтоимости',
			text: 'Доля стоимости:',
			style: 'position:absolute;left:8px;top:129px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоляСтоимости',
			style: 'position:absolute;left:95px;top:129px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХарактеристикаНоменклатуры',
			text: 'Характеристика:',
			style: 'position:absolute;left:8px;top:81px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:95px;top:81px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерОперацииМаршрута',
			text: '№ операции:',
			style: 'position:absolute;left:8px;top:33px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерОперацииМаршрута',
			style: 'position:absolute;left:95px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиница',
			text: 'Единица:',
			style: 'position:absolute;left:185px;top:105px;width:53px;height:19px;text-align:left;',
		},
	]
});