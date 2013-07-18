Ext.require(['Данные.Документы.ЗакрытиеЗаказовПокупателей'], function () 
{
	Ext.define('Документы.ЗакрытиеЗаказовПокупателей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Закрытие заказов покупателей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:174px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:349px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 90,
			height: 19,
			style: 'position:absolute;left:84px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 548,
			height: 19,
			style: 'position:absolute;left:94px;top:349px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:334px;top:325px;width:88px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 220,
			height: 19,
			style: 'position:absolute;left:422px;top:325px;width:220px;height:19px;',
		},
		{
			id: 'Заказы',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:125px;width:634px;height:195px;',
			height: 195,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'ОУ',
					width:'23',
					dataIndex:'ОбособленныйУчет',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'220',
					dataIndex:'ЗаказПокупателя',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'КонтрагентЗаказа',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаЗаказа',
					flex:1,
				},
				{
					text:'Валюта',
					width:'50',
					dataIndex:'ВалютаЗаказа',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'ОтветственныйЗаЗаказ',
					flex:1,
				},
				{
					text:'Причина закрытия заказа',
					width:'120',
					dataIndex:'ПричинаЗакрытияЗаказа',
					flex:1,
				},
				{
					text:'Организация',
					width:'119',
					dataIndex:'ОрганизацияЗаказа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗакрытиеЗаказовПокупателей/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОбособленныйУчет',
					},
					{
						name:'ЗаказПокупателя',
					},
					{
						name:'КонтрагентЗаказа',
					},
					{
						name:'СуммаЗаказа',
					},
					{
						name:'ВалютаЗаказа',
					},
					{
						name:'ОтветственныйЗаЗаказ',
					},
					{
						name:'ПричинаЗакрытияЗаказа',
					},
					{
						name:'ОрганизацияЗаказа',
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
						var грид = Ext.getCmp('Заказы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗакрытиеЗаказовПокупателей.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗакрытиеЗаказовПокупателей.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:101px;width:634px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеКомпании',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:325px;width:84px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеКомпании',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:325px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:650px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Заказы',
			style: 'position:absolute;left:8px;top:85px;width:634px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 230,
			height: 19,
			style: 'position:absolute;left:84px;top:56px;width:230px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});