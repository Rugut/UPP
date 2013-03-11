Ext.define('Обработки.ЗакрытиеКассовойСмены.Форма',
	{
	extend: 'Ext.window.Window',
	height: 108,width: 314,
	iconCls: 'bogus',
	title: 'Закрытие кассовой смены',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМ',
			style: 'position:absolute;left:74px;top:32px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:74px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:83px;width:314px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ЗакрытьСмену',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:74px;top:56px;width:232px;height:19px;',
		},
	]
});