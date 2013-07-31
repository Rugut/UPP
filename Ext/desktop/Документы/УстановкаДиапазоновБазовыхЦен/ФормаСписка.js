Ext.require(['Данные.Документы.УстановкаДиапазоновБазовыхЦен'], function () 
{
	Ext.define('Документы.УстановкаДиапазоновБазовыхЦен.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:610px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка диапазонов базовых цен',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:594px;height:259px;',
			height: 259,width: 594,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'86',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'113',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'164',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'166',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'269',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаДиапазоновБазовыхЦен/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'Ответственный',
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
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УстановкаДиапазоновБазовыхЦен.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УстановкаДиапазоновБазовыхЦен.ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:610px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});