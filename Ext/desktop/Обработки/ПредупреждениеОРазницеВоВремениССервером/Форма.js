Ext.define('Обработки.ПредупреждениеОРазницеВоВремениССервером.Форма',
	{
	extend: 'Ext.window.Window',
	height: 179,width: 600,
	iconCls: 'bogus',
	title: 'Разница во времени с сервером 1С:Предприятия',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:154px;width:600px;height:25px;',
			items:
			[
				{
					text:'Выйти',
				},
				{
					text:'Продолжить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНаСервере',
			style: 'position:absolute;left:178px;top:36px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНаКлиенте',
			style: 'position:absolute;left:178px;top:61px;width:120px;height:19px;',
		},
	]
});