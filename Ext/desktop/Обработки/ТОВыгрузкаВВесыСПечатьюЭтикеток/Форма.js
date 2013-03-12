Ext.define('Обработки.ТОВыгрузкаВВесыСПечатьюЭтикеток.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выгрузка данных в весы с печатью этикеток',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Выгрузить в весы',
				},
				{
					text:'Справка',
				},
				{
					text:'Справка',
				},
				{
					text:'Заполнить',
				},
				'-',
				'-',
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Выгрузить в весы',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:52px;width:684px;height:21px;',
			height: 21,width: 684,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:391px;top:1px;width:293px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:97px;width:684px;height:108px;',
			height: 108,width: 684,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:39px;width:684px;height:69px;',
			height: 69,width: 684,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:15px;width:684px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только имеющиеся в наличии',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:211px;width:684px;height:24px;',
			items:
			[
				'-',
				{
					text:'Выделить все',
				},
				{
					text:'Очистить выделение',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:235px;width:684px;height:158px;',
			height: 158,width: 684,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Код товара',
					width:'60',
				},
				{
					text:'Номенклатура',
					width:'250',
				},
				{
					text:'Ед. изм',
					width:'76',
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
				},
				{
					text:'Серия номенклатуры',
					width:'250',
				},
				{
					text:'Качество',
					width:'100',
				},
				{
					text:'Цена',
					width:'80',
				},
			]
		},
	]
});