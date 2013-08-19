Ext.require(['Данные.Справочники.ПодразделенияОрганизаций'], function () 
{
	Ext.define('Справочники.ПодразделенияОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:512px;height:380px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подразделения организации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:496px;height:315px;',
			height: 315,width: 496,
			columns:
			[
				{
					text:'Наименование',
					width:'240',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код',
					width:'84',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'80',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'КПП',
					width:'80',
					dataIndex:'КПП',
					flex:1,
				},
				{
					text:'Порядок',
					width:'49',
					dataIndex:'Порядок',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПодразделенияОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Наименование','Код','КодПоОКАТО','КПП','Порядок',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодразделенияОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Код',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КПП',
					},
					{
						name:'Порядок',
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
						Ext.require(['Справочники.ПодразделенияОрганизаций.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодразделенияОрганизаций.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:512px;height:25px;',
			items:
			[
				{
					text:'Доступ к текущему элементу',
				},
				{
					text:'Доступ к справочнику в целом',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Подразделения организации',
			style: 'position:absolute;left:8px;top:33px;width:223px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 271,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:233px;top:33px;width:271px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПодразделенияОрганизаций.ФормаСпискаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПодразделенияОрганизаций.ФормаСпискаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПодразделенияОрганизаций.ФормаСпискаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПодразделенияОрганизаций.ФормаСпискаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});