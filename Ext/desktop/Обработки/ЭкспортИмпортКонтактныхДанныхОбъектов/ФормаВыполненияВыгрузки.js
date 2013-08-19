Ext.require(['Данные.Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов'], function () 
{
	Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияВыгрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:496px;height:461px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выполнение выгрузки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:480px;height:400px;',
			height: 400,width: 480,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ЗаполнениеТаблицыПолей',
					items:
					[
		{
			id: 'НастройкаПолейВыгрузки',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:480px;height:360px;',
			height: 360,width: 480,
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
					text:'Тип',
					width:'180',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Имя поля выгрузки',
					width:'220',
					dataIndex:'СинонимПоля',
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
						name:'Тип',
					},
					{
						name:'СинонимПоля',
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
						var грид = Ext.getCmp('НастройкаПолейВыгрузки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияВыгрузкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияВыгрузкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:480px;height:24px;',
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
			xtype: 'fieldset',
			title: 'Настройка списка полей выгрузки',
			style: 'position:absolute;left:0px;top:0px;width:480px;height:16px;',
		},
					]
				},
				{
					title:'НастройкаВыгрузкиЗначений',
					items:
					[
		{
			id: 'НастройкаВыгрузкиОбъектов',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:480px;height:360px;',
			height: 360,width: 480,
			columns:
			[
				{
					text:'№',
					width:'32',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Объект выгрузки',
					width:'220',
					dataIndex:'ОбъектВыгрузки',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'220',
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
						name:'ОбъектВыгрузки',
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
						var грид = Ext.getCmp('НастройкаВыгрузкиОбъектов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияВыгрузкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияВыгрузкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:480px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
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
					text:'Подбор',
				},
				'-',
				{
					text:'Заполнить все элементы',
				},
				'-',
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Настройка списка объектов выгрузки',
			style: 'position:absolute;left:0px;top:0px;width:480px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сохранять соответствие параметров для последующих выгрузок',
			style: 'position:absolute;left:8px;top:413px;width:369px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:436px;width:496px;height:25px;',
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