Ext.require(['Данные.Справочники.КонвертацииИзИнформационныхБаз1СПредприятия77'], function () 
{
	Ext.define('Справочники.КонвертацииИзИнформационныхБаз1СПредприятия77.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:190px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Конвертации из информационных баз 1С:Предприятия 7.7',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:149px;',
			height: 149,width: 684,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Конфигурация',
					width:'250',
					dataIndex:'Конфигурация',
					flex:1,
				},
				{
					text:'Идентификатор конфигурации',
					width:'120',
					dataIndex:'ИдентификаторКонфигурации',
					flex:1,
				},
				{
					text:'Номер релиза',
					width:'100',
					dataIndex:'НомерРелиза',
					flex:1,
				},
				{
					text:'Помощник',
					width:'100',
					dataIndex:'КонвертацияПомощник',
					flex:1,
				},
				{
					text:'Обработка',
					width:'100',
					dataIndex:'КонвертацияОбработка',
					flex:1,
				},
				{
					text:'Правила',
					width:'100',
					dataIndex:'КонвертацияПравила',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.КонвертацииИзИнформационныхБаз1СПредприятия77").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонвертацииИзИнформационныхБаз1СПредприятия77/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Конфигурация',
					},
					{
						name:'ИдентификаторКонфигурации',
					},
					{
						name:'НомерРелиза',
					},
					{
						name:'КонвертацияПомощник',
					},
					{
						name:'КонвертацияОбработка',
					},
					{
						name:'КонвертацияПравила',
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
						Ext.require(['Справочники.КонвертацииИзИнформационныхБаз1СПредприятия77.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонвертацииИзИнформационныхБаз1СПредприятия77.ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Заменить файлы конвертации',
				},
				'-',
				{
					text:'Записать файлы конвертации на диск',
				},
				'-',
				{
					text:'Восстановить файлы конвертации',
				},
			]
		},
	]
	});
});