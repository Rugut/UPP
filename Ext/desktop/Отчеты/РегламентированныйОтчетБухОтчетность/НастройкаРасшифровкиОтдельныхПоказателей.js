Ext.define('Отчеты.РегламентированныйОтчетБухОтчетность.НастройкаРасшифровкиОтдельныхПоказателей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:484px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка расшифровки отдельных показателей бухгалтерской отчетности',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТабличноеПолеДеревоНастроек',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:700px;height:418px;',
			height: 418,width: 700,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныйОтчетБухОтчетность/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ТабличноеПолеДеревоНастроек');
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
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Отметить все',
				},
				{
					text:'Снять все отметки',
				},
				'-',
				{
					text:'Сбросить',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:459px;width:716px;height:25px;',
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
					text:'',
				},
			]
		},
	]
});