Ext.define('Документы.УстановкаСоответствияСчетовБУиМСФО.ФормаИмпорт',
	{
	extend: 'Ext.window.Window',
	height: 81,width: 421,
	iconCls: 'bogus',
	title: 'Импорт правил соответствия счетов БУ и МСФО',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайла',
			style: 'position:absolute;left:72px;top:29px;width:341px;height:19px;',
		},
	]
});