Ext.require(['Данные.Обработки.АдминистрированиеПользователей'], function () 
{
	Ext.define('Обработки.АдминистрированиеПользователей.ФормаПрофилиПолномочийПользователей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:674px;height:443px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Профили полномочий пользователей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:674px;height:25px;',
			width: 674,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				{
					text:'',
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
					text:'',
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
					text:'',
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
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Пользователи с текущим профилем',
					tooltip:'Показать пользователей с текущим профилем',
				},
				'-',
				{
					text:'Свойства',
					tooltip:'Открыть свойства',
				},
				{
					text:'Категории',
					tooltip:'Открыть категории',
				},
				'-',
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			id: 'СоставРолей',
			xtype: 'grid',
			style: 'position:absolute;left:246px;top:129px;width:420px;height:98px;',
			height: 98,width: 420,
			columns:
			[
				{
					text:'Имя роли',
					width:'141',
					dataIndex:'ПредставлениеРоли',
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
						name:'ПредставлениеРоли',
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
						var грид = Ext.getCmp('СоставРолей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдминистрированиеПользователей.ФормаПрофилиПолномочийПользователейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдминистрированиеПользователей.ФормаПрофилиПолномочийПользователейСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ДеревоПрофилей',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:232px;height:378px;',
			height: 378,width: 232,
			columns:
			[
				{
					text:'Наименование',
					width:'135',
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
						var грид = Ext.getCmp('ДеревоПрофилей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдминистрированиеПользователей.ФормаПрофилиПолномочийПользователейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдминистрированиеПользователей.ФормаПрофилиПолномочийПользователейСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ДеревоПрав',
			xtype: 'grid',
			style: 'position:absolute;left:246px;top:285px;width:420px;height:126px;',
			height: 126,width: 420,
			columns:
			[
				{
					text:'Право',
					width:'356',
					dataIndex:'Право',
					flex:1,
				},
				{
					text:'Значение',
					width:'58',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Право',
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
						var грид = Ext.getCmp('ДеревоПрав');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдминистрированиеПользователей.ФормаПрофилиПолномочийПользователейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдминистрированиеПользователей.ФормаПрофилиПолномочийПользователейСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:246px;top:258px;width:420px;height:24px;',
			width: 420,
			height: 24,
			items:
			[
				{
					text:'Установить флажки',
					tooltip:'Установить флажки для выбранных прав',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять флажки для выбранных прав',
				},
				'-',
				{
					text:'Копировать',
					tooltip:'Копировать выбранные права другим профилям',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнойИнтерфейс',
			text: 'Основной интерфейс:',
			style: 'position:absolute;left:246px;top:60px;width:114px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:363px;top:60px;width:192px;height:19px;',
			width: 192,
			height: 19,
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:246px;top:105px;width:420px;height:24px;',
			width: 420,
			height: 24,
			items:
			[
				{
					text:'Изменить',
					tooltip:'Изменить состав ролей профиля',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:418px;width:674px;height:25px;',
			width: 674,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'Записать и закрыть',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать профиль и доп. права',
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
			xtype: 'label',
			name: 'НадписьРолиПрофиля',
			text: 'Роли профиля',
			style: 'position:absolute;left:246px;top:84px;width:420px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекущийПрофиль',
			text: ' Текущий профиль',
			style: 'position:absolute;left:246px;top:33px;width:420px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеПрава',
			text: 'Дополнительные права',
			style: 'position:absolute;left:246px;top:237px;width:420px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});