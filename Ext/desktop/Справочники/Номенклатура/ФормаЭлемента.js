Ext.define('Справочники.Номенклатура.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 475,width: 616,
	iconCls: 'bogus',
	title: 'Элемент Номенклатура',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:553px;top:56px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:226px;top:56px;width:297px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:139px;top:196px;width:469px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Артикул',
			style: 'position:absolute;left:226px;top:79px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:424px;width:518px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Изображение',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОткрытьПрайсЛист',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Файлы',
				},
				{
					text:'ШтрихкодыТранспортныхУпаковок',
				},
				{
					text:'Настройка',
				},
				{
					text:'Файлы',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Комплектующие',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Этикетка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Ценник',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:226px;top:33px;width:382px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазоваяЕдиницаИзмерения',
			style: 'position:absolute;left:226px;top:102px;width:73px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:450px;width:616px;height:25px;',
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'ОсновныеДействияФормыДалее',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:218px;width:600px;height:201px;',
			height: 201,width: 600,
			items:
			[
				{
					title:'ПоУмолчанию',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерГТД',
			style: 'position:absolute;left:427px;top:30px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтранаПроисхождения',
			style: 'position:absolute;left:131px;top:30px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:131px;top:6px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:131px;top:74px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппаЗатрат',
			style: 'position:absolute;left:427px;top:74px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеИспользования',
			style: 'position:absolute;left:131px;top:151px;width:461px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаправлениеВыпуска',
			style: 'position:absolute;left:131px;top:98px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаправлениеСписанияВыпущеннойПродукции',
			style: 'position:absolute;left:427px;top:98px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Импортер',
			style: 'position:absolute;left:427px;top:6px;width:165px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительные',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:156px;top:154px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВесовойКоэффициентВхождения',
			style: 'position:absolute;left:512px;top:154px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидВоспроизводства',
			style: 'position:absolute;left:156px;top:6px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйМенеджерЗаПокупки',
			style: 'position:absolute;left:156px;top:30px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойПоставщик',
			style: 'position:absolute;left:156px;top:55px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦеноваяГруппа',
			style: 'position:absolute;left:156px;top:80px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОКП',
			style: 'position:absolute;left:156px;top:104px;width:436px;height:19px;',
		},
					]
				},
				{
					title:'НастройкаУчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокПрисвоенияСерийногоНомера',
			style: 'position:absolute;left:218px;top:109px;width:374px;height:19px;',
		},
					]
				},
				{
					title:'Единицы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'ЕдиницаПоКлассификатору',
				},
				{
					text:'Наименование',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'Вес',
				},
				{
					text:'Объем',
				},
				{
					text:'ПорогОкругления',
				},
				{
					text:'ПредупреждатьОНецелыхМестах',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие12',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'Характеристики',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Серии',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Проекты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Период',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Проект',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Свойство',
				},
				{
					text:'Значение',
				},
			]
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Принадлежность',
				},
				{
					text:'Категория',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
				{
					title:'Комплектующие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'Комплектующая',
				},
				{
					text:'ХарактеристикаКомплектующей',
				},
				{
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
				{
					title:'Штрихкоды',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ТипШтрихкода',
				},
				{
					text:'Штрихкод',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'Качество',
				},
				{
					text:'Владелец',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'НовыйШтрихкод',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель4',
				},
			]
		},
					]
				},
				{
					title:'КодыВесовогоТовара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'Качество',
				},
				{
					text:'Номенклатура',
				},
			]
		},
					]
				},
				{
					title:'МестаХранения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:145px;',
			height: 145,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Склад',
				},
				{
					text:'Приоритет',
				},
				{
					text:'МестоХранения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Спецификации',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СоздатьВерсию',
				},
				{
					text:'ВерсииСпецификации',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'КодВерсии',
				},
				{
					text:'Наименование',
				},
				{
					text:'Активная',
				},
				{
					text:'Состояние',
				},
				{
					text:'ДатаУтверждения',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Комментарий',
				},
			]
		},
					]
				},
				{
					title:'ПлановаяСебестоимость',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:102px;width:586px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Рассчитать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:125px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'Сумма',
				},
				{
					text:'Валюта',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Регистратор',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Валюта',
				},
				{
					text:'Цена',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'НоменклатураПоставщика',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:125px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'Записать',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'Цена',
				},
				{
					text:'Валюта',
				},
				{
					text:'ЕдиницаИзмерения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументУстановкаЦенКонтрагента',
			style: 'position:absolute;left:207px;top:82px;width:385px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:101px;width:586px;height:24px;',
			items:
			[
				{
					text:'ПеречитатьТекущиеЦены',
				},
				{
					text:'ЗаписатьЦены',
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
			style: 'position:absolute;left:6px;top:30px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'КодНоменклатурыКонтрагента',
				},
				{
					text:'АртикулНоменклатурыКонтрагента',
				},
				{
					text:'НаименованиеНоменклатурыКонтрагента',
				},
				{
					text:'ШтрихКодНоменклатурыКонтрагента',
				},
				{
					text:'ЕдиницаНоменклатурыКонтрагента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ЦеныНоменклатуры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:586px;height:96px;',
			height: 96,width: 586,
			columns:
			[
				{
					text:'Записать',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'Цена',
				},
				{
					text:'СпособРасчетаЦены',
				},
				{
					text:'Валюта',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:29px;width:586px;height:24px;',
			items:
			[
				{
					text:'РассчитатьПоБазовымЦенам',
				},
				{
					text:'ПеречитатьТекущиеЦены',
				},
				{
					text:'РассчитатьЦеныКомплекта',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ЗаписатьЦены',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументУстановкаЦен',
			style: 'position:absolute;left:142px;top:6px;width:450px;height:19px;',
		},
					]
				},
				{
					title:'ДополнительноеОписаниеНоменклатуры',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеДополнительноеОписаниеНоменклатуры',
			style: 'position:absolute;left:6px;top:34px;width:586px;height:141px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Производитель',
			style: 'position:absolute;left:94px;top:6px;width:194px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидНоменклатуры',
			style: 'position:absolute;left:451px;top:79px;width:157px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:131px;height:131px;',
			height: 131,width: 131,
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
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаХраненияОстатков',
			style: 'position:absolute;left:226px;top:125px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаДляОтчетов',
			style: 'position:absolute;left:226px;top:148px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияМест',
			style: 'position:absolute;left:226px;top:172px;width:73px;height:19px;',
		},
	]
});