Ext.require(['Данные.Справочники.Банки'], function () 
{
	Ext.define('Справочники.Банки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:742px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Банки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:560px;height:320px;',
			height: 320,width: 560,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'БИК',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Корр. счет',
					width:'160',
					dataIndex:'КоррСчет',
					flex:1,
				},
				{
					text:'Город',
					width:'160',
					dataIndex:'Город',
					flex:1,
				},
				{
					text:'Адрес',
					width:'220',
					dataIndex:'Адрес',
					flex:1,
				},
				{
					text:'Телефоны',
					width:'160',
					dataIndex:'Телефоны',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Банки").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','Наименование','КоррСчет','Город','Адрес','Телефоны',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Банки/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'КоррСчет',
					},
					{
						name:'Город',
					},
					{
						name:'Адрес',
					},
					{
						name:'Телефоны',
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
						Ext.require(['Справочники.Банки.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Банки").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Банки/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('СправочникДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Банки.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			width: 742,
			height: 25,
			items:
			[
				{
					text:'',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'',
					tooltip:'Новая группа',
					iconCls:'x-CreateFolder',
				},
				{
					text:'',
					tooltip:'Скопировать',
					iconCls:'x-copy',
				},
				{
					text:'',
					tooltip:'Изменить',
					iconCls:'x-Change',
				},
				{
					text:'',
					tooltip:'Установить пометку удаления',
					iconCls:'x-MarkToDelete',
				},
				'-',
				{
					text:'Добавить из классификатора банков РФ',
					tooltip:'Загрузить из классификатора',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьТелефоны',
			text: 'Надпись',
			style: 'position:absolute;left:8px;top:358px;width:726px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьАдрес',
			text: 'Надпись',
			style: 'position:absolute;left:8px;top:378px;width:726px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});