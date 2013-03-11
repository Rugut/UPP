Ext.define('Документы.СдельныйНаряд.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 577,width: 692,
	iconCls: 'bogus',
	title: 'Сдельный наряд на выполненные работы',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:525px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:525px;width:260px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ГрафикиРаботыПоВидамВремени',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:552px;width:692px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:189px;width:676px;height:331px;',
			height: 331,width: 676,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Действие13',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие16',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие17',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:662px;height:267px;',
			height: 267,width: 662,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТехнологическаяОперация',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'Расценка',
				},
				{
					text:'Валюта',
				},
				{
					text:'Количество',
				},
				{
					text:'СуммаЗаРаботуВВалюте',
				},
				{
					text:'Сумма',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'ОтражениеВУСН',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'Аналитика',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'Продукция',
				},
				{
					text:'ХарактеристикаПродукции',
				},
				{
					text:'СерияПродукции',
				},
				{
					text:'ОбъектСтроительства',
				},
				{
					text:'СпособСтроительства',
				},
				{
					text:'СпособРаспределенияЗатратНаВыпуск',
				},
				{
					text:'Проект',
				},
				{
					text:'ПодразделениеОрганизации',
				},
			]
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:140px;width:668px;height:24px;',
			items:
			[
				{
					text:'Действие16',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие10',
				},
				{
					text:'ДействиеЗаполнитьВсех',
				},
				{
					text:'Действие15',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие13',
				},
				{
					text:'РассчитатьСКомментарием',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Действие9',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ПодменюРассчитать',
				},
				{
					text:'Подбор',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие11',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:165px;width:668px;height:137px;',
			height: 137,width: 668,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'КТУ',
				},
				{
					text:'Тариф',
				},
				{
					text:'ОтработаноЧасов',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'СуммаКНачислению',
				},
				{
					text:'СуммаКНачислениюРегл',
				},
				{
					text:'День1',
				},
				{
					text:'День2',
				},
				{
					text:'День3',
				},
				{
					text:'День4',
				},
				{
					text:'День5',
				},
				{
					text:'День6',
				},
				{
					text:'День7',
				},
				{
					text:'День8',
				},
				{
					text:'День9',
				},
				{
					text:'День10',
				},
				{
					text:'День11',
				},
				{
					text:'День12',
				},
				{
					text:'День13',
				},
				{
					text:'День14',
				},
				{
					text:'День15',
				},
				{
					text:'День16',
				},
				{
					text:'День17',
				},
				{
					text:'День18',
				},
				{
					text:'День19',
				},
				{
					text:'День20',
				},
				{
					text:'День21',
				},
				{
					text:'День22',
				},
				{
					text:'День23',
				},
				{
					text:'День24',
				},
				{
					text:'День25',
				},
				{
					text:'День26',
				},
				{
					text:'День27',
				},
				{
					text:'День28',
				},
				{
					text:'День29',
				},
				{
					text:'День30',
				},
				{
					text:'День31',
				},
				{
					text:'ВидВремени1',
				},
				{
					text:'Дней1',
				},
				{
					text:'Часов1',
				},
				{
					text:'ВидВремени2',
				},
				{
					text:'Дней2',
				},
				{
					text:'Часов2',
				},
				{
					text:'ВидВремени3',
				},
				{
					text:'Дней3',
				},
				{
					text:'Часов3',
				},
				{
					text:'ВидВремени4',
				},
				{
					text:'Дней4',
				},
				{
					text:'Часов4',
				},
				{
					text:'ВидВремени5',
				},
				{
					text:'Дней5',
				},
				{
					text:'Часов5',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:35px;width:668px;height:105px;',
			height: 105,width: 668,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:106px;width:676px;height:78px;',
			height: 78,width: 676,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:228px;top:51px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:228px;top:27px;width:110px;height:19px;',
		},
					]
				},
			]
		},
	]
});