Ext.require(['Данные.Обработки.УправлениеПерсональнымиДанными'], function () 
{
	Ext.define('Обработки.УправлениеПерсональнымиДанными.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:711px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Управление персональными данными',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:6px;width:696px;height:566px;',
			height: 566,width: 696,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Режим доступен',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСубъект',
			text: 'Субъект:',
			style: 'position:absolute;left:280px;top:541px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Субъект',
			width: 222,
			height: 19,
			style: 'position:absolute;left:330px;top:541px;width:222px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУничтожить',
			text: 'Уничтожить сведения',
			style: 'position:absolute;left:555px;top:541px;width:135px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка2',
			text: 'Уничтожение персональных данных по запросу субъекта предусмотрено п.1 ст.14, п.3 ст. 20, п.3 ст.21 и п.4 ст. 21 закона 152-ФЗ ("О персональных данных")',
			style: 'position:absolute;left:35px;top:507px;width:655px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'СубъектЯвляется',
			text: 'Субъект является:',
			style: 'position:absolute;left:6px;top:542px;width:102px;height:18px;',
		},
		{
			xtype: 'fieldset',
			title: 'Уничтожение персональных данных',
			style: 'position:absolute;left:6px;top:485px;width:684px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Просмотр зарегистрированных событий',
			style: 'position:absolute;left:6px;top:6px;width:684px;height:16px;',
		},
		{
			id: 'События',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:453px;height:424px;',
			height: 424,width: 453,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'109',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Представление события',
					width:'147',
					dataIndex:'ПредставлениеСобытия',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'133',
					dataIndex:'ИмяПользователя',
					flex:1,
				},
				{
					text:'Метаданные',
					width:'178',
					dataIndex:'ПредставлениеМетаданных',
					flex:1,
				},
				{
					text:'Компьютер',
					width:'89',
					dataIndex:'Компьютер',
					flex:1,
				},
				{
					text:'Пользователь (UID)',
					width:'36',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Данные',
					width:'98',
					dataIndex:'Данные',
					flex:1,
				},
				{
					text:'Метаданные',
					width:'100',
					dataIndex:'Метаданные',
					flex:1,
				},
				{
					text:'Вспомогательный IPПорт',
					width:'100',
					dataIndex:'ВспомогательныйIPПорт',
					flex:1,
				},
				{
					text:'Имя приложения',
					width:'100',
					dataIndex:'ИмяПриложения',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Основной IPПорт',
					width:'100',
					dataIndex:'ОсновнойIPПорт',
					flex:1,
				},
				{
					text:'Представление данных',
					width:'100',
					dataIndex:'ПредставлениеДанных',
					flex:1,
				},
				{
					text:'Представление приложения',
					width:'100',
					dataIndex:'ПредставлениеПриложения',
					flex:1,
				},
				{
					text:'Рабочий сервер',
					width:'100',
					dataIndex:'РабочийСервер',
					flex:1,
				},
				{
					text:'Сеанс',
					width:'100',
					dataIndex:'Сеанс',
					flex:1,
				},
				{
					text:'Событие',
					width:'100',
					dataIndex:'Событие',
					flex:1,
				},
				{
					text:'Соединение',
					width:'100',
					dataIndex:'Соединение',
					flex:1,
				},
				{
					text:'Статус транзакции',
					width:'100',
					dataIndex:'СтатусТранзакции',
					flex:1,
				},
				{
					text:'Транзакция',
					width:'100',
					dataIndex:'Транзакция',
					flex:1,
				},
				{
					text:'Уровень',
					width:'100',
					dataIndex:'Уровень',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УправлениеПерсональнымиДанными/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'ПредставлениеСобытия',
					},
					{
						name:'ИмяПользователя',
					},
					{
						name:'ПредставлениеМетаданных',
					},
					{
						name:'Компьютер',
					},
					{
						name:'Пользователь',
					},
					{
						name:'Данные',
					},
					{
						name:'Метаданные',
					},
					{
						name:'ВспомогательныйIPПорт',
					},
					{
						name:'ИмяПриложения',
					},
					{
						name:'Комментарий',
					},
					{
						name:'ОсновнойIPПорт',
					},
					{
						name:'ПредставлениеДанных',
					},
					{
						name:'ПредставлениеПриложения',
					},
					{
						name:'РабочийСервер',
					},
					{
						name:'Сеанс',
					},
					{
						name:'Событие',
					},
					{
						name:'Соединение',
					},
					{
						name:'СтатусТранзакции',
					},
					{
						name:'Транзакция',
					},
					{
						name:'Уровень',
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
						var грид = Ext.getCmp('События');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УправлениеПерсональнымиДанными.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УправлениеПерсональнымиДанными.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'СведенияОСобытии',
			xtype: 'grid',
			style: 'position:absolute;left:469px;top:161px;width:221px;height:316px;',
			height: 316,width: 221,
			columns:
			[
				{
					text:'Список субъектов события',
					width:'237',
					dataIndex:'СубъектСобытия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УправлениеПерсональнымиДанными/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'СубъектСобытия',
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
						var грид = Ext.getCmp('СведенияОСобытии');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УправлениеПерсональнымиДанными.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УправлениеПерсональнымиДанными.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтборСубъект',
			text: 'Отбор:',
			style: 'position:absolute;left:94px;top:27px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборСубъект',
			width: 179,
			height: 19,
			style: 'position:absolute;left:280px;top:27px;width:179px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:138px;top:27px;width:138px;height:19px;',
		},
		{
			id: 'ОбластиДанных',
			xtype: 'grid',
			style: 'position:absolute;left:469px;top:74px;width:221px;height:61px;',
			height: 61,width: 221,
			columns:
			[
				{
					text:'',
					width:'25',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Области данных',
					width:'196',
					dataIndex:'ОбластьДанных',
					flex:1,
				},
				{
					text:'Список объектов события',
					width:'206',
					dataIndex:'ИмяТаблицыИБ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УправлениеПерсональнымиДанными/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ОбластьДанных',
					},
					{
						name:'ИмяТаблицыИБ',
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
						var грид = Ext.getCmp('ОбластиДанных');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УправлениеПерсональнымиДанными.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УправлениеПерсональнымиДанными.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:113px;top:541px;width:138px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Области данных',
			style: 'position:absolute;left:469px;top:53px;width:221px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Субъекты события',
			style: 'position:absolute;left:469px;top:141px;width:221px;height:16px;',
		},
					]
				},
				{
					title:'Режим недоступен',
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