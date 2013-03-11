Ext.define('Обработки.КонструкторСпецификаций.СтрокаВозвратныхОтходов',
	{
	extend: 'Ext.window.Window',
	height: 325,width: 406,
	iconCls: 'bogus',
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
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:148px;top:81px;width:250px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:148px;top:153px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:148px;top:105px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сумма',
			style: 'position:absolute;left:148px;top:177px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерОперацииМаршрута',
			style: 'position:absolute;left:148px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаРегл',
			style: 'position:absolute;left:309px;top:177px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидНорматива',
			style: 'position:absolute;left:148px;top:57px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УказаниеНорматива',
			style: 'position:absolute;left:148px;top:201px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Формула',
			style: 'position:absolute;left:148px;top:225px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СписаниеКомплектующей',
			style: 'position:absolute;left:148px;top:249px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвойствоДляСписания',
			style: 'position:absolute;left:148px;top:273px;width:250px;height:19px;',
		},
	]
});