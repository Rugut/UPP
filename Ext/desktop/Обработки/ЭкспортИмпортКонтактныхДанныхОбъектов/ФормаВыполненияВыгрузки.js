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
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:480px;height:400px;',
			height: 400,width: 480,
			tabBar:{hidden:true},
			items:
			[
				{
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
			width: 480,
			height: 24,
			items:
			[
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить флажки',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять флажки',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Настройка списка полей выгрузки',
			style: 'position:absolute;left:0px;top:0px;width:480px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
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
			width: 480,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Закончить редактирование',
					tooltip:'',
				},
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Заполнить все элементы',
					tooltip:'Заполнить все элементы',
				},
				'-',
				{
					text:'Очистить',
					tooltip:'Очистить таблицу',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Настройка списка объектов выгрузки',
			style: 'position:absolute;left:0px;top:0px;width:480px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			width: 496,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<< Назад',
					tooltip:'Назад',
				},
				'-',
				{
					text:'Далее >>',
					tooltip:'Далее',
				},
				'-',
				{
					text:'Готово',
					tooltip:'Готово',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});