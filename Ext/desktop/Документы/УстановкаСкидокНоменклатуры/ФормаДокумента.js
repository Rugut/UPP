Ext.define('Документы.УстановкаСкидокНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 638,
	iconCls: 'bogus',
	title: 'Установка скидок номенклатуры',
	
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
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:418px;width:536px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:394px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:25px;',
			items:
			[
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Подменю3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:638px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипСкидкиНаценки',
			style: 'position:absolute;left:406px;top:81px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентСкидкиНаценки',
			style: 'position:absolute;left:352px;top:182px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеУсловия',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:406px;top:33px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеСкидки',
			style: 'position:absolute;left:524px;top:182px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Условие',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:209px;width:622px;height:180px;',
			height: 180,width: 622,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:608px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеДобавитьПоГруппе',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'ДействиеЗаполнитьПоЦеновымГруппам',
				},
				{
					text:'ДействиеДобавитьПоЦеновымГруппам',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДобавитьПоПоставщику',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоПоставщику',
				},
				{
					text:'ДействиеЗаполнитьПоГруппе',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
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
					text:'Качество',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
				{
					text:'ОграничениеСкидкиНаценки',
				},
			]
		},
					]
				},
				{
					title:'ЦеновыеГруппы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ЦеноваяГруппа',
				},
				{
					text:'Качество',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
				{
					text:'ОграничениеСкидкиНаценки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:608px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'Бонусы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Качество',
				},
				{
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'СпецПредложение',
				},
				{
					text:'ХарактеристикаСпецПредложения',
				},
				{
					text:'КоличествоСпецПредложения',
				},
				{
					text:'ЕдиницаИзмеренияСпецПредложения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:608px;height:24px;',
			items:
			[
				{
					text:'КнопкаСоставБонусов',
				},
				{
					text:'КнопкаСоставНоменклатуры',
				},
			]
		},
					]
				},
				{
					title:'ПолучателиСкидки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Получатель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:608px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'ВремяДействияСкидки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщееВремяНачало',
			style: 'position:absolute;left:416px;top:135px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщееВремяОкончание',
			style: 'position:absolute;left:531px;top:135px;width:83px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:106px;',
			height: 106,width: 608,
			columns:
			[
				{
					text:'Выбран',
				},
				{
					text:'ДеньНедели',
				},
				{
					text:'ВремяНачала',
				},
				{
					text:'ВремяОкончания',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:608px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
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
			name: 'ДатаНачала',
			style: 'position:absolute;left:94px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:194px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСкидки',
			style: 'position:absolute;left:406px;top:57px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Качество',
			style: 'position:absolute;left:72px;top:182px;width:220px;height:19px;',
		},
	]
});