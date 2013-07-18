Ext.require(['Данные.Справочники.ПроизвольныеОтчеты'], function () 
{
	Ext.define('Справочники.ПроизвольныеОтчеты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:398px;height:345px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Произвольные отчеты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:382px;height:268px;',
			height: 268,width: 382,
			columns:
			[
				{
					text:'Наименование',
					width:'228',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ПроизвольныеОтчеты").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроизвольныеОтчеты/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Наименование',
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
						Ext.require(['Справочники.ПроизвольныеОтчеты.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПроизвольныеОтчеты.ФормаВыбораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: '',
			style: 'position:absolute;left:65px;top:306px;width:325px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание1',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:306px;width:56px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:398px;height:25px;',
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