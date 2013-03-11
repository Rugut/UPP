Ext.define('Справочники.НастройкаИнтервалов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 373,width: 384,
	iconCls: 'bogus',
	title: 'Настройка интервала',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:283px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:76px;width:369px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:100px;width:369px;height:240px;',
			height: 240,width: 369,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НачалоИнтервала',
				},
				{
					text:'Подпись',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:384px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:348px;width:384px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});