Ext.require(['Данные.Обработки.УниверсальныйПоискОбъектов'], function () 
{
	Ext.define('Обработки.УниверсальныйПоискОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:639px;height:473px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Поиск объектов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:33px;width:627px;height:407px;',
			height: 407,width: 627,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИнформацияДляПоиска',
			width: 459,
			height: 19,
			style: 'position:absolute;left:84px;top:24px;width:459px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтрокаПоиска',
			text: 'Строка поиска:',
			style: 'position:absolute;left:0px;top:24px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Настройки поиска',
			style: 'position:absolute;left:0px;top:49px;width:627px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'НастройкиПоиска',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:116px;width:627px;height:89px;',
			height: 89,width: 627,
			columns:
			[
				{
					text:'Имя объекта',
					width:'135',
					dataIndex:'ИмяОбъекта',
					flex:1,
				},
				{
					text:'Области поиска',
					width:'183',
					dataIndex:'ОписаниеТаблицыПоиска',
					flex:1,
				},
				{
					text:'Поля поиска',
					width:'215',
					dataIndex:'ПоляПоиска',
					flex:1,
				},
				{
					text:'Дополнительные ограничения',
					width:'201',
					dataIndex:'ДополнительныеОграничения',
					flex:1,
				},
				{
					text:'Таблица поиска',
					width:'40',
					dataIndex:'ТаблицаПоиска',
					flex:1,
				},
				{
					text:'Поле связки',
					width:'115',
					dataIndex:'ПолеСвязки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйПоискОбъектов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяОбъекта',
					},
					{
						name:'ОписаниеТаблицыПоиска',
					},
					{
						name:'ПоляПоиска',
					},
					{
						name:'ДополнительныеОграничения',
					},
					{
						name:'ТаблицаПоиска',
					},
					{
						name:'ПолеСвязки',
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
						var грид = Ext.getCmp('НастройкиПоиска');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйПоискОбъектов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйПоискОбъектов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:92px;width:627px;height:24px;',
			width: 627,
			height: 24,
			items:
			[
				{
					text:'Включить все',
					tooltip:'Пометить все области поиска',
				},
				{
					text:'Выключить все',
					tooltip:'Отменить пометку всех областей поиска',
				},
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				'-',
				{
					text:'Дополнительно...',
					tooltip:'Настройка дополнительных пареметров',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПринципыОтбора',
			text: 'Вхождение',
			style: 'position:absolute;left:0px;top:68px;width:83px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:84px;top:68px;width:232px;height:19px;',
			width: 232,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:210px;width:627px;height:197px;',
			height: 197,width: 627,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'СписокНайденныхСсылок',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:627px;height:152px;',
			height: 152,width: 627,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйПоискОбъектов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('СписокНайденныхСсылок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйПоискОбъектов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйПоискОбъектов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Результаты поиска',
			style: 'position:absolute;left:0px;top:0px;width:627px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:19px;width:627px;height:24px;',
			width: 627,
			height: 24,
			items:
			[
				{
					text:'Раскрыть',
					tooltip:'Раскрыть дерево результатов поиска',
				},
				{
					text:'Свернуть',
					tooltip:'Свернуть дерево результатов поиска',
				},
				'-',
				{
					text:'Показать детально',
					tooltip:'Детальный поиск для одного элемента',
				},
				'-',
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТипОбъектовПоиска',
			text: 'Тип объектов:',
			style: 'position:absolute;left:0px;top:0px;width:76px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:84px;top:0px;width:232px;height:19px;',
			width: 232,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Детальное отображение результатов',
			style: 'position:absolute;left:321px;top:68px;width:212px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Найти',
			text: 'Найти',
			style: 'position:absolute;left:547px;top:24px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:639px;height:25px;',
			width: 639,
			height: 25,
			items:
			[
				{
					text:'Загрузить настройку поиска',
					tooltip:'Загрузить настройку поиска',
				},
				{
					text:'Сохранить настройки поиска',
					tooltip:'Сохранить настройки поиска',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:448px;width:639px;height:25px;',
			height: 25,width: 639,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:639px;height:25px;',
			width: 639,
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
					text:'Отмена',
					tooltip:'Отмена',
				},
			]
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