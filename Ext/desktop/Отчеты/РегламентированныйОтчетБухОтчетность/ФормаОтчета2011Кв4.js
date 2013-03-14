Ext.define('Отчеты.РегламентированныйОтчетБухОтчетность.ФормаОтчета2011Кв4',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:484px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Бухгалтерская отчетность',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
				{
					text:'Очистить все отчеты',
				},
				'-',
				{
					text:'Очистить бухгалтерский баланс',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:459px;width:716px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:630px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:700px;height:44px;',
			height: 44,width: 700,
			tabBar:{hidden:true},
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
			xtype: 'checkbox',
			boxLabel: 'Внешние данные',
			style: 'position:absolute;left:261px;top:0px;width:107px;height:19px;',
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:3px;width:80px;height:19px;',
		},
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
			tabBar:{hidden:true},
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
			tabBar:{hidden:true},
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
					title:'Бухгалтерский баланс',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			tabBar:{hidden:true},
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
					title:'Отчет о прибылях и убытках',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			tabBar:{hidden:true},
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
					title:'Отчет об изменениях капитала',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			tabBar:{hidden:true},
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
					title:'Отчет о движении денежных средств',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			tabBar:{hidden:true},
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
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтрокиПояснения1',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтрокиПояснения2',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтрокиПояснения3',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтрокиПояснения4',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтрокиПояснения5',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтрокиПояснения6',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтрокиПояснения7',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтрокиПояснения8',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтрокиПояснения9',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
					]
				},
				{
					title:'Отчет о целевом использовании полученных средств',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:686px;height:24px;',
			height: 24,width: 686,
			tabBar:{hidden:true},
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
		{
			xtype: 'label',
			name: 'Надпись58',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись59',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:302px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись69',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:388px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись70',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:302px;top:265px;width:136px;height:19px;',
		},
					]
				},
				{
					title:'Расчет оценки стоимости чистых активов',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:686px;height:24px;',
			height: 24,width: 686,
			tabBar:{hidden:true},
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
					title:'Пояснения. Раздел 1',
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
			tabBar:{hidden:true},
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
					title:'Пояснения. Раздел 2',
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
			tabBar:{hidden:true},
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
					title:'Пояснения. Раздел 3',
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
			tabBar:{hidden:true},
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
					title:'Пояснения. Раздел 4',
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
			tabBar:{hidden:true},
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
					title:'Пояснения. Раздел 5',
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
			tabBar:{hidden:true},
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
					title:'Пояснения. Раздел 6',
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
			tabBar:{hidden:true},
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
					title:'Пояснения. Раздел 7',
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
			tabBar:{hidden:true},
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
					title:'Пояснения. Раздел 8',
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
			tabBar:{hidden:true},
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
					title:'Пояснения. Раздел 9',
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
			tabBar:{hidden:true},
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
					title:'Дополнительные файлы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФайлПояснительнойЗаписки',
			text: 'Файл пояснительной записки бухгалтерской отчетности:',
			style: 'position:absolute;left:6px;top:8px;width:366px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаАудиторскогоЗаключения',
			text: 'Имя файла аудиторского заключения:',
			style: 'position:absolute;left:6px;top:64px;width:366px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаЗаявленияРевизионногоСоюза',
			text: 'Имя файла заявления ревизионного союза сельскохозяйственных производителей:',
			style: 'position:absolute;left:6px;top:120px;width:518px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:608px;top:28px;width:83px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'КомментарийКФайлуПояснительнойЗаписки',
			text: '',
			style: 'position:absolute;left:6px;top:28px;width:598px;height:27px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:609px;top:87px;width:83px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'КомментарийКФайлуАудиторскогоЗаключения',
			text: '',
			style: 'position:absolute;left:6px;top:84px;width:598px;height:27px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:609px;top:144px;width:83px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'КомментарийКФайлуЗаявленияСоюзаСельхозпроизводетелей',
			text: '',
			style: 'position:absolute;left:6px;top:141px;width:598px;height:27px;',
		},
					]
				},
			]
		},
	]
});