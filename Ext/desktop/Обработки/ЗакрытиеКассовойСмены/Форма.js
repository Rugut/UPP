Ext.define('Обработки.ЗакрытиеКассовойСмены.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:314px;height:108px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Закрытие кассовой смены',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКассаККМ',
			text: 'Касса ККМ:',
			style: 'position:absolute;left:8px;top:32px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМ',
			style: 'position:absolute;left:74px;top:32px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'Дата:',
			style: 'position:absolute;left:8px;top:8px;width:64px;height:19px;',
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
					text:'Закрыть смену',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:8px;top:56px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:74px;top:56px;width:232px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сверка итогов по картам',
			style: 'position:absolute;left:159px;top:8px;width:147px;height:19px;',
		},
	]
});