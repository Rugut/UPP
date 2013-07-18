Ext.require(['Данные.Справочники.ПрофилиПолномочийПользователей'], function () 
{
	Ext.define('Справочники.ПрофилиПолномочийПользователей.СозданиеПрофилей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:434px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Создание профилей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
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
				data: Ext.create("Данные.Справочники.ПрофилиПолномочийПользователей").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиПолномочийПользователей/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПрофилиПолномочийПользователей.СозданиеПрофилейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПрофилиПолномочийПользователей.СозданиеПрофилейСобытия");
							obj.ПередатьСсылку(ссылка);
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
			style: 'position:absolute;left:0px;top:0px;width:434px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:434px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Создать профили',
				},
				'-',
				{
					text:'Назначить профили',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
	});
});