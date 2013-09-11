Ext.require(['Данные.Обработки.УниверсальныйОбменДаннымиXML'], function () 
{
	Ext.define('Обработки.УниверсальныйОбменДаннымиXML.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:632px;height:534px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Универсальный обмен данными в формате XML',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:632px;height:25px;',
			width: 632,
			height: 25,
			items:
			[
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
				'-',
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
				},
				'-',
				{
					text:'Выполнить',
					tooltip:'Выполнить',
				},
				'-',
				{
					text:'Настройки',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:31px;width:618px;height:497px;',
			height: 497,width: 618,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Имя файла правил:',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаПравил',
			width: 475,
			height: 19,
			style: 'position:absolute;left:111px;top:6px;width:475px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:150px;width:604px;height:295px;',
			height: 295,width: 604,
			items:
			[
				{
					items:
					[
		{
			id: 'ТаблицаПравилВыгрузки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:55px;width:273px;height:214px;',
			height: 214,width: 273,
			columns:
			[
				{
					text:'Правила выгрузки данных',
					width:'204',
					dataIndex:'ПВД',
					flex:1,
				},
				{
					text:'Узел обмена',
					width:'125',
					dataIndex:'СсылкаНаУзелОбмена',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОбменДаннымиXML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПВД',
					},
					{
						name:'СсылкаНаУзелОбмена',
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
						var грид = Ext.getCmp('ТаблицаПравилВыгрузки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОбменДаннымиXML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОбменДаннымиXML.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:30px;width:273px;height:25px;',
			width: 273,
			height: 25,
			items:
			[
				{
					text:'Установить для правил',
					tooltip:'Установить пометки для правил',
				},
				{
					text:'Снять для правил',
					tooltip:'Снять пометки для правил',
				},
				'-',
				{
					text:'Очистить отборы',
					tooltip:'Очистить все отборы',
				},
				'-',
			]
		},
		{
			id: 'ПостроительОтбор',
			xtype: 'grid',
			style: 'position:absolute;left:285px;top:55px;width:311px;height:214px;',
			height: 214,width: 311,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОбменДаннымиXML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ПостроительОтбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОбменДаннымиXML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОбменДаннымиXML.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:285px;top:30px;width:311px;height:25px;',
			width: 311,
			height: 25,
			items:
			[
				'-',
				{
					text:'Показать результат отбора',
					tooltip:'Показать результат отбора',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатыВыгрузкиДокументовИРегистровСведений',
			text: 'Период выгрузки:',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 127,
			height: 19,
			style: 'position:absolute;left:111px;top:6px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодВыгрузкиПо',
			text: 'по',
			style: 'position:absolute;left:243px;top:6px;width:18px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 127,
			height: 19,
			style: 'position:absolute;left:266px;top:6px;width:127px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУстановкиПериода',
			text: '...',
			style: 'position:absolute;left:399px;top:6px;width:21px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбор по периоду для всех объектов',
			style: 'position:absolute;left:427px;top:6px;width:169px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаНастройкиПараметров',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:590px;height:234px;',
			height: 234,width: 590,
			columns:
			[
				{
					text:'Наименование',
					width:'286',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Значение',
					width:'300',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОбменДаннымиXML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('ТаблицаНастройкиПараметров');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОбменДаннымиXML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОбменДаннымиXML.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:590px;height:24px;',
			width: 590,
			height: 24,
			items:
			[
				{
					text:'Восстановить',
					tooltip:'Восстановить параметры',
				},
				{
					text:'Сохранить',
					tooltip:'Сохранить параметры',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:6px;top:6px;width:590px;height:263px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:54px;width:604px;height:92px;',
			height: 92,width: 604,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя файла данных:',
			style: 'position:absolute;left:0px;top:1px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаДанных',
			width: 499,
			height: 19,
			style: 'position:absolute;left:105px;top:0px;width:499px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сжимать исходящий файл обмена данными',
			style: 'position:absolute;left:0px;top:24px;width:244px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольДляСжатияФайлаОбмена',
			width: 140,
			height: 19,
			style: 'position:absolute;left:104px;top:48px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольНаЗапись',
			text: 'Пароль сжатия:',
			style: 'position:absolute;left:12px;top:48px;width:87px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипИнформационнойБазыДляПодключения',
			text: 'Тип информационной базы:',
			style: 'position:absolute;left:0px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:172px;top:0px;width:202px;height:19px;',
			width: 202,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПлатформа',
			text: 'Платформа:',
			style: 'position:absolute;left:381px;top:0px;width:66px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:454px;top:0px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:25px;width:604px;height:19px;',
			height: 19,width: 604,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКаталогИБ',
			text: 'Каталог информационной базы:\r\n',
			style: 'position:absolute;left:0px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогИнформационнойБазыДляПодключения',
			width: 432,
			height: 19,
			style: 'position:absolute;left:172px;top:0px;width:432px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСерверПредприятия',
			text: 'Имя сервера 1С:Предприятия:',
			style: 'position:absolute;left:0px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяСервераИнформационнойБазыДляПодключения',
			width: 149,
			height: 19,
			style: 'position:absolute;left:172px;top:0px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяИнформационнойБазы',
			text: 'Информационная база:',
			style: 'position:absolute;left:325px;top:0px;width:123px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяИнформационнойБазыНаСервереДляПодключения',
			width: 151,
			height: 19,
			style: 'position:absolute;left:453px;top:0px;width:151px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Аутентификация Windows',
			style: 'position:absolute;left:0px;top:49px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПользовательДляПодключения',
			text: 'Пользователь:',
			style: 'position:absolute;left:0px;top:73px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПользовательИнформационнойБазыДляПодключения',
			width: 202,
			height: 19,
			style: 'position:absolute;left:172px;top:73px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПароль',
			text: 'Пароль:',
			style: 'position:absolute;left:383px;top:73px;width:62px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольИнформационнойБазыДляПодключения',
			width: 150,
			height: 19,
			style: 'position:absolute;left:454px;top:73px;width:150px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ТестПодключенияъ',
			text: 'Тест подключения...',
			style: 'position:absolute;left:454px;top:49px;width:150px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждениеПользователя',
			text: 'ВНИМАНИЕ!!! Функционал для удаления данных предназначен для отладки переноса. Использовать удаление объектов в других целях НЕ рекомендуется!',
			style: 'position:absolute;left:6px;top:6px;width:604px;height:42px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьПравила',
			text: '',
			style: 'position:absolute;left:591px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Режим отладки обработчиков выгрузки',
			style: 'position:absolute;left:6px;top:449px;width:234px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаОтладкиВыгрузки',
			text: 'Настройка отладки выгрузки...',
			style: 'position:absolute;left:242px;top:449px;width:200px;height:21px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Выгрузка в файл обмена',
			style: 'position:absolute;left:6px;top:30px;width:156px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Подключение и выгрузка данных в ИБ приемник',
			style: 'position:absolute;left:167px;top:30px;width:272px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Имя файла для загрузки:',
			style: 'position:absolute;left:6px;top:6px;width:136px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаОбмена',
			width: 464,
			height: 19,
			style: 'position:absolute;left:146px;top:6px;width:464px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать транзакции',
			style: 'position:absolute;left:6px;top:54px;width:157px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоОбъектовНаТранзакцию',
			style: 'position:absolute;left:304px;top:77px;width:107px;height:19px;',
			width: 107,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакции',
			text: 'Количество элементов в транзакции:',
			style: 'position:absolute;left:29px;top:77px;width:267px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Загружать данные в режиме обмена (ОбменДанными.Загрузка = Истина)',
			style: 'position:absolute;left:6px;top:100px;width:405px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Записывать только измененные объекты',
			style: 'position:absolute;left:6px;top:123px;width:405px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Записывать регистры наборами записей',
			style: 'position:absolute;left:6px;top:191px;width:405px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Оптимизированная запись объектов',
			style: 'position:absolute;left:6px;top:168px;width:405px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При загрузке строк обрезать незначащие символы справа',
			style: 'position:absolute;left:6px;top:214px;width:405px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПолучитьИнформациюОФайлеОбмена',
			text: 'Подробно о файле обмена',
			style: 'position:absolute;left:429px;top:337px;width:153px;height:17px;',
		},
		{
			xtype: 'label',
			text: 'Информация о файле обмена',
			style: 'position:absolute;left:6px;top:318px;width:604px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'КомментарийЗагрузки',
			style: 'position:absolute;left:166px;top:400px;width:444px;height:38px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Объекты, выгруженные по ссылке, загружать без пометки удаления',
			style: 'position:absolute;left:6px;top:146px;width:405px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольДляРаспаковкиФайлаОбмена',
			width: 140,
			height: 19,
			style: 'position:absolute;left:146px;top:30px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольНаЧтение',
			text: 'Пароль распаковки:',
			style: 'position:absolute;left:6px;top:30px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаОтладкиЗагрузки',
			text: 'Настройка отладки загрузки...',
			style: 'position:absolute;left:241px;top:448px;width:200px;height:21px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Режим отладки обработчиков загрузки',
			style: 'position:absolute;left:6px;top:448px;width:234px;height:21px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Не использовать автоматическую загрузку при открытии',
			style: 'position:absolute;left:18px;top:258px;width:400px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Перед автоматической загрузкой задать вопрос о выполнении операции',
			style: 'position:absolute;left:18px;top:278px;width:400px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать автоматическую загрузку данных',
			style: 'position:absolute;left:18px;top:298px;width:400px;height:16px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Дата выгрузки данных:',
			style: 'position:absolute;left:6px;top:359px;width:150px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаПротокола',
			text: 'Имя файла, протокола обмена:',
			style: 'position:absolute;left:6px;top:259px;width:227px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаПротоколаОбмена',
			width: 373,
			height: 19,
			style: 'position:absolute;left:237px;top:259px;width:373px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дописывать данные в протокол обмена',
			style: 'position:absolute;left:6px;top:307px;width:227px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вывод в протокол информационных сообщений',
			style: 'position:absolute;left:6px;top:330px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Протокол обмена',
			style: 'position:absolute;left:6px;top:239px;width:604px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вывод информационных сообщений в окно сообщений',
			style: 'position:absolute;left:6px;top:30px;width:303px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Режим отладки',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Настройки выгрузки данных',
			style: 'position:absolute;left:6px;top:77px;width:604px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать транзакции при выгрузке для планов обмена',
			style: 'position:absolute;left:6px;top:118px;width:329px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакцииДляПлановОбмена',
			text: 'Количество элементов в транзакции:',
			style: 'position:absolute;left:25px;top:142px;width:317px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЭлементовВТранзакцииПриВыгрузкеДляПлановОбмена',
			style: 'position:absolute;left:352px;top:142px;width:137px;height:19px;',
			width: 137,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоОбъектовЗагрузкиДляОбновленияСтатуса',
			text: 'Количество обработанных объектов для обновления статуса:',
			style: 'position:absolute;left:6px;top:53px;width:337px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоОбъектовЗагрузкиДляОбновленияСтатуса',
			style: 'position:absolute;left:352px;top:53px;width:137px;height:19px;',
			width: 137,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать объекты на которые есть права доступа',
			style: 'position:absolute;left:6px;top:166px;width:323px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзмененияРегистрацииДляУзловОбменаПослеВыгрузки',
			text: 'Изменения регистрации для узлов обмена после выгрузки:',
			style: 'position:absolute;left:6px;top:215px;width:339px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:352px;top:215px;width:258px;height:19px;',
			width: 258,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически удалять недопустимые символы из строк для записи в XML',
			style: 'position:absolute;left:6px;top:190px;width:408px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаПротокола1',
			text: 'Протокол загрузки (для COM - соединения):',
			style: 'position:absolute;left:6px;top:283px;width:227px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаПротоколаОбменаЗагрузка',
			width: 373,
			height: 19,
			style: 'position:absolute;left:237px;top:283px;width:373px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открывать файлы протоколов обмена после выполнения операций',
			style: 'position:absolute;left:6px;top:354px;width:366px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать оптимизированный формат для обмена данными (V8 - V8, версия обработки не ниже 2.0.18)',
			style: 'position:absolute;left:6px;top:97px;width:567px;height:16px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Надпись5',
			style: 'position:absolute;left:166px;top:359px;width:252px;height:15px;',
		},
		{
			id: 'УдаляемыеДанные',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:104px;width:604px;height:335px;',
			height: 335,width: 604,
			columns:
			[
				{
					text:'Метаданные',
					width:'285',
					dataIndex:'Метаданные',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОбменДаннымиXML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Метаданные',
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
						var грид = Ext.getCmp('УдаляемыеДанные');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйОбменДаннымиXML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОбменДаннымиXML.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:76px;width:604px;height:24px;',
			width: 604,
			height: 24,
			items:
			[
				{
					text:'ОтметитьВсе',
					tooltip:'Отметить все',
				},
				{
					text:'ОтменитьВсе',
					tooltip:'Отменить все',
				},
				'-',
				{
					text:'Удалить',
					tooltip:'Удалить',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Удалять объекты на которые есть права доступа',
			style: 'position:absolute;left:6px;top:53px;width:275px;height:19px;',
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