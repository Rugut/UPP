Ext.define('Документы.ВводНачальныхОстатковОС.ФормаНастройкиВидимостиКолонок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:390px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка видимости колонок',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:455px;height:322px;',
			height: 322,width: 455,
			columns:
			[
				{
					text:'Реквизит',
					width:'337',
					dataIndex:'Реквизит',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковОС/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Реквизит',
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
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'СнятьПометки',
			text: '',
			style: 'position:absolute;left:468px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'УстановитьПометки',
			text: '',
			style: 'position:absolute;left:468px;top:37px;width:24px;height:24px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Фиксировать колонки ОС',
			style: 'position:absolute;left:8px;top:338px;width:484px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:365px;width:500px;height:25px;',
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
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});