Ext.require(['Данные.Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов'], function () 
{
	Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияЗагрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:767px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выполнение загрузки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:7px;width:752px;height:360px;',
			height: 360,width: 752,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'НастройкаПолей',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:752px;height:320px;',
			height: 320,width: 752,
			columns:
			[
				{
					text:'№',
					width:'32',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Имя поля из файла',
					width:'280',
					dataIndex:'ИмяРеквизита',
					flex:1,
				},
				{
					text:'Имя или вид реквизита в информационной базе',
					width:'280',
					dataIndex:'НазначениеРеквизита1С',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭкспортИмпортКонтактныхДанныхОбъектов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ИмяРеквизита',
					},
					{
						name:'НазначениеРеквизита1С',
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
						var грид = Ext.getCmp('НастройкаПолей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияЗагрузкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияЗагрузкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:752px;height:24px;',
			width: 752,
			height: 24,
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Настройка формирования наименования объекта',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Настройка соответствия полей файла и контактных данных объектов',
			style: 'position:absolute;left:0px;top:0px;width:752px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаНастройкиПоискаОбъектов',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:752px;height:320px;',
			height: 320,width: 752,
			columns:
			[
				{
					text:'№',
					width:'32',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Имя реквизита в информационной базе',
					width:'280',
					dataIndex:'Значение1С',
					flex:1,
				},
				{
					text:'Условие',
					width:'100',
					dataIndex:'Условие',
					flex:1,
				},
				{
					text:'Имя поля из файла',
					width:'280',
					dataIndex:'ЗначениеФайла',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭкспортИмпортКонтактныхДанныхОбъектов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Использование',
					},
					{
						name:'Значение1С',
					},
					{
						name:'Условие',
					},
					{
						name:'ЗначениеФайла',
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
						var грид = Ext.getCmp('ТаблицаНастройкиПоискаОбъектов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияЗагрузкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияЗагрузкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:752px;height:24px;',
			width: 752,
			height: 24,
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Настройка критериев поиска объектов в текущей информационной базе',
			style: 'position:absolute;left:0px;top:0px;width:752px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			id: 'НастройкаЗагрузкиЗначений',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:69px;width:752px;height:291px;',
			height: 291,width: 752,
			columns:
			[
				{
					text:'№',
					width:'32',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Представление объекта файла',
					width:'180',
					dataIndex:'ПредставлениеОбъектаФайла',
					flex:1,
				},
				{
					text:'Наименование объекта в ИБ',
					width:'160',
					dataIndex:'ПредставлениеОбъекта1С',
					flex:1,
				},
				{
					text:'Объект в ИБ',
					width:'120',
					dataIndex:'Объект1С',
					flex:1,
				},
				{
					text:'Юр/Физ лицо',
					width:'80',
					dataIndex:'ЮрФизЛицо',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'160',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭкспортИмпортКонтактныхДанныхОбъектов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Использование',
					},
					{
						name:'ПредставлениеОбъектаФайла',
					},
					{
						name:'ПредставлениеОбъекта1С',
					},
					{
						name:'Объект1С',
					},
					{
						name:'ЮрФизЛицо',
					},
					{
						name:'Владелец',
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
						var грид = Ext.getCmp('НастройкаЗагрузкиЗначений');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияЗагрузкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияЗагрузкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:45px;width:752px;height:24px;',
			width: 752,
			height: 24,
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Посмотреть информацию из файла по текущей строке',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Настройка загрузки данных в текущую информационную базу',
			style: 'position:absolute;left:0px;top:0px;width:752px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РодительДляЗагрузки',
			width: 252,
			height: 19,
			style: 'position:absolute;left:200px;top:21px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодительДляЗагрузки',
			text: 'Создавать новые элементы в группе:',
			style: 'position:absolute;left:0px;top:21px;width:197px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сохранять соответствие параметров и настройки поиска объектов для последующих загрузок',
			style: 'position:absolute;left:8px;top:372px;width:506px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:767px;height:25px;',
			width: 767,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<< Назад',
				},
				'-',
				{
					text:'Далее >>',
				},
				'-',
				{
					text:'Готово',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});