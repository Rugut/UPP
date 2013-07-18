Ext.require(['Данные.Отчеты.ВедомостьВозвратнаяТара'], function () 
{
	Ext.define('Отчеты.ВедомостьВозвратнаяТара.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:362px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группировки отчета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'button',
			name: 'УстановитьВсе',
			text: '',
			style: 'position:absolute;left:330px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'СнятьВсе',
			text: '',
			style: 'position:absolute;left:330px;top:37px;width:24px;height:24px;',
		},
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:320px;height:220px;',
			height: 220,width: 320,
			columns:
			[
				{
					text:'Представление поля',
					width:'209',
					dataIndex:'ПредставлениеПоля',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВедомостьВозвратнаяТара/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ПредставлениеПоля',
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
						Ext.require(['Справочники.ВедомостьВозвратнаяТара.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВедомостьВозвратнаяТара.ФормаВыбораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:188px;top:233px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:274px;top:233px;width:80px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});