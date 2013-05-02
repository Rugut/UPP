Ext.define('Документы.ПриходныйКассовыйОрдер.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:460px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ Приходный кассовый ордер',
	
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
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:14px;top:408px;width:80px;height:19px;text-align:left;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:100px;top:408px;width:550px;height:19px;',
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
			style: 'position:absolute;left:412px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:14px;top:384px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:100px;top:384px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:328px;top:384px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:412px;top:384px;width:238px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:435px;width:658px;height:25px;',
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
			name: 'НадписьОтразитьВ',
			text: 'Отразить в:',
			style: 'position:absolute;left:330px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:568px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:642px;height:277px;',
			height: 277,width: 642,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:26px;width:628px;height:221px;',
			height: 221,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ПКО',
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
			name: 'Контрагент',
			style: 'position:absolute;left:82px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС2',
			text: 'Валюта:',
			style: 'position:absolute;left:322px;top:26px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокументаПодотчетник',
			text: 'Сумма:',
			style: 'position:absolute;left:322px;top:50px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПодотчетник',
			text: 'Курс:',
			style: 'position:absolute;left:511px;top:26px;width:36px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:628px;height:197px;',
			height: 197,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ПлатежПоНесколькимСделкам',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаДокументРасчеты',
			text: 'Сумма:',
			style: 'position:absolute;left:322px;top:48px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Заказ покупателя:
',
			style: 'position:absolute;left:322px;top:0px;width:86px;height:27px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:628px;height:152px;',
			height: 152,width: 628,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'110',
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
					width:'90',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
				{
					text:'% НДС',
					width:'50',
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
					text:'Планируемое поступление',
					width:'102',
					dataIndex:'ДокументПланированияПлатежа',
					flex:1,
				},
				{
					text:'Проект',
					width:'98',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПриходныйКассовыйОрдер/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:0px;top:21px;width:300px;height:24px;',
			items:
			[
				{
					text:'Заполнить платежи',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:314px;top:21px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапланировано',
			text: 'Запланировано:',
			style: 'position:absolute;left:322px;top:120px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПлан',
			text: 'План. курс.:',
			style: 'position:absolute;left:322px;top:144px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПлан',
			text: 'План. сумма платежа',
			style: 'position:absolute;left:322px;top:168px;width:86px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:322px;top:72px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет авансов:',
			style: 'position:absolute;left:322px;top:96px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:322px;top:28px;width:80px;height:15px;',
		},
					]
				},
				{
					title:'ПлатежПоОднойСделке',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:82px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:82px;top:120px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:408px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокументаРасчеты',
			style: 'position:absolute;left:408px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:82px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:82px;top:48px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:82px;top:72px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодбор',
			text: 'Подбор',
			style: 'position:absolute;left:254px;top:0px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:82px;top:96px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:96px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежа',
			style: 'position:absolute;left:408px;top:120px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПлан',
			style: 'position:absolute;left:408px;top:144px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежаПлан',
			style: 'position:absolute;left:408px;top:168px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетов',
			text: 'USD',
			style: 'position:absolute;left:512px;top:48px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:408px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:408px;top:96px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРасчетовСКонтрагентом',
			style: 'position:absolute;left:408px;top:24px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяДвиженияДенежныхСредствПрочие',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:313px;top:74px;width:82px;height:27px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья3',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:322px;top:74px;width:76px;height:27px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроектПрочие',
			text: 'Проект:',
			style: 'position:absolute;left:313px;top:50px;width:82px;height:19px;',
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
			name: 'НадписьПланировалось',
			text: 'Планировалось',
			style: 'position:absolute;left:313px;top:26px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДенежныйЧек',
			text: 'Денежный чек:',
			style: 'position:absolute;left:322px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСРозница',
			text: 'НДС:',
			style: 'position:absolute;left:170px;top:31px;width:36px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Возврат подотчетника',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаВзаиморасчетовПодотчетника',
			style: 'position:absolute;left:408px;top:26px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКассаККМ',
			text: 'Касса ККМ:',
			style: 'position:absolute;left:0px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетныйДокумент',
			style: 'position:absolute;left:82px;top:50px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:82px;top:26px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФизЛицо',
			text: 'Подотчетник:',
			style: 'position:absolute;left:0px;top:26px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанкСчет',
			text: 'Банк. счет:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПодотчетник',
			style: 'position:absolute;left:547px;top:26px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокументаПодотчетник',
			style: 'position:absolute;left:408px;top:50px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств1',
			style: 'position:absolute;left:408px;top:74px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект1',
			style: 'position:absolute;left:82px;top:74px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетовПодотчет',
			text: 'USD',
			style: 'position:absolute;left:511px;top:50px;width:40px;height:19px;',
		},
					]
				},
				{
					title:'Прием розничной выручки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМ',
			style: 'position:absolute;left:82px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС3',
			text: 'Ставка НДС:',
			style: 'position:absolute;left:0px;top:30px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДСКасса',
			style: 'position:absolute;left:82px;top:30px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья2',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:48px;width:82px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств2',
			style: 'position:absolute;left:82px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежаКасса',
			style: 'position:absolute;left:82px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект2',
			style: 'position:absolute;left:82px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПриемаРозничнойВыручки',
			style: 'position:absolute;left:0px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентомРозничнаяВыручка',
			style: 'position:absolute;left:82px;top:126px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетОперационнойКассы',
			text: 'Счет опер. кассы:',
			style: 'position:absolute;left:0px;top:126px;width:82px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДСРозница',
			style: 'position:absolute;left:212px;top:31px;width:90px;height:19px;',
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредствПрочие',
			style: 'position:absolute;left:397px;top:74px;width:231px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект3',
			style: 'position:absolute;left:397px;top:50px;width:231px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежаПрочие',
			style: 'position:absolute;left:397px;top:26px;width:231px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:0px;top:26px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчета',
			style: 'position:absolute;left:75px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт1',
			text: 'Субконто Кт1:',
			style: 'position:absolute;left:0px;top:50px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт1',
			style: 'position:absolute;left:75px;top:50px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт2',
			text: 'Субконто Кт1:',
			style: 'position:absolute;left:0px;top:74px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт2',
			style: 'position:absolute;left:75px;top:74px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт3',
			text: 'Субконто Кт1:',
			style: 'position:absolute;left:0px;top:98px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт3',
			style: 'position:absolute;left:75px;top:98px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Получение наличности в банке',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:82px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредствБанк',
			style: 'position:absolute;left:82px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья4',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:98px;width:82px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект4',
			style: 'position:absolute;left:82px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДенежныйЧек',
			style: 'position:absolute;left:408px;top:0px;width:220px;height:19px;',
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
			style: 'position:absolute;left:6px;top:6px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в опер. учете',
			style: 'position:absolute;left:414px;top:6px;width:136px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Оплачено',
			style: 'position:absolute;left:555px;top:6px;width:73px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:185px;top:6px;width:40px;height:19px;',
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
			style: 'position:absolute;left:88px;top:55px;width:525px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПринятоОт',
			text: 'Принято от:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПринятоОт',
			style: 'position:absolute;left:89px;top:6px;width:545px;height:19px;',
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
			style: 'position:absolute;left:89px;top:30px;width:545px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьПриложение',
			text: '',
			style: 'position:absolute;left:615px;top:55px;width:19px;height:19px;',
		},
					]
				},
			]
		},
	]
});