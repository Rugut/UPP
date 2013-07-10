Ext.define('Обработки.ПодготовкаДанныхПФР2009.ФормаВводаДаты',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:359px;height:293px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Окончание межрасчетного периода',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Укажите дату окончания межрасчетного периода',
			style: 'position:absolute;left:8px;top:8px;width:258px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияМежрасчетногоПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:271px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:269px;width:359px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			id: 'ТаблицаСотрудников',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:83px;width:343px;height:178px;',
			height: 178,width: 343,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2009/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'',
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
						var грид = Ext.getCmp('ТаблицаСотрудников');
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
			xtype: 'label',
			name: 'Надпись2',
			text: 'Выберите сотрудников, выходящих на пенсию',
			style: 'position:absolute;left:8px;top:38px;width:258px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:59px;width:343px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
	]
});