Ext.define('Обработки.ПодборНоменклатуры.ВводПараметровБезСерийСХарактеристиками',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:394px;height:253px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод количества и цены',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:394px;height:25px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаСуммы',
			text: 'Надпись',
			style: 'position:absolute;left:167px;top:177px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма:',
			style: 'position:absolute;left:8px;top:177px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФомулаСумма',
			text: 'Надпись',
			style: 'position:absolute;left:78px;top:177px;width:82px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:228px;width:394px;height:25px;',
			items:
			[
				{
					text:'Получить вес',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВесы',
			text: 'Весы:',
			style: 'position:absolute;left:8px;top:201px;width:68px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:378px;height:139px;',
			height: 139,width: 378,
			columns:
			[
				{
					text:'Характеристика номенклатуры',
					width:'120',
				},
				{
					text:'Количество',
					width:'64',
				},
				{
					text:'Единица измерения',
					width:'54',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Валюта цены',
					width:'60',
				},
				{
					text:'Свободный остаток',
					width:'100',
				},
				{
					text:'Остаток организации',
					width:'100',
				},
				{
					text:'Качество',
					width:'100',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать остатки',
			style: 'position:absolute;left:262px;top:181px;width:124px;height:15px;',
		},
	]
});