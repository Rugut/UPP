Ext.require(['Данные.Обработки.ГрупповаяОбработкаСправочниковИДокументов'], function () 
{
	Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.ФормаВыбораТаблицы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:344px;height:463px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Внешняя обработка2',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:9px;width:328px;height:24px;',
			width: 328,
			height: 24,
			items:
			[
				{
					text:'Установить флажки',
					tooltip:'',
				},
				{
					text:'Снять флажки',
					tooltip:'',
				},
			]
		},
		{
			id: 'ДеревоТаблиц',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:328px;height:397px;',
			height: 397,width: 328,
			columns:
			[
				{
					text:'Представление таблицы',
					width:'106',
					dataIndex:'ПредставлениеТаблицы',
					flex:1,
				},
				{
					text:'Имя таблицы',
					width:'86',
					dataIndex:'ИмяТаблицы',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаСправочниковИДокументов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПредставлениеТаблицы',
					},
					{
						name:'ИмяТаблицы',
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
						var грид = Ext.getCmp('ДеревоТаблиц');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ГрупповаяОбработкаСправочниковИДокументов.ФормаВыбораТаблицыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГрупповаяОбработкаСправочниковИДокументов.ФормаВыбораТаблицыСобытия");
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:438px;width:344px;height:25px;',
			width: 344,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выбрать',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});