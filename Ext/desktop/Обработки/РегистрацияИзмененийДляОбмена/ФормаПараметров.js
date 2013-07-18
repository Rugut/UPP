Ext.require(['Данные.Обработки.РегистрацияИзмененийДляОбмена'], function () 
{
	Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаПараметров',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:396px;height:271px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры запроса',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Параметры',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:34px;width:380px;height:229px;',
			height: 229,width: 380,
			columns:
			[
				{
					text:'Имя параметра',
					width:'150',
					dataIndex:'ИмяПараметра',
					flex:1,
				},
				{
					text:'В',
					width:'21',
					dataIndex:'ЭтоВыражение',
					flex:1,
				},
				{
					text:'Значение параметра',
					width:'191',
					dataIndex:'ЗначениеПараметра',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияИзмененийДляОбмена/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ИмяПараметра',
					},
					{
						name:'ЭтоВыражение',
					},
					{
						name:'ЗначениеПараметра',
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
						var грид = Ext.getCmp('Параметры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РегистрацияИзмененийДляОбмена.ФормаПараметровСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегистрацияИзмененийДляОбмена.ФормаПараметровСобытия");
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
			style: 'position:absolute;left:8px;top:8px;width:380px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Получить из запроса',
				},
			]
		},
	]
	});
});