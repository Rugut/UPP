Ext.require(['Данные.Справочники.СохраненныеНастройки'], function () 
{
	Ext.define('Справочники.СохраненныеНастройки.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:551px;height:327px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выбор настройки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписокСохраненныеНастройки',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:60px;width:535px;height:259px;',
			height: 259,width: 535,
			columns:
			[
				{
					text:'Наименование',
					width:'216',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Тип настройки',
					width:'140',
					dataIndex:'ТипНастройки.Представление',
					flex:1,
				},
				{
					text:'Настраиваемый объект',
					width:'143',
					dataIndex:'НастраиваемыйОбъект',
					flex:1,
				},
				{
					text:'Описание',
					width:'205',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Пользователи',
					width:'363',
					dataIndex:'Пользователи',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СохраненныеНастройки").data,
					fields: ['Ссылка','Наименование','ТипНастройки.Представление','НастраиваемыйОбъект','Описание','Пользователи',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СохраненныеНастройки/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ТипНастройки',
					},
					{
						name:'НастраиваемыйОбъект',
					},
					{
						name:'Описание',
					},
					{
						name:'Пользователи',
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
						var грид = Ext.getCmp('СправочникСписокСохраненныеНастройки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СохраненныеНастройки.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СохраненныеНастройки.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:551px;height:25px;',
			width: 551,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
					tooltip:'Выбрать значение',
					iconCls:'x-Select',
				},
				'-',
				{
					text:'Сохранить',
					tooltip:'Сохранить настройку',
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
			style: 'position:absolute;left:8px;top:29px;width:535px;height:27px;',
			height: 27,width: 535,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:0px;top:4px;width:84px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 449,
			height: 19,
			style: 'position:absolute;left:86px;top:4px;width:449px;height:19px;',
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