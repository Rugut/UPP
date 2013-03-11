Ext.define('Обработки.ВосстановлениеПоследовательности_НУ_УСН.Форма',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 402,
	iconCls: 'bogus',
	title: 'Восстановление последовательности налогового учета УСН',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:402px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:84px;width:402px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаАктуализации',
			style: 'position:absolute;left:121px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:121px;top:57px;width:273px;height:19px;',
		},
	]
});