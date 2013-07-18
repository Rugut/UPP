Ext.require(['Данные.Документы.ОтпускПоУходуЗаРебенком'], function () 
{
	Ext.define('Документы.ОтпускПоУходуЗаРебенком.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:784px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отпуск по уходу за ребенком',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:106px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:531px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 680,
			height: 19,
			style: 'position:absolute;left:96px;top:531px;width:680px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Сотрудник',
			width: 220,
			height: 19,
			style: 'position:absolute;left:106px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:768px;height:386px;',
			height: 386,width: 768,
			items:
			[
				{
					title:'Пособия',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПособияДоПолутораЛет',
			width: 88,
			height: 19,
			style: 'position:absolute;left:152px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднедневнойЗаработок',
			text: 'Среднедневной заработок:',
			style: 'position:absolute;left:12px;top:50px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СреднедневнойЗаработок',
			style: 'position:absolute;left:152px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДетей',
			text: 'Количество детей:',
			style: 'position:absolute;left:12px;top:91px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоДетей',
			style: 'position:absolute;left:152px;top:91px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Первый/последующий ребенок',
			style: 'position:absolute;left:252px;top:91px;width:221px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Пособие до 1,5 лет (за счет ФСС)',
			style: 'position:absolute;left:6px;top:6px;width:754px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выплачивать по:',
			style: 'position:absolute;left:12px;top:26px;width:138px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Пособие до 3 лет (за счет работодателя)',
			style: 'position:absolute;left:6px;top:212px;width:754px;height:16px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПособияДоТрехЛет',
			width: 88,
			height: 19,
			style: 'position:absolute;left:152px;top:233px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выплачивать по:',
			style: 'position:absolute;left:12px;top:233px;width:138px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Применять при начислении пособия льготы для проживающих в зонах с льготным статусом',
			style: 'position:absolute;left:12px;top:115px;width:501px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:252px;top:43px;width:420px;height:44px;',
			height: 44,width: 420,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница обычный расчет',
					items:
					[
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:306px;top:4px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать заработок предыдущих страхователей',
			style: 'position:absolute;left:0px;top:25px;width:277px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Рассчитывать заработок по правилам 2010 года',
			style: 'position:absolute;left:0px;top:4px;width:277px;height:19px;',
		},
					]
				},
				{
					title:'Страница переходный период',
					items:
					[
		{
			xtype: 'button',
			name: 'РассчитатьПереходногоПериода',
			text: 'Рассчитать',
			style: 'position:absolute;left:270px;top:7px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднедневнойЗаработокПереходногоПериода2010',
			text: 'Заработок переходного периода:',
			style: 'position:absolute;left:0px;top:7px;width:175px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СреднедневнойЗаработокПереходногоПериода2010',
			style: 'position:absolute;left:176px;top:7px;width:88px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Расчет среднего заработка',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:0px;width:754px;height:360px;',
			height: 360,width: 754,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница до 2011 года',
					items:
					[
		{
			id: 'РасчетСреднего',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:75px;width:754px;height:285px;',
			height: 285,width: 754,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Рабочее место',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'',
					width:'60',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'',
					width:'60',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Вид заработка',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Дней отработано',
					width:'100',
					dataIndex:'ДнейРасчетногоПериода',
					flex:1,
				},
				{
					text:'Скидка',
					width:'80',
					dataIndex:'СкидкаПоСтраховымВзносам',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'82',
					dataIndex:'БазовыйПериодНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'98',
					dataIndex:'БазовыйПериодКонец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтпускПоУходуЗаРебенком/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Результат',
					},
					{
						name:'ДнейРасчетногоПериода',
					},
					{
						name:'СкидкаПоСтраховымВзносам',
					},
					{
						name:'БазовыйПериодНачало',
					},
					{
						name:'БазовыйПериодКонец',
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
						var грид = Ext.getCmp('РасчетСреднего');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ОтпускПоУходуЗаРебенком.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтпускПоУходуЗаРебенком.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			width: 90,
			height: 19,
			style: 'position:absolute;left:111px;top:8px;width:90px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			width: 90,
			height: 19,
			style: 'position:absolute;left:227px;top:8px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаНачало',
			text: 'Расчетный период с:',
			style: 'position:absolute;left:0px;top:8px;width:109px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по',
			style: 'position:absolute;left:206px;top:8px;width:16px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Заработок за расчетный период',
			style: 'position:absolute;left:0px;top:33px;width:754px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:324px;top:8px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'Страница с 2011 года',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Заработок за расчетные годы',
			style: 'position:absolute;left:0px;top:33px;width:754px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныеГоды',
			text: 'Расчетные годы:',
			style: 'position:absolute;left:0px;top:8px;width:88px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПервыйГодРасчета',
			style: 'position:absolute;left:88px;top:8px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИ',
			text: ' и ',
			style: 'position:absolute;left:156px;top:8px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВторойГодРасчета',
			style: 'position:absolute;left:178px;top:8px;width:64px;height:19px;',
		},
		{
			id: 'РасчетСреднего2011',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:75px;width:754px;height:285px;',
			height: 285,width: 754,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Расчетный год',
					width:'100',
					dataIndex:'РасчетныйГод',
					flex:1,
				},
				{
					text:'Заработок',
					width:'100',
					dataIndex:'Заработок',
					flex:1,
				},
				{
					text:'Дней болезни, ухода за детьми и др.',
					width:'200',
					dataIndex:'ДнейБолезниУходаЗаДетьми',
					flex:1,
				},
				{
					text:'Страхователь',
					width:'100',
					dataIndex:'Страхователь',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтпускПоУходуЗаРебенком/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'РасчетныйГод',
					},
					{
						name:'Заработок',
					},
					{
						name:'ДнейБолезниУходаЗаДетьми',
					},
					{
						name:'Страхователь',
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
						var грид = Ext.getCmp('РасчетСреднего2011');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ОтпускПоУходуЗаРебенком.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтпускПоУходуЗаРебенком.ФормаДокументаСобытия");
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
					]
				},
				{
					title:'Плановые начисления',
					items:
					[
		{
			id: 'ОсновныеНачисления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:754px;height:336px;',
			height: 336,width: 754,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Рабочее место',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'',
					width:'60',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'',
					width:'60',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Начисление',
					width:'100',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Действие',
					width:'63',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Показатели для расчета начисления',
					width:'205',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР1',
					flex:1,
				},
				{
					text:'Тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР2',
					flex:1,
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
					dataIndex:'ТарифныйРазряд2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР3',
					flex:1,
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
					dataIndex:'ТарифныйРазряд3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР4',
					flex:1,
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
					dataIndex:'ТарифныйРазряд4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Показатель5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР5',
					flex:1,
				},
				{
					text:'Тарифный разряд5',
					width:'125',
					dataIndex:'ТарифныйРазряд5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Показатель6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР6',
					flex:1,
				},
				{
					text:'Тарифный разряд6',
					width:'125',
					dataIndex:'ТарифныйРазряд6',
					flex:1,
				},
				{
					text:'Сторно',
					width:'100',
					dataIndex:'Сторно',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтпускПоУходуЗаРебенком/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Действие',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказательТР1',
					},
					{
						name:'ТарифныйРазряд1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказательТР2',
					},
					{
						name:'ТарифныйРазряд2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказательТР3',
					},
					{
						name:'ТарифныйРазряд3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказательТР4',
					},
					{
						name:'ТарифныйРазряд4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказательТР5',
					},
					{
						name:'ТарифныйРазряд5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
					{
						name:'НаименованиеПоказательТР6',
					},
					{
						name:'ТарифныйРазряд6',
					},
					{
						name:'Сторно',
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
						var грид = Ext.getCmp('ОсновныеНачисления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ОтпускПоУходуЗаРебенком.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтпускПоУходуЗаРебенком.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:57px;width:389px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
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
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
				{
					title:'Плановые удержания',
					items:
					[
		{
			id: 'ПлановыеУдержания',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:754px;height:336px;',
			height: 336,width: 754,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Действие',
					width:'100',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Удержание',
					width:'100',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Показатели для расчета удержания',
					width:'205',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Показатель1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта1',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Показатель2',
					width:'81',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта2',
					width:'44',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Показатель3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Показатель4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Показатель5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Показатель6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'100',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Сторно',
					width:'100',
					dataIndex:'Сторно',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтпускПоУходуЗаРебенком/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Действие',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
					{
						name:'ДокументОснование',
					},
					{
						name:'Сторно',
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
						var грид = Ext.getCmp('ПлановыеУдержания');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ОтпускПоУходуЗаРебенком.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтпускПоУходуЗаРебенком.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:85px;top:167px;width:389px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
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
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
				{
					title:'Заявление',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:6px;top:6px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 190,
			height: 19,
			style: 'position:absolute;left:65px;top:6px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:273px;top:6px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 190,
			height: 19,
			style: 'position:absolute;left:309px;top:6px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:515px;top:6px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 190,
			height: 19,
			style: 'position:absolute;left:570px;top:6px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:14px;top:54px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидДокумента',
			width: 244,
			height: 19,
			style: 'position:absolute;left:103px;top:54px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:351px;top:54px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:400px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:494px;top:54px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:536px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:31px;width:129px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПочтовыйВФорме',
			width: 337,
			height: 19,
			style: 'position:absolute;left:203px;top:203px;width:337px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыдачиДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:672px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДействияДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:341px;top:79px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента',
			text: 'Выдан:',
			style: 'position:absolute;left:629px;top:54px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента1',
			text: 'Действует до:',
			style: 'position:absolute;left:261px;top:79px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Банк',
			width: 366,
			height: 19,
			style: 'position:absolute;left:203px;top:153px;width:366px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета',
			text: '№ счета:',
			style: 'position:absolute;left:575px;top:153px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЛицевогоСчета',
			width: 136,
			height: 19,
			style: 'position:absolute;left:624px;top:153px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование банка:',
			style: 'position:absolute;left:14px;top:178px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеБанка',
			width: 290,
			height: 19,
			style: 'position:absolute;left:132px;top:178px;width:290px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИКБанка',
			text: 'БИК:',
			style: 'position:absolute;left:639px;top:178px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БИКБанка',
			width: 88,
			height: 19,
			style: 'position:absolute;left:672px;top:178px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Пособие выплатить',
			style: 'position:absolute;left:6px;top:130px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Прочее',
			style: 'position:absolute;left:6px;top:278px;width:74px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьУполномоченного',
			text: 'Должность:',
			style: 'position:absolute;left:294px;top:341px;width:63px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДолжностьУполномоченного',
			width: 120,
			height: 19,
			style: 'position:absolute;left:358px;top:341px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУполномоченный',
			text: 'Уполномоченный страхователя:',
			style: 'position:absolute;left:14px;top:341px;width:165px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Уполномоченный',
			width: 110,
			height: 19,
			style: 'position:absolute;left:181px;top:341px;width:110px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:627px;top:289px;width:133px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьЗаявление',
			text: 'Заявление',
			style: 'position:absolute;left:627px;top:314px;width:133px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьБланкЗаявления',
			text: 'Бланк заявления',
			style: 'position:absolute;left:627px;top:339px;width:133px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:227px;width:618px;height:48px;',
			height: 48,width: 618,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Льготы при выплате пособия',
			style: 'position:absolute;left:0px;top:6px;width:476px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'В зоне:',
			style: 'position:absolute;left:214px;top:29px;width:39px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Постоянное проживание',
			style: 'position:absolute;left:8px;top:29px;width:144px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Работа',
			style: 'position:absolute;left:153px;top:29px;width:58px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'с правом на отселение',
			style: 'position:absolute;left:261px;top:29px;width:136px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'отселения',
			style: 'position:absolute;left:403px;top:29px;width:72px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'с льготным статусом',
			style: 'position:absolute;left:481px;top:29px;width:126px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:14px;top:79px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КемВыданДокумент',
			width: 178,
			height: 19,
			style: 'position:absolute;left:77px;top:79px;width:178px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:430px;top:178px;width:58px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоррСчет',
			width: 136,
			height: 19,
			style: 'position:absolute;left:496px;top:178px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента1',
			text: 'Для иностранных граждан:',
			style: 'position:absolute;left:438px;top:79px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеДокументаНаПроживание',
			width: 180,
			height: 19,
			style: 'position:absolute;left:580px;top:79px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес по регистрации:',
			style: 'position:absolute;left:14px;top:104px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресРегистрацииВФорме',
			width: 474,
			height: 19,
			style: 'position:absolute;left:138px;top:104px;width:474px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:616px;top:104px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон',
			width: 88,
			height: 19,
			style: 'position:absolute;left:672px;top:104px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пособие рассчитывается из оклада (тарифной ставки)',
			style: 'position:absolute;left:14px;top:319px;width:304px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТарифнаяСтавкаОклад',
			style: 'position:absolute;left:221px;top:297px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТарифнаяСтавкаОклад',
			text: 'Должностной оклад (тарифная ставка):',
			style: 'position:absolute;left:14px;top:297px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон1',
			text: 'Телефон:',
			style: 'position:absolute;left:482px;top:341px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон1',
			width: 84,
			height: 19,
			style: 'position:absolute;left:535px;top:341px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПочтовыйКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:544px;top:203px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПочтовыйКодПоКЛАДР',
			width: 136,
			height: 19,
			style: 'position:absolute;left:624px;top:203px;width:136px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Перечислением на счет в банке:',
			style: 'position:absolute;left:14px;top:153px;width:185px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Почтовым переводом по адресу:',
			style: 'position:absolute;left:14px;top:203px;width:185px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Документы',
					items:
					[
		{
			id: 'ДанныеОДетях',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:754px;height:203px;',
			height: 203,width: 754,
			columns:
			[
				{
					text:'Очередность',
					width:'73',
					dataIndex:'Очередность',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'60',
					dataIndex:'Фамилия',
					flex:1,
				},
				{
					text:'Имя',
					width:'60',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'60',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Дата рождения',
					width:'80',
					dataIndex:'ДатаРожденияРебенка',
					flex:1,
				},
				{
					text:'Выплачивается пособие',
					width:'91',
					dataIndex:'НаРебенкаВыплачиваетсяПособие',
					flex:1,
				},
				{
					text:'Подтверждающий документ',
					width:'410',
					dataIndex:'КолонкаПодтверждающийДокумент',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'90',
					dataIndex:'ВидПодтверждающегоДокумента',
					flex:1,
				},
				{
					text:'Дата',
					width:'80',
					dataIndex:'ДатаДокумента',
					flex:1,
				},
				{
					text:'Серия',
					width:'70',
					dataIndex:'СерияДокумента',
					flex:1,
				},
				{
					text:'Номер',
					width:'70',
					dataIndex:'НомерДокумента',
					flex:1,
				},
				{
					text:'Полное наименование документа',
					width:'100',
					dataIndex:'НаименованиеПодтверждающегоДокумента',
					flex:1,
				},
				{
					text:'Решение суда о лишении прав',
					width:'91',
					dataIndex:'НаличиеРешенияСудаОЛишенииПрав',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтпускПоУходуЗаРебенком/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Очередность',
					},
					{
						name:'Фамилия',
					},
					{
						name:'Имя',
					},
					{
						name:'Отчество',
					},
					{
						name:'ДатаРожденияРебенка',
					},
					{
						name:'НаРебенкаВыплачиваетсяПособие',
					},
					{
						name:'КолонкаПодтверждающийДокумент',
					},
					{
						name:'ВидПодтверждающегоДокумента',
					},
					{
						name:'ДатаДокумента',
					},
					{
						name:'СерияДокумента',
					},
					{
						name:'НомерДокумента',
					},
					{
						name:'НаименованиеПодтверждающегоДокумента',
					},
					{
						name:'НаличиеРешенияСудаОЛишенииПрав',
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
						var грид = Ext.getCmp('ДанныеОДетях');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ОтпускПоУходуЗаРебенком.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтпускПоУходуЗаРебенком.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиОНеполученииПособияОтОтца',
			text: 'отцом от:',
			style: 'position:absolute;left:14px;top:291px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСправкиОНеполученииПособияОтОтца',
			width: 80,
			height: 19,
			style: 'position:absolute;left:175px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСправкиОНеполученииПособияОтОтца',
			width: 80,
			height: 19,
			style: 'position:absolute;left:292px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиОНеполученииПособияОтМатери',
			text: 'матерью от:',
			style: 'position:absolute;left:14px;top:316px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСправкиОНеполученииПособияОтМатери',
			width: 80,
			height: 19,
			style: 'position:absolute;left:175px;top:316px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСправкиОНеполученииПособияОтМатери',
			width: 80,
			height: 19,
			style: 'position:absolute;left:292px;top:316px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя',
			text: '№',
			style: 'position:absolute;left:263px;top:291px;width:25px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя1',
			text: '№',
			style: 'position:absolute;left:263px;top:316px;width:25px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Документы на всех детей',
			style: 'position:absolute;left:6px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Справки о неполучении пособия',
			style: 'position:absolute;left:6px;top:268px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиПоДругимМестамРаботы',
			text: 'по другим местам работы от:',
			style: 'position:absolute;left:14px;top:341px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСправкиПоДругимМестамРаботы',
			width: 80,
			height: 19,
			style: 'position:absolute;left:175px;top:341px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСправкиПоДругимМестамРаботы',
			width: 80,
			height: 19,
			style: 'position:absolute;left:292px;top:341px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя2',
			text: '№',
			style: 'position:absolute;left:263px;top:341px;width:25px;height:19px;text-align:right;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Период отпуска с:',
			style: 'position:absolute;left:8px;top:81px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 80,
			height: 19,
			style: 'position:absolute;left:106px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 80,
			height: 19,
			style: 'position:absolute;left:206px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончания',
			text: 'по:',
			style: 'position:absolute;left:188px;top:81px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Освободить на период отпуска ставку в штатном расписании',
			style: 'position:absolute;left:297px;top:81px;width:341px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:382px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:478px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:560px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:578px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:494px;width:531px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:382px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 220,
			height: 19,
			style: 'position:absolute;left:478px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:564px;top:494px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправления',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:647px;top:494px;width:129px;height:33px;',
			height: 33,width: 129,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:371px;height:25px;',
			items:
			[
				{
					text:'Исправить',
				},
				{
					text:'Отменить исправление',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:784px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Данные для расчета среднего заработка',
				},
				{
					text:'Плановые начисления и удержания',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:251px;top:555px;width:533px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
	]
	});
});