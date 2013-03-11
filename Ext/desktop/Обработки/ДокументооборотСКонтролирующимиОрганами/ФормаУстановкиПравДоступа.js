Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаУстановкиПравДоступа',
	{
	extend: 'Ext.window.Window',
	height: 444,width: 456,
	iconCls: 'bogus',
	title: 'Выберите пользователей учетной записи',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:72px;width:440px;height:304px;',
			height: 304,width: 440,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Пользователь',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:419px;width:456px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});