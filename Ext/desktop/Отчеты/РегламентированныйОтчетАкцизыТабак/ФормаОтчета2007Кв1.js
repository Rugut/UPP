Ext.define('Отчеты.РегламентированныйОтчетАкцизыТабак.ФормаОтчета2007Кв1',
	{
	extend: 'Ext.window.Window',
	height: 490,width: 670,
	iconCls: 'bogus',
	title: 'Декларация по акцизам на табачные изделия',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВыбратьВариантОчисткиОтчета',
				},
				{
					text:'Подготовить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Поиск',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Проверить',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПодготовитьИПодписать',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Отправить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Отправка',
				},
				{
					text:'РазделительОтправка',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Проверить',
				},
				{
					text:'ПодменюОчистить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:465px;width:670px;height:25px;',
			items:
			[
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Действие2',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:125px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'Раздел1',
				},
				{
					title:'Раздел2',
				},
				{
					title:'Раздел3',
					items:
					[
					]
				},
				{
					title:'Раздел4',
				},
				{
					title:'Приложение1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение1',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение1',
			text: 'Удалить',
			style: 'position:absolute;left:484px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение1',
			text: '',
			style: 'position:absolute;left:254px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение1',
			text: '',
			style: 'position:absolute;left:358px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение1',
			text: 'Перейти',
			style: 'position:absolute;left:570px;top:265px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Приложение2',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение2',
			text: 'Добавить',
			style: 'position:absolute;left:485px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение2',
			text: 'Удалить',
			style: 'position:absolute;left:570px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение2',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение2',
			text: 'Удалить',
			style: 'position:absolute;left:484px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение2',
			text: '',
			style: 'position:absolute;left:253px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение2',
			text: '',
			style: 'position:absolute;left:357px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение2',
			text: 'Перейти',
			style: 'position:absolute;left:570px;top:239px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Приложение3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение3',
			text: 'Добавить',
			style: 'position:absolute;left:485px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение3',
			text: 'Удалить',
			style: 'position:absolute;left:570px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение3',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение3',
			text: 'Удалить',
			style: 'position:absolute;left:484px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение3',
			text: '',
			style: 'position:absolute;left:253px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение3',
			text: '',
			style: 'position:absolute;left:357px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение3',
			text: 'Перейти',
			style: 'position:absolute;left:570px;top:239px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Приложение4',
					items:
					[
					]
				},
				{
					title:'Приложение5',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение5',
			text: 'Добавить',
			style: 'position:absolute;left:485px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение5',
			text: 'Удалить',
			style: 'position:absolute;left:570px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение5',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение5',
			text: 'Удалить',
			style: 'position:absolute;left:484px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение5',
			text: '',
			style: 'position:absolute;left:253px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение5',
			text: '',
			style: 'position:absolute;left:357px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение5',
			text: 'Перейти',
			style: 'position:absolute;left:570px;top:239px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Приложение6',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение6',
			text: 'Добавить',
			style: 'position:absolute;left:485px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение6',
			text: 'Удалить',
			style: 'position:absolute;left:570px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение6',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение6',
			text: 'Удалить',
			style: 'position:absolute;left:484px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение6',
			text: '',
			style: 'position:absolute;left:253px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение6',
			text: '',
			style: 'position:absolute;left:357px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение6',
			text: 'Перейти',
			style: 'position:absolute;left:570px;top:239px;width:76px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:654px;height:51px;',
			height: 51,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:230px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:86px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:558px;top:24px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:435px;width:654px;height:22px;',
			height: 22,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:3px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:3px;width:119px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:654px;height:37px;',
			height: 37,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:652px;height:35px;',
			height: 35,width: 652,
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
			]
		},
	]
});