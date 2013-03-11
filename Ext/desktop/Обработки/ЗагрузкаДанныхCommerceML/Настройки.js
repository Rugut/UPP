Ext.define('Обработки.ЗагрузкаДанныхCommerceML.Настройки',
	{
	extend: 'Ext.window.Window',
	height: 132,width: 442,
	iconCls: 'bogus',
	title: 'Настройки загрузки данных',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:107px;width:442px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:31px;top:80px;width:403px;height:19px;',
		},
	]
});