Ext.require(['Данные.Справочники.ХранилищеДополнительнойИнформации'], function () 
{
	Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительная информация',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:700px;height:220px;',
			height: 220,width: 700,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект',
					width:'120',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'Вид данных',
					width:'120',
					dataIndex:'ВидДанных',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'220',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Описание',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ХранилищеДополнительнойИнформации").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ХранилищеДополнительнойИнформации/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Объект',
					},
					{
						name:'ВидДанных',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Наименование',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ХранилищеДополнительнойИнформации.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ХранилищеДополнительнойИнформации.ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});