Ext.define('Обработки.ПакетныйВводДокументов.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	height: 474,width: 699,
	iconCls: 'bogus',
	title: 'Обработка  Пакетный ввод документов',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:684px;height:433px;',
			height: 433,width: 684,
			items:
			[
				{
					title:'СтраницаПараметры',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаАктуальности',
			style: 'position:absolute;left:545px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОрганизация',
			style: 'position:absolute;left:113px;top:110px;width:294px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаСклад',
			style: 'position:absolute;left:113px;top:86px;width:294px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТипЦен',
			style: 'position:absolute;left:113px;top:199px;width:294px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПодразделение',
			style: 'position:absolute;left:113px;top:272px;width:294px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОтветственный',
			style: 'position:absolute;left:504px;top:272px;width:171px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПроцентСкидкиНаценки',
			style: 'position:absolute;left:113px;top:223px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКоличествоЭкземпляров',
			style: 'position:absolute;left:431px;top:350px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаСтруктурнаяЕдиница',
			style: 'position:absolute;left:113px;top:134px;width:294px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПоступления',
			style: 'position:absolute;left:113px;top:296px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаРасчетаОстатков',
			style: 'position:absolute;left:545px;top:30px;width:85px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаТаблица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:377px;',
			height: 377,width: 670,
			columns:
			[
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
					text:'Характеристика',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'Единица',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'ТоварТара',
				},
				{
					text:'Остаток',
				},
				{
					text:'Нераспределено',
				},
				{
					text:'Заказ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'АвтоЗаполнение',
				},
				{
					text:'КнопкаЗаполнить',
				},
				{
					text:'Действие1',
				},
				{
					text:'УдалитьКолонку',
				},
				{
					text:'ДобавитьКолонку',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:449px;width:698px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});