Ext.require(['Данные.Обработки.УдалениеПисемЭлектроннойПочты'], function () 
{
	Ext.define('Обработки.УдалениеПисемЭлектроннойПочты.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:682px;height:458px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Удаление писем электронной почты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			width: 682,
			height: 25,
			items:
			[
				{
					text:'Открыть',
					tooltip:'Открыть',
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
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить',
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
			style: 'position:absolute;left:0px;top:433px;width:682px;height:25px;',
			width: 682,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Удалить',
					tooltip:'Удалить',
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
			id: 'ОбъектыДляУдаления',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:666px;height:236px;',
			height: 236,width: 666,
			columns:
			[
				{
					text:'N',
					width:'34',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'НеРассмотрено',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'СтатусПисьма',
					flex:1,
				},
				{
					text:'Электронное письмо',
					width:'142',
					dataIndex:'ЭлектронноеПисьмо',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'88',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Получатели',
					width:'96',
					dataIndex:'Получатели',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'98',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата отправления',
					width:'100',
					dataIndex:'ДатаОтправления',
					flex:1,
				},
				{
					text:'Дата транспорта',
					width:'139',
					dataIndex:'ДатаТранспорта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УдалениеПисемЭлектроннойПочты/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'НеРассмотрено',
					},
					{
						name:'СтатусПисьма',
					},
					{
						name:'ЭлектронноеПисьмо',
					},
					{
						name:'Отправитель',
					},
					{
						name:'Получатели',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаОтправления',
					},
					{
						name:'ДатаТранспорта',
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
						var грид = Ext.getCmp('ОбъектыДляУдаления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УдалениеПисемЭлектроннойПочты.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УдалениеПисемЭлектроннойПочты.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'НайденныеСсылки',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:274px;width:666px;height:151px;',
			height: 151,width: 666,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Данные',
					width:'373',
					dataIndex:'Данные',
					flex:1,
				},
				{
					text:'Метаданные',
					width:'265',
					dataIndex:'Метаданные',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УдалениеПисемЭлектроннойПочты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Данные',
					},
					{
						name:'Метаданные',
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
						var грид = Ext.getCmp('НайденныеСсылки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УдалениеПисемЭлектроннойПочты.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УдалениеПисемЭлектроннойПочты.ФормаСобытия");
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
	]
	});
});