Ext.define('Обработки.ПодборНоменклатуры.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 453,width: 464,
	iconCls: 'bogus',
	title: 'Обработка  Подбор',
	
	items:
	[
		{
			xtype: 'button',
			name: 'КнопкаОбновить',
			text: 'Обновить',
			style: 'position:absolute;left:376px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:215px;width:447px;height:161px;',
			height: 161,width: 447,
			items:
			[
				{
					title:'ПоЗапросу',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:1px;width:447px;height:160px;',
			height: 160,width: 447,
			columns:
			[
				{
					text:'Пиктограмма',
				},
				{
					text:'Код',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Артикул',
				},
				{
					text:'КоличествоОстатокОрганизации',
				},
				{
					text:'КоличествоСвободныйОстаток',
				},
				{
					text:'КоличествоЗаказанное',
				},
				{
					text:'Цена',
				},
				{
					text:'Лимит',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Валюта',
				},
				{
					text:'НаименованиеНоменклатурыКонтрагента',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'Склад',
				},
				{
					text:'Качество',
				},
				{
					text:'АртикулНоменклатурыКонтрагента',
				},
				{
					text:'ПредставлениеНоменклатура',
				},
				{
					text:'ПредставлениеХарактеристикаНоменклатуры',
				},
				{
					text:'ПредставлениеСерияНоменклатуры',
				},
				{
					text:'ПредставлениеЕдиницаИзмерения',
				},
				{
					text:'ПредставлениеВалюта',
				},
				{
					text:'ПредставлениеСклад',
				},
				{
					text:'ПредставлениеКачество',
				},
				{
					text:'Запланировано',
				},
				{
					text:'Заказано',
				},
				{
					text:'Резерв',
				},
				{
					text:'ОсталосьОбеспечить',
				},
				{
					text:'Заказ',
				},
				{
					text:'ЗаказчикКонтрагент',
				},
				{
					text:'СостояниеЗаказа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:73px;top:75px;width:301px;height:25px;',
			items:
			[
				{
					text:'ПересчитатьОстаткиВЕдиницуЦены',
				},
			]
		},
					]
				},
				{
					title:'ПоСправочнику',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:447px;height:55px;',
			height: 55,width: 447,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Наименование',
				},
				{
					text:'ОсновнаяЕдиницаИзмерения',
				},
				{
					text:'СвободныйОстаток',
				},
				{
					text:'ОстатокОрганизации',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:1px;top:66px;width:445px;height:95px;',
			height: 95,width: 445,
			items:
			[
				{
					title:'ОстаткиТОваров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:108px;top:0px;width:337px;height:69px;',
			height: 69,width: 337,
			columns:
			[
				{
					text:'ХарактеристикаСклад',
				},
				{
					text:'МестоХранения',
				},
				{
					text:'Общий',
				},
				{
					text:'Свободный',
				},
				{
					text:'СвободныйОжидаемый',
				},
				{
					text:'ВРезерве',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:101px;height:94px;',
			height: 94,width: 101,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Ссылка',
				},
				{
					text:'БазовыйТипЦен',
				},
				{
					text:'Рассчитывается',
				},
				{
					text:'ОкруглятьВБольшуюСторону',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
				{
					text:'Префикс',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаЦены',
			style: 'position:absolute;left:344px;top:73px;width:101px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПоСпецификациям',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:447px;height:161px;',
			height: 161,width: 447,
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
					text:'ВидСпецификации',
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
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасчетов',
			style: 'position:absolute;left:336px;top:414px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПоиска',
			style: 'position:absolute;left:193px;top:57px;width:262px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:91px;top:79px;width:364px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОстаткиТоваровНаСкладах',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:448px;height:102px;',
			height: 102,width: 448,
			items:
			[
				{
					title:'БезИзображения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:106px;top:0px;width:342px;height:100px;',
			height: 100,width: 342,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:291px;top:19px;width:157px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ПереместитьВверх',
				},
				{
					text:'ОтменитьВсе',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Обновить',
				},
				{
					text:'ПереместитьВниз',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:100px;',
			height: 100,width: 100,
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
				{
					title:'ДеревоСпецификаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:448px;height:102px;',
			height: 102,width: 448,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:79px;width:84px;height:24px;',
			items:
			[
				{
					text:'Изображение',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:70px;top:32px;width:385px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'кнСправка',
			text: '',
			style: 'position:absolute;left:355px;top:8px;width:18px;height:19px;',
		},
	]
});