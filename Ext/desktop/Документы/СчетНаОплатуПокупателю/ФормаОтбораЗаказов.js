Ext.define('Документы.СчетНаОплатуПокупателю.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 415,width: 660,
	iconCls: 'bogus',
	title: 'Отобрать заказы покупателей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:390px;width:658px;height:25px;',
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
			style: 'position:absolute;left:8px;top:41px;width:644px;height:167px;',
			height: 167,width: 644,
			items:
			[
				{
					title:'СтраницаНастройки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеДатаОтгрузки',
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
			style: 'position:absolute;left:6px;top:24px;width:630px;height:114px;',
			height: 114,width: 630,
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
					text:'ДействиеЗаполнить',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'ДействиеВключитьВсе',
				},
				{
					text:'ДействиеВыключитьВсе',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеИнвертировать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:250px;width:644px;height:131px;',
			height: 131,width: 644,
			columns:
			[
				{
					text:'НеЗаполнять',
				},
				{
					text:'Переносить',
				},
				{
					text:'ОтражатьВБухгалтерскомУчете',
				},
				{
					text:'ОтражатьВНалоговомУчете',
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
					text:'РезервыКоличество',
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
					text:'ДатаОтгрузки',
				},
				{
					text:'Организация',
				},
				{
					text:'СкладГруппа',
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
			style: 'position:absolute;left:0px;top:390px;width:660px;height:25px;',
			items:
			[
				{
					text:'ДействиеПеренести',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеНазад',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:92px;width:644px;height:280px;',
			height: 280,width: 644,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:630px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Обнулить',
				},
				{
					text:'ДействиеУстановитьФлажки',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'ДействиеИнвертировать',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеСнятьФлажки',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:630px;height:221px;',
			height: 221,width: 630,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'ЗаказПокупателя',
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
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ДобавитьВДокумент',
				},
				{
					text:'Запланировано',
				},
				{
					text:'ОсталосьОтгрузить',
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
					title:'Тара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:630px;height:24px;',
			items:
			[
				{
					text:'ДействиеУстановитьФлажки',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеСнятьФлажки',
				},
				{
					text:'Действие8',
				},
				{
					text:'ДействиеИнвертировать',
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
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Обнулить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:630px;height:221px;',
			height: 221,width: 630,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'ЗаказПокупателя',
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
					text:'Запланировано',
				},
				{
					text:'ОсталосьОтгрузить',
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
					title:'Услуги',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:630px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'ДействиеИнвертировать',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Изменить',
				},
				{
					text:'Обнулить',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'ДействиеУстановитьФлажки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'ДействиеСнятьФлажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:630px;height:221px;',
			height: 221,width: 630,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'ЗаказПокупателя',
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
					text:'ОсталосьОтгрузить',
				},
				{
					text:'Заполнено',
				},
			]
		},
					]
				},
			]
		},
	]
});