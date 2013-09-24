Ext.require(['Данные.Справочники.ПрофилиПолномочийПользователей'], function () 
{
	Ext.define('Справочники.ПрофилиПолномочийПользователей.СозданиеПрофилей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:434px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Создание профилей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:434px;height:25px;',
			width: 434,
			height: 25,
			items:
			[
				{
					text:'Установить флажки',
					tooltip:'Установить флажки',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять флажки',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить табличную часть',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			id: 'СписокПрофилей',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:418px;height:332px;',
			height: 332,width: 418,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Профиль',
					width:'202',
					dataIndex:'Профиль',
					flex:1,
				},
				{
					text:'Роли и пользователи',
					width:'123',
					dataIndex:'РолиИПользователи',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПрофилиПолномочийПользователей").data,
					fields: ['Ссылка','Родитель.Представление','Пометка','Профиль','РолиИПользователи',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиПолномочийПользователей/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Профиль',
					},
					{
						name:'РолиИПользователи',
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
						var грид = Ext.getCmp('СписокПрофилей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПрофилиПолномочийПользователей.СозданиеПрофилейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПрофилиПолномочийПользователей.СозданиеПрофилейСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:434px;height:25px;',
			width: 434,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Создать профили',
					tooltip:'Создать профили',
				},
				'-',
				{
					text:'Назначить профили',
					tooltip:'Назначить профили пользователям',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});