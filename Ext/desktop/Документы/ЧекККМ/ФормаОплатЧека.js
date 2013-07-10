Ext.define('Документы.ЧекККМ.ФормаОплатЧека',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:480px;height:228px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оплата чека',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:203px;width:480px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Оплатить картой',
				},
				'-',
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
			xtype: 'label',
			name: 'НадписьИтого',
			text: 'Итого (руб.):',
			style: 'position:absolute;left:8px;top:7px;width:111px;height:22px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидОплаты',
			width: 237,
			height: 22,
			style: 'position:absolute;left:143px;top:33px;width:237px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОплата',
			text: 'Оплата:',
			style: 'position:absolute;left:8px;top:33px;width:111px;height:22px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Всего',
			style: 'position:absolute;left:362px;top:7px;width:110px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаОплаты',
			text: 'Сумма оплаты:',
			style: 'position:absolute;left:8px;top:175px;width:111px;height:22px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаОплаты',
			style: 'position:absolute;left:143px;top:175px;width:110px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОплатаБезСдачи',
			text: '',
			style: 'position:absolute;left:121px;top:175px;width:20px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСдача',
			text: 'Сдача (руб.):',
			style: 'position:absolute;left:263px;top:175px;width:96px;height:22px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Сдача',
			style: 'position:absolute;left:362px;top:175px;width:110px;height:22px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:464px;height:116px;',
			height: 116,width: 464,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			id: 'Оплата',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:464px;height:86px;',
			height: 86,width: 464,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид оплаты',
					width:'100',
					dataIndex:'ВидОплаты',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЧекККМ/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидОплаты',
					},
					{
						name:'Сумма',
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
						var грид = Ext.getCmp('Оплата');
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
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:121px;top:33px;width:20px;height:22px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Списком',
			style: 'position:absolute;left:390px;top:33px;width:82px;height:22px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
	]
});