Ext.define('Обработки.КонструкторСпецификаций.СтрокаВозвратныхОтходов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:406px;height:325px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Строка возвратных отходов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:300px;width:406px;height:25px;',
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
			style: 'position:absolute;left:8px;top:81px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:148px;top:81px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:129px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:148px;top:129px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:309px;top:129px;width:89px;height:19px;',
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
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:148px;top:153px;width:250px;height:19px;',
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
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:148px;top:105px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма:',
			style: 'position:absolute;left:8px;top:177px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сумма',
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
			name: 'НомерОперацииМаршрута',
			style: 'position:absolute;left:148px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиница',
			text: 'Единица:',
			style: 'position:absolute;left:239px;top:129px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаРегл',
			text: 'Сумма (регл):',
			style: 'position:absolute;left:238px;top:177px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаРегл',
			style: 'position:absolute;left:309px;top:177px;width:89px;height:19px;',
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
			name: 'ВидНорматива',
			style: 'position:absolute;left:148px;top:57px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУказаниеНорматива',
			text: 'Указание норматива:',
			style: 'position:absolute;left:8px;top:201px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УказаниеНорматива',
			style: 'position:absolute;left:148px;top:201px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФормула',
			text: 'Формула:',
			style: 'position:absolute;left:8px;top:225px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Формула',
			style: 'position:absolute;left:148px;top:225px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСписаниеКомплектующей',
			text: 'Списание комплектующей:',
			style: 'position:absolute;left:8px;top:249px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СписаниеКомплектующей',
			style: 'position:absolute;left:148px;top:249px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСвойствоДляСписания',
			text: 'Свойство:',
			style: 'position:absolute;left:8px;top:273px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвойствоДляСписания',
			style: 'position:absolute;left:148px;top:273px;width:250px;height:19px;',
		},
	]
});