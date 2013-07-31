Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПоказВходящихСообщений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:771px;height:436px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сообщения для просмотра',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:49px;width:755px;height:311px;',
			height: 311,width: 755,
			columns:
			[
				{
					text:'Описание',
					width:'100',
					dataIndex:'Описание',
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
						name:'Описание',
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
						var грид = Ext.getCmp('Дерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.ПоказВходящихСообщенийСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.ПоказВходящихСообщенийСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:364px;width:755px;height:39px;',
			height: 39,width: 755,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:2px;width:755px;height:4px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовок',
			text: 'НадписьЗаголовок',
			style: 'position:absolute;left:8px;top:8px;width:755px;height:31px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:43px;width:755px;height:4px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:411px;width:771px;height:25px;',
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
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});