Ext.require(['Данные.Обработки.ПодготовкаДанныхПФР2010'], function () 
{
	Ext.define('Обработки.ПодготовкаДанныхПФР2010.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:616px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подготовка данных для передачи в ПФР',
	
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
			style: 'position:absolute;left:205px;top:8px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 100,
			height: 19,
			style: 'position:absolute;left:278px;top:8px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Состав форм:',
			style: 'position:absolute;left:594px;top:8px;width:70px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод3',
			text: 'Отчетный период:',
			style: 'position:absolute;left:385px;top:8px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:45px;width:984px;height:563px;',
			height: 563,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Квартальная отчетность',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДанныеОСтажеФизлица',
			text: '  Состав пачки СЗВ-6',
			style: 'position:absolute;left:0px;top:310px;width:984px;height:19px;',
		},
		{
			id: 'ПачкиДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:46px;width:248px;height:96px;',
			height: 96,width: 248,
			columns:
			[
				{
					text:'Комплект документов',
					width:'130',
					dataIndex:'Пачка',
					flex:1,
				},
				{
					text:'Отчетный период',
					width:'100',
					dataIndex:'ОтчетныйПериод',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Пачка',
					},
					{
						name:'ОтчетныйПериод',
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
						var грид = Ext.getCmp('ПачкиДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:168px;width:984px;height:137px;',
			height: 137,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'СЗВ6',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:343px;height:137px;',
			height: 137,width: 343,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			id: 'ПачкиСЗВ6',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:26px;width:333px;height:111px;',
			height: 111,width: 333,
			columns:
			[
				{
					text:'№',
					width:'24',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Пачка СЗВ',
					width:'100',
					dataIndex:'ДокументПачка',
					flex:1,
				},
				{
					text:'Страховая часть',
					width:'138',
					dataIndex:'КолонкаСтраховая',
					flex:1,
				},
				{
					text:'Начислено',
					width:'41',
					dataIndex:'НачисленоСтраховая',
					flex:1,
				},
				{
					text:'Уплачено',
					width:'44',
					dataIndex:'УплаченоСтраховая',
					flex:1,
				},
				{
					text:'Накопительная часть',
					width:'153',
					dataIndex:'КолонкаНакопительная',
					flex:1,
				},
				{
					text:'Начислено',
					width:'70',
					dataIndex:'НачисленоНакопительная',
					flex:1,
				},
				{
					text:'Уплачено',
					width:'83',
					dataIndex:'УплаченоНакопительная',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументПачка',
					},
					{
						name:'КолонкаСтраховая',
					},
					{
						name:'НачисленоСтраховая',
					},
					{
						name:'УплаченоСтраховая',
					},
					{
						name:'КолонкаНакопительная',
					},
					{
						name:'НачисленоНакопительная',
					},
					{
						name:'УплаченоНакопительная',
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
						var грид = Ext.getCmp('ПачкиСЗВ6');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:344px;top:0px;width:640px;height:137px;',
			height: 137,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипФормы',
			text: 'Форма:',
			style: 'position:absolute;left:121px;top:24px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидКорректировки',
			text: 'Сведения:',
			style: 'position:absolute;left:0px;top:2px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:121px;top:46px;width:93px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСоставления1',
			width: 96,
			height: 19,
			style: 'position:absolute;left:216px;top:46px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц',
			text: 'Категория ЗЛ:',
			style: 'position:absolute;left:121px;top:94px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'КатегорияЗастрахованныхЛиц',
			width: 96,
			height: 19,
			style: 'position:absolute;left:216px;top:94px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный1',
			text: 'Ответственный:',
			style: 'position:absolute;left:326px;top:94px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Исполнитель1',
			width: 140,
			height: 19,
			style: 'position:absolute;left:412px;top:94px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:326px;top:46px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Руководитель1',
			width: 140,
			height: 19,
			style: 'position:absolute;left:412px;top:46px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:326px;top:70px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДолжностьРуководителя1',
			width: 140,
			height: 19,
			style: 'position:absolute;left:412px;top:70px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки2',
			text: 'Номер пачки:',
			style: 'position:absolute;left:121px;top:70px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки1',
			width: 96,
			height: 19,
			style: 'position:absolute;left:216px;top:70px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод2',
			text: 'Корректируемый период:',
			style: 'position:absolute;left:344px;top:2px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КорректируемыйПериод',
			width: 163,
			height: 19,
			style: 'position:absolute;left:477px;top:2px;width:163px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить2',
			text: 'Проверить пачку',
			style: 'position:absolute;left:510px;top:116px;width:130px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:121px;height:112px;',
			height: 112,width: 121,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РаспределитьВзносы',
			text: 'Перераспределить взносы в пачке',
			style: 'position:absolute;left:0px;top:19px;width:117px;height:36px;',
		},
		{
			xtype: 'button',
			name: 'РаспределитьВзносыСКомментарием',
			text: 'Перераспределить с комментарием',
			style: 'position:absolute;left:0px;top:67px;width:117px;height:36px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:121px;top:118px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 289,
			height: 19,
			style: 'position:absolute;left:216px;top:118px;width:289px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Исходные',
			style: 'position:absolute;left:56px;top:2px;width:74px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Корректирующие',
			style: 'position:absolute;left:132px;top:2px;width:110px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отменяющие',
			style: 'position:absolute;left:246px;top:2px;width:89px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-6-1',
			style: 'position:absolute;left:177px;top:24px;width:63px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-6-2',
			style: 'position:absolute;left:246px;top:24px;width:74px;height:19px;',
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
					title:'АДВ11',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Уплата страховых взносов на обязательное пенсионное страхование за прошлые годы',
			style: 'position:absolute;left:0px;top:2px;width:984px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:20px;width:984px;height:116px;',
			height: 116,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			id: 'СведенияОЗадолженности',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:984px;height:91px;',
			height: 91,width: 984,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тип строки',
					width:'240',
					dataIndex:'ТипСтроки',
					flex:1,
				},
				{
					text:'Год',
					width:'100',
					dataIndex:'Год',
					flex:1,
				},
				{
					text:'Страховая часть',
					width:'100',
					dataIndex:'СтраховаяЧасть',
					flex:1,
				},
				{
					text:'Накопительная часть',
					width:'118',
					dataIndex:'НакопительнаяЧасть1',
					flex:1,
				},
				{
					text:'Дополнительный тариф',
					width:'129',
					dataIndex:'ДополнительныйТариф',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТипСтроки',
					},
					{
						name:'Год',
					},
					{
						name:'СтраховаяЧасть',
					},
					{
						name:'НакопительнаяЧасть1',
					},
					{
						name:'ДополнительныйТариф',
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
						var грид = Ext.getCmp('СведенияОЗадолженности');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Данные о уплате взносов доступны только расчетчику!',
			style: 'position:absolute;left:25px;top:9px;width:291px;height:18px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:333px;width:984px;height:207px;',
			height: 207,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'СЗВ6',
					items:
					[
		{
			id: 'ФизлицаПачек',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:333px;height:182px;',
			height: 182,width: 333,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Застрахованное лицо',
					width:'200',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Адрес для информирования',
					width:'100',
					dataIndex:'АдресДляИнформирования',
					flex:1,
				},
				{
					text:'Начислено страховая',
					width:'100',
					dataIndex:'НачисленоСтраховая',
					flex:1,
				},
				{
					text:'Уплачено страховая',
					width:'100',
					dataIndex:'УплаченоСтраховая',
					flex:1,
				},
				{
					text:'Начислено накопительная',
					width:'100',
					dataIndex:'НачисленоНакопительная',
					flex:1,
				},
				{
					text:'Уплачено накопительная',
					width:'100',
					dataIndex:'УплаченоНакопительная',
					flex:1,
				},
				{
					text:'Доначислено страховая',
					width:'100',
					dataIndex:'ДоначисленоСтраховая',
					flex:1,
				},
				{
					text:'Доначислено накопительная',
					width:'100',
					dataIndex:'ДоначисленоНакопительная',
					flex:1,
				},
				{
					text:'Страховой номер ПФР',
					width:'100',
					dataIndex:'СтраховойНомерПФР',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'100',
					dataIndex:'Фамилия',
					flex:1,
				},
				{
					text:'Имя',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'100',
					dataIndex:'Отчество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'АдресДляИнформирования',
					},
					{
						name:'НачисленоСтраховая',
					},
					{
						name:'УплаченоСтраховая',
					},
					{
						name:'НачисленоНакопительная',
					},
					{
						name:'УплаченоНакопительная',
					},
					{
						name:'ДоначисленоСтраховая',
					},
					{
						name:'ДоначисленоНакопительная',
					},
					{
						name:'СтраховойНомерПФР',
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ФизлицаПачек');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Периоды работы за отчетный период',
			style: 'position:absolute;left:347px;top:77px;width:637px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:347px;top:93px;width:637px;height:24px;',
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
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			id: 'ЗаписиОСтаже',
			xtype: 'grid',
			style: 'position:absolute;left:347px;top:118px;width:637px;height:88px;',
			height: 88,width: 637,
			columns:
			[
				{
					text:'Период',
					width:'120',
					dataIndex:'НевидимаяКолонка1',
					flex:1,
				},
				{
					text:'Начало',
					width:'60',
					dataIndex:'ДатаНачалаПериода',
					flex:1,
				},
				{
					text:'Окончание',
					width:'60',
					dataIndex:'ДатаОкончанияПериода',
					flex:1,
				},
				{
					text:'Территориальные условия',
					width:'95',
					dataIndex:'НевидимаяКолонка2',
					flex:1,
				},
				{
					text:'Код',
					width:'30',
					dataIndex:'ТерриториальныеУсловия',
					flex:1,
				},
				{
					text:'Ставка',
					width:'49',
					dataIndex:'ПараметрТерриториальныхУсловий',
					flex:1,
				},
				{
					text:'Условия труда',
					width:'120',
					dataIndex:'НевидимаяКолонка3',
					flex:1,
				},
				{
					text:'Код особых условий труда',
					width:'60',
					dataIndex:'ОсобыеУсловияТруда',
					flex:1,
				},
				{
					text:'Код позиции списка',
					width:'60',
					dataIndex:'КодПозицииСписка',
					flex:1,
				},
				{
					text:'Исчисление стажа',
					width:'100',
					dataIndex:'НевидимаяКолонка4',
					flex:1,
				},
				{
					text:'Код',
					width:'26',
					dataIndex:'ОснованиеИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Отпуск/болезнь',
					width:'54',
					dataIndex:'ТретийПараметрИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Факт.отраб.время',
					width:'100',
					dataIndex:'НевидимаяКолонка5',
					flex:1,
				},
				{
					text:'Месяцы',
					width:'30',
					dataIndex:'ПервыйПараметрИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Дни',
					width:'30',
					dataIndex:'ВторойПараметрИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Досрочное назначение пенсии',
					width:'150',
					dataIndex:'НевидимаяКолонка6',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'ОснованиеВыслугиЛет',
					flex:1,
				},
				{
					text:'Часы/месяцы',
					width:'30',
					dataIndex:'ПервыйПараметрВыслугиЛет',
					flex:1,
				},
				{
					text:'Минуты',
					width:'30',
					dataIndex:'ВторойПараметрВыслугиЛет',
					flex:1,
				},
				{
					text:'Ставка',
					width:'30',
					dataIndex:'ТретийПараметрВыслугиЛет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НевидимаяКолонка1',
					},
					{
						name:'ДатаНачалаПериода',
					},
					{
						name:'ДатаОкончанияПериода',
					},
					{
						name:'НевидимаяКолонка2',
					},
					{
						name:'ТерриториальныеУсловия',
					},
					{
						name:'ПараметрТерриториальныхУсловий',
					},
					{
						name:'НевидимаяКолонка3',
					},
					{
						name:'ОсобыеУсловияТруда',
					},
					{
						name:'КодПозицииСписка',
					},
					{
						name:'НевидимаяКолонка4',
					},
					{
						name:'ОснованиеИсчисляемогоСтажа',
					},
					{
						name:'ТретийПараметрИсчисляемогоСтажа',
					},
					{
						name:'НевидимаяКолонка5',
					},
					{
						name:'ПервыйПараметрИсчисляемогоСтажа',
					},
					{
						name:'ВторойПараметрИсчисляемогоСтажа',
					},
					{
						name:'НевидимаяКолонка6',
					},
					{
						name:'ОснованиеВыслугиЛет',
					},
					{
						name:'ПервыйПараметрВыслугиЛет',
					},
					{
						name:'ВторойПараметрВыслугиЛет',
					},
					{
						name:'ТретийПараметрВыслугиЛет',
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
						var грид = Ext.getCmp('ЗаписиОСтаже');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресДляИнформирования',
			width: 295,
			height: 19,
			style: 'position:absolute;left:689px;top:0px;width:295px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:347px;top:27px;width:637px;height:50px;',
			height: 50,width: 637,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоСтраховая',
			style: 'position:absolute;left:149px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоНакопительная',
			style: 'position:absolute;left:149px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'УплаченоСтраховая',
			style: 'position:absolute;left:286px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'УплаченоНакопительная',
			style: 'position:absolute;left:286px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Уплачено:',
			style: 'position:absolute;left:233px;top:0px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Накопит. часть. Начислено:',
			style: 'position:absolute;left:0px;top:23px;width:148px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Уплачено:',
			style: 'position:absolute;left:233px;top:23px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховаяЧасть',
			text: 'Страховая часть. Начислено:',
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;text-align:right;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:370px;top:0px;width:267px;height:42px;',
			height: 42,width: 267,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДоначисленоСтраховая',
			style: 'position:absolute;left:79px;top:0px;width:68px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДоначисленоНакопительная',
			style: 'position:absolute;left:79px;top:23px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'В т.ч. донач-но:',
			style: 'position:absolute;left:0px;top:0px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'В т.ч. донач-но:',
			style: 'position:absolute;left:0px;top:23px;width:79px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДоУплаченоСтраховая',
			style: 'position:absolute;left:199px;top:0px;width:68px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДоУплаченоНакопительная',
			style: 'position:absolute;left:199px;top:23px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись52',
			text: 'доупл-но:',
			style: 'position:absolute;left:151px;top:0px;width:47px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'доупл-но:',
			style: 'position:absolute;left:151px;top:23px;width:47px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьАдресДляИнформирования',
			text: 'Адрес для информирования:',
			style: 'position:absolute;left:537px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР',
			text: 'Страховой №:',
			style: 'position:absolute;left:347px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтраховойНомерПФР',
			width: 100,
			height: 19,
			style: 'position:absolute;left:422px;top:0px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'ОК',
			style: 'position:absolute;left:923px;top:542px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: '',
			style: 'position:absolute;left:961px;top:542px;width:23px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:254px;top:22px;width:730px;height:120px;',
			height: 120,width: 730,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница АДВ',
					items:
					[
		{
			xtype: 'button',
			name: 'Печать',
			text: '&Печать',
			style: 'position:absolute;left:615px;top:49px;width:115px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПоказатьФайлы',
			text: 'Показать &файлы',
			style: 'position:absolute;left:615px;top:74px;width:115px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'НаДиск',
			text: 'Файлы на &диск',
			style: 'position:absolute;left:615px;top:99px;width:115px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:179px;top:0px;width:93px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСоставления',
			width: 100,
			height: 19,
			style: 'position:absolute;left:274px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный3',
			text: 'Ответственный:',
			style: 'position:absolute;left:179px;top:24px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Исполнитель',
			width: 100,
			height: 19,
			style: 'position:absolute;left:274px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель2',
			text: 'Руководитель:',
			style: 'position:absolute;left:380px;top:0px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Руководитель',
			width: 140,
			height: 19,
			style: 'position:absolute;left:457px;top:0px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя2',
			text: 'Должность:',
			style: 'position:absolute;left:380px;top:24px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДолжностьРуководителя',
			width: 140,
			height: 19,
			style: 'position:absolute;left:457px;top:24px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:6px;top:0px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки',
			width: 85,
			height: 19,
			style: 'position:absolute;left:81px;top:0px;width:85px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:77px;width:591px;height:43px;',
			height: 43,width: 591,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РаспределитьВзносыВоВсехПачках',
			text: 'Перераспределить взносы во всех пачках',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий3',
			text: 'Комментарий:',
			style: 'position:absolute;left:179px;top:48px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий3',
			width: 323,
			height: 19,
			style: 'position:absolute;left:274px;top:48px;width:323px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'РасчетСтраховыхВзносов',
			width: 88,
			height: 19,
			style: 'position:absolute;left:642px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетСтраховыхВзносов',
			text: 'РСВ-1:',
			style: 'position:absolute;left:605px;top:0px;width:35px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПроверитьКомплект',
			text: 'Проверить',
			style: 'position:absolute;left:615px;top:24px;width:115px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:24px;width:173px;height:51px;',
			height: 51,width: 173,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаПринятоВПФР',
			text: 'Пометить все пачки как принятые ПФР',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:43px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пустая страница',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСостояниеПачекДокументов1',
			text: 'Распределение сумм уплаченных взносов производится по коэффициентам текущего периода без учета переданных ранее в ПФР сведений.',
			style: 'position:absolute;left:31px;top:6px;width:684px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДанныеОФизлицахСЗВ63',
			text: '  Состав пачки СЗВ-6-3',
			style: 'position:absolute;left:0px;top:237px;width:984px;height:19px;',
		},
					]
				},
				{
					title:'Оформление пенсии',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНазваниеПачки',
			text: '  Комплекты документов',
			style: 'position:absolute;left:0px;top:0px;width:984px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодготовкиДокументов1',
			text: 'Данные для передачи еще не готовы. Необходимо создать хотя бы одну пачку.',
			style: 'position:absolute;left:22px;top:542px;width:700px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОК1',
			text: 'ОК',
			style: 'position:absolute;left:923px;top:542px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка1',
			text: '',
			style: 'position:absolute;left:961px;top:542px;width:23px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПачкиСПВ',
			text: '  Пачки документов',
			style: 'position:absolute;left:0px;top:133px;width:984px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:155px;width:293px;height:24px;',
			items:
			[
				{
					text:'Добавить',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'Принято ПФР',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
			]
		},
		{
			id: 'ПачкиСПВ',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:179px;width:293px;height:102px;',
			height: 102,width: 293,
			columns:
			[
				{
					text:'Пачки документов',
					width:'131',
					dataIndex:'Пачка',
					flex:1,
				},
				{
					text:'Страховая часть',
					width:'138',
					dataIndex:'КолонкаСтраховая',
					flex:1,
				},
				{
					text:'Начислено',
					width:'41',
					dataIndex:'НачисленоСтраховая',
					flex:1,
				},
				{
					text:'Уплачено',
					width:'44',
					dataIndex:'УплаченоСтраховая',
					flex:1,
				},
				{
					text:'Накопительная часть',
					width:'153',
					dataIndex:'КолонкаНакопительная',
					flex:1,
				},
				{
					text:'Начислено',
					width:'70',
					dataIndex:'НачисленоНакопительная',
					flex:1,
				},
				{
					text:'Уплачено',
					width:'83',
					dataIndex:'УплаченоНакопительная',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Пачка',
					},
					{
						name:'КолонкаСтраховая',
					},
					{
						name:'НачисленоСтраховая',
					},
					{
						name:'УплаченоСтраховая',
					},
					{
						name:'КолонкаНакопительная',
					},
					{
						name:'НачисленоНакопительная',
					},
					{
						name:'УплаченоНакопительная',
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
						var грид = Ext.getCmp('ПачкиСПВ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'Пенсионеры',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:47px;width:333px;height:81px;',
			height: 81,width: 333,
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
					width:'126',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Дата выхода на пенсию',
					width:'150',
					dataIndex:'ДатаСоставленияСведений',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'ДатаСоставленияСведений',
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
						var грид = Ext.getCmp('Пенсионеры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаСформировать1',
			text: 'Сформировать сведения',
			style: 'position:absolute;left:344px;top:94px;width:192px;height:34px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:537px;width:984px;height:3px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:300px;top:154px;width:684px;height:127px;',
			height: 127,width: 684,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница данных',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидКорректировки1',
			text: 'Сведения:',
			style: 'position:absolute;left:6px;top:6px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись47',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:109px;top:31px;width:93px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСоставления2',
			width: 100,
			height: 19,
			style: 'position:absolute;left:206px;top:31px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц1',
			text: 'Категория ЗЛ:',
			style: 'position:absolute;left:109px;top:81px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'КатегорияЗастрахованныхЛиц1',
			width: 100,
			height: 19,
			style: 'position:absolute;left:206px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный4',
			text: 'Ответственный:',
			style: 'position:absolute;left:321px;top:81px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Исполнитель2',
			width: 160,
			height: 19,
			style: 'position:absolute;left:407px;top:81px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель3',
			text: 'Руководитель:',
			style: 'position:absolute;left:321px;top:31px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Руководитель2',
			width: 160,
			height: 19,
			style: 'position:absolute;left:407px;top:31px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя3',
			text: 'Должность:',
			style: 'position:absolute;left:321px;top:56px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДолжностьРуководителя2',
			width: 160,
			height: 19,
			style: 'position:absolute;left:407px;top:56px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки3',
			text: 'Номер пачки:',
			style: 'position:absolute;left:109px;top:56px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки2',
			width: 100,
			height: 19,
			style: 'position:absolute;left:206px;top:56px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить3',
			text: 'Проверить',
			style: 'position:absolute;left:576px;top:6px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Печать3',
			text: 'Печать',
			style: 'position:absolute;left:576px;top:31px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПоказатьФайл3',
			text: 'Показать файл',
			style: 'position:absolute;left:576px;top:56px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'НаДиск3',
			text: 'Файл на диск',
			style: 'position:absolute;left:576px;top:81px;width:108px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:31px;width:101px;height:77px;',
			height: 77,width: 101,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РаспределитьВзносы1',
			text: '',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:71px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий1',
			text: 'Комментарий:',
			style: 'position:absolute;left:109px;top:106px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий1',
			width: 361,
			height: 19,
			style: 'position:absolute;left:206px;top:106px;width:361px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Исходные',
			style: 'position:absolute;left:62px;top:6px;width:74px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Корректирующие',
			style: 'position:absolute;left:138px;top:6px;width:110px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отменяющие',
			style: 'position:absolute;left:252px;top:6px;width:89px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:310px;width:984px;height:224px;',
			height: 224,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Данные физлица',
					items:
					[
		{
			id: 'ФизлицаПачекСПВ',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:333px;height:200px;',
			height: 200,width: 333,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Застрахованное лицо',
					width:'200',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Страховой номер ПФР',
					width:'100',
					dataIndex:'СтраховойНомерПФР',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'100',
					dataIndex:'Фамилия',
					flex:1,
				},
				{
					text:'Имя',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'100',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Начислено страховая',
					width:'100',
					dataIndex:'НачисленоСтраховая',
					flex:1,
				},
				{
					text:'Уплачено страховая',
					width:'100',
					dataIndex:'УплаченоСтраховая',
					flex:1,
				},
				{
					text:'Начислено накопительная',
					width:'100',
					dataIndex:'НачисленоНакопительная',
					flex:1,
				},
				{
					text:'Уплачено накопительная',
					width:'100',
					dataIndex:'УплаченоНакопительная',
					flex:1,
				},
				{
					text:'Дата составления',
					width:'100',
					dataIndex:'ДатаСоставления',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'СтраховойНомерПФР',
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
						name:'НачисленоСтраховая',
					},
					{
						name:'УплаченоСтраховая',
					},
					{
						name:'НачисленоНакопительная',
					},
					{
						name:'УплаченоНакопительная',
					},
					{
						name:'ДатаСоставления',
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
						var грид = Ext.getCmp('ФизлицаПачекСПВ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Периоды работы за отчетный период',
			style: 'position:absolute;left:347px;top:77px;width:637px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:347px;top:93px;width:637px;height:24px;',
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
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			id: 'ЗаписиОСтажеСПВ',
			xtype: 'grid',
			style: 'position:absolute;left:347px;top:118px;width:637px;height:106px;',
			height: 106,width: 637,
			columns:
			[
				{
					text:'Период',
					width:'120',
					dataIndex:'НевидимаяКолонка1',
					flex:1,
				},
				{
					text:'Начало',
					width:'60',
					dataIndex:'ДатаНачалаПериода',
					flex:1,
				},
				{
					text:'Окончание',
					width:'60',
					dataIndex:'ДатаОкончанияПериода',
					flex:1,
				},
				{
					text:'Территориальные условия',
					width:'95',
					dataIndex:'НевидимаяКолонка2',
					flex:1,
				},
				{
					text:'Код',
					width:'30',
					dataIndex:'ТерриториальныеУсловия',
					flex:1,
				},
				{
					text:'Ставка',
					width:'49',
					dataIndex:'ПараметрТерриториальныхУсловий',
					flex:1,
				},
				{
					text:'Условия труда',
					width:'120',
					dataIndex:'НевидимаяКолонка3',
					flex:1,
				},
				{
					text:'Код особых условий труда',
					width:'60',
					dataIndex:'ОсобыеУсловияТруда',
					flex:1,
				},
				{
					text:'Код позиции списка',
					width:'60',
					dataIndex:'КодПозицииСписка',
					flex:1,
				},
				{
					text:'Исчисление стажа',
					width:'100',
					dataIndex:'НевидимаяКолонка4',
					flex:1,
				},
				{
					text:'Код',
					width:'26',
					dataIndex:'ОснованиеИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Отпуск/болезнь',
					width:'54',
					dataIndex:'ТретийПараметрИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Факт.отраб.время',
					width:'100',
					dataIndex:'НевидимаяКолонка5',
					flex:1,
				},
				{
					text:'Месяцы',
					width:'30',
					dataIndex:'ПервыйПараметрИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Дни',
					width:'30',
					dataIndex:'ВторойПараметрИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Досрочное назначение пенсии',
					width:'150',
					dataIndex:'НевидимаяКолонка6',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'ОснованиеВыслугиЛет',
					flex:1,
				},
				{
					text:'Часы/месяцы',
					width:'30',
					dataIndex:'ПервыйПараметрВыслугиЛет',
					flex:1,
				},
				{
					text:'Минуты',
					width:'30',
					dataIndex:'ВторойПараметрВыслугиЛет',
					flex:1,
				},
				{
					text:'Ставка',
					width:'30',
					dataIndex:'ТретийПараметрВыслугиЛет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НевидимаяКолонка1',
					},
					{
						name:'ДатаНачалаПериода',
					},
					{
						name:'ДатаОкончанияПериода',
					},
					{
						name:'НевидимаяКолонка2',
					},
					{
						name:'ТерриториальныеУсловия',
					},
					{
						name:'ПараметрТерриториальныхУсловий',
					},
					{
						name:'НевидимаяКолонка3',
					},
					{
						name:'ОсобыеУсловияТруда',
					},
					{
						name:'КодПозицииСписка',
					},
					{
						name:'НевидимаяКолонка4',
					},
					{
						name:'ОснованиеИсчисляемогоСтажа',
					},
					{
						name:'ТретийПараметрИсчисляемогоСтажа',
					},
					{
						name:'НевидимаяКолонка5',
					},
					{
						name:'ПервыйПараметрИсчисляемогоСтажа',
					},
					{
						name:'ВторойПараметрИсчисляемогоСтажа',
					},
					{
						name:'НевидимаяКолонка6',
					},
					{
						name:'ОснованиеВыслугиЛет',
					},
					{
						name:'ПервыйПараметрВыслугиЛет',
					},
					{
						name:'ВторойПараметрВыслугиЛет',
					},
					{
						name:'ТретийПараметрВыслугиЛет',
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
						var грид = Ext.getCmp('ЗаписиОСтажеСПВ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:347px;top:24px;width:637px;height:50px;',
			height: 50,width: 637,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоСтраховая1',
			style: 'position:absolute;left:223px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоНакопительная1',
			style: 'position:absolute;left:223px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'УплаченоСтраховая1',
			style: 'position:absolute;left:371px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'УплаченоНакопительная1',
			style: 'position:absolute;left:371px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Уплачено:',
			style: 'position:absolute;left:314px;top:0px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись44',
			text: 'Накопительная часть взносов. Начислено:',
			style: 'position:absolute;left:0px;top:23px;width:219px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Уплачено:',
			style: 'position:absolute;left:314px;top:23px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховаяЧасть1',
			text: 'Страховая часть взносов. Начислено:',
			style: 'position:absolute;left:24px;top:0px;width:195px;height:19px;text-align:right;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР1',
			text: 'Страховой №:',
			style: 'position:absolute;left:347px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтраховойНомерПФР1',
			width: 100,
			height: 19,
			style: 'position:absolute;left:422px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСоставленияФЛ',
			width: 100,
			height: 19,
			style: 'position:absolute;left:798px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСоставленияФЛ',
			text: 'Дата составления сведений (выхода на пенсию):',
			style: 'position:absolute;left:541px;top:0px;width:255px;height:19px;',
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПачкиСЗВ63',
			text: '  Пачки документов',
			style: 'position:absolute;left:0px;top:3px;width:984px;height:19px;',
		},
					]
				},
				{
					title:'Сведения о начисленном заработке',
					items:
					[
		{
			id: 'ПачкиСЗВ63',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:49px;width:293px;height:182px;',
			height: 182,width: 293,
			columns:
			[
				{
					text:'Пачка',
					width:'58',
					dataIndex:'Пачка',
					flex:1,
				},
				{
					text:'Заработок',
					width:'68',
					dataIndex:'Заработок',
					flex:1,
				},
				{
					text:'В т.ч. облагается взносами',
					width:'145',
					dataIndex:'ОблагаетсяВзносами',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Пачка',
					},
					{
						name:'Заработок',
					},
					{
						name:'ОблагаетсяВзносами',
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
						var грид = Ext.getCmp('ПачкиСЗВ63');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:537px;width:984px;height:3px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:305px;top:25px;width:679px;height:206px;',
			height: 206,width: 679,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница данных',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидКорректировки2',
			text: 'Сведения:',
			style: 'position:absolute;left:0px;top:47px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись51',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:0px;top:71px;width:93px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСоставления3',
			width: 100,
			height: 19,
			style: 'position:absolute;left:99px;top:71px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц2',
			text: 'Категория ЗЛ:',
			style: 'position:absolute;left:0px;top:96px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'КатегорияЗастрахованныхЛиц2',
			width: 200,
			height: 19,
			style: 'position:absolute;left:99px;top:96px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный5',
			text: 'Ответственный:',
			style: 'position:absolute;left:0px;top:145px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Исполнитель3',
			width: 200,
			height: 19,
			style: 'position:absolute;left:99px;top:145px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель4',
			text: 'Руководитель:',
			style: 'position:absolute;left:0px;top:121px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Руководитель3',
			width: 200,
			height: 19,
			style: 'position:absolute;left:99px;top:121px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя4',
			text: 'Должность:',
			style: 'position:absolute;left:307px;top:121px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДолжностьРуководителя3',
			width: 200,
			height: 19,
			style: 'position:absolute;left:389px;top:121px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки4',
			text: 'Номер пачки:',
			style: 'position:absolute;left:205px;top:71px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки3',
			width: 100,
			height: 19,
			style: 'position:absolute;left:282px;top:71px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить4',
			text: 'Проверить пачку',
			style: 'position:absolute;left:549px;top:185px;width:130px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'РассчитатьЗаработок',
			text: 'Обновить данные о заработке',
			style: 'position:absolute;left:0px;top:171px;width:160px;height:35px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипДоговора',
			text: 'Тип договора:',
			style: 'position:absolute;left:307px;top:96px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ТипДоговора',
			width: 200,
			height: 19,
			style: 'position:absolute;left:389px;top:96px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий2',
			text: 'Комментарий:',
			style: 'position:absolute;left:307px;top:145px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий2',
			width: 200,
			height: 19,
			style: 'position:absolute;left:389px;top:145px;width:200px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПринятоВПФР1',
			text: 'Пометить все пачки как принятые ПФР',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписьАДВ62',
			text: 'Опись АДВ-6-2:',
			style: 'position:absolute;left:389px;top:71px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ОписьАДВ62',
			width: 113,
			height: 19,
			style: 'position:absolute;left:476px;top:71px;width:113px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Исходные',
			style: 'position:absolute;left:99px;top:47px;width:74px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Корректирующие',
			style: 'position:absolute;left:177px;top:47px;width:110px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отменяющие',
			style: 'position:absolute;left:292px;top:47px;width:89px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:264px;width:984px;height:270px;',
			height: 270,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Данные физлица',
					items:
					[
		{
			id: 'ФизлицаПачекСЗВ63',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:342px;height:245px;',
			height: 245,width: 342,
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
					width:'100',
					dataIndex:'ФизЛицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
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
						var грид = Ext.getCmp('ФизлицаПачекСЗВ63');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах',
			text: 'Обновить',
			style: 'position:absolute;left:358px;top:248px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Заработок по месяцам',
			style: 'position:absolute;left:358px;top:0px;width:148px;height:19px;',
		},
		{
			id: 'СведенияОЗаработке',
			xtype: 'grid',
			style: 'position:absolute;left:358px;top:24px;width:329px;height:219px;',
			height: 219,width: 329,
			columns:
			[
				{
					text:'Месяц',
					width:'60',
					dataIndex:'Месяц',
					flex:1,
				},
				{
					text:'Заработок',
					width:'100',
					dataIndex:'Заработок',
					flex:1,
				},
				{
					text:'В т.ч. облагается взносами',
					width:'144',
					dataIndex:'ОблагаетсяВзносами',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Месяц',
					},
					{
						name:'Заработок',
					},
					{
						name:'ОблагаетсяВзносами',
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
						var грид = Ext.getCmp('СведенияОЗаработке');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:702px;top:24px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 207,
			height: 19,
			style: 'position:absolute;left:777px;top:24px;width:207px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:702px;top:48px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 207,
			height: 19,
			style: 'position:absolute;left:777px;top:48px;width:207px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:702px;top:72px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 207,
			height: 19,
			style: 'position:absolute;left:777px;top:72px;width:207px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР3',
			text: 'Страховой №:',
			style: 'position:absolute;left:702px;top:96px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтраховойНомерПФР3',
			width: 101,
			height: 19,
			style: 'position:absolute;left:777px;top:96px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Личные данные',
			style: 'position:absolute;left:702px;top:0px;width:125px;height:19px;',
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодготовкиДокументов2',
			text: 'Данные для передачи еще не готовы. Необходимо создать хотя бы одну пачку.',
			style: 'position:absolute;left:22px;top:542px;width:591px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОК2',
			text: 'ОК',
			style: 'position:absolute;left:923px;top:542px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка2',
			text: '',
			style: 'position:absolute;left:961px;top:542px;width:23px;height:21px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:197px;height:34px;',
			height: 34,width: 197,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаСформировать',
			text: 'Сформировать сведения',
			style: 'position:absolute;left:0px;top:0px;width:192px;height:34px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:479px;top:8px;width:112px;height:34px;',
			height: 34,width: 112,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница период персучета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетныйПериод',
			width: 112,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:112px;height:19px;',
		},
					]
				},
				{
					title:'Страница отчетный год',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОтчетныйГод',
			style: 'position:absolute;left:0px;top:0px;width:112px;height:19px;',
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
			boxLabel: 'Квартальная отчетность (СЗВ)',
			style: 'position:absolute;left:665px;top:8px;width:172px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Оформление пенсии (СПВ)',
			style: 'position:absolute;left:839px;top:8px;width:153px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сведения о заработке (СЗВ-6-3)',
			style: 'position:absolute;left:665px;top:27px;width:181px;height:18px;',
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