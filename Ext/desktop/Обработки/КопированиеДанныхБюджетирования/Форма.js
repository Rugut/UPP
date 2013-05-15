Ext.define('Обработки.КопированиеДанныхБюджетирования.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:732px;height:465px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Копирование данных бюджетирования',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СценарийИсточник',
			style: 'position:absolute;left:79px;top:97px;width:267px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:14px;top:121px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаИсточник',
			style: 'position:absolute;left:78px;top:121px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:176px;top:121px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКонцаИсточник',
			style: 'position:absolute;left:194px;top:121px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаИсточника',
			text: '...',
			style: 'position:absolute;left:292px;top:121px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:14px;top:97px;width:62px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Исходные данные',
			style: 'position:absolute;left:8px;top:79px;width:344px;height:69px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СценарийПриемник',
			style: 'position:absolute;left:451px;top:99px;width:267px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'Период с:',
			style: 'position:absolute;left:378px;top:123px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаПриемник',
			style: 'position:absolute;left:451px;top:123px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись44',
			text: 'по:',
			style: 'position:absolute;left:549px;top:123px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКонцаПриемник',
			style: 'position:absolute;left:567px;top:123px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПриемник',
			text: '...',
			style: 'position:absolute;left:665px;top:123px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись45',
			text: 'Сценарий:',
			style: 'position:absolute;left:378px;top:99px;width:71px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Новые данные',
			style: 'position:absolute;left:372px;top:79px;width:352px;height:69px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:157px;width:716px;height:251px;',
			height: 251,width: 716,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЦФОПриемник',
			style: 'position:absolute;left:482px;top:50px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПроектПриемник',
			style: 'position:absolute;left:482px;top:74px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтрагентПриемник',
			style: 'position:absolute;left:482px;top:98px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НоменклатураПриемник',
			style: 'position:absolute;left:482px;top:122px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтатьяОборотовПриемник',
			style: 'position:absolute;left:482px;top:26px;width:220px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Установить новые значения',
			style: 'position:absolute;left:366px;top:6px;width:342px;height:141px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры копирования',
			style: 'position:absolute;left:6px;top:156px;width:702px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:177px;width:701px;height:48px;',
			height: 48,width: 701,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ПоПериодам',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентПериоды',
			style: 'position:absolute;left:505px;top:5px;width:118px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'Относительное изменение:',
			style: 'position:absolute;left:363px;top:5px;width:142px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять по периодам новых данных',
			style: 'position:absolute;left:365px;top:29px;width:247px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись55',
			text: 'Изменение за период:',
			style: 'position:absolute;left:363px;top:29px;width:118px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись57',
			text: 'Тип заполнения:',
			style: 'position:absolute;left:363px;top:5px;width:118px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'АбсолютноеЗначениеПериодыСумма',
			style: 'position:absolute;left:212px;top:5px;width:118px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись62',
			text: 'Абсолютное изменение по сумме:',
			style: 'position:absolute;left:6px;top:5px;width:200px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'АбсолютноеЗначениеПериодыКоличество',
			style: 'position:absolute;left:212px;top:29px;width:118px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись63',
			text: 'Абсолютное изменение по количеству:',
			style: 'position:absolute;left:6px;top:29px;width:201px;height:19px;',
		},
					]
				},
				{
					title:'Нормировать',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентБазовый',
			style: 'position:absolute;left:117px;top:5px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись54',
			text: 'Коэффициент баз.:',
			style: 'position:absolute;left:6px;top:5px;width:109px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИзменениеЗаПериод',
			style: 'position:absolute;left:481px;top:29px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись58',
			text: 'Тип расчета:',
			style: 'position:absolute;left:6px;top:29px;width:109px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТипИзменения',
			style: 'position:absolute;left:117px;top:29px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТипРаспределения',
			style: 'position:absolute;left:481px;top:5px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Статья оборотов:',
			style: 'position:absolute;left:372px;top:26px;width:108px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ЦФО:',
			style: 'position:absolute;left:372px;top:50px;width:108px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект:',
			style: 'position:absolute;left:372px;top:74px;width:108px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:372px;top:98px;width:108px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:372px;top:122px;width:108px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:339px;height:97px;',
			height: 97,width: 339,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КопированиеДанныхБюджетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Отбор данных',
			style: 'position:absolute;left:6px;top:6px;width:339px;height:13px;',
		},
					]
				},
				{
					title:'Новые бюджетные операции',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:702px;height:200px;',
			height: 200,width: 702,
			columns:
			[
				{
					text:'N',
					width:'37',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Документ',
					width:'216',
					dataIndex:'ДокументОперация',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'183',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Валюта',
					width:'94',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'168',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КопированиеДанныхБюджетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументОперация',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
				]
			},
		},
					]
				},
				{
					title:'Новые документы расчетов по моделям',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:702px;height:200px;',
			height: 200,width: 702,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Документ',
					width:'266',
					dataIndex:'ДокументРасчет',
					flex:1,
				},
				{
					text:'Дата расчета',
					width:'115',
					dataIndex:'ДатаРасчета',
					flex:1,
				},
				{
					text:'Источник данных',
					width:'291',
					dataIndex:'ИсточникДанных',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КопированиеДанныхБюджетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументРасчет',
					},
					{
						name:'ДатаРасчета',
					},
					{
						name:'ИсточникДанных',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бюджетные операции',
			style: 'position:absolute;left:446px;top:33px;width:136px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'документы расчетов по моделям',
			style: 'position:absolute;left:446px;top:55px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись56',
			text: 'Способ копирования:',
			style: 'position:absolute;left:8px;top:33px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпособКопированияДанных',
			style: 'position:absolute;left:120px;top:33px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись59',
			text: 'Установить ответственного:',
			style: 'position:absolute;left:8px;top:413px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:164px;top:413px;width:182px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись60',
			text: 'Установить статус:',
			style: 'position:absolute;left:380px;top:413px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Состояние',
			style: 'position:absolute;left:497px;top:413px;width:227px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись61',
			text: 'Копировать:',
			style: 'position:absolute;left:372px;top:33px;width:72px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:732px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:440px;width:732px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});