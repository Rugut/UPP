Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.УправлениеОтчетностью',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:443px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регламентированная и финансовая отчетность',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:219px;height:403px;',
			height: 403,width: 219,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:1px;width:219px;height:318px;',
			height: 318,width: 219,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Виды отчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:219px;height:268px;',
			height: 268,width: 219,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Пометка удаления',
					width:'100',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'ЭтоГруппа',
					width:'100',
					dataIndex:'ЭтоГруппа',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'100',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'Источник отчета',
					width:'100',
					dataIndex:'ИсточникОтчета',
					flex:1,
				},
				{
					text:'Описание',
					width:'100',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Внешний',
					width:'100',
					dataIndex:'Внешний',
					flex:1,
				},
				{
					text:'Периоды',
					width:'100',
					dataIndex:'Периоды',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'ЭтоГруппа',
					},
					{
						name:'Ссылка',
					},
					{
						name:'ИсточникОтчета',
					},
					{
						name:'Описание',
					},
					{
						name:'Внешний',
					},
					{
						name:'Периоды',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Виды отчетов',
			style: 'position:absolute;left:0px;top:0px;width:219px;height:16px;',
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
			style: 'position:absolute;left:232px;top:32px;width:540px;height:404px;',
			height: 404,width: 540,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:313px;width:538px;height:90px;',
			height: 90,width: 538,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-clear-trigger',
			trigger4Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 328,
			height: 19,
			style: 'position:absolute;left:84px;top:5px;width:328px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организации:',
			style: 'position:absolute;left:10px;top:5px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодИФНС',
			width: 56,
			height: 19,
			style: 'position:absolute;left:479px;top:5px;width:56px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ИФНС:',
			style: 'position:absolute;left:422px;top:5px;width:56px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'период:',
			style: 'position:absolute;left:10px;top:32px;width:72px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:84px;top:27px;width:454px;height:62px;',
			height: 62,width: 454,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:452px;height:60px;',
			height: 60,width: 452,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Произвольный период',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:304px;top:23px;width:20px;height:20px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаПериодаОтчета',
			width: 76,
			height: 20,
			style: 'position:absolute;left:123px;top:23px;width:76px;height:20px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонцаПериодаОтчета',
			width: 76,
			height: 20,
			style: 'position:absolute;left:223px;top:23px;width:76px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВводаС',
			text: 'с',
			style: 'position:absolute;left:113px;top:23px;width:10px;height:20px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц1',
			text: 'Янв',
			style: 'position:absolute;left:91px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц3',
			text: 'I кв',
			style: 'position:absolute;left:148px;top:33px;width:28px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц5',
			text: 'Май',
			style: 'position:absolute;left:209px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц7',
			text: 'Июл',
			style: 'position:absolute;left:268px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц9',
			text: 'III кв',
			style: 'position:absolute;left:324px;top:33px;width:32px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц11',
			text: 'Ноя',
			style: 'position:absolute;left:387px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц2',
			text: 'Фев',
			style: 'position:absolute;left:120px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц4',
			text: 'Апр',
			style: 'position:absolute;left:179px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц6',
			text: 'II кв',
			style: 'position:absolute;left:237px;top:33px;width:28px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц8',
			text: 'Авг',
			style: 'position:absolute;left:298px;top:33px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц10',
			text: 'Окт',
			style: 'position:absolute;left:357px;top:33px;width:25px;height:17px;text-align:center;',
		},
					]
				},
				{
					title:'Стандартный период',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'Год:',
			style: 'position:absolute;left:0px;top:7px;width:23px;height:15px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Год',
			style: 'position:absolute;left:29px;top:4px;width:60px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц12',
			text: 'IV кв',
			style: 'position:absolute;left:414px;top:33px;width:32px;height:17px;text-align:center;',
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
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'по итогам:',
			style: 'position:absolute;left:10px;top:52px;width:72px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'произвольный',
			style: 'position:absolute;left:10px;top:70px;width:96px;height:15px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:540px;height:313px;',
			height: 313,width: 540,
			items:
			[
				{
					title:'Журнал отчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:26px;width:526px;height:129px;',
			height: 129,width: 526,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование отчета',
					width:'120',
					dataIndex:'НаименованиеОтчета',
					flex:1,
				},
				{
					text:'Период',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'ИФНС',
					width:'48',
					dataIndex:'КодИМНС',
					flex:1,
				},
				{
					text:'Вид',
					width:'36',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Дата',
					width:'120',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'84',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'93',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Периодичность',
					width:'110',
					dataIndex:'Периодичность',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Статус',
					},
					{
						name:'Картинка',
					},
					{
						name:'НаименованиеОтчета',
					},
					{
						name:'Период',
					},
					{
						name:'Организация',
					},
					{
						name:'КодИМНС',
					},
					{
						name:'Вид',
					},
					{
						name:'Комментарий',
					},
					{
						name:'Дата',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'Периодичность',
					},
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:5px;top:161px;width:526px;height:126px;',
			height: 126,width: 526,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница ФНС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
			columns:
			[
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Уведомление об уточнении налоговой декларации (отчета)',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ОтветНаЗапрос',
					},
					{
						name:'ОтветНаОтветНаЗапрос',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:24px;',
			items:
			[
				{
					text:'Обменяться',
				},
				'-',
				'-',
				'-',
			]
		},
					]
				},
				{
					title:'Страница ПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
			columns:
			[
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Протокол',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Квитанция на протокол',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
				{
					title:'Страница ФСС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:126px;',
			height: 126,width: 526,
			columns:
			[
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаОтправки',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаПолученияРезультата',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'192',
					dataIndex:'ИдентификаторОтправкиНаСервере',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ДатаОтправки',
					},
					{
						name:'ДатаПолученияРезультата',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'Результат',
					},
					{
						name:'ИдентификаторОтправкиНаСервере',
					},
				]
			},
		},
					]
				},
				{
					title:'Страница Заявление',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
			columns:
			[
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Уведомление об уточнении налоговой декларации (отчета)',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'Возврат',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеВозврата',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ОтветНаЗапрос',
					},
					{
						name:'ОтветНаОтветНаЗапрос',
					},
					{
						name:'Возврат',
					},
					{
						name:'ПодтверждениеВозврата',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
				{
					title:'Страница ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
			columns:
			[
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в орган ФСГС',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Протокол',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении протокола',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Журнал выгрузки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:26px;width:526px;height:261px;',
			height: 261,width: 526,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'96',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'107',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Период',
					width:'102',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'ИФНС',
					width:'48',
					dataIndex:'КодИМНС',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Период По',
					width:'84',
					dataIndex:'ПериодПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'Период',
					},
					{
						name:'Организация',
					},
					{
						name:'КодИМНС',
					},
					{
						name:'Комментарий',
					},
					{
						name:'ПериодПо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:5px;top:1px;width:231px;height:24px;',
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
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Сохранить',
				},
				'-',
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОткрытьДокументОтбор',
			text: '',
			style: 'position:absolute;left:512px;top:4px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчиститьДокументОтбор',
			text: 'Х',
			style: 'position:absolute;left:490px;top:4px;width:19px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'по отчету:',
			style: 'position:absolute;left:166px;top:5px;width:67px;height:15px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Справочник отчетов',
				},
				'-',
				{
					text:'Календарь',
				},
				'-',
				{
					text:'Информация для пользователей',
				},
				'-',
				{
					text:'Информация об обновлениях',
				},
				'-',
				{
					text:'Настройки',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});