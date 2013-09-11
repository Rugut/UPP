Ext.require(['Данные.Обработки.АдминистрированиеПользователей'], function () 
{
	Ext.define('Обработки.АдминистрированиеПользователей.ФормаГруппыПользователей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:739px;height:386px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Группы пользователей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:217px;height:322px;',
			height: 322,width: 217,
			columns:
			[
				{
					text:'Наименование',
					width:'184',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдминистрированиеПользователей.ФормаГруппыПользователейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдминистрированиеПользователей.ФормаГруппыПользователейСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:739px;height:25px;',
			width: 739,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
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
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				{
					text:'Переместить в группу',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Иерархический просмотр',
					tooltip:'',
				},
				{
					text:'Уровень вверх',
					tooltip:'',
				},
				{
					text:'Уровень вниз',
					tooltip:'',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
				},
					]
				},
				'-',
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
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				{
					text:'Иерархический просмотр',
					tooltip:'',
				},
				{
					text:'Переместить в группу',
					tooltip:'',
				},
				'-',
				{
					text:'Перечитать данные группы пользователя',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				'-',
				{
					text:'Отображать подбор',
					tooltip:'Отображать подбор пользователей',
				},
				'-',
				{
					text:'Настройка доступа',
					tooltip:'Открыть форму настройки прав доступа',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:361px;width:739px;height:25px;',
			width: 739,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'Записать группу пользователя и закрыть',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать группу пользователя',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:462px;top:32px;width:269px;height:322px;',
			height: 322,width: 269,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПользователя',
			text: '<',
			style: 'position:absolute;left:6px;top:64px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьПользователя',
			text: '>',
			style: 'position:absolute;left:6px;top:91px;width:24px;height:24px;',
		},
		{
			id: 'СписокПользователи',
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:0px;width:235px;height:322px;',
			height: 322,width: 235,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'126',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Полное имя',
					width:'127',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Профиль',
					width:'128',
					dataIndex:'ПрофильПолномочийПользователя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ПрофильПолномочийПользователя',
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
						var грид = Ext.getCmp('СписокПользователи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдминистрированиеПользователей.ФормаГруппыПользователейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдминистрированиеПользователей.ФормаГруппыПользователейСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:231px;top:32px;width:225px;height:322px;',
			height: 322,width: 225,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ПользователиГруппы',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:225px;height:322px;',
			height: 322,width: 225,
			columns:
			[
				{
					text:'Состав группы',
					width:'146',
					dataIndex:'Пользователь',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пользователь',
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
						var грид = Ext.getCmp('ПользователиГруппы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдминистрированиеПользователей.ФормаГруппыПользователейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдминистрированиеПользователей.ФормаГруппыПользователейСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
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
	]
	});
});