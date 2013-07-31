Ext.require(['Данные.Обработки.ЗагрузкаДанныхCommerceML'], function () 
{
	Ext.define('Обработки.ЗагрузкаДанныхCommerceML.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка данных в формате CommerceML',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:210px;width:648px;height:250px;',
			height: 250,width: 648,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Каталог',
					items:
					[
		{
			id: 'ТоварыКаталог',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:648px;height:226px;',
			height: 226,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
					width:'290',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Артикул',
					width:'105',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Штрих код',
					width:'105',
					dataIndex:'ШтрихКод',
					flex:1,
				},
				{
					text:'Единица',
					width:'59',
					dataIndex:'БазоваяЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Ид',
					width:'133',
					dataIndex:'Ид',
					flex:1,
				},
				{
					text:'Идентификатор документа',
					width:'104',
					dataIndex:'ИдДокумента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Артикул',
					},
					{
						name:'ШтрихКод',
					},
					{
						name:'БазоваяЕдиницаИзмерения',
					},
					{
						name:'Ид',
					},
					{
						name:'ИдДокумента',
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
						var грид = Ext.getCmp('ТоварыКаталог');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Прайс',
					items:
					[
		{
			id: 'ТоварыПрайс',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:648px;height:226px;',
			height: 226,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
					width:'188',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Артикул',
					width:'117',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Штрихкод',
					width:'127',
					dataIndex:'ШтрихКод',
					flex:1,
				},
				{
					text:'Единица',
					width:'53',
					dataIndex:'БазоваяЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Ид',
					width:'84',
					dataIndex:'Ид',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'58',
					dataIndex:'ТипЦены',
					flex:1,
				},
				{
					text:'Цена',
					width:'77',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Валюта',
					width:'62',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Единица',
					width:'76',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'44',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Идентификатор документа',
					width:'174',
					dataIndex:'ИдДокумента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Артикул',
					},
					{
						name:'ШтрихКод',
					},
					{
						name:'БазоваяЕдиницаИзмерения',
					},
					{
						name:'Ид',
					},
					{
						name:'ТипЦены',
					},
					{
						name:'Цена',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'ИдДокумента',
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
						var грид = Ext.getCmp('ТоварыПрайс');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Документ',
					items:
					[
		{
			id: 'ТоварыДокумент',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:648px;height:226px;',
			height: 226,width: 648,
			columns:
			[
				{
					text:'Номенклатура из файла',
					width:'116',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Артикул',
					width:'113',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Штрихкод',
					width:'116',
					dataIndex:'ШтрихКод',
					flex:1,
				},
				{
					text:'Единица',
					width:'79',
					dataIndex:'БазоваяЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Ид',
					width:'104',
					dataIndex:'Ид',
					flex:1,
				},
				{
					text:'Количество',
					width:'53',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'63',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'42',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Цена',
					width:'59',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'81',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Идентификатор документа',
					width:'118',
					dataIndex:'ИдДокумента',
					flex:1,
				},
				{
					text:'Сумма старая',
					width:'100',
					dataIndex:'СуммаСтарая',
					flex:1,
				},
				{
					text:'Цена поступления',
					width:'100',
					dataIndex:'ЦенаПоступления',
					flex:1,
				},
				{
					text:'Сумма поступления',
					width:'100',
					dataIndex:'СуммаПоступления',
					flex:1,
				},
				{
					text:'Сумма вознаграждения',
					width:'100',
					dataIndex:'СуммаВознаграждения',
					flex:1,
				},
				{
					text:'Сумма НДСВознаграждения',
					width:'100',
					dataIndex:'СуммаНДСВознаграждения',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Ставка НДС',
					width:'100',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Артикул',
					},
					{
						name:'ШтрихКод',
					},
					{
						name:'БазоваяЕдиницаИзмерения',
					},
					{
						name:'Ид',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Цена',
					},
					{
						name:'Сумма',
					},
					{
						name:'ИдДокумента',
					},
					{
						name:'СуммаСтарая',
					},
					{
						name:'ЦенаПоступления',
					},
					{
						name:'СуммаПоступления',
					},
					{
						name:'СуммаВознаграждения',
					},
					{
						name:'СуммаНДСВознаграждения',
					},
					{
						name:'Качество',
					},
					{
						name:'СтавкаНДС',
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
						var грид = Ext.getCmp('ТоварыДокумент');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Счет фактура',
					items:
					[
		{
			id: 'ДокументыОснования',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:29px;width:636px;height:215px;',
			height: 215,width: 636,
			columns:
			[
				{
					text:'Номер основания',
					width:'140',
					dataIndex:'НомерОснования',
					flex:1,
				},
				{
					text:'Дата основания',
					width:'140',
					dataIndex:'ДатаОснования',
					flex:1,
				},
				{
					text:'Документ основания',
					width:'278',
					dataIndex:'ДокументОснования',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерОснования',
					},
					{
						name:'ДатаОснования',
					},
					{
						name:'ДокументОснования',
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
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСобытия");
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
			id: 'ЭлДокументы',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:105px;width:648px;height:96px;',
			height: 96,width: 648,
			columns:
			[
				{
					text:'Вид документа',
					width:'120',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Редактируемый документ',
					width:'200',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Дата',
					width:'97',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'72',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'152',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Организация',
					width:'147',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Валюта',
					width:'69',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Ид',
					width:'100',
					dataIndex:'Ид',
					flex:1,
				},
				{
					text:'Уникальный идентификатор',
					width:'204',
					dataIndex:'УникальныйИдентификаторДокумента',
					flex:1,
				},
				{
					text:'Срок платежа',
					width:'100',
					dataIndex:'СрокПлатежа',
					flex:1,
				},
				{
					text:'Номер счета',
					width:'100',
					dataIndex:'НомерСчета',
					flex:1,
				},
				{
					text:'Банк',
					width:'153',
					dataIndex:'Банк',
					flex:1,
				},
				{
					text:'Банк счет корреспондентский',
					width:'100',
					dataIndex:'БанкСчетКорреспондентский',
					flex:1,
				},
				{
					text:'Банк наименование',
					width:'100',
					dataIndex:'БанкНаименование',
					flex:1,
				},
				{
					text:'Банк адрес',
					width:'100',
					dataIndex:'БанкАдрес',
					flex:1,
				},
				{
					text:'Банк НЕПрямых расходов',
					width:'100',
					dataIndex:'БанкНЕПрямыхРасходов',
					flex:1,
				},
				{
					text:'Банк НЕПрямых расходов счет корреспондентский',
					width:'100',
					dataIndex:'БанкНЕПрямыхРасходовСчетКорреспондентский',
					flex:1,
				},
				{
					text:'Банк НЕПрямых расходов наименование',
					width:'100',
					dataIndex:'БанкНЕПрямыхРасходовНаименование',
					flex:1,
				},
				{
					text:'Банк НЕПрямых расходов адрес',
					width:'100',
					dataIndex:'БанкНЕПрямыхРасходовАдрес',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'156',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Номер документа основания',
					width:'100',
					dataIndex:'НомерДокументаОснования',
					flex:1,
				},
				{
					text:'Дата документа основания',
					width:'100',
					dataIndex:'ДатаДокументаОснования',
					flex:1,
				},
				{
					text:'Документ основания',
					width:'100',
					dataIndex:'ДокументОснования',
					flex:1,
				},
				{
					text:'Способ расчета комиссионного вознаграждения',
					width:'100',
					dataIndex:'СпособРасчетаКомиссионногоВознаграждения',
					flex:1,
				},
				{
					text:'Удержать комиссионное вознаграждение',
					width:'100',
					dataIndex:'УдержатьКомиссионноеВознаграждение',
					flex:1,
				},
				{
					text:'Сумма вознаграждения',
					width:'100',
					dataIndex:'СуммаВознаграждения',
					flex:1,
				},
				{
					text:'Ставка НДСВознаграждения',
					width:'100',
					dataIndex:'СтавкаНДСВознаграждения',
					flex:1,
				},
				{
					text:'Процент комиссионного вознаграждения',
					width:'100',
					dataIndex:'ПроцентКомиссионногоВознаграждения',
					flex:1,
				},
				{
					text:'Контрагент покупатель',
					width:'100',
					dataIndex:'КонтрагентПокупатель',
					flex:1,
				},
				{
					text:'Контрагент поставщик',
					width:'100',
					dataIndex:'КонтрагентПоставщик',
					flex:1,
				},
				{
					text:'Роль контрагента',
					width:'100',
					dataIndex:'РольКонтрагента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'Документ',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Организация',
					},
					{
						name:'Валюта',
					},
					{
						name:'Ид',
					},
					{
						name:'УникальныйИдентификаторДокумента',
					},
					{
						name:'СрокПлатежа',
					},
					{
						name:'НомерСчета',
					},
					{
						name:'Банк',
					},
					{
						name:'БанкСчетКорреспондентский',
					},
					{
						name:'БанкНаименование',
					},
					{
						name:'БанкАдрес',
					},
					{
						name:'БанкНЕПрямыхРасходов',
					},
					{
						name:'БанкНЕПрямыхРасходовСчетКорреспондентский',
					},
					{
						name:'БанкНЕПрямыхРасходовНаименование',
					},
					{
						name:'БанкНЕПрямыхРасходовАдрес',
					},
					{
						name:'Комментарий',
					},
					{
						name:'НомерДокументаОснования',
					},
					{
						name:'ДатаДокументаОснования',
					},
					{
						name:'ДокументОснования',
					},
					{
						name:'СпособРасчетаКомиссионногоВознаграждения',
					},
					{
						name:'УдержатьКомиссионноеВознаграждение',
					},
					{
						name:'СуммаВознаграждения',
					},
					{
						name:'СтавкаНДСВознаграждения',
					},
					{
						name:'ПроцентКомиссионногоВознаграждения',
					},
					{
						name:'КонтрагентПокупатель',
					},
					{
						name:'КонтрагентПоставщик',
					},
					{
						name:'РольКонтрагента',
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
						var грид = Ext.getCmp('ЭлДокументы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:81px;width:648px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Установить флажки',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:648px;height:19px;',
			height: 19,width: 648,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя файла данных:',
			style: 'position:absolute;left:0px;top:0px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаДанных',
			width: 534,
			height: 19,
			style: 'position:absolute;left:114px;top:0px;width:534px;height:19px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Обрабатывать письма за период с:',
			style: 'position:absolute;left:0px;top:0px;width:187px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 110,
			height: 19,
			style: 'position:absolute;left:190px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:310px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 110,
			height: 19,
			style: 'position:absolute;left:334px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:451px;top:0px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПометитьОбработанныеПисьмаКакПрочтенные',
			text: 'Пометить прочтение',
			style: 'position:absolute;left:508px;top:0px;width:140px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:664px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сохранить данные',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Загрузить данные из файла',
			style: 'position:absolute;left:8px;top:33px;width:170px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Загрузить данные из электронной почты',
			style: 'position:absolute;left:183px;top:33px;width:232px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Загрузить данные',
				},
				'-',
				{
					text:'Соответствия объектов',
				},
				{
					text:'Настройки',
				},
			]
		},
	]
	});
});