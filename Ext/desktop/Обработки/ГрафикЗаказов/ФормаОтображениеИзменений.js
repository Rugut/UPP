Ext.require(['Данные.Обработки.ГрафикЗаказов'], function () 
{
	Ext.define('Обработки.ГрафикЗаказов.ФормаОтображениеИзменений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:747px;height:335px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Список изменений',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаОтображенияИзменений',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:48px;width:731px;height:254px;',
			height: 254,width: 731,
			columns:
			[
				{
					text:'Изменять',
					width:'59',
					dataIndex:'Изменять',
					flex:1,
				},
				{
					text:'Заказ',
					width:'20',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Заказ',
					width:'367',
					dataIndex:'ПредставлениеЗаказа',
					flex:1,
				},
				{
					text:'Дата запуска',
					width:'64',
					dataIndex:'ДатыЗапуска',
					flex:1,
				},
				{
					text:'Исходная',
					width:'80',
					dataIndex:'ДатаЗапускаИсходная',
					flex:1,
				},
				{
					text:'Новая',
					width:'65',
					dataIndex:'ДатаЗапуска',
					flex:1,
				},
				{
					text:'Дата исполнения',
					width:'84',
					dataIndex:'ДатыИсполнения',
					flex:1,
				},
				{
					text:'Исходная',
					width:'73',
					dataIndex:'ДатаИсполненияИсходная',
					flex:1,
				},
				{
					text:'Новая',
					width:'76',
					dataIndex:'ДатаИсполнения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикЗаказов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Изменять',
					},
					{
						name:'Заказ',
					},
					{
						name:'ПредставлениеЗаказа',
					},
					{
						name:'ДатыЗапуска',
					},
					{
						name:'ДатаЗапускаИсходная',
					},
					{
						name:'ДатаЗапуска',
					},
					{
						name:'ДатыИсполнения',
					},
					{
						name:'ДатаИсполненияИсходная',
					},
					{
						name:'ДатаИсполнения',
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
						var грид = Ext.getCmp('ТаблицаОтображенияИзменений');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ГрафикЗаказов.ФормаОтображениеИзмененийСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГрафикЗаказов.ФормаОтображениеИзмененийСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: 'НадписьИнформация',
			style: 'position:absolute;left:8px;top:5px;width:731px;height:38px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:747px;height:25px;',
			width: 747,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сохранить изменения',
				},
				{
					text:'Не сохранять изменения',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});