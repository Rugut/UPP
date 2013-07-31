Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПротоколаПФР',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:403px;height:298px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Протокол',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Приложения',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:80px;width:387px;height:185px;',
			height: 185,width: 387,
			columns:
			[
				{
					text:'Имя',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'100',
					dataIndex:'Идентификатор',
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
						name:'Имя',
					},
					{
						name:'Идентификатор',
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
						var грид = Ext.getCmp('Приложения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.ПросмотрПротоколаПФРСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.ПросмотрПротоколаПФРСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата и время отправки:',
			style: 'position:absolute;left:8px;top:8px;width:150px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Протокол положительный?',
			style: 'position:absolute;left:8px;top:33px;width:150px;height:18px;',
		},
		{
			xtype: 'fieldset',
			title: 'Содержимое',
			style: 'position:absolute;left:8px;top:60px;width:387px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Надпись40',
			style: 'position:absolute;left:165px;top:8px;width:230px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколЯвляетсяПоложительным',
			text: 'НадписьПротоколЯвляетсяПоложительным',
			style: 'position:absolute;left:165px;top:35px;width:230px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:273px;width:403px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});