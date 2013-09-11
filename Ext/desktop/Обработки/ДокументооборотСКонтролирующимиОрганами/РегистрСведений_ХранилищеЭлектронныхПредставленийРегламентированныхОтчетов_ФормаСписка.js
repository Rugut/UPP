Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ХранилищеЭлектронныхПредставленийРегламентированныхОтчетов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:634px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Список Файлы с электронными представлениями регламентированных отчетов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'РегистрСведенийСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:618px;height:259px;',
			height: 259,width: 618,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Описание',
					width:'185',
					dataIndex:'ЭлектронноеПредставление',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'198',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Тип файла отчетности',
					width:'125',
					dataIndex:'ТипФайлаОтчетности',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'118',
					dataIndex:'Размер',
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
						name:'ЭлектронноеПредставление',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'ТипФайлаОтчетности',
					},
					{
						name:'Размер',
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
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ХранилищеЭлектронныхПредставленийРегламентированныхОтчетов_ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ХранилищеЭлектронныхПредставленийРегламентированныхОтчетов_ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:634px;height:25px;',
			width: 634,
			height: 25,
			items:
			[
				'-',
				{
					text:'Выгрузить',
					tooltip:'Выгрузить в файлы',
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