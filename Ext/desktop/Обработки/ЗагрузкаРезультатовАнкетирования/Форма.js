Ext.require(['Данные.Обработки.ЗагрузкаРезультатовАнкетирования'], function () 
{
	Ext.define('Обработки.ЗагрузкаРезультатовАнкетирования.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:573px;height:417px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка результатов анкетирования',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:557px;height:377px;',
			height: 377,width: 557,
			items:
			[
				{
					title:'Загрузка из почты',
					items:
					[
		{
			id: 'Входящие',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:99px;width:222px;height:151px;',
			height: 151,width: 222,
			columns:
			[
				{
					text:'Тема',
					width:'134',
					dataIndex:'Тема',
					flex:1,
				},
				{
					text:'Эл. справочника',
					width:'69',
					dataIndex:'ОбъектЗагрузки',
					flex:1,
				},
				{
					text:'Анкета',
					width:'143',
					dataIndex:'Анкета',
					flex:1,
				},
				{
					text:'Опрос',
					width:'215',
					dataIndex:'Опрос',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаРезультатовАнкетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Тема',
					},
					{
						name:'ОбъектЗагрузки',
					},
					{
						name:'Анкета',
					},
					{
						name:'Опрос',
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
						var грид = Ext.getCmp('Входящие');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только непрочитанные входящие письма',
			style: 'position:absolute;left:6px;top:6px;width:234px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Предварительный просмотр:',
			style: 'position:absolute;left:234px;top:74px;width:171px;height:25px;',
		},
		{
			id: 'Вложения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:256px;width:222px;height:93px;',
			height: 93,width: 222,
			columns:
			[
				{
					text:'Вложения',
					width:'101',
					dataIndex:'Вложение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаРезультатовАнкетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Вложение',
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
						var грид = Ext.getCmp('Вложения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'ПолеОтветов',
			xtype: 'grid',
			style: 'position:absolute;left:234px;top:281px;width:315px;height:68px;',
			height: 68,width: 315,
			columns:
			[
				{
					text:'Вопрос',
					width:'89',
					dataIndex:'Вопрос',
					flex:1,
				},
				{
					text:'Ответ',
					width:'95',
					dataIndex:'Ответ',
					flex:1,
				},
				{
					text:'Развернутый ответ',
					width:'198',
					dataIndex:'РазвернутыйОтвет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаРезультатовАнкетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Вопрос',
					},
					{
						name:'Ответ',
					},
					{
						name:'РазвернутыйОтвет',
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
						var грид = Ext.getCmp('ПолеОтветов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать письма по указанной анкете',
			style: 'position:absolute;left:6px;top:26px;width:234px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПолеВвода1.Представление',
			width: 304,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:245px;top:26px;width:304px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:234px;top:256px;width:315px;height:25px;',
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'УчетнаяЗапись.Представление',
			width: 304,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:245px;top:48px;width:304px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По учетной записи',
			style: 'position:absolute;left:6px;top:48px;width:222px;height:19px;',
		},
					]
				},
				{
					title:'Загрузка из каталога',
					items:
					[
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:129px;width:273px;height:222px;',
			height: 222,width: 273,
			columns:
			[
				{
					text:'Файл',
					width:'60',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Анкета',
					width:'60',
					dataIndex:'Анкета',
					flex:1,
				},
				{
					text:'Эл. справочника',
					width:'87',
					dataIndex:'ОбъектЗагрузки',
					flex:1,
				},
				{
					text:'Опрос',
					width:'63',
					dataIndex:'Опрос',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаРезультатовАнкетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Анкета',
					},
					{
						name:'ОбъектЗагрузки',
					},
					{
						name:'Опрос',
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
						var грид = Ext.getCmp('Дерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
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
			name: 'ИмяКаталога',
			width: 484,
			height: 19,
			style: 'position:absolute;left:65px;top:5px;width:484px;height:19px;',
		},
		{
			id: 'ПолеОтветовИзКаталога',
			xtype: 'grid',
			style: 'position:absolute;left:285px;top:129px;width:264px;height:221px;',
			height: 221,width: 264,
			columns:
			[
				{
					text:'Вопрос',
					width:'98',
					dataIndex:'Вопрос',
					flex:1,
				},
				{
					text:'Ответ',
					width:'148',
					dataIndex:'Ответ',
					flex:1,
				},
				{
					text:'Развернутый ответ',
					width:'148',
					dataIndex:'РазвернутыйОтвет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаРезультатовАнкетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Вопрос',
					},
					{
						name:'Ответ',
					},
					{
						name:'РазвернутыйОтвет',
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
						var грид = Ext.getCmp('ПолеОтветовИзКаталога');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Результаты опросов ',
			style: 'position:absolute;left:6px;top:66px;width:543px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Просматривать подкаталоги',
			style: 'position:absolute;left:6px;top:27px;width:175px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Предварительный просмотр:',
			style: 'position:absolute;left:285px;top:85px;width:169px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Файлы с ответами:',
			style: 'position:absolute;left:6px;top:84px;width:169px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Каталог:',
			style: 'position:absolute;left:6px;top:5px;width:57px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать файлы по указанной анкете',
			style: 'position:absolute;left:6px;top:44px;width:234px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'АнкетаОтбораФайлы.Представление',
			width: 304,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:245px;top:44px;width:304px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗагрузкаРезультатовАнкетирования.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:573px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Справка',
				},
			]
		},
	]
	});
});