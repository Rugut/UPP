Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаВыбораРСВ',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:588px;height:410px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор расчета по страховым взносам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:572px;height:369px;',
			height: 369,width: 572,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница РСВ',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'В соответствии с требованиями Пенсионного фонда Российской Федерации представление файлов отчетности в электронной форме по страховым взносам и персонифицированному учету с 1 апреля 2011 года, включая отчетность за первый квартал 2011 года, в обязательном порядке осуществляется одновременно и одним отправлением.\r\n\r\nВыберите соответствующий расчет по страховым взносам, который будет отправлен вместе с отчетностью по персонифицированному отчету.',
			style: 'position:absolute;left:0px;top:0px;width:572px;height:94px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:100px;width:572px;height:3px;',
		},
		{
			id: 'ЖурналОтчетов',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:130px;width:572px;height:239px;',
			height: 239,width: 572,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Наименование отчета',
					width:'185',
					dataIndex:'НаименованиеОтчета',
					flex:1,
				},
				{
					text:'Период',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'220',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Статус',
					},
					{
						name:'НаименованиеОтчета',
					},
					{
						name:'Период',
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
						var грид = Ext.getCmp('ЖурналОтчетов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.ФормаВыбораРСВСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.ФормаВыбораРСВСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:385px;width:588px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Удалить привязку',
				},
				'-',
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});