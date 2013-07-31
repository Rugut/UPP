Ext.require(['Данные.Документы.ПланДвиженияДенежныхСредств'], function () 
{
	Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:705px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планы движения денежных средств',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:689px;height:259px;',
			height: 259,width: 689,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'140',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'35',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Пометка удаления',
					width:'70',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'350',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Валюта документа',
					width:'70',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Дата планирования',
					width:'84',
					dataIndex:'ДатаПланирования',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'350',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'350',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Вид денежных средств',
					width:'100',
					dataIndex:'ВидДенежныхСредств',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланДвиженияДенежныхСредств/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Сценарий',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'ДатаПланирования',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ВидДенежныхСредств',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПланДвиженияДенежныхСредств.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланДвиженияДенежныхСредств.ФормаВыбораСобытия");
							obj.ПередатьСсылку(ссылка);
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
			style: 'position:absolute;left:0px;top:0px;width:705px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
			]
		},
	]
	});
});