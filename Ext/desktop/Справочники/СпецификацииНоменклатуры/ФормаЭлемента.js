Ext.define('Справочники.СпецификацииНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 444,width: 652,
	iconCls: 'bogus',
	title: 'Спецификации номенклатуры',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:468px;top:58px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:58px;width:330px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'УстановитьОсновнуюСпецификацию',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВерсииСпецификации',
				},
				{
					text:'СоздатьВерсию',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ПоСпецификации',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ЗаполнитьПоФактическимЗатратам',
				},
				{
					text:'ПодменюВидаСпецификации',
				},
				{
					text:'Подменю2',
				},
				{
					text:'УстановитьОсновнуюСпецификациюНаДату',
				},
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:419px;width:652px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:550px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВерсии',
			style: 'position:absolute;left:604px;top:58px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:392px;width:550px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:636px;height:285px;',
			height: 285,width: 636,
			items:
			[
				{
					title:'Полная',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:95px;width:636px;height:169px;',
			height: 169,width: 636,
			items:
			[
				{
					title:'ИсходныеКомплектующие',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Подбор',
				},
				{
					text:'ОсновноеСырье',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоСпецификации',
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
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:113px;',
			height: 113,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НомерОперацииМаршрута',
				},
				{
					text:'ПозицияПоСпецификации',
				},
				{
					text:'ВидНорматива',
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
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'МинимальнаяПартия',
				},
				{
					text:'Кратность',
				},
				{
					text:'ВидВоспроизводства',
				},
				{
					text:'Спецификация',
				},
				{
					text:'УказаниеНорматива',
				},
				{
					text:'Формула',
				},
				{
					text:'СписаниеКомплектующей',
				},
				{
					text:'Свойство',
				},
				{
					text:'ТочкаМаршрута',
				},
			]
		},
					]
				},
				{
					title:'ВозвратныеОтходы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:113px;',
			height: 113,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НомерОперацииМаршрута',
				},
				{
					text:'ВидНорматива',
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
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Сумма',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'УказаниеНорматива',
				},
				{
					text:'Формула',
				},
				{
					text:'СписаниеКомплектующей',
				},
				{
					text:'Свойство',
				},
				{
					text:'ТочкаМаршрута',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоСпецификации',
				},
			]
		},
					]
				},
				{
					title:'ПараметрыВыпускаПродукции',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:113px;',
			height: 113,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидПараметра',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьИзШаблона',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоСпецификации',
				},
			]
		},
					]
				},
				{
					title:'Документация',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:113px;',
			height: 113,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Обозначение',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПоСпецификации',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
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
			name: 'Состояние',
			style: 'position:absolute;left:108px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтверждения',
			style: 'position:absolute;left:108px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:108px;top:54px;width:198px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДоступа',
			style: 'position:absolute;left:108px;top:78px;width:198px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:89px;',
			height: 89,width: 636,
			items:
			[
				{
					title:'Сборочная',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:86px;top:22px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:416px;top:22px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:86px;top:46px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:226px;top:46px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерОперацииМаршрута',
			style: 'position:absolute;left:86px;top:70px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТочкаМаршрута',
			style: 'position:absolute;left:416px;top:46px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Кратность',
			style: 'position:absolute;left:226px;top:70px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МинимальнаяПартия',
			style: 'position:absolute;left:416px;top:70px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Полная',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:636px;height:24px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:636px;height:48px;',
			height: 48,width: 636,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НомерОперацииМаршрута',
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
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'МинимальнаяПартия',
				},
				{
					text:'Кратность',
				},
				{
					text:'ДоляСтоимости',
				},
				{
					text:'ТочкаМаршрута',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Узел',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:285px;',
			height: 285,width: 636,
			items:
			[
				{
					title:'ИсходныеКомплектующие',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:25px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоСпецификации',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:622px;height:228px;',
			height: 228,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ПозицияПоСпецификации',
				},
				{
					text:'ВидНорматива',
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
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'МинимальнаяПартияИзделий',
				},
				{
					text:'ВидВоспроизводства',
				},
				{
					text:'Спецификация',
				},
				{
					text:'УказаниеНорматива',
				},
				{
					text:'Формула',
				},
				{
					text:'СписаниеКомплектующей',
				},
				{
					text:'Свойство',
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
			name: 'СостояниеУзел',
			style: 'position:absolute;left:108px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтвержденияУзел',
			style: 'position:absolute;left:108px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйУзел',
			style: 'position:absolute;left:108px;top:54px;width:198px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДоступаУзел',
			style: 'position:absolute;left:108px;top:78px;width:198px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
	]
});