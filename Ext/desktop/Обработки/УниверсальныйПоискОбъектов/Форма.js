Ext.require(['Данные.Обработки.УниверсальныйПоискОбъектов'], function () 
{
	Ext.define('Обработки.УниверсальныйПоискОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:639px;height:473px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поиск объектов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:33px;width:627px;height:407px;',
			height: 407,width: 627,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Основная страница',
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
			xtype: 'fieldset',
			title: 'Настройки поиска',
			style: 'position:absolute;left:0px;top:49px;width:627px;height:16px;',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УниверсальныйПоискОбъектов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйПоискОбъектов.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:210px;width:627px;height:197px;',
			height: 197,width: 627,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница отображения результатов',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УниверсальныйПоискОбъектов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйПоискОбъектов.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Результаты поиска',
			style: 'position:absolute;left:0px;top:0px;width:627px;height:16px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:448px;width:639px;height:25px;',
			height: 25,width: 639,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:639px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:639px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Загрузить настройку поиска',
				},
				{
					text:'Сохранить настройки поиска',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});