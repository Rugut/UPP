Ext.define('Документы.ПланПроизводстваПоСменам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 670,
	iconCls: 'bogus',
	title: 'План производства по сменам',
	
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
			style: 'position:absolute;left:94px;top:368px;width:568px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель5',
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
					text:'ВыполнитьПланирование',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:670px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:654px;height:303px;',
			height: 303,width: 654,
			items:
			[
				{
					title:'ПланыПроизводства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сценарий',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Проект',
				},
				{
					text:'ДатаНач',
				},
				{
					text:'ДатаКон',
				},
				{
					text:'ДатаЗапуска',
				},
				{
					text:'ДатаВыпуска',
				},
				{
					text:'ВариантРаспределенияВыпусков',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Заказы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Заказ',
				},
				{
					text:'Проект',
				},
				{
					text:'ДатаЗапуска',
				},
				{
					text:'ДатаВыпуска',
				},
				{
					text:'ВариантРаспределенияВыпусков',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'ПараметрыВыпуска',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
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
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'ДатаЗапуска',
				},
				{
					text:'ДатаВыпуска',
				},
				{
					text:'Спецификация',
				},
				{
					text:'Заказ',
				},
				{
					text:'Проект',
				},
				{
					text:'ВариантРаспределенияВыпусков',
				},
			]
		},
					]
				},
				{
					title:'ИсходныеДанныеДляПланирования',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
				{
					text:'КнопкаРазвернутьДерево',
				},
				{
					text:'КнопкаСвернуть',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'КнопкаПолучитьДанные',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'КнопкаСвернутьДерево',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:200px;',
			height: 200,width: 640,
			columns:
			[
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'ВидВоспроизводства',
				},
				{
					text:'Количество',
				},
				{
					text:'Спецификация',
				},
				{
					text:'Заказ',
				},
				{
					text:'Проект',
				},
				{
					text:'ДатаЗапуска',
				},
				{
					text:'ДатаВыпуска',
				},
				{
					text:'ВариантРаспределенияВыпусков',
				},
				{
					text:'ВРамкахПлана',
				},
				{
					text:'ПоДаннымПланов',
				},
				{
					text:'КонечнаяПродукция',
				},
				{
					text:'КоличествоПоСпецификации',
				},
				{
					text:'КлючСтроки',
				},
				{
					text:'НомерОперацииМаршрута',
				},
			]
		},
					]
				},
				{
					title:'ЗанятостьРабочихЦентров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Период',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'РабочийЦентр',
				},
				{
					text:'Смена',
				},
				{
					text:'ТехОперация',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Спецификация',
				},
				{
					text:'КонечнаяПродукция',
				},
				{
					text:'Заказ',
				},
				{
					text:'Проект',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ПотребностиПроизводства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Период',
				},
				{
					text:'Смена',
				},
				{
					text:'РабочийЦентр',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Спецификация',
				},
				{
					text:'КонечнаяПродукция',
				},
				{
					text:'КоличествоИзвне',
				},
				{
					text:'КоличествоВнутри',
				},
				{
					text:'Заказ',
				},
				{
					text:'Проект',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
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
			style: 'position:absolute;left:426px;top:234px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:96px;top:234px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:99px;width:640px;height:108px;',
			height: 108,width: 640,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Склад',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МоментЗапасов',
			style: 'position:absolute;left:211px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачальнаяГраница',
			style: 'position:absolute;left:211px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:75px;width:640px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:96px;top:258px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});