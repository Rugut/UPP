Ext.define('Отчеты.УнифицированнаяФормаМ17.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:393px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма М-17',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Материал',
			style: 'position:absolute;left:88px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Материал:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:88px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:336px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:416px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период с',
			style: 'position:absolute;left:336px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачДата',
			style: 'position:absolute;left:416px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:505px;top:33px;width:18px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонДата',
			style: 'position:absolute;left:527px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыборПериода',
			text: '...',
			style: 'position:absolute;left:617px;top:33px;width:19px;height:19px;',
		},
	]
});