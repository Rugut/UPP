Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ВложенияНеформализованныхДокументов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:667px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список Вложения неформализованных документов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'РегистрСведенийСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:651px;height:259px;',
			height: 259,width: 651,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Документ',
					width:'185',
					dataIndex:'НеформализованныйДокумент',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'198',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'123',
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
						name:'НеформализованныйДокумент',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Тип',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ВложенияНеформализованныхДокументов_ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ВложенияНеформализованныхДокументов_ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:667px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Выгрузить',
				},
			]
		},
	]
	});
});