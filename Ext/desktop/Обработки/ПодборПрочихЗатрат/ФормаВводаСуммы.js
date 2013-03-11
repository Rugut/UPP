Ext.define('Обработки.ПодборПрочихЗатрат.ФормаВводаСуммы',
	{
	extend: 'Ext.window.Window',
	height: 87,width: 241,
	iconCls: 'bogus',
	title: 'Обработка  Подбор прочих затрат',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаУпр',
			style: 'position:absolute;left:88px;top:8px;width:88px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаРегл',
			style: 'position:absolute;left:88px;top:33px;width:88px;height:21px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:62px;width:241px;height:25px;',
			items:
			[
				{
					text:'кнОК',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});