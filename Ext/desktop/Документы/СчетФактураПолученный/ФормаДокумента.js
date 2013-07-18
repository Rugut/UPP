Ext.require(['Данные.Документы.СчетФактураПолученный'], function () 
{
	Ext.define('Документы.СчетФактураПолученный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:792px;height:489px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счет-фактура полученный',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:198px;top:32px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:437px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:116px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:216px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 686,
			height: 19,
			style: 'position:absolute;left:98px;top:437px;width:686px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:792px;height:25px;',
			items:
			[
				{
					text:'Открыть актуальный электронный документ',
				},
				{
					text:'Перезаполнить данными из электронного документа',
				},
				'-',
				{
					text:'Список электронных документов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:464px;width:792px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'fieldset',
			title: 'Документ-основание счета-фактуры',
			style: 'position:absolute;left:8px;top:154px;width:776px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Список',
			style: 'position:absolute;left:696px;top:152px;width:59px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:413px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный',
			width: 686,
			height: 19,
			style: 'position:absolute;left:98px;top:413px;width:686px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:776px;height:143px;',
			height: 143,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Одно основание',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснование',
			width: 417,
			height: 19,
			style: 'position:absolute;left:76px;top:0px;width:417px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:\r\n',
			style: 'position:absolute;left:0px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:41px;width:776px;height:97px;',
			height: 97,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Описание возможностей',
				},
				{
					title:'Данные по авансу',
					items:
					[
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьДокументыОснования',
			text: 'Для полученных счетов-фактур можно указать несколько документов-оснований (флаг «Список»), если поступление от поставщика по одному счету-фактуре отражено разными документами ',
			style: 'position:absolute;left:6px;top:6px;width:481px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: 'Ставка НДС:',
			style: 'position:absolute;left:206px;top:32px;width:66px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтавкаНДС',
			width: 92,
			height: 19,
			style: 'position:absolute;left:276px;top:32px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:0px;top:57px;width:66px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'СуммаНДС',
			width: 120,
			height: 19,
			style: 'position:absolute;left:79px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаСНДС',
			text: 'Сумма с НДС:',
			style: 'position:absolute;left:0px;top:32px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'СуммаСНДС',
			width: 120,
			height: 19,
			style: 'position:absolute;left:79px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Реквизиты счета-фактуры на аванс',
			style: 'position:absolute;left:5px;top:6px;width:771px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Список',
			style: 'position:absolute;left:434px;top:4px;width:59px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУвеличение',
			text: 'Увеличение:',
			style: 'position:absolute;left:0px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Увеличение',
			style: 'position:absolute;left:79px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДСУвеличение',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:185px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НДСУвеличение',
			style: 'position:absolute;left:276px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУменьшение',
			text: 'Уменьшение:',
			style: 'position:absolute;left:0px;top:58px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Уменьшение',
			style: 'position:absolute;left:79px;top:58px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДСУменьшение',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:185px;top:58px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НДСУменьшение',
			style: 'position:absolute;left:276px;top:58px;width:92px;height:19px;',
		},
					]
				},
				{
					title:'Данные по авансу несколько',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Реквизиты счета-фактуры на аванс',
			style: 'position:absolute;left:0px;top:12px;width:776px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Список',
			style: 'position:absolute;left:434px;top:6px;width:59px;height:19px;',
		},
		{
			id: 'Авансы',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:30px;width:776px;height:67px;',
			height: 67,width: 776,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сумма с НДС',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'80',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'120',
					dataIndex:'СуммаНДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетФактураПолученный/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Авансы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СчетФактураПолученный.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СчетФактураПолученный.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Поступление не подлежит налогообложению (освобождается от налогообложения) ',
			style: 'position:absolute;left:0px;top:23px;width:486px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Бланк строгой отчетности',
			style: 'position:absolute;left:491px;top:23px;width:150px;height:15px;',
		},
					]
				},
				{
					title:'Несколько оснований',
					items:
					[
		{
			id: 'ДокументыОснования',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:119px;',
			height: 119,width: 776,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Документ - основание для выписки счета-фактуры',
					width:'312',
					dataIndex:'ДокументОснование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетФактураПолученный/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументОснование',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ДокументыОснования');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СчетФактураПолученный.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СчетФактураПолученный.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Поступление не подлежит налогообложению (освобождается от налогообложения) ',
			style: 'position:absolute;left:0px;top:122px;width:478px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:317px;width:776px;height:67px;',
			height: 67,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница 1',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Получение счета-фактуры',
			style: 'position:absolute;left:0px;top:0px;width:774px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодВидаОперации',
			text: 'Код вида операции:',
			style: 'position:absolute;left:0px;top:19px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодВидаОперации',
			width: 50,
			height: 19,
			style: 'position:absolute;left:106px;top:19px;width:50px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодСпособаПолучения',
			text: 'Способ получения:',
			style: 'position:absolute;left:166px;top:19px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеЭД',
			text: 'Состояние ЭД:',
			style: 'position:absolute;left:0px;top:43px;width:105px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'На бумажном носителе',
			style: 'position:absolute;left:272px;top:19px;width:139px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В электронном виде',
			style: 'position:absolute;left:413px;top:19px;width:124px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:387px;width:776px;height:24px;',
			height: 24,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница всего',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумента',
			text: 'Всего:\r\n',
			style: 'position:absolute;left:0px;top:1px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВалютаДокумента',
			text: '',
			style: 'position:absolute;left:148px;top:1px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:40px;top:1px;width:105px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСДокумента',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:265px;top:1px;width:66px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДСДокумента',
			style: 'position:absolute;left:336px;top:1px;width:105px;height:19px;',
		},
					]
				},
				{
					title:'Страница увеличениеи уменьшение',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаУвеличение',
			text: 'Увеличение:',
			style: 'position:absolute;left:0px;top:0px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаУвеличение',
			style: 'position:absolute;left:72px;top:0px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаУменьшение',
			text: 'Уменьшение:',
			style: 'position:absolute;left:389px;top:0px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаУменьшение',
			style: 'position:absolute;left:475px;top:0px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВалютаДокумента1',
			text: '',
			style: 'position:absolute;left:173px;top:0px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВалютаДокумента2',
			text: '',
			style: 'position:absolute;left:576px;top:0px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСУменьшение',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:628px;top:0px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДСУменьшение',
			style: 'position:absolute;left:694px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСКДоплате',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:225px;top:0px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДСУвеличение',
			style: 'position:absolute;left:291px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:364px;height:92px;',
			height: 92,width: 364,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКонтрагент1',
			text: 'Контрагент:\r\n',
			style: 'position:absolute;left:0px;top:24px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'Договор:\r\n',
			style: 'position:absolute;left:0px;top:49px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 257,
			height: 19,
			style: 'position:absolute;left:107px;top:0px;width:257px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент',
			width: 257,
			height: 19,
			style: 'position:absolute;left:107px;top:24px;width:257px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента',
			width: 257,
			height: 19,
			style: 'position:absolute;left:107px;top:49px;width:257px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидСчетаФактуры',
			text: 'Вид счета-фактуры:',
			style: 'position:absolute;left:0px;top:73px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидСчетаФактуры',
			width: 257,
			height: 19,
			style: 'position:absolute;left:107px;top:73px;width:257px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:82px;width:376px;height:44px;',
			height: 44,width: 376,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница корректировочный',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерИсходногоДокумента',
			width: 91,
			height: 19,
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсходногоДокумента',
			text: 'от:',
			style: 'position:absolute;left:265px;top:0px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсходногоДокумента',
			width: 91,
			height: 19,
			style: 'position:absolute;left:285px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерИсправленияИсходногоДокумента',
			style: 'position:absolute;left:172px;top:25px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсправленияИсходногоДокумента',
			text: 'от:',
			style: 'position:absolute;left:265px;top:25px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсправленияИсходногоДокумента',
			width: 91,
			height: 19,
			style: 'position:absolute;left:285px;top:25px;width:91px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'с учетом исправления номер:',
			style: 'position:absolute;left:0px;top:25px;width:169px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерИсходногоДокумента',
			text: 'К счету-фактуре номер:',
			style: 'position:absolute;left:0px;top:0px;width:126px;height:19px;',
		},
					]
				},
				{
					title:'Страница обычный',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:32px;width:376px;height:19px;',
			height: 19,width: 376,
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
			disabled: false,
			name: 'НомерВходящего',
			width: 91,
			height: 19,
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВходящего',
			width: 89,
			height: 19,
			style: 'position:absolute;left:286px;top:0px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: 'Вх. номер:',
			style: 'position:absolute;left:0px;top:0px;width:58px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящаяДата',
			text: 'от:',
			style: 'position:absolute;left:265px;top:0px;width:20px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:57px;width:376px;height:19px;',
			height: 19,width: 376,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница исправление',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Исправление номер:',
			style: 'position:absolute;left:0px;top:0px;width:126px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерИсправления',
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсправления',
			text: 'от:',
			style: 'position:absolute;left:265px;top:0px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсправления',
			width: 91,
			height: 19,
			style: 'position:absolute;left:285px;top:0px;width:91px;height:19px;',
		},
					]
				},
				{
					title:'Страница корректировка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерИсходногоДокумента3',
			width: 91,
			height: 19,
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсходногоДокумента3',
			text: 'от',
			style: 'position:absolute;left:265px;top:0px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсходногоДокумента3',
			width: 91,
			height: 19,
			style: 'position:absolute;left:285px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерИсходногоДокумента3',
			text: 'К счету-фактуре номер:',
			style: 'position:absolute;left:0px;top:0px;width:126px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});