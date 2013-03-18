Ext.define('Обработки.ПечатьЦенников.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:461px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Печать ценников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:210px;width:764px;height:217px;',
			height: 217,width: 764,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'N',
					width:'31',
				},
				{
					text:'Номенклатура',
					width:'224',
				},
				{
					text:'Характеристика номенклатуры',
					width:'189',
				},
				{
					text:'Ед. изм.',
					width:'58',
				},
				{
					text:'Цена',
					width:'89',
				},
				{
					text:'Количество',
					width:'66',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен:',
			style: 'position:absolute;left:341px;top:33px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:390px;top:33px;width:236px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:111px;width:764px;height:69px;',
			height: 69,width: 764,
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
			style: 'position:absolute;left:8px;top:87px;width:764px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только имеющиеся в наличии',
			style: 'position:absolute;left:8px;top:72px;width:233px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:186px;width:764px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:435px;width:780px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:680px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:632px;top:33px;width:43px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:83px;top:33px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:70px;height:19px;',
		},
	]
});