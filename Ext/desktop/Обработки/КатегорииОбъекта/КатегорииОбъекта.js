Ext.require(['Данные.Обработки.КатегорииОбъекта'], function () 
{
	Ext.define('Обработки.КатегорииОбъекта.КатегорииОбъекта',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:376px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Категории',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
		{
			id: 'КатегорииОбъекта',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:360px;height:234px;',
			height: 234,width: 360,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'320',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КатегорииОбъекта/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
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
						var грид = Ext.getCmp('КатегорииОбъекта');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КатегорииОбъекта.КатегорииОбъектаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КатегорииОбъекта.КатегорииОбъектаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:275px;width:376px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
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