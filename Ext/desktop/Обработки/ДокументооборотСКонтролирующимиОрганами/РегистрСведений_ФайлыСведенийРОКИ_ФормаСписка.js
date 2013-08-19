Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ФайлыСведенийРОКИ_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:741px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Список Кэш файлов с ресурса общей ключевой информации ""Такском""',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'РегистрСведенийСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:725px;height:259px;',
			height: 259,width: 725,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'145',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Ресурс',
					width:'191',
					dataIndex:'ИмяРесурса',
					flex:1,
				},
				{
					text:'Дата обновления файла на сервере',
					width:'206',
					dataIndex:'ДатаФайла',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'115',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Расшифрован',
					width:'21',
					dataIndex:'Расшифрован',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'ИмяРесурса',
					},
					{
						name:'ДатаФайла',
					},
					{
						name:'Размер',
					},
					{
						name:'Расшифрован',
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
						var грид = Ext.getCmp('РегистрСведенийСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ФайлыСведенийРОКИ_ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ФайлыСведенийРОКИ_ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:741px;height:25px;',
			items:
			[
				'-',
				{
					text:'Очистить кэш',
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