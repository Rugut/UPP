Ext.require(['Данные.Отчеты.ОборотноСальдоваяВедомостьБюджетирование'], function () 
{
	Ext.define('Отчеты.ОборотноСальдоваяВедомостьБюджетирование.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:310px;height:303px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка: Оборотно-сальдовая ведомость',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:294px;height:270px;',
			height: 270,width: 294,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по забалансовым счетам',
			style: 'position:absolute;left:12px;top:158px;width:196px;height:15px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 222,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:64px;top:30px;width:222px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ОборотноСальдоваяВедомостьБюджетирование.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотноСальдоваяВедомостьБюджетирование.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ОборотноСальдоваяВедомостьБюджетирование.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотноСальдоваяВедомостьБюджетирование.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Детализация по субсчетам и субконто',
			style: 'position:absolute;left:12px;top:118px;width:220px;height:15px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:64px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:164px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по валютам',
			style: 'position:absolute;left:12px;top:138px;width:128px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Выводить данные:',
			style: 'position:absolute;left:6px;top:57px;width:280px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:246px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Развернутое сальдо',
			style: 'position:absolute;left:12px;top:98px;width:128px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В валюте сценария',
			style: 'position:absolute;left:12px;top:78px;width:124px;height:15px;',
		},
					]
				},
				{
					title:'Развернутое сальдо',
					items:
					[
		{
			id: 'ПравилаРазвернутогоСальдо',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:280px;height:220px;',
			height: 220,width: 280,
			columns:
			[
				{
					text:'Счет',
					width:'80',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'По субсчетам',
					width:'80',
					dataIndex:'Субсчета',
					flex:1,
				},
				{
					text:'По субконто',
					width:'120',
					dataIndex:'ПредставлениеРазворотПоСубконто',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОборотноСальдоваяВедомостьБюджетирование/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Счет',
					},
					{
						name:'Субсчета',
					},
					{
						name:'ПредставлениеРазворотПоСубконто',
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
						var грид = Ext.getCmp('ПравилаРазвернутогоСальдо');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ОборотноСальдоваяВедомостьБюджетирование.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОборотноСальдоваяВедомостьБюджетирование.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Детализация',
					items:
					[
		{
			id: 'ПравилаВыводаИтогов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:280px;height:220px;',
			height: 220,width: 280,
			columns:
			[
				{
					text:'Счет',
					width:'80',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'По субсчетам',
					width:'80',
					dataIndex:'Субсчета',
					flex:1,
				},
				{
					text:'По субконто',
					width:'120',
					dataIndex:'ПредставлениеРазворотПоСубконто',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОборотноСальдоваяВедомостьБюджетирование/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Счет',
					},
					{
						name:'Субсчета',
					},
					{
						name:'ПредставлениеРазворотПоСубконто',
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
						var грид = Ext.getCmp('ПравилаВыводаИтогов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ОборотноСальдоваяВедомостьБюджетирование.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОборотноСальдоваяВедомостьБюджетирование.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:278px;width:310px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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
	]
	});
});