Ext.define('Документы.РасходныйКассовыйОрдер.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:462px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ Расходный кассовый ордер',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:170px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКасса',
			text: 'Касса:',
			style: 'position:absolute;left:330px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Касса',
			style: 'position:absolute;left:412px;top:57px;width:238px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:12px;top:385px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:98px;top:385px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:328px;top:385px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:418px;top:385px;width:232px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:437px;width:658px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Чек',
				},
				'-',
				{
					text:'ОК',
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
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:412px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:490px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтразить',
			text: 'Отразить в:',
			style: 'position:absolute;left:330px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:568px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:409px;width:552px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:12px;top:409px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:642px;height:278px;',
			height: 278,width: 642,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:628px;height:222px;',
			height: 222,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'РКО',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:82px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокументаПодотчетник',
			text: 'Сумма:',
			style: 'position:absolute;left:322px;top:49px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПодотчетник',
			text: 'Курс:',
			style: 'position:absolute;left:171px;top:49px;width:52px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПогашенияАванса',
			text: 'Срок аванса:',
			style: 'position:absolute;left:322px;top:25px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:22px;width:627px;height:199px;',
			height: 199,width: 627,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ПлатежПоОднойСделке',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаДокументРасчеты',
			text: 'Сумма:',
			style: 'position:absolute;left:322px;top:50px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетов',
			text: 'Курс:',
			style: 'position:absolute;left:0px;top:26px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:2px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:
',
			style: 'position:absolute;left:322px;top:2px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: '% НДС:',
			style: 'position:absolute;left:0px;top:50px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:179px;top:26px;width:123px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:118px;width:80px;height:27px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:0px;top:74px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:408px;top:2px;width:219px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:82px;top:26px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:82px;top:50px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:82px;top:74px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:82px;top:2px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокументаРасчеты',
			style: 'position:absolute;left:408px;top:50px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:82px;top:122px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодбор',
			text: 'Подбор',
			style: 'position:absolute;left:254px;top:2px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:82px;top:98px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:98px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежа',
			style: 'position:absolute;left:408px;top:122px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Заявка',
			text: 'Заявка:',
			style: 'position:absolute;left:322px;top:122px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПлан',
			style: 'position:absolute;left:408px;top:146px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПлан',
			text: 'Курс заявки:',
			style: 'position:absolute;left:322px;top:146px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежаПлан',
			style: 'position:absolute;left:408px;top:170px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПлан',
			text: 'Сумма платежа по заявке:',
			style: 'position:absolute;left:322px;top:170px;width:80px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетов',
			text: 'USD',
			style: 'position:absolute;left:513px;top:50px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет расчетов :',
			style: 'position:absolute;left:322px;top:74px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет авансов:',
			style: 'position:absolute;left:322px;top:98px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:408px;top:74px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:408px;top:98px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРасчетовСКонтрагентом',
			style: 'position:absolute;left:408px;top:26px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:322px;top:28px;width:80px;height:17px;',
		},
					]
				},
				{
					title:'ПлатежПоНесколькимСделкам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:627px;height:154px;',
			height: 154,width: 627,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'100',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'100',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'100',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма платежа',
					width:'100',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
				{
					text:'% НДС',
					width:'40',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'100',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Счет учета расчетов с контрагентом',
					width:'100',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Счет учета расчетов по авансам',
					width:'100',
					dataIndex:'СчетУчетаРасчетовПоАвансам',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'100',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
					flex:1,
				},
				{
					text:'Заявка на расходование средств',
					width:'100',
					dataIndex:'ДокументПланированияПлатежа',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов по документу планирования',
					width:'100',
					dataIndex:'КурсВзаиморасчетовПлан',
					flex:1,
				},
				{
					text:'Сумма платежа по документу планирования',
					width:'100',
					dataIndex:'СуммаПлатежаПлан',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасходныйКассовыйОрдер/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'СуммаПлатежа',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
					},
					{
						name:'СчетУчетаРасчетовПоАвансам',
					},
					{
						name:'СтатьяДвиженияДенежныхСредств',
					},
					{
						name:'ДокументПланированияПлатежа',
					},
					{
						name:'Проект',
					},
					{
						name:'КурсВзаиморасчетовПлан',
					},
					{
						name:'СуммаПлатежаПлан',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:294px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:312px;top:21px;width:315px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявка',
			text: 'Заявка:',
			style: 'position:absolute;left:310px;top:25px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект3',
			text: 'Проект:',
			style: 'position:absolute;left:310px;top:49px;width:72px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Без разбиения',
			style: 'position:absolute;left:408px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Списком',
			style: 'position:absolute;left:518px;top:0px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:322px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Заявка1',
			text: 'Заявка:',
			style: 'position:absolute;left:322px;top:73px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПланПодотчет',
			text: 'Курс заявки:',
			style: 'position:absolute;left:322px;top:97px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПланПодотчет',
			text: 'Сумма платежа по заявке:',
			style: 'position:absolute;left:322px;top:121px;width:80px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбъявлениеНаВзносНаличными',
			text: 'Объявление на взнос наличными:',
			style: 'position:absolute;left:315px;top:0px;width:93px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентомНУ',
			text: 'Счет НУ:',
			style: 'position:absolute;left:311px;top:97px;width:71px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Выдача подотчетнику',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаВзаиморасчетовПодотчетника',
			style: 'position:absolute;left:86px;top:49px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:86px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФизЛицо',
			text: 'Подотчетник:',
			style: 'position:absolute;left:6px;top:25px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетныйДокумент',
			style: 'position:absolute;left:86px;top:73px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПогашенияАванса',
			style: 'position:absolute;left:408px;top:25px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанкСчет',
			text: 'Банк. счет:',
			style: 'position:absolute;left:0px;top:0px;width:80px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПодотчетник',
			style: 'position:absolute;left:228px;top:49px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокументаПодотчетник',
			style: 'position:absolute;left:408px;top:49px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредствБанк1',
			style: 'position:absolute;left:86px;top:121px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект1',
			style: 'position:absolute;left:86px;top:97px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежаПодотчет',
			style: 'position:absolute;left:408px;top:73px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПланПодотчет',
			style: 'position:absolute;left:408px;top:97px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежаПланПодотчет',
			style: 'position:absolute;left:408px;top:121px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурсаЗаявкиПодотчет',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:515px;top:97px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетовПодотчет',
			text: 'USD',
			style: 'position:absolute;left:512px;top:49px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто1Подотчет',
			text: 'Статья прочих доходов и расходов по компенсации за задержку зарплаты:',
			style: 'position:absolute;left:6px;top:159px;width:394px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт1Подотчет',
			style: 'position:absolute;left:408px;top:159px;width:218px;height:19px;',
		},
					]
				},
				{
					title:'Выдача кассе ККМ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМ',
			style: 'position:absolute;left:82px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежаКассаККМ',
			style: 'position:absolute;left:82px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Заявка:',
			style: 'position:absolute;left:0px;top:30px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект2',
			style: 'position:absolute;left:82px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидВыдачиДенежныхСредств',
			style: 'position:absolute;left:0px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредствККМ',
			style: 'position:absolute;left:82px;top:78px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Выплата заработной платы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:626px;height:220px;',
			height: 220,width: 626,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По ведомостям',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:48px;width:618px;height:170px;',
			height: 170,width: 618,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Ведомость',
					width:'220',
					dataIndex:'Ведомость',
					flex:1,
				},
				{
					text:'Сумма к выплате',
					width:'100',
					dataIndex:'СуммаКВыплате',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'120',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
					flex:1,
				},
				{
					text:'Заявка на расходование средств',
					width:'120',
					dataIndex:'ЗаявкаНаРасходованиеСредств',
					flex:1,
				},
				{
					text:'Проект',
					width:'120',
					dataIndex:'Проект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасходныйКассовыйОрдер/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Ведомость',
					},
					{
						name:'СуммаКВыплате',
					},
					{
						name:'СтатьяДвиженияДенежныхСредств',
					},
					{
						name:'ЗаявкаНаРасходованиеСредств',
					},
					{
						name:'Проект',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:21px;width:618px;height:24px;',
			items:
			[
				{
					text:'Неоплаченными ведомостями',
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
					title:'Прочее',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатья1',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:6px;top:25px;width:89px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредствПрочие',
			style: 'position:absolute;left:88px;top:25px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект2',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:54px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежаПрочие',
			style: 'position:absolute;left:398px;top:25px;width:229px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект3',
			style: 'position:absolute;left:398px;top:49px;width:229px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:97px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчета',
			style: 'position:absolute;left:76px;top:97px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт1',
			text: 'Субконто Дт1:',
			style: 'position:absolute;left:6px;top:121px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт1',
			style: 'position:absolute;left:76px;top:121px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт2',
			text: 'Субконто Дт2:',
			style: 'position:absolute;left:6px;top:145px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт2',
			style: 'position:absolute;left:76px;top:145px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт3',
			text: 'Субконто Дт3:',
			style: 'position:absolute;left:6px;top:169px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт3',
			style: 'position:absolute;left:76px;top:169px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентомНУ',
			style: 'position:absolute;left:398px;top:97px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт1',
			text: 'Субконто НУ Дт1:',
			style: 'position:absolute;left:311px;top:121px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУДт1',
			style: 'position:absolute;left:398px;top:121px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт2',
			text: 'Субконто НУ Дт2:',
			style: 'position:absolute;left:311px;top:145px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУДт2',
			style: 'position:absolute;left:398px;top:145px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт3',
			text: 'Субконто НУ Дт3:',
			style: 'position:absolute;left:311px;top:169px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУДт3',
			style: 'position:absolute;left:398px;top:169px;width:228px;height:19px;',
		},
					]
				},
				{
					title:'Взнос наличными в банк',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:82px;top:0px;width:220px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья2',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:48px;width:73px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредствБанк',
			style: 'position:absolute;left:82px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект4',
			style: 'position:absolute;left:82px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект4',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:24px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъявлениеНаВзносНаличными',
			style: 'position:absolute;left:408px;top:0px;width:220px;height:20px;',
		},
					]
				},
				{
					title:'Депоненты',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетовПодотчетника',
			text: 'Валюта:',
			style: 'position:absolute;left:6px;top:49px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:614px;height:172px;',
			height: 172,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Ведомость',
					width:'120',
					dataIndex:'Ведомость',
					flex:1,
				},
				{
					text:'Сумма к выплате',
					width:'100',
					dataIndex:'СуммаКВыплате',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'120',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
					flex:1,
				},
				{
					text:'Проект',
					width:'120',
					dataIndex:'Проект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасходныйКассовыйОрдер/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'Ведомость',
					},
					{
						name:'СуммаКВыплате',
					},
					{
						name:'СтатьяДвиженияДенежныхСредств',
					},
					{
						name:'Проект',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:614px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Расшифровка по статьям',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись52',
			text: 'Статья движ. ден. средств',
			style: 'position:absolute;left:0px;top:78px;width:72px;height:33px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:614px;height:172px;',
			height: 172,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'220',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
					flex:1,
				},
				{
					text:'Проект',
					width:'120',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Сумма платежа',
					width:'100',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасходныйКассовыйОрдер/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'СтатьяДвиженияДенежныхСредств',
					},
					{
						name:'Проект',
					},
					{
						name:'СуммаПлатежа',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:614px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:88px;top:6px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумент',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в опер. учете',
			style: 'position:absolute;left:414px;top:6px;width:140px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Оплачено',
			style: 'position:absolute;left:556px;top:6px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:188px;top:6px;width:40px;height:19px;',
		},
					]
				},
				{
					title:'Печать',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПриложение',
			text: 'Приложение:',
			style: 'position:absolute;left:6px;top:54px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Приложение',
			style: 'position:absolute;left:88px;top:54px;width:546px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПринятоОт',
			text: 'Выдать:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Выдать',
			style: 'position:absolute;left:88px;top:6px;width:546px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:6px;top:30px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Основание',
			style: 'position:absolute;left:88px;top:30px;width:546px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоДокументу',
			text: 'По:',
			style: 'position:absolute;left:6px;top:78px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументу',
			style: 'position:absolute;left:88px;top:78px;width:546px;height:19px;',
		},
					]
				},
			]
		},
	]
});