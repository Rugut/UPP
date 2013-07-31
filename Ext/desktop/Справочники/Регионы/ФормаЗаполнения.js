Ext.require(['Данные.Справочники.Регионы'], function () 
{
	Ext.define('Справочники.Регионы.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:722px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					fields: ['Пометка','Наименование','Код','Ссылка',]
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Регионы.ФормаЗаполненияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Регионы.ФормаЗаполненияСобытия");
							obj.ПередатьСсылку(ссылка);
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
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Заполнить / Обновить список',
				},
				'-',
				{
					text:'Дополнить справочник',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:422px;top:231px;width:155px;height:129px;',
			dock: 'top',
			items:
			[
				{
					text:'Пометить вложенные',
				},
				{
					text:'Сбросить вложенные',
				},
				'-',
				{
					text:'Пометить текущий уровень',
				},
				{
					text:'Сбросить текущий уровень',
				},
			]
		},
	]
	});
});