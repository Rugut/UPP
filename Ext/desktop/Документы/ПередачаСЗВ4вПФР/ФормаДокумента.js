Ext.define('Документы.ПередачаСЗВ4вПФР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:891px;height:554px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Опись сведений, передаваемых страхователем в ПФР',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:502px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:502px;width:670px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:891px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:529px;width:891px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Проверить в CheckXML',
				},
				'-',
				'-',
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
			style: 'position:absolute;left:775px;top:502px;width:106px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:149px;width:875px;height:347px;',
			height: 347,width: 875,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'АДВ11',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:27px;width:875px;height:24px;',
			items:
			[
				{
					text:'Заполнить расчетами с ПФР',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:55px;width:875px;height:292px;',
			height: 292,width: 875,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Тип строки',
					width:'240',
				},
				{
					text:'Год',
					width:'60',
				},
				{
					text:'Страховая часть',
					width:'100',
				},
				{
					text:'Накопительная часть',
					width:'119',
				},
				{
					text:'Дополнительный тариф',
					width:'128',
				},
			]
		},
					]
				},
				{
					title:'Страница2010',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:84px;width:514px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Провести пачку',
				},
				{
					text:'Отменить проведение пачки',
				},
				'-',
				{
					text:'Провести все пачки',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:108px;width:514px;height:239px;',
			height: 239,width: 514,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Документ',
					width:'120',
				},
				{
					text:'№ пачки',
					width:'49',
				},
				{
					text:'Форма',
					width:'64',
				},
				{
					text:'Категория ЗЛ',
					width:'79',
				},
				{
					text:'Тип сведений',
					width:'76',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:523px;top:108px;width:352px;height:239px;',
			height: 239,width: 352,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Застрахованное лицо',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:523px;top:84px;width:352px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Открыть данные о стаже',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:875px;height:68px;',
			height: 68,width: 875,
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
			text: 'Распределение сумм уплаченных взносов производится по коэффициентам текущего периода без учета переданных ранее в ПФР сведений. ',
			style: 'position:absolute;left:29px;top:22px;width:845px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПерейтиПодготовкаДанныхПФР',
			text: 'Перейти в рабочее место Подготовка данных ПФР',
			style: 'position:absolute;left:29px;top:49px;width:267px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетСтраховыхВзносов',
			text: 'Расчет по страховым взносам РСВ-1:',
			style: 'position:absolute;left:0px;top:0px;width:195px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетСтраховыхВзносов',
			style: 'position:absolute;left:200px;top:0px;width:212px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Страница2009',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:33px;width:875px;height:314px;',
			height: 314,width: 875,
			items:
			[
				{
					title:'Пачки',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:503px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Провести пачку',
				},
				{
					text:'Отменить проведение пачки',
				},
				'-',
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:503px;height:242px;',
			height: 242,width: 503,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'№ пачки',
					width:'49',
				},
				{
					text:'Документ',
					width:'120',
				},
				{
					text:'Тип форм документов',
					width:'60',
				},
				{
					text:'Территориальные условия',
					width:'60',
				},
				{
					text:'Вид корректировки',
					width:'60',
				},
				{
					text:'Комментарий',
					width:'105',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:515px;top:46px;width:352px;height:242px;',
			height: 242,width: 352,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Физическое лицо',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:515px;top:22px;width:352px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Открыть СЗВ-4',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
				{
					title:'Расчеты с ПФР',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:861px;height:24px;',
			items:
			[
				{
					text:'Заполнить расчетами с ПФР',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:861px;height:264px;',
			height: 264,width: 861,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Тип строки',
					width:'220',
				},
				{
					text:'Год',
					width:'74',
				},
				{
					text:'Страховая часть',
					width:'100',
				},
				{
					text:'Накопительная часть',
					width:'100',
				},
				{
					text:'Дополнительный тариф',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:875px;height:25px;',
			height: 25,width: 875,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница обычная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаДействия',
			text: 'Дата действия:',
			style: 'position:absolute;left:206px;top:0px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействия',
			style: 'position:absolute;left:288px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'ИСХД',
			style: 'position:absolute;left:89px;top:0px;width:53px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'ПЕНС',
			style: 'position:absolute;left:146px;top:0px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип сведений:',
			style: 'position:absolute;left:0px;top:0px;width:83px;height:19px;',
		},
					]
				},
				{
					title:'Страница специальная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСпециальногоДокумента',
			text: 'Эта пачка пенсионных форм была сформирована до утверждения документов СЗВ-6. Сейчас эти формы можно только распечатать.',
			style: 'position:absolute;left:27px;top:0px;width:848px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:875px;height:41px;',
			height: 41,width: 875,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:875px;height:35px;',
			height: 35,width: 875,
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
			style: 'position:absolute;left:8px;top:74px;width:875px;height:75px;',
			height: 75,width: 875,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:443px;top:0px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:529px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:611px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:629px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:0px;width:318px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:443px;top:24px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:529px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:0px;top:48px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:94px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:218px;top:48px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:286px;top:48px;width:126px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Отчетный период:',
			style: 'position:absolute;left:0px;top:24px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:94px;top:24px;width:318px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:443px;top:48px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:529px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:611px;top:48px;width:243px;height:19px;',
			height: 19,width: 243,
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
			text: 'Содержит:',
			style: 'position:absolute;left:6px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сведения СЗВ-6',
			style: 'position:absolute;left:66px;top:0px;width:106px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'АДВ-11',
			style: 'position:absolute;left:178px;top:0px;width:59px;height:19px;',
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
});