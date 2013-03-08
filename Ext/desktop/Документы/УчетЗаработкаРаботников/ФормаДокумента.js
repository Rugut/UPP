Ext.define('Документы.УчетЗаработкаРаботников.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 428,width: 477,
	iconCls: 'bogus',
	title: 'Учет заработка сотрудников',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:376px;width:373px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаДокумент',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
	]
});