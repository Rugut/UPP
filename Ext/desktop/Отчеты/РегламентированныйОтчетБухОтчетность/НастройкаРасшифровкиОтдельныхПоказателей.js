Ext.require(['Данные.Отчеты.РегламентированныйОтчетБухОтчетность'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетБухОтчетность.НастройкаРасшифровкиОтдельныхПоказателей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:484px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка расшифровки отдельных показателей бухгалтерской отчетности',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			width: 716,
			height: 25,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныйОтчетБухОтчетность/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТабличноеПолеДеревоНастроек');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РегламентированныйОтчетБухОтчетность.НастройкаРасшифровкиОтдельныхПоказателейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегламентированныйОтчетБухОтчетность.НастройкаРасшифровкиОтдельныхПоказателейСобытия");
							obj.ПередатьСсылку(стрЗнач);
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
			style: 'position:absolute;left:0px;top:459px;width:716px;height:25px;',
			width: 716,
			height: 25,
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
});