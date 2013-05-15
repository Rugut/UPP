Ext.define('Обработки.ИндексацияЗаработка.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помощник повышения зарплаты',
	
	items:
	[
		{
			xtype: 'button',
			name: 'Закрыть',
			text: 'Закрыть',
			style: 'position:absolute;left:567px;top:390px;width:100px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДалее',
			text: 'Далее',
			style: 'position:absolute;left:482px;top:390px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНазад',
			text: 'Назад',
			style: 'position:absolute;left:397px;top:390px;width:80px;height:22px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:39px;width:659px;height:342px;',
			height: 342,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Первая страница',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПерваяСтраница',
			text: 'Помощник используется для регистрации повышения должностных окладов, тарифных разрядов. Можно отменить последнее повышение.  ',
			style: 'position:absolute;left:22px;top:0px;width:589px;height:29px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:34px;width:659px;height:143px;',
			height: 143,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Выберите действие, которое необходимо выполнить и нажмите кнопку «Далее»',
			style: 'position:absolute;left:20px;top:6px;width:448px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Выберите действие, которое необходимо выполнить и нажмите кнопку «Далее»',
			style: 'position:absolute;left:20px;top:6px;width:448px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение должностных окладов',
			style: 'position:absolute;left:40px;top:28px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение тарифных разрядов (окладов по тарифным сеткам)',
			style: 'position:absolute;left:40px;top:50px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Просмотр истории, отмена последнего повышения',
			style: 'position:absolute;left:40px;top:72px;width:347px;height:19px;',
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Повышение должностных окладов сотрудников доп. категории',
			style: 'position:absolute;left:40px;top:28px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение окладов сотрудников доп. категории',
			style: 'position:absolute;left:40px;top:50px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение окладов сотрудникам по трудовым договорам',
			style: 'position:absolute;left:40px;top:72px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение тарифных разрядов (окладов по тарифным сеткам)',
			style: 'position:absolute;left:40px;top:94px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Просмотр истории, отмена последнего повышения',
			style: 'position:absolute;left:40px;top:116px;width:284px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Выберите действие, которое необходимо выполнить и нажмите кнопку «Далее»',
			style: 'position:absolute;left:20px;top:6px;width:448px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение должностных окладов муниципальных служащих',
			style: 'position:absolute;left:40px;top:28px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Просмотр истории, отмена последнего повышения',
			style: 'position:absolute;left:40px;top:94px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение окладов сотрудникам по трудовым договорам',
			style: 'position:absolute;left:40px;top:50px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение тарифных разрядов (окладов по тарифным сеткам)',
			style: 'position:absolute;left:40px;top:72px;width:347px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:177px;width:653px;height:164px;',
			height: 164,width: 653,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:191px;height:126px;',
			height: 126,width: 191,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата повышения',
					width:'100',
					dataIndex:'ДатаПовышения',
					flex:1,
				},
				{
					text:'Должностные оклады',
					width:'100',
					dataIndex:'ДолжностныеОклады',
					flex:1,
				},
				{
					text:'Штатное расписание',
					width:'100',
					dataIndex:'ШтатноеРасписание',
					flex:1,
				},
				{
					text:'Тарифные разряды',
					width:'100',
					dataIndex:'ТарифныеРазряды',
					flex:1,
				},
				{
					text:'Доп тарифные разряды',
					width:'100',
					dataIndex:'ДопТарифныеРазряды',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаПовышения',
					},
					{
						name:'ДолжностныеОклады',
					},
					{
						name:'ШтатноеРасписание',
					},
					{
						name:'ТарифныеРазряды',
					},
					{
						name:'ДопТарифныеРазряды',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеИсторииИндексации',
			text: 'Надпись описание истории индексации',
			style: 'position:absolute;left:211px;top:32px;width:442px;height:81px;',
		},
		{
			xtype: 'fieldset',
			title: 'История повышения окладов',
			style: 'position:absolute;left:6px;top:6px;width:647px;height:16px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'История повышения',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:34px;width:659px;height:115px;',
			height: 115,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация1',
			text: 'Организация:',
			style: 'position:absolute;left:20px;top:6px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация1',
			style: 'position:absolute;left:114px;top:6px;width:351px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтменаПовышенияОкладов',
			text: 'Надпись отмена повышения окладов',
			style: 'position:absolute;left:37px;top:29px;width:516px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностныеОкладыЗаголовок1',
			text: 'История повышения окладов. Можно отменить последнее повышение.',
			style: 'position:absolute;left:22px;top:0px;width:589px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:182px;width:205px;height:148px;',
			height: 148,width: 205,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата повышения',
					width:'100',
					dataIndex:'ДатаПовышения',
					flex:1,
				},
				{
					text:'Должностные оклады',
					width:'100',
					dataIndex:'ДолжностныеОклады',
					flex:1,
				},
				{
					text:'Штатное расписание',
					width:'100',
					dataIndex:'ШтатноеРасписание',
					flex:1,
				},
				{
					text:'Тарифные разряды',
					width:'100',
					dataIndex:'ТарифныеРазряды',
					flex:1,
				},
				{
					text:'Доп тарифные разряды',
					width:'100',
					dataIndex:'ДопТарифныеРазряды',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаПовышения',
					},
					{
						name:'ДолжностныеОклады',
					},
					{
						name:'ШтатноеРасписание',
					},
					{
						name:'ТарифныеРазряды',
					},
					{
						name:'ДопТарифныеРазряды',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеИсторииИндексации1',
			text: 'Надпись описание истории индексации',
			style: 'position:absolute;left:228px;top:182px;width:431px;height:112px;',
		},
		{
			xtype: 'fieldset',
			title: 'История повышения окладов',
			style: 'position:absolute;left:0px;top:160px;width:659px;height:16px;',
		},
					]
				},
				{
					title:'Оклады',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:34px;width:659px;height:155px;',
			height: 155,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Должностные оклады',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Окладов сотрудников',
			style: 'position:absolute;left:114px;top:76px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:20px;top:6px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:114px;top:6px;width:351px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПовышения',
			text: 'Дата повышения:',
			style: 'position:absolute;left:20px;top:30px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаПовышения',
			style: 'position:absolute;left:114px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окладов штатного расписания',
			style: 'position:absolute;left:114px;top:95px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициентПовышения',
			text: 'Коэффициент повышения:',
			style: 'position:absolute;left:243px;top:30px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентПовышения',
			style: 'position:absolute;left:385px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЧтоИндексировать',
			text: 'Выполнить повышение (индексацию)',
			style: 'position:absolute;left:20px;top:54px;width:203px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеобходимостьИндексацииШтатногоРасписания',
			text: 'В организации не включен контроль штатного расписания. При повышении окладов сотрудников можно не регистрировать повышение окладов в штатном расписании.',
			style: 'position:absolute;left:130px;top:118px;width:475px;height:29px;',
		},
					]
				},
				{
					title:'Оклады по разрядам',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаПовышения1',
			text: 'Дата повышения:',
			style: 'position:absolute;left:22px;top:14px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаПовышения1',
			style: 'position:absolute;left:116px;top:14px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициентПовышения1',
			text: 'Коэффициент повышения:',
			style: 'position:absolute;left:245px;top:14px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентПовышения1',
			style: 'position:absolute;left:387px;top:14px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОкладыПоРазрядам',
			text: 'Повышение окладов по тарифным разрядам можно зарегистрировать только на первое число месяца.',
			style: 'position:absolute;left:32px;top:38px;width:317px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОкладыЗаголовок',
			text: 'Помощник используется для регистрации повышения должностных окладов, тарифных разрядов. Можно отменить последнее повышение.  ',
			style: 'position:absolute;left:28px;top:0px;width:589px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокОкругления',
			text: 'При расчете новые оклады округлять:',
			style: 'position:absolute;left:12px;top:199px;width:204px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'до рубля',
			style: 'position:absolute;left:216px;top:199px;width:71px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'не округлять новые оклады',
			style: 'position:absolute;left:216px;top:262px;width:173px;height:17px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'в сторону увеличения',
			style: 'position:absolute;left:235px;top:218px;width:160px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'по правилам математики',
			style: 'position:absolute;left:235px;top:235px;width:160px;height:15px;',
		},
			]
		},
					]
				},
				{
					title:'Результат индексации',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:26px;width:653px;height:286px;',
			height: 286,width: 653,
			items:
			[
				{
					title:'Оклады сотрудников',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:229px;',
			height: 229,width: 639,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'180',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'180',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Старый оклад',
					width:'100',
					dataIndex:'СтарыйОклад',
					flex:1,
				},
				{
					text:'Новый оклад',
					width:'100',
					dataIndex:'НовыйОклад',
					flex:1,
				},
				{
					text:'Подразделение организация',
					width:'100',
					dataIndex:'ПодразделениеОрганизация',
					flex:1,
				},
				{
					text:'Должность',
					width:'100',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Номер показателя оклада',
					width:'100',
					dataIndex:'НомерПоказателяОклада',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'СтарыйОклад',
					},
					{
						name:'НовыйОклад',
					},
					{
						name:'ПодразделениеОрганизация',
					},
					{
						name:'Должность',
					},
					{
						name:'НомерПоказателяОклада',
					},
				]
			},
		},
					]
				},
				{
					title:'Штатное расписание',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:230px;',
			height: 230,width: 639,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Подразделение организация',
					width:'100',
					dataIndex:'ПодразделениеОрганизация',
					flex:1,
				},
				{
					text:'Должность',
					width:'100',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Месячная ставка1',
					width:'100',
					dataIndex:'МесячнаяСтавка1',
					flex:1,
				},
				{
					text:'Новая месячная ставка1',
					width:'100',
					dataIndex:'НоваяМесячнаяСтавка1',
					flex:1,
				},
				{
					text:'Месячная ставка2',
					width:'100',
					dataIndex:'МесячнаяСтавка2',
					flex:1,
				},
				{
					text:'Новая месячная ставка2',
					width:'100',
					dataIndex:'НоваяМесячнаяСтавка2',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ПодразделениеОрганизация',
					},
					{
						name:'Должность',
					},
					{
						name:'МесячнаяСтавка1',
					},
					{
						name:'НоваяМесячнаяСтавка1',
					},
					{
						name:'МесячнаяСтавка2',
					},
					{
						name:'НоваяМесячнаяСтавка2',
					},
				]
			},
		},
					]
				},
				{
					title:'Тарифные разряды',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:230px;',
			height: 230,width: 639,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тарифный разряд',
					width:'100',
					dataIndex:'ТарифныйРазряд',
					flex:1,
				},
				{
					text:'Старый оклад',
					width:'100',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Новый оклад',
					width:'100',
					dataIndex:'НовыйРазмер',
					flex:1,
				},
				{
					text:'Валюта',
					width:'100',
					dataIndex:'Валюта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТарифныйРазряд',
					},
					{
						name:'Размер',
					},
					{
						name:'НовыйРазмер',
					},
					{
						name:'Валюта',
					},
				]
			},
		},
					]
				},
				{
					title:'Доп тарифные разряды',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:230px;',
			height: 230,width: 639,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100'},
				fields:
				[
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатИндексацииЗаголовок',
			text: 'Дата повышения 01.08.2011, Коэффициент повышения = 1.2',
			style: 'position:absolute;left:22px;top:0px;width:589px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыполнитьИндексациюЗаголовок',
			text: 'Для записи результатов индексации нажмите кнопку "Готово"',
			style: 'position:absolute;left:30px;top:320px;width:451px;height:16px;',
		},
					]
				},
				{
					title:'Последняя страница',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЧтоСделано',
			text: 'Выполнена отмена повышения на дату',
			style: 'position:absolute;left:59px;top:21px;width:546px;height:135px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовокФормы',
			text: 'Помощник повышения зарплаты',
			style: 'position:absolute;left:8px;top:8px;width:659px;height:28px;',
		},
	],
	dockedItems:
	[
	]
});