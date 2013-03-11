Ext.define('Документы.ТребованиеНакладная.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 461,width: 652,
	iconCls: 'bogus',
	title: 'Требование-накладная',
	
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
			style: 'position:absolute;left:96px;top:409px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:436px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Печать',
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
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:636px;height:299px;',
			height: 299,width: 636,
			items:
			[
				{
					title:'Материалы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:243px;',
			height: 243,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
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
					text:'ЕдиницаМест',
				},
				{
					text:'КоэффициентМест',
				},
				{
					text:'КоличествоМест',
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
					text:'ОтпущеноСверхЛимита',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНУ',
				},
				{
					text:'ХарактерЗатрат',
				},
				{
					text:'ВидАналитики',
				},
				{
					text:'ВидАналитикиДоп',
				},
				{
					text:'ВидСубконто1',
				},
				{
					text:'ВидСубконто2',
				},
				{
					text:'ВидСубконто3',
				},
				{
					text:'ВидСубконтоНУ1',
				},
				{
					text:'ВидСубконтоНУ2',
				},
				{
					text:'ВидСубконтоНУ3',
				},
				{
					text:'Аналитика',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'Субконто1',
				},
				{
					text:'Субконто2',
				},
				{
					text:'Субконто3',
				},
				{
					text:'СубконтоНУ1',
				},
				{
					text:'СубконтоНУ2',
				},
				{
					text:'СубконтоНУ3',
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
					text:'СтатьяЗатратНДС',
				},
				{
					text:'Заказы',
				},
				{
					text:'Заказ',
				},
				{
					text:'ВнутреннийЗаказ',
				},
				{
					text:'ЗаказРезерв',
				},
				{
					text:'НомерГТД',
				},
				{
					text:'СтранаПроисхождения',
				},
				{
					text:'Счет',
				},
				{
					text:'СчетНУ',
				},
				{
					text:'ОтражениеВУСН',
				},
				{
					text:'Качество',
				},
				{
					text:'Проект',
				},
				{
					text:'Склад',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПоЗаданиюНаПроизводство',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДобавитьИзПоступления',
				},
				{
					text:'Подбор',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'ЗаполнитьПоПотребностям',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоЗаказуПокупателяПереработка',
				},
				{
					text:'ЗаполнитьПоВнутреннемуЗаказу',
				},
				{
					text:'ДействиеИзменить',
				},
			]
		},
					]
				},
				{
					title:'НДС',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НДСвСтоимостиТоваров',
			style: 'position:absolute;left:100px;top:6px;width:211px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатратСписанияНДС',
			style: 'position:absolute;left:100px;top:79px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:416px;top:78px;width:212px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:104px;width:304px;height:100px;',
			height: 100,width: 304,
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДС',
			style: 'position:absolute;left:94px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС1',
			style: 'position:absolute;left:94px;top:24px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС2',
			style: 'position:absolute;left:94px;top:48px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС3',
			style: 'position:absolute;left:94px;top:71px;width:210px;height:19px;',
		},
					]
				},
				{
					title:'Надпись',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:324px;top:104px;width:304px;height:100px;',
			height: 100,width: 304,
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДСНУ',
			style: 'position:absolute;left:93px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ1',
			style: 'position:absolute;left:93px;top:24px;width:211px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ2',
			style: 'position:absolute;left:93px;top:48px;width:211px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ3',
			style: 'position:absolute;left:93px;top:71px;width:211px;height:19px;',
		},
					]
				},
				{
					title:'Надпись',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:91px;top:6px;width:537px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:91px;top:30px;width:537px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:91px;top:254px;width:537px;height:19px;',
		},
					]
				},
			]
		},
	]
});