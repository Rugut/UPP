Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполнения',
	{
	extend: 'Ext.window.Window',
	height: 413,width: 810,
	iconCls: 'bogus',
	title: 'Настройка автоматического заполнения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:810px;height:25px;',
			items:
			[
				{
					text:'кнВидДвижения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:810px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:794px;height:351px;',
			height: 351,width: 794,
			items:
			[
				{
					title:'Поступления',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:28px;width:782px;height:262px;',
			height: 262,width: 782,
			items:
			[
				{
					title:'ПоступленияДенежныхСредств',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентПоступления',
			style: 'position:absolute;left:176px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоступленияДатаНач',
			style: 'position:absolute;left:176px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоступленияДатаКон',
			style: 'position:absolute;left:276px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПоступления',
			text: '...',
			style: 'position:absolute;left:361px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентПланПоступления',
			style: 'position:absolute;left:570px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланПоступленияДатаНач',
			style: 'position:absolute;left:570px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланПоступленияДатаКон',
			style: 'position:absolute;left:670px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланПоступления',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовПоступления',
			style: 'position:absolute;left:176px;top:75px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПоступления',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовПланПоступления',
			style: 'position:absolute;left:570px;top:75px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПланПоступления',
			style: 'position:absolute;left:570px;top:99px;width:204px;height:19px;',
		},
					]
				},
				{
					title:'Продажи',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОбъемПродаж',
			style: 'position:absolute;left:176px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъемПродажДатаНач',
			style: 'position:absolute;left:176px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъемПродажДатаКон',
			style: 'position:absolute;left:276px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОбъемПродаж',
			text: '...',
			style: 'position:absolute;left:361px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланыПродажДатаНач',
			style: 'position:absolute;left:570px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланыПродажДатаКон',
			style: 'position:absolute;left:670px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланыПродаж',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовОбъемПродаж',
			style: 'position:absolute;left:176px;top:75px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектОбъемПродаж',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентПланыПродаж',
			style: 'position:absolute;left:570px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовПланыПродаж',
			style: 'position:absolute;left:570px;top:75px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПланыПродаж',
			style: 'position:absolute;left:570px;top:99px;width:204px;height:19px;',
		},
					]
				},
				{
					title:'ДебиторскаяЗадолженность',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовДебиторскаяЗадолженность',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектДебиторскаяЗадолженность',
			style: 'position:absolute;left:176px;top:123px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстаткаДебиторскаяЗадолженность',
			style: 'position:absolute;left:269px;top:27px;width:111px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентДебиторскаяЗадолженность',
			style: 'position:absolute;left:176px;top:76px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГраницаОтбораДебиторскаяЗадолженность',
			style: 'position:absolute;left:269px;top:51px;width:111px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовЗаказыПокупателей',
			style: 'position:absolute;left:571px;top:99px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектЗаказыПокупателей',
			style: 'position:absolute;left:571px;top:123px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентЗаказыПокупателей',
			style: 'position:absolute;left:571px;top:74px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГраницаОтбораЗаказыПокупателей',
			style: 'position:absolute;left:663px;top:51px;width:111px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказыПокупателейДатаНач',
			style: 'position:absolute;left:571px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказыПокупателейДатаКон',
			style: 'position:absolute;left:671px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаЗаказыПокупателей',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:768px;height:183px;',
			height: 183,width: 768,
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
			style: 'position:absolute;left:6px;top:6px;width:768px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
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
			name: 'ИзменитьРезультатРасчетаСуммыПроцентПоступления',
			style: 'position:absolute;left:199px;top:315px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Платежи',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:28px;width:782px;height:262px;',
			height: 262,width: 782,
			items:
			[
				{
					title:'ПлатежиПериод',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентПлатежи',
			style: 'position:absolute;left:176px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежиДатаНач',
			style: 'position:absolute;left:176px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежиДатаКон',
			style: 'position:absolute;left:276px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПлатежи',
			text: '...',
			style: 'position:absolute;left:361px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентПланПлатежи',
			style: 'position:absolute;left:570px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланПлатежиДатаНач',
			style: 'position:absolute;left:570px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланПлатежиДатаКон',
			style: 'position:absolute;left:671px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланПлатежи',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовПлатежи',
			style: 'position:absolute;left:176px;top:75px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПлатежи',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовПланПлатежи',
			style: 'position:absolute;left:570px;top:75px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПланПлатежи',
			style: 'position:absolute;left:570px;top:99px;width:204px;height:19px;',
		},
					]
				},
				{
					title:'Закупки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОбъемЗакупок',
			style: 'position:absolute;left:176px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъемЗакупокДатаНач',
			style: 'position:absolute;left:176px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъемЗакупокДатаКон',
			style: 'position:absolute;left:276px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОбъемЗакупок',
			text: '...',
			style: 'position:absolute;left:361px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланыЗакупокДатаНач',
			style: 'position:absolute;left:570px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланыЗакупокДатаКон',
			style: 'position:absolute;left:671px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланыЗакупок',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовОбъемЗакупок',
			style: 'position:absolute;left:176px;top:75px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектОбъемЗакупок',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентПланыЗакупок',
			style: 'position:absolute;left:570px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовПланыЗакупок',
			style: 'position:absolute;left:570px;top:75px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПланыЗакупок',
			style: 'position:absolute;left:570px;top:99px;width:204px;height:19px;',
		},
					]
				},
				{
					title:'КредиторскаяЗадолженность',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовКредиторскаяЗадолженность',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектКредиторскаяЗадолженность',
			style: 'position:absolute;left:176px;top:123px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстаткаКредиторскаяЗадолженность',
			style: 'position:absolute;left:269px;top:27px;width:111px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентКредиторскаяЗадолженность',
			style: 'position:absolute;left:176px;top:76px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГраницаОтбораКредиторскаяЗадолженность',
			style: 'position:absolute;left:269px;top:51px;width:111px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовЗаказыПоставщикам',
			style: 'position:absolute;left:571px;top:99px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектЗаказыПоставщикам',
			style: 'position:absolute;left:571px;top:123px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентЗаказыПоставщикам',
			style: 'position:absolute;left:571px;top:74px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГраницаОтбораЗаказыПоставщикам',
			style: 'position:absolute;left:663px;top:51px;width:111px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказыПоставщикамДатаНач',
			style: 'position:absolute;left:570px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказыПоставщикамДатаКон',
			style: 'position:absolute;left:671px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаЗаказыПоставщикам',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'ЗаработнаяПлата',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовЗаработнаяПлата',
			style: 'position:absolute;left:176px;top:75px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектЗаработнаяПлата',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстаткаЗаработнаяПлата',
			style: 'position:absolute;left:269px;top:27px;width:111px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентЗаработнаяПлата',
			style: 'position:absolute;left:176px;top:52px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:768px;height:183px;',
			height: 183,width: 768,
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
			style: 'position:absolute;left:6px;top:6px;width:768px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
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
			name: 'ИзменитьРезультатРасчетаСуммыПроцентПлатежи',
			style: 'position:absolute;left:199px;top:315px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});