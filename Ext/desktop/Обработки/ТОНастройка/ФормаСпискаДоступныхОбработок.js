Ext.require(['Данные.Обработки.ТОНастройка'], function () 
{
	Ext.define('Обработки.ТОНастройка.ФормаСпискаДоступныхОбработок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:957px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список доступных обработок обслуживания',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДоступныеОбработкиОбслуживания',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:941px;height:220px;',
			height: 220,width: 941,
			columns:
			[
				{
					text:'Наименование',
					width:'285',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'195',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Описание',
					width:'562',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Версия',
					width:'44',
					dataIndex:'Версия',
					flex:1,
				},
				{
					text:'Версия API',
					width:'82',
					dataIndex:'ВерсияAPI',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Описание',
					},
					{
						name:'Версия',
					},
					{
						name:'ВерсияAPI',
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
						var грид = Ext.getCmp('ДоступныеОбработкиОбслуживания');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ТОНастройка.ФормаСпискаДоступныхОбработокСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТОНастройка.ФормаСпискаДоступныхОбработокСобытия");
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
			style: 'position:absolute;left:0px;top:236px;width:957px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Отменить',
				},
			]
		},
	]
	});
});