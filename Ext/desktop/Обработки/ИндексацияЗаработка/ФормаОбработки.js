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
			xtype: 'radio',
			boxLabel: 'Повышение должностных окладов сотрудников доп. категории',
			style: 'position:absolute;left:40px;top:28px;width:347px;height:19px;',
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
				},
				{
					text:'Дата повышения',
					width:'100',
				},
				{
					text:'Должностные оклады',
					width:'100',
				},
				{
					text:'Штатное расписание',
					width:'100',
				},
				{
					text:'Тарифные разряды',
					width:'100',
				},
				{
					text:'Доп тарифные разряды',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеИсторииИндексации',
			text: 'Надпись описание истории индексации',
			style: 'position:absolute;left:211px;top:32px;width:442px;height:81px;',
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
			style: 'position:absolute;left:20px;top:6px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
				},
				{
					text:'Дата повышения',
					width:'100',
				},
				{
					text:'Должностные оклады',
					width:'100',
				},
				{
					text:'Штатное расписание',
					width:'100',
				},
				{
					text:'Тарифные разряды',
					width:'100',
				},
				{
					text:'Доп тарифные разряды',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеИсторииИндексации1',
			text: 'Надпись описание истории индексации',
			style: 'position:absolute;left:228px;top:182px;width:431px;height:112px;',
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
			style: 'position:absolute;left:20px;top:6px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:114px;top:6px;width:351px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПовышения',
			text: 'Дата повышения:',
			style: 'position:absolute;left:20px;top:30px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
			style: 'position:absolute;left:243px;top:30px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
			style: 'position:absolute;left:22px;top:14px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПовышения1',
			style: 'position:absolute;left:116px;top:14px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициентПовышения1',
			text: 'Коэффициент повышения:',
			style: 'position:absolute;left:245px;top:14px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
			xtype: 'radio',
			boxLabel: 'до рубля',
			style: 'position:absolute;left:216px;top:199px;width:71px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'не округлять новые оклады',
			style: 'position:absolute;left:216px;top:262px;width:173px;height:17px;',
		},
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
				},
				{
					text:'Сотрудник',
					width:'180',
				},
				{
					text:'Вид расчета',
					width:'180',
				},
				{
					text:'Старый оклад',
					width:'100',
				},
				{
					text:'Новый оклад',
					width:'100',
				},
				{
					text:'Подразделение организация',
					width:'100',
				},
				{
					text:'Должность',
					width:'100',
				},
				{
					text:'Номер показателя оклада',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:46px;top:109px;width:402px;height:24px;',
			items:
			[
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:639px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Проверить по штатному расписанию',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
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
				},
				{
					text:'Подразделение организация',
					width:'100',
				},
				{
					text:'Должность',
					width:'100',
				},
				{
					text:'Месячная ставка1',
					width:'100',
				},
				{
					text:'Новая месячная ставка1',
					width:'100',
				},
				{
					text:'Месячная ставка2',
					width:'100',
				},
				{
					text:'Новая месячная ставка2',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:639px;height:24px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:121px;top:101px;width:385px;height:26px;',
			items:
			[
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				{
					text:'Вывести список...',
				},
			]
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
				},
				{
					text:'Тарифный разряд',
					width:'100',
				},
				{
					text:'Старый оклад',
					width:'100',
				},
				{
					text:'Новый оклад',
					width:'100',
				},
				{
					text:'Валюта',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:565px;height:24px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:113px;top:122px;width:267px;height:24px;',
			items:
			[
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				{
					text:'Вывести список...',
				},
			]
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:639px;height:24px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:114px;top:94px;width:222px;height:26px;',
			items:
			[
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				{
					text:'Вывести список...',
				},
			]
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
	]
});