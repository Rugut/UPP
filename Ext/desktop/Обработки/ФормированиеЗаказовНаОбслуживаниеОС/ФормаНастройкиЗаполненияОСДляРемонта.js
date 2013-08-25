Ext.require(['Данные.Обработки.ФормированиеЗаказовНаОбслуживаниеОС'], function () 
{
	Ext.define('Обработки.ФормированиеЗаказовНаОбслуживаниеОС.ФормаНастройкиЗаполненияОСДляРемонта',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:374px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка заполнения основных средств для обслуживания',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:54px;width:294px;height:24px;',
			width: 294,
			height: 24,
			items:
			[
				{
					text:'По наименованию',
				},
			]
		},
		{
			id: 'ОтборОсновныеСредства',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:78px;width:294px;height:263px;',
			height: 263,width: 294,
			columns:
			[
				{
					text:'',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основные средства',
					width:'261',
					dataIndex:'ОС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаказовНаОбслуживаниеОС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ОС',
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
						var грид = Ext.getCmp('ОтборОсновныеСредства');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаказовНаОбслуживаниеОС.ФормаНастройкиЗаполненияОСДляРемонтаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаказовНаОбслуживаниеОС.ФормаНастройкиЗаполненияОСДляРемонтаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:306px;top:54px;width:294px;height:24px;',
			width: 294,
			height: 24,
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			id: 'ОтборНоменклатура',
			xtype: 'grid',
			style: 'position:absolute;left:306px;top:78px;width:294px;height:263px;',
			height: 263,width: 294,
			columns:
			[
				{
					text:'',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Услуги по обслуживанию ОС',
					width:'259',
					dataIndex:'Номенклатура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаказовНаОбслуживаниеОС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
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
						var грид = Ext.getCmp('ОтборНоменклатура');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЗаказовНаОбслуживаниеОС.ФормаНастройкиЗаполненияОСДляРемонтаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЗаказовНаОбслуживаниеОС.ФормаНастройкиЗаполненияОСДляРемонтаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата окончания интервала планирования:',
			style: 'position:absolute;left:8px;top:8px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПланирования',
			width: 112,
			height: 19,
			style: 'position:absolute;left:233px;top:8px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Отбор по основным средствам',
			style: 'position:absolute;left:8px;top:33px;width:294px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Отбор по услугам обслуживания ОС',
			style: 'position:absolute;left:306px;top:33px;width:294px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:349px;width:608px;height:25px;',
			width: 608,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
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