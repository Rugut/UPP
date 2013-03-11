Ext.define('Документы.ПоступлениеТоваровУслуг.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 518,width: 783,
	iconCls: 'bogus',
	title: 'Отобрать заказы покупателей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:493px;width:781px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ДействиеДалее',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:41px;width:767px;height:167px;',
			height: 167,width: 767,
			items:
			[
				{
					title:'СтраницаНастройки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеДатаПоступления',
			style: 'position:absolute;left:258px;top:64px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПросроченоДнейОтгрузки',
			style: 'position:absolute;left:318px;top:64px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПросроченоДнейОплаты',
			style: 'position:absolute;left:318px;top:120px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеДатаОплаты',
			style: 'position:absolute;left:258px;top:120px;width:102px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаДополнительно',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:753px;height:114px;',
			height: 114,width: 753,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:281px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:188px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:276px;top:17px;width:19px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:227px;width:644px;height:25px;',
			items:
			[
				{
					text:'ДействиеВключитьВсе',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеВыключитьВсе',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеИнвертировать',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:250px;width:767px;height:234px;',
			height: 234,width: 767,
			columns:
			[
				{
					text:'НеЗаполнять',
				},
				{
					text:'Переносить',
				},
				{
					text:'Ссылка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'КонтактноеЛицоКонтрагента',
				},
				{
					text:'СуммаДокумента',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'ЗаказыОстаток',
				},
				{
					text:'ЗаказыКоличество',
				},
				{
					text:'ТараКоличество',
				},
				{
					text:'РасчетыОстаток',
				},
				{
					text:'РазмещенияКоличество',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'ТипСкидкиНаценки',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'ДатаПоступления',
				},
				{
					text:'Организация',
				},
				{
					text:'Склад',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Проведен',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:493px;width:783px;height:25px;',
			items:
			[
				{
					text:'ДействиеНазад',
				},
				{
					text:'ДействиеПеренести',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:92px;width:767px;height:391px;',
			height: 391,width: 767,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:753px;height:24px;',
			items:
			[
				{
					text:'ДействиеСнятьФлажки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Изменить',
				},
				{
					text:'ДействиеИнвертировать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ДействиеУстановитьФлажки',
				},
				{
					text:'Действие1',
				},
				{
					text:'Обнулить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:753px;height:332px;',
			height: 332,width: 753,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'ЗаказПоставщику',
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
					text:'Склад',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ДобавитьВДокумент',
				},
				{
					text:'Запланировано',
				},
				{
					text:'ОсталосьПолучить',
				},
				{
					text:'Заполнено',
				},
				{
					text:'РазмещенноеКоличество',
				},
				{
					text:'Размещение',
				},
				{
					text:'ФлагЗаполнено',
				},
			]
		},
					]
				},
				{
					title:'Тара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:753px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Изменить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ДействиеСнятьФлажки',
				},
				{
					text:'ДействиеИнвертировать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеУстановитьФлажки',
				},
				{
					text:'Обнулить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:753px;height:334px;',
			height: 334,width: 753,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'ЗаказПоставщику',
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
					text:'Склад',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ДобавитьВДокумент',
				},
				{
					text:'Запланировано',
				},
				{
					text:'ОсталосьПолучить',
				},
				{
					text:'Заполнено',
				},
				{
					text:'РазмещенноеКоличество',
				},
				{
					text:'Размещение',
				},
				{
					text:'ФлагЗаполнено',
				},
			]
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:753px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеСнятьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Изменить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Обнулить',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'ДействиеИнвертировать',
				},
				{
					text:'ДействиеУстановитьФлажки',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:753px;height:332px;',
			height: 332,width: 753,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'ЗаказПоставщику',
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
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ДобавитьВДокумент',
				},
				{
					text:'Запланировано1',
				},
				{
					text:'ОсталосьПолучить',
				},
				{
					text:'Заполнено',
				},
				{
					text:'ФлагЗаполнено',
				},
			]
		},
					]
				},
				{
					title:'Оборудование',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:753px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеУстановитьФлажки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Обнулить',
				},
				{
					text:'Изменить',
				},
				{
					text:'ДействиеСнятьФлажки',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеИнвертировать',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:753px;height:332px;',
			height: 332,width: 753,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'ЗаказПоставщику',
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
					text:'Склад',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ДобавитьВДокумент',
				},
				{
					text:'Запланировано',
				},
				{
					text:'ОсталосьПолучить',
				},
				{
					text:'Заполнено',
				},
				{
					text:'ФлагЗаполнено',
				},
			]
		},
					]
				},
			]
		},
	]
});