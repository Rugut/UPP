Ext.require(['Данные.Отчеты.ИсторияИзмененийОбъектов'], function () 
{
	Ext.define('Отчеты.ИсторияИзмененийОбъектов.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:485px;height:389px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'История изменений объектов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокВерсий',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:56px;width:469px;height:105px;',
			height: 105,width: 469,
			columns:
			[
				{
					text:'№',
					width:'44',
					dataIndex:'НомерВерсии',
					flex:1,
				},
				{
					text:'Дата',
					width:'119',
					dataIndex:'ДатаВерсии',
					flex:1,
				},
				{
					text:'Автор изменений',
					width:'188',
					dataIndex:'АвторВерсии',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсторияИзмененийОбъектов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерВерсии',
					},
					{
						name:'ДатаВерсии',
					},
					{
						name:'АвторВерсии',
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
						var грид = Ext.getCmp('СписокВерсий');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИсторияИзмененийОбъектов.ФормаОтчетаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИсторияИзмененийОбъектов.ФормаОтчетаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОбъект',
			text: 'Объект:',
			style: 'position:absolute;left:8px;top:32px;width:43px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СсылкаНаОбъект',
			width: 425,
			height: 19,
			style: 'position:absolute;left:52px;top:32px;width:425px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:485px;height:25px;',
			items:
			[
				{
					text:'Показать версию',
				},
				'-',
				{
					text:'Сравнить версии',
				},
				'-',
				{
					text:'Обновить список версий',
				},
				'-',
				{
					text:'Справка',
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