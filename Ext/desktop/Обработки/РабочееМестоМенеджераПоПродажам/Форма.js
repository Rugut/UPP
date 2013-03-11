Ext.define('Обработки.РабочееМестоМенеджераПоПродажам.Форма',
	{
	extend: 'Ext.window.Window',
	height: 405,width: 780,
	iconCls: 'bogus',
	title: 'Рабочее место менеджера по продажам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'ОформитьСчетНаОплату',
				},
				{
					text:'Изображение',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ОформитьНовыйЗаказ',
				},
				{
					text:'ОформитьРеализацию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:80px;width:328px;height:181px;',
			height: 181,width: 328,
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
					text:'НаименованиеПолное',
				},
				{
					text:'ЕдиницаХраненияОстатков',
				},
				{
					text:'БазоваяЕдиницаИзмерения',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'ОтветственныйМенеджерЗаПокупки',
				},
				{
					text:'ОсновнойПоставщик',
				},
				{
					text:'СтранаПроисхождения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСпискаНоменклатуры',
			style: 'position:absolute;left:208px;top:56px;width:128px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:341px;top:56px;width:431px;height:341px;',
			height: 341,width: 431,
			items:
			[
				{
					title:'Дерево',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:417px;height:309px;',
			height: 309,width: 417,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
					]
				},
				{
					title:'ОсновныеПараметры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:167px;width:229px;height:148px;',
			height: 148,width: 229,
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:240px;top:167px;width:183px;height:148px;',
			height: 148,width: 183,
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
					]
				},
				{
					title:'ОстаткиЦены',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:417px;height:204px;',
			height: 204,width: 417,
			columns:
			[
				{
					text:'ХарактеристикаСклад',
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
				{
					text:'МестоХранения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:417px;height:27px;',
			items:
			[
				{
					text:'ОтображатьСклады',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаЦены',
			style: 'position:absolute;left:259px;top:296px;width:164px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:215px;width:417px;height:76px;',
			height: 76,width: 417,
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
			xtype: 'toolbar',
			style: 'position:absolute;left:66px;top:54px;width:157px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПереместитьВверх',
				},
				{
					text:'Действие',
				},
				{
					text:'Обновить',
				},
				{
					text:'ПереместитьВниз',
				},
				{
					text:'ОтменитьВсе',
				},
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
			style: 'position:absolute;left:6px;top:27px;width:417px;height:129px;',
			height: 129,width: 417,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ЗаказПокупателя',
				},
				{
					text:'ДатаОтгрузки',
				},
				{
					text:'ОстатокПоЗаказу',
				},
				{
					text:'ОстатокРезерваПоЗаказу',
				},
				{
					text:'Проведен',
				},
				{
					text:'ПометкаУдаления',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:182px;width:417px;height:133px;',
			height: 133,width: 417,
			columns:
			[
				{
					text:'ЗаказПокупателя',
				},
				{
					text:'ДатаОтгрузки',
				},
				{
					text:'ЗаказПоставщику',
				},
				{
					text:'ДатаПоступления',
				},
				{
					text:'Количество',
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
			name: 'Контрагент',
			style: 'position:absolute;left:412px;top:33px;width:360px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:266px;width:328px;height:131px;',
			height: 131,width: 328,
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
});