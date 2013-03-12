Ext.define('Документы.РезервированиеТоваров.ФормаРаспределения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Размещение комплектующих для комплектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			items:
			[
				'-',
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:384px;height:229px;',
			height: 229,width: 384,
			columns:
			[
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Характеристика номенклатуры',
					width:'108',
				},
				{
					text:'Не размещено',
					width:'100',
				},
				{
					text:'Разместить как комплектующие',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:384px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Разместить все',
				},
				{
					text:'Действие7',
				},
				{
					text:'Не размещать ничего',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие8',
				},
			]
		},
	]
});