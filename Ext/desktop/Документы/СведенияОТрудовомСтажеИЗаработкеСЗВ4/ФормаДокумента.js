Ext.define('Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:520px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения о страховых взносах и стаже застрахованных лиц (СЗВ-4, СЗВ-6)',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:465px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:553px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:633px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:653px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:102px;top:33px;width:318px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:465px;top:57px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:553px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:468px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:468px;width:778px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:262px;width:984px;height:24px;',
			items:
			[
				{
					text:'Все адреса',
				},
				{
					text:'Изменившиеся адреса',
				},
				'-',
				{
					text:'Суммы взносов',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:286px;width:984px;height:175px;',
			height: 175,width: 984,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'220',
				},
				{
					text:'Адрес для информирования',
					width:'120',
				},
				{
					text:'Страховой номер',
					width:'120',
				},
				{
					text:'Фамилия',
					width:'80',
				},
				{
					text:'Имя',
					width:'80',
				},
				{
					text:'Отчество',
					width:'80',
				},
				{
					text:'Страховая часть',
					width:'260',
				},
				{
					text:'Начислено',
					width:'80',
				},
				{
					text:'В т.ч доначислено',
					width:'100',
				},
				{
					text:'Уплачено',
					width:'80',
				},
				{
					text:'В т.ч доуплачено',
					width:'100',
				},
				{
					text:'Накопительная часть',
					width:'260',
				},
				{
					text:'Начислено',
					width:'80',
				},
				{
					text:'В т.ч доначислено',
					width:'100',
				},
				{
					text:'Уплачено',
					width:'80',
				},
				{
					text:'В т.ч доуплачено',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:495px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Проверить в CheckXML',
				},
				'-',
				{
					text:'Показать файл',
				},
				'-',
				{
					text:'Записать файл на диск',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Принято в ПФР',
			style: 'position:absolute;left:886px;top:468px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:81px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:102px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:226px;top:81px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:294px;top:81px;width:126px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод1',
			text: 'Отчетный период:',
			style: 'position:absolute;left:8px;top:57px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:102px;top:57px;width:318px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:107px;width:984px;height:69px;',
			height: 69,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница2010',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц',
			text: 'Категория застрахованных лиц:',
			style: 'position:absolute;left:0px;top:50px;width:174px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗастрахованныхЛиц',
			style: 'position:absolute;left:182px;top:50px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод2',
			text: 'Корректируемый период:',
			style: 'position:absolute;left:404px;top:25px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КорректируемыйПериод',
			style: 'position:absolute;left:537px;top:25px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипФормы1',
			text: 'Тип формы:',
			style: 'position:absolute;left:0px;top:0px;width:93px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-6-1',
			style: 'position:absolute;left:94px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-6-2',
			style: 'position:absolute;left:182px;top:0px;width:109px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Исходные',
			style: 'position:absolute;left:94px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Корректирующие',
			style: 'position:absolute;left:182px;top:25px;width:109px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипСведений1',
			text: 'Тип сведений:',
			style: 'position:absolute;left:0px;top:25px;width:93px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отменяющие',
			style: 'position:absolute;left:299px;top:25px;width:89px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Передавать доуплаченные суммы',
			style: 'position:absolute;left:754px;top:25px;width:206px;height:19px;',
		},
					]
				},
				{
					title:'Страница описания',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСпециальногоДокумента',
			text: 'Надпись специального документа',
			style: 'position:absolute;left:6px;top:25px;width:972px;height:38px;',
		},
					]
				},
				{
					title:'Страница2009',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТерриториальные',
			text: ' с территориальными условиями:',
			style: 'position:absolute;left:241px;top:0px;width:171px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТерриториальныеУсловия',
			style: 'position:absolute;left:415px;top:0px;width:66px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Исходные',
			style: 'position:absolute;left:94px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Назначение пенсии',
			style: 'position:absolute;left:182px;top:25px;width:119px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-4-1',
			style: 'position:absolute;left:94px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-4-2',
			style: 'position:absolute;left:182px;top:0px;width:59px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отсутствует',
			style: 'position:absolute;left:94px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Корректирующая',
			style: 'position:absolute;left:182px;top:50px;width:119px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отменяющая',
			style: 'position:absolute;left:308px;top:50px;width:87px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипФормы',
			text: 'Тип формы:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипСведений',
			text: 'Тип сведений:',
			style: 'position:absolute;left:0px;top:25px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидКорректировки',
			text: 'Корректировка:',
			style: 'position:absolute;left:0px;top:50px;width:88px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:465px;top:81px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:553px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:176px;width:984px;height:65px;',
			height: 65,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСостояниеПачекДокументов',
			text: 'Распределение сумм уплаченных взносов производится по коэффициентам текущего периода без учета переданных ранее в ПФР сведений.',
			style: 'position:absolute;left:29px;top:0px;width:955px;height:35px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПерейтиПодготовкаДанныхПФР',
			text: 'Перейти в рабочее место Подготовка данных ПФР',
			style: 'position:absolute;left:0px;top:35px;width:267px;height:19px;',
		},
					]
				},
			]
		},
	]
});