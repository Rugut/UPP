Ext.require(['Данные.Отчеты.ОтчетДиаграмма'], function () 
{
	Ext.define('Отчеты.ОтчетДиаграмма.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:314px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:270px;',
			height: 270,width: 474,
			items:
			[
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:64px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:164px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:146px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:246px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:6px;top:106px;width:460px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:78px;width:210px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:96px;top:54px;width:370px;height:19px;',
			width: 370,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:30px;width:460px;height:19px;',
			height: 19,width: 460,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:90px;top:0px;width:370px;height:19px;',
			width: 370,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИмяРегистра',
			text: 'Раздел учета:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
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
			boxLabel: 'Показатель 1',
			style: 'position:absolute;left:12px;top:127px;width:220px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 7',
			style: 'position:absolute;left:237px;top:127px;width:220px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 2',
			style: 'position:absolute;left:12px;top:147px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 8',
			style: 'position:absolute;left:237px;top:147px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 3',
			style: 'position:absolute;left:12px;top:167px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 9',
			style: 'position:absolute;left:237px;top:167px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 4',
			style: 'position:absolute;left:12px;top:187px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 10',
			style: 'position:absolute;left:237px;top:187px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 5',
			style: 'position:absolute;left:12px;top:207px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 11',
			style: 'position:absolute;left:237px;top:207px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 6',
			style: 'position:absolute;left:12px;top:227px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 12',
			style: 'position:absolute;left:237px;top:229px;width:220px;height:15px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:46px;width:460px;height:127px;',
			height: 127,width: 460,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПодписей',
			text: 'Вид подписей:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:330px;height:19px;',
			width: 330,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьРаздвижениеСерий',
			text: 'Раздвижение серий:',
			style: 'position:absolute;left:0px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:24px;width:330px;height:19px;',
			width: 330,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:0px;top:48px;width:80px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПодписей1',
			text: 'Вид подписей:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:330px;height:19px;',
			width: 330,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:0px;top:48px;width:80px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздвижениеСерий1',
			text: 'Раздвижение серий:',
			style: 'position:absolute;left:0px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:24px;width:330px;height:19px;',
			width: 330,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:0px;top:69px;width:48px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Режим пробелов:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:330px;height:19px;',
			width: 330,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:0px;top:48px;width:80px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Градиент',
			style: 'position:absolute;left:0px;top:88px;width:72px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Базовое значение:',
			style: 'position:absolute;left:0px;top:24px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовоеЗначение',
			style: 'position:absolute;left:130px;top:24px;width:82px;height:19px;',
			width: 82,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:0px;top:68px;width:132px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:0px;top:48px;width:80px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:330px;height:20px;',
			width: 330,
			height: 20,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:0px;top:88px;width:48px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Базовое значение:',
			style: 'position:absolute;left:0px;top:24px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовоеЗначение1',
			style: 'position:absolute;left:130px;top:24px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:0px;top:68px;width:132px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Режим пробелов:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:0px;top:24px;width:132px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Базовое значение:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовоеЗначение5',
			style: 'position:absolute;left:130px;top:0px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Базовое значение:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовоеЗначение3',
			style: 'position:absolute;left:130px;top:0px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:0px;top:24px;width:132px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОриентацияИзометрическая',
			text: 'Ориентация:',
			style: 'position:absolute;left:0px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:24px;width:330px;height:19px;',
			width: 330,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:0px;top:72px;width:80px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Режим пробелов:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:330px;height:19px;',
			width: 330,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Базовое значение:',
			style: 'position:absolute;left:0px;top:48px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовоеЗначение4',
			style: 'position:absolute;left:130px;top:48px;width:82px;height:19px;',
			width: 82,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:0px;top:92px;width:48px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:0px;top:112px;width:132px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать легенду',
			style: 'position:absolute;left:6px;top:6px;width:135px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать заголовок',
			style: 'position:absolute;left:6px;top:26px;width:135px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ИзмеренияСтроки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:212px;height:195px;',
			height: 195,width: 212,
			columns:
			[
				{
					text:'Серии',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип итога',
					width:'35',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетДиаграмма/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
					},
					{
						name:'Тип',
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
						var грид = Ext.getCmp('ИзмеренияСтроки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетДиаграмма.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетДиаграмма.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:212px;height:24px;',
			width: 212,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
			]
		},
		{
			id: 'ИзмеренияКолонки',
			xtype: 'grid',
			style: 'position:absolute;left:254px;top:24px;width:212px;height:195px;',
			height: 195,width: 212,
			columns:
			[
				{
					text:'Точки',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип итога',
					width:'40',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетДиаграмма/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
					},
					{
						name:'Тип',
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
						var грид = Ext.getCmp('ИзмеренияКолонки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетДиаграмма.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетДиаграмма.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:254px;top:0px;width:212px;height:24px;',
			width: 212,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
			]
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МаксимумСерийКоличество',
			style: 'position:absolute;left:398px;top:225px;width:68px;height:19px;',
			width: 68,
			height: 19,
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:224px;top:24px;width:24px;height:195px;',
			width: 24,
			height: 195,
			items:
			[
				{
					text:'',
					tooltip:'Транспонировать диаграмму - поменять местами серии и точки',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:176px;top:225px;width:220px;height:19px;',
			width: 220,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Ограничение количества серий:',
			style: 'position:absolute;left:6px;top:225px;width:168px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:220px;',
			height: 220,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'80',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'240',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'120',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетДиаграмма/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('Отбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетДиаграмма.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетДиаграмма.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			width: 460,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Порядок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:220px;',
			height: 220,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'120',
					dataIndex:'НаправлениеСортировки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетДиаграмма/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Имя',
					},
					{
						name:'НаправлениеСортировки',
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
						var грид = Ext.getCmp('Порядок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетДиаграмма.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетДиаграмма.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			width: 460,
			height: 24,
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:289px;width:490px;height:25px;',
			width: 490,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
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