Ext.define('Документы.ВводНачальныхОстатковМатериаловВЭксплуатации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 384,width: 652,
	iconCls: 'bogus',
	title: 'Ввод начальных остатков материалов в эксплуатации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:332px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:150px;width:636px;height:152px;',
			height: 152,width: 636,
			columns:
			[
				{
					text:'НомерCтроки',
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'НазначениеИспользования',
				},
				{
					text:'ЕдиницаМест',
				},
				{
					text:'КоэффициентМест',
				},
				{
					text:'КоличествоМест',
				},
				{
					text:'ДатаПередачиВЭксплуатацию',
				},
				{
					text:'ДокументПартии',
				},
				{
					text:'Количество',
				},
				{
					text:'Единица',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'Стоимость',
				},
				{
					text:'ПогашеннаяСтоимость',
				},
				{
					text:'СтоимостьРегл',
				},
				{
					text:'ПогашеннаяСтоимостьРегл',
				},
				{
					text:'ВременнаяРазница',
				},
				{
					text:'ПогашеннаяВременнаяРазница',
				},
				{
					text:'ПостояннаяРазница',
				},
				{
					text:'ПогашеннаяПостояннаяРазница',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:126px;width:636px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подбор',
				},
				{
					text:'СоздатьДокументыПартии',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:307px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:359px;width:652px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:82px;width:220px;height:19px;',
		},
	]
});