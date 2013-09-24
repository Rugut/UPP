Ext.require(['Данные.Обработки.ПроведениеПоПартиям'], function () 
{
	Ext.define('Обработки.ПроведениеПоПартиям.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:377px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Проведение по партиям',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 103,
			height: 19,
			style: 'position:absolute;left:207px;top:33px;width:103px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			width: 400,
			height: 25,
			items:
			[
				{
					text:'Настройка обработки',
					tooltip:'',
				},
				'-',
				{
					text:'Установка границы последовательности',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: ' Провести по партиям по дату:',
			style: 'position:absolute;left:8px;top:33px;width:195px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:8px;top:75px;width:138px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:8px;top:94px;width:195px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать проводки',
			style: 'position:absolute;left:248px;top:94px;width:144px;height:19px;',
		},
		{
			id: 'ТаблицаГраниц',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:160px;width:384px;height:184px;',
			height: 184,width: 384,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Организация',
					width:'173',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Головная организация',
					width:'100',
					dataIndex:'ГоловнаяОрганизация',
					flex:1,
				},
				{
					text:'Дата начала проведения',
					width:'92',
					dataIndex:'КолонкаЗаголовок',
					flex:1,
				},
				{
					text:'Упр. учет',
					width:'80',
					dataIndex:'УУ',
					flex:1,
				},
				{
					text:'Бух. и нал. учет',
					width:'80',
					dataIndex:'БУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроведениеПоПартиям/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Организация',
					},
					{
						name:'ГоловнаяОрганизация',
					},
					{
						name:'КолонкаЗаголовок',
					},
					{
						name:'УУ',
					},
					{
						name:'БУ',
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
						var грид = Ext.getCmp('ТаблицаГраниц');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПроведениеПоПартиям.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПроведениеПоПартиям.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:136px;width:384px;height:24px;',
			width: 384,
			height: 24,
			items:
			[
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'',
					tooltip:'c4f29e0-d168-4fe0-8e64-e982fabf259',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Подробно',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'label',
			text: ' По видам учета:',
			style: 'position:absolute;left:8px;top:57px;width:384px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: ' По организациям:',
			style: 'position:absolute;left:8px;top:117px;width:384px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:352px;width:400px;height:25px;',
			width: 400,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
					tooltip:'',
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