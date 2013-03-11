Ext.define('Обработки.НаборПерсонала.Форма',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 925,
	iconCls: 'bogus',
	title: 'Набор персонала',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:878px;height:25px;',
			items:
			[
				{
					text:'КадровоеПланирование',
				},
				{
					text:'Действие',
				},
				{
					text:'КадровоеПланирование',
				},
				{
					text:'ОтчетПоЗаявкамКандидатов',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ИсточникиИнформации',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Вакансии',
				},
				{
					text:'Вакансии',
				},
				{
					text:'ОтчетПоЗаявкамКандидатов',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПодменюОтчеты',
				},
				{
					text:'ЭффективностьЗатратНаПривлечение',
				},
				{
					text:'Состояния',
				},
				{
					text:'Состояния',
				},
				{
					text:'ИсточникиИнформации',
				},
				{
					text:'ПодменюОтчеты',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:703px;top:33px;width:214px;height:539px;',
			height: 539,width: 214,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:689px;height:539px;',
			height: 539,width: 689,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:689px;height:159px;',
			height: 159,width: 689,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:31px;width:275px;height:128px;',
			height: 128,width: 275,
			columns:
			[
				{
					text:'Тема',
				},
				{
					text:'Отправитель',
				},
				{
					text:'Ссылка',
				},
				{
					text:'НеРассмотрено',
				},
				{
					text:'РассмотретьПосле',
				},
				{
					text:'СтатусПисьма',
				},
				{
					text:'ЗначениеГруппировки',
				},
				{
					text:'ОтправительАдресЭлектроннойПочты',
				},
				{
					text:'ДатаПолучения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:609px;height:24px;',
			items:
			[
				{
					text:'Отправитель',
				},
				{
					text:'ПринятьКакЗаявку',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОткрытьПисьмо',
				},
				{
					text:'ДатаПолучения',
				},
				{
					text:'НежелательнаяПочта',
				},
				{
					text:'ПринятьПочту',
				},
				{
					text:'ПодменюПисьма',
				},
				{
					text:'ПривязатьКСуществующейЗаявке',
				},
				{
					text:'ПодменюУпорядочить',
				},
				{
					text:'ПометитьКакПрочтенное',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:609px;top:0px;width:80px;height:24px;',
			items:
			[
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:191px;width:689px;height:348px;',
			height: 348,width: 689,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:53px;width:229px;height:295px;',
			height: 295,width: 229,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'Ссылка',
				},
				{
					text:'ЗначениеГруппировки',
				},
				{
					text:'Количество',
				},
				{
					text:'Наименование1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:25px;width:596px;height:24px;',
			items:
			[
				{
					text:'Должность',
				},
				{
					text:'НазначитьВакансию',
				},
				{
					text:'ДатаСобытия',
				},
				{
					text:'ДобавитьЗаявку',
				},
				{
					text:'УказатьИсточникИнформации',
				},
				{
					text:'ИзменитьСостояние',
				},
				{
					text:'ОбновитьЗаявки',
				},
				{
					text:'ОткрытьЗаявку',
				},
				{
					text:'Состояние',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ГруппаЗаявок',
				},
				{
					text:'ДобавитьФайлы',
				},
				{
					text:'Наименование',
				},
				{
					text:'Вакансия',
				},
				{
					text:'НаписатьКандидату',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаявки',
				},
				{
					text:'ИзменитьГруппуЗаявки',
				},
				{
					text:'Ответственный',
				},
				{
					text:'ПодменюУпорядочить',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:588px;top:25px;width:101px;height:24px;',
			items:
			[
				{
					text:'ВсеЗаявки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:235px;top:268px;width:146px;height:80px;',
			height: 80,width: 146,
			columns:
			[
				{
					text:'ЕстьВложения',
				},
				{
					text:'ОтправительПредставление',
				},
				{
					text:'КомуПредставление',
				},
				{
					text:'ДатаОтправления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:264px;top:212px;width:342px;height:24px;',
			items:
			[
				{
					text:'СкопироватьПисьмо',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'УстановитьНеРассмотрено',
				},
				{
					text:'УдалитьПисьмо',
				},
				{
					text:'УстановитьРассмотрено',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Ответить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'НовоеПисьмо',
				},
				{
					text:'ОтветитьВсем',
				},
				{
					text:'Переслать',
				},
				{
					text:'ИзменитьПисьмо',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:235px;top:68px;width:454px;height:96px;',
			height: 96,width: 454,
			items:
			[
				{
					title:'Страница1',
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
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:878px;top:0px;width:47px;height:25px;',
			items:
			[
				{
					text:'ПереключениеСправкиФормы',
				},
			]
		},
	]
});