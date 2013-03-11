Ext.define('Отчеты.РегламентированныйОтчетБухОтчетность.ФормаОтчета2011Кв4',
	{
	extend: 'Ext.window.Window',
	height: 484,width: 716,
	iconCls: 'bogus',
	title: 'Бухгалтерская отчетность',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
				{
					text:'Отправить',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
				{
					text:'Поиск',
				},
				{
					text:'ПодменюНастройка',
				},
				{
					text:'ПодготовитьИПодписать',
				},
				{
					text:'Авторасчет',
				},
				{
					text:'РазделительОтправка',
				},
				{
					text:'Проверить',
				},
				{
					text:'Расшифровка',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Проверить',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ОчиститьОтчет',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Очистить',
				},
				{
					text:'Подготовить',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Заполнить',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Очистить',
				},
				{
					text:'РазделительВыгрузка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюРасшифровка',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьОтчет',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отправка',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'КнопкаСохранятьРасшифровку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:459px;width:716px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'ПодменюПечати',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:700px;height:44px;',
			height: 44,width: 700,
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
			style: 'position:absolute;left:222px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:82px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:299px;top:24px;width:49px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНавигации',
			text: 'Перейти к ...',
			style: 'position:absolute;left:610px;top:24px;width:90px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:429px;width:700px;height:22px;',
			height: 22,width: 700,
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
			style: 'position:absolute;left:263px;top:3px;width:437px;height:19px;',
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
			style: 'position:absolute;left:8px;top:33px;width:700px;height:37px;',
			height: 37,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:698px;height:35px;',
			height: 35,width: 698,
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:119px;width:700px;height:310px;',
			height: 310,width: 700,
			items:
			[
				{
					title:'Баланс',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиБаланс',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийБаланс',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиБаланс',
			text: 'Добавить',
			style: 'position:absolute;left:440px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиБаланс',
			text: 'Удалить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастроитьДопСтрокиБаланс',
			text: 'Настроить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ФормаОтчета',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиФормаОтчета',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийФормаОтчета',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиФормаОтчета',
			text: 'Добавить',
			style: 'position:absolute;left:440px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиФормаОтчета',
			text: 'Удалить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастроитьДопСтрокиФормаОтчета',
			text: 'Настроить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ОИК',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиОИК',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийОИК',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиОИК',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиОИК',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ОДДС',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиОДДС',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийОДДС',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиОДДС',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиОДДС',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ОЦИПС',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиОЦИПС',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийОЦИПС',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'РасчетАктивов',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРасчетАктивов',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРасчетАктивов',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пояснения1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПояснения1',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПояснения1',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПояснения1',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПояснения1',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пояснения2',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПояснения2',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПояснения2',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПояснения2',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПояснения2',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пояснения3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПояснения3',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПояснения3',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПояснения3',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПояснения3',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пояснения4',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПояснения4',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПояснения4',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПояснения4',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПояснения4',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пояснения5',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПояснения5',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПояснения5',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПояснения5',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПояснения5',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пояснения6',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПояснения6',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПояснения6',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПояснения6',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПояснения6',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пояснения7',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПояснения7',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПояснения7',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПояснения7',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПояснения7',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пояснения8',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПояснения8',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПояснения8',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПояснения8',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПояснения8',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пояснения9',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПояснения9',
			text: 'Добавить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПояснения9',
			text: 'Удалить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПояснения9',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПояснения9',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ДополнительныеФайлы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:608px;top:28px;width:83px;height:24px;',
			items:
			[
				{
					text:'УдалитьФайл',
				},
				{
					text:'ДобавитьФайл',
				},
				{
					text:'СохранитьФайлНаДиск',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:609px;top:87px;width:83px;height:24px;',
			items:
			[
				{
					text:'СохранитьФайлНаДиск',
				},
				{
					text:'ДобавитьФайл',
				},
				{
					text:'УдалитьФайл',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:609px;top:144px;width:83px;height:24px;',
			items:
			[
				{
					text:'ДобавитьФайл',
				},
				{
					text:'СохранитьФайлНаДиск',
				},
				{
					text:'УдалитьФайл',
				},
			]
		},
					]
				},
			]
		},
	]
});