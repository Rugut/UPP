Ext.define('Обработки.ЭкспортСоответствияСчетовБУиМСФО.Форма',
	{
	extend: 'Ext.window.Window',
	height: 81,width: 421,
	iconCls: 'bogus',
	title: 'Экспорт правил соответствия счетов БУ и МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:56px;width:421px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:72px;top:5px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайла',
			style: 'position:absolute;left:72px;top:29px;width:341px;height:19px;',
		},
	]
});