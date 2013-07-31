Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЦиклыОбмена_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Циклы обмена',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:259px;',
			height: 259,width: 684,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'96',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Предмет',
					width:'104',
					dataIndex:'Предмет',
					flex:1,
				},
				{
					text:'Организация',
					width:'104',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Внешняя организация',
					width:'104',
					dataIndex:'ВнешняяОрганизация',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'120',
					dataIndex:'Идентификатор',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'104',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'104',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Тип цикла обмена',
					width:'104',
					dataIndex:'Тип',
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
						name:'Код',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'Наименование',
					},
					{
						name:'Предмет',
					},
					{
						name:'Организация',
					},
					{
						name:'ВнешняяОрганизация',
					},
					{
						name:'Идентификатор',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ДатаПоследнегоСообщения',
					},
					{
						name:'Тип',
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
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Справочник_ЦиклыОбмена_ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Справочник_ЦиклыОбмена_ФормаСпискаСобытия");
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
					text:'Выбрать',
				},
				'-',
			]
		},
	]
	});
});