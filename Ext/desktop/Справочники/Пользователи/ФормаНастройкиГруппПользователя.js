Ext.require(['Данные.Справочники.Пользователи'], function () 
{
	Ext.define('Справочники.Пользователи.ФормаНастройкиГруппПользователя',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:326px;height:425px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы, в которые входит пользователь',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьПользователь',
			text: 'Пользователь:',
			style: 'position:absolute;left:8px;top:8px;width:310px;height:15px;',
		},
		{
			id: 'ДеревоГрупп',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:28px;width:310px;height:364px;',
			height: 364,width: 310,
			columns:
			[
				{
					text:'Группа пользователей',
					width:'172',
					dataIndex:'ГруппаПользователей',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.Пользователи").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Пользователи/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ГруппаПользователей',
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
						var грид = Ext.getCmp('ДеревоГрупп');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Пользователи.ФормаНастройкиГруппПользователяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Пользователи.ФормаНастройкиГруппПользователяСобытия");
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
			style: 'position:absolute;left:0px;top:400px;width:326px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:14px;top:13px;width:105px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Настройка доступа',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
	]
	});
});