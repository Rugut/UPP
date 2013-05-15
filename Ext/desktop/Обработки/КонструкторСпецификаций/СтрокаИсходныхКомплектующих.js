Ext.define('Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующих',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:365px;height:373px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Строка исходных комплектующих',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:81px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номенклатура',
			style: 'position:absolute;left:148px;top:81px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:129px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:148px;top:129px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:291px;top:129px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидНорматива',
			text: 'Вид норматива:',
			style: 'position:absolute;left:8px;top:57px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидНорматива',
			style: 'position:absolute;left:148px;top:57px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:8px;top:153px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:148px;top:153px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХарактеристикаНоменклатуры',
			text: 'Характеристика:',
			style: 'position:absolute;left:8px;top:105px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:148px;top:105px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМинимальнаяПартия',
			text: 'Мин. партия:',
			style: 'position:absolute;left:8px;top:177px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МинимальнаяПартия',
			style: 'position:absolute;left:148px;top:177px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерОперацииМаршрута',
			text: '№ операции:',
			style: 'position:absolute;left:8px;top:33px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерОперацииМаршрута',
			style: 'position:absolute;left:148px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпецификация',
			text: 'Спецификация:',
			style: 'position:absolute;left:8px;top:225px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Спецификация',
			style: 'position:absolute;left:148px;top:225px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиница',
			text: 'Единица:',
			style: 'position:absolute;left:240px;top:129px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Позиция:',
			style: 'position:absolute;left:240px;top:33px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПозицияПоСпецификации',
			style: 'position:absolute;left:290px;top:33px;width:67px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидВоспроизводства',
			text: 'Вид воспроизводства:',
			style: 'position:absolute;left:8px;top:201px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидВоспроизводства',
			style: 'position:absolute;left:148px;top:201px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУказаниеНорматива',
			text: 'Указание норматива:',
			style: 'position:absolute;left:8px;top:249px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УказаниеНорматива',
			style: 'position:absolute;left:148px;top:249px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФормула',
			text: 'Формула:',
			style: 'position:absolute;left:8px;top:273px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Формула',
			style: 'position:absolute;left:148px;top:273px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСписаниеКомплектующей',
			text: 'Списание комплектующей:',
			style: 'position:absolute;left:8px;top:297px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СписаниеКомплектующей',
			style: 'position:absolute;left:148px;top:297px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСвойствоДляСписания',
			text: 'Свойство:',
			style: 'position:absolute;left:8px;top:321px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СвойствоДляСписания',
			style: 'position:absolute;left:148px;top:321px;width:209px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:365px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:348px;width:365px;height:25px;',
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