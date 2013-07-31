Ext.require(['Данные.Обработки.ТОНастройка'], function () 
{
	Ext.define('Обработки.ТОНастройка.ФормаПомощникаНастроек',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:653px;height:393px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помощник подключения и настройки торгового оборудования',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:637px;height:352px;',
			height: 352,width: 637,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Приветствие',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вас приветствует помощник подключения и настройки торгового оборудования!',
			style: 'position:absolute;left:166px;top:0px;width:460px;height:56px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись124',
			text: 'Помощник поможет Вам выбрать драйвер устройства, модель, а также настроить параметры устройства и проверить корректность настроенных параметров, проведя пробное подключение.',
			style: 'position:absolute;left:166px;top:97px;width:460px;height:51px;',
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'Использование помощника облегчит подключение нового оборудования в конфигурации и позволит не задумываться о последовательности выполняемых действий.',
			style: 'position:absolute;left:166px;top:169px;width:460px;height:49px;',
		},
		{
			xtype: 'label',
			name: 'Надпись150',
			text: 'С дополнительной информацией по подключению, настройке и использованию торгового оборудования можно ознакомиться на диске ИТС в разделе «1С. Методическая поддержка 1С:Предприятия 8.1» - «Работа с торговым оборудованием».',
			style: 'position:absolute;left:166px;top:239px;width:465px;height:66px;',
		},
					]
				},
				{
					title:'Выбор вида ТО',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись54',
			text: 'Выбор торгового оборудования',
			style: 'position:absolute;left:166px;top:0px;width:460px;height:36px;text-align:center;',
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительная информация',
			style: 'position:absolute;left:166px;top:286px;width:460px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоддерживаемоеТО',
			text: 'Со списком поддерживаемого ТО можно ознакомиться на сайте:',
			style: 'position:absolute;left:203px;top:307px;width:423px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСсылкаПоддерживаемоеТО',
			text: 'НадписьСсылкаПоддерживаемоеТО',
			style: 'position:absolute;left:203px;top:326px;width:423px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Сканер штрихкода',
			style: 'position:absolute;left:203px;top:43px;width:177px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Фискальный регистратор',
			style: 'position:absolute;left:203px;top:80px;width:177px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Терминал сбора данных',
			style: 'position:absolute;left:203px;top:117px;width:177px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Дисплей покупателя',
			style: 'position:absolute;left:203px;top:154px;width:177px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Считыватель магнитных карт',
			style: 'position:absolute;left:203px;top:191px;width:177px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Электронные весы',
			style: 'position:absolute;left:203px;top:228px;width:177px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Весы с печатью этикеток',
			style: 'position:absolute;left:430px;top:43px;width:177px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'ККМ в режиме Offline',
			style: 'position:absolute;left:430px;top:80px;width:177px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'ККМ в режиме Online',
			style: 'position:absolute;left:430px;top:117px;width:177px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Эквайринговая система',
			style: 'position:absolute;left:430px;top:149px;width:177px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Считыватель RFID меток',
			style: 'position:absolute;left:430px;top:186px;width:177px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Выбор драйвера',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись126',
			text: 'Выбор обработки обслуживания драйвера',
			style: 'position:absolute;left:166px;top:0px;width:460px;height:36px;text-align:center;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать загруженную ранее обработку обслуживания',
			style: 'position:absolute;left:166px;top:65px;width:332px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Добавить новую обработку обслуживания',
			style: 'position:absolute;left:166px;top:41px;width:307px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительная информация',
			style: 'position:absolute;left:166px;top:250px;width:460px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись130',
			text: 'Если необходимая обработка обслуживания драйвера отсутствует в списке или список пуст, то Вы можете самостоятельно добавить новую обработку обслуживания драйвера, выбрав место расположения на диске и указав ее имя',
			style: 'position:absolute;left:203px;top:271px;width:423px;height:41px;',
		},
		{
			id: 'ТаблицаЗагруженныхОО',
			xtype: 'grid',
			style: 'position:absolute;left:183px;top:114px;width:443px;height:130px;',
			height: 130,width: 443,
			columns:
			[
				{
					text:'Наименование',
					width:'426',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('ТаблицаЗагруженныхОО');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ТОНастройка.ФормаПомощникаНастроекСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТОНастройка.ФормаПомощникаНастроекСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись149',
			text: 'Обработки обслуживания отмеченные красным цветом являются устаревшими. При выборе такие обработки необходимо будет обновить.',
			style: 'position:absolute;left:203px;top:317px;width:423px;height:28px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обновить обработку обслуживания',
			style: 'position:absolute;left:183px;top:89px;width:202px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Из каталога',
			style: 'position:absolute;left:390px;top:89px;width:108px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'С сайта',
			style: 'position:absolute;left:503px;top:89px;width:108px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Добавление обработки обслуживания',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Каталог',
			width: 370,
			height: 19,
			style: 'position:absolute;left:256px;top:41px;width:370px;height:19px;',
		},
		{
			id: 'ТаблицаОбработокОбслуживания',
			xtype: 'grid',
			style: 'position:absolute;left:166px;top:95px;width:460px;height:114px;',
			height: 114,width: 460,
			columns:
			[
				{
					text:'Наименование',
					width:'390',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Версия',
					width:'50',
					dataIndex:'Версия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Версия',
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
						var грид = Ext.getCmp('ТаблицаОбработокОбслуживания');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ТОНастройка.ФормаПомощникаНастроекСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТОНастройка.ФормаПомощникаНастроекСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительная информация',
			style: 'position:absolute;left:166px;top:214px;width:460px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись133',
			text: 'Если список пуст, то это значит, что: \r\n- В указанном каталоге не обнаружены обработки обслуживания, совместимые с текущей версией конфигурации - выберите другой каталог;\r\n- Последние версии данных обработок уже загружены - вернитесь назад и выберите обработку из списка добавленных.',
			style: 'position:absolute;left:203px;top:235px;width:423px;height:67px;',
		},
		{
			xtype: 'label',
			name: 'Надпись136',
			text: 'Добавление обработки обслуживания драйвера',
			style: 'position:absolute;left:166px;top:0px;width:460px;height:36px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись151',
			text: 'По умолчанию обработки обслуживания расположены в каталоге:',
			style: 'position:absolute;left:203px;top:307px;width:428px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКаталогПоУмолчанию',
			text: 'НадписьКаталогПоУмолчанию',
			style: 'position:absolute;left:203px;top:326px;width:428px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Из каталога:',
			style: 'position:absolute;left:166px;top:41px;width:85px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'С сайта',
			style: 'position:absolute;left:166px;top:65px;width:85px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПолучитьСписок',
			text: 'Получить список',
			style: 'position:absolute;left:530px;top:65px;width:96px;height:25px;',
		},
					]
				},
				{
					title:'Выбор устройства',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись128',
			text: 'Выбор устройства',
			style: 'position:absolute;left:166px;top:0px;width:460px;height:36px;text-align:center;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать ранее созданное устройство',
			style: 'position:absolute;left:166px;top:65px;width:245px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Добавить новое устройство',
			style: 'position:absolute;left:166px;top:41px;width:228px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительная информация',
			style: 'position:absolute;left:166px;top:283px;width:460px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись131',
			text: 'Если необходимое устройство отсутствует в списке уже созданных или список пуст, то Вы можете самостоятельно добавить новое устройство, выбрав его из списка поддерживаемых моделей',
			style: 'position:absolute;left:203px;top:304px;width:423px;height:41px;',
		},
		{
			id: 'ТаблицаСозданныхУстройств',
			xtype: 'grid',
			style: 'position:absolute;left:183px;top:88px;width:443px;height:166px;',
			height: 166,width: 443,
			columns:
			[
				{
					text:'Наименование',
					width:'250',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Модель',
					width:'190',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Модель',
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
						var грид = Ext.getCmp('ТаблицаСозданныхУстройств');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ТОНастройка.ФормаПомощникаНастроекСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТОНастройка.ФормаПомощникаНастроекСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКассаККМ',
			text: 'Касса ККМ:',
			style: 'position:absolute;left:166px;top:259px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'КассаККМ.Представление',
			width: 394,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:232px;top:259px;width:394px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ТОНастройка.ФормаПомощникаНастроекСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ТОНастройка.ФормаПомощникаНастроекСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ТОНастройка.ФормаПомощникаНастроекСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ТОНастройка.ФормаПомощникаНастроекСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					title:'Добавление нового устройства',
					items:
					[
		{
			id: 'ТаблицаПоддерживаемыхМоделей',
			xtype: 'grid',
			style: 'position:absolute;left:166px;top:41px;width:460px;height:255px;',
			height: 255,width: 460,
			columns:
			[
				{
					text:'Модель',
					width:'440',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Модель',
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
						var грид = Ext.getCmp('ТаблицаПоддерживаемыхМоделей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ТОНастройка.ФормаПомощникаНастроекСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТОНастройка.ФормаПомощникаНастроекСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:166px;top:302px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 375,
			height: 19,
			style: 'position:absolute;left:251px;top:302px;width:375px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись137',
			text: 'Добавление нового устройства',
			style: 'position:absolute;left:166px;top:0px;width:460px;height:36px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКассаККМДобавлениеНовогоУстройства',
			text: 'Касса ККМ:',
			style: 'position:absolute;left:166px;top:326px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КассаККМДобавлениеНовогоУстройства.Представление',
			width: 375,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:251px;top:326px;width:375px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ТОНастройка.ФормаПомощникаНастроекСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ТОНастройка.ФормаПомощникаНастроекСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ТОНастройка.ФормаПомощникаНастроекСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ТОНастройка.ФормаПомощникаНастроекСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:653px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Назад',
				},
				{
					text:'Далее',
				},
				'-',
				{
					text:'Отменить',
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