Ext.require(['Данные.Справочники.Регионы'], function () 
{
	Ext.define('Справочники.Регионы.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:722px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Заполнение справочника Регионы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'АдресноеДерево',
			xtype: 'grid',
			style: 'position:absolute;left:234px;top:32px;width:480px;height:385px;',
			height: 385,width: 480,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код',
					width:'100',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'100',
					dataIndex:'Ссылка',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Регионы").data,
					fields: ['Ссылка','Родитель.Представление','Пометка','Наименование','Код','Ссылка',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Регионы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Код',
					},
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('АдресноеДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Регионы.ФормаЗаполненияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Регионы.ФормаЗаполненияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:32px;width:220px;height:385px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:422px;top:231px;width:155px;height:129px;',
			width: 155,
			height: 129,
			items:
			[
				{
					text:'Пометить вложенные',
					tooltip:'Пометить все вложенные в этот узел элементы',
				},
				{
					text:'Сбросить вложенные',
					tooltip:'Сбросить вложенные',
				},
				'-',
				{
					text:'Пометить текущий уровень',
					tooltip:'Пометить все регионы текущего уровня',
				},
				{
					text:'Сбросить текущий уровень',
					tooltip:'Сбросить включенные текущего уровня',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРегионРодитель',
			text: 'Родительский элемент для вставки:',
			style: 'position:absolute;left:8px;top:8px;width:190px;height:18px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'РодительскийРегион.Представление',
			width: 515,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:199px;top:8px;width:515px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Регионы.ФормаЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Регионы.ФормаЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Регионы.ФормаЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Регионы.ФормаЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:722px;height:25px;',
			width: 722,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Заполнить / Обновить список',
					tooltip:'c4f29e0-d168-4fe0-8e64-e982fabf259',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Дополнить справочник',
					tooltip:'94cf65b-4109-4533-a1d7-c87b1fcc80a',
					iconCls:'x-SaveFile',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});