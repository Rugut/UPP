Ext.define('Документы.ЗаданиеНаПроизводство.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 381,width: 644,
	iconCls: 'bogus',
	title: 'Задание на производство',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗадания',
			style: 'position:absolute;left:416px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:329px;width:538px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Смена',
			style: 'position:absolute;left:416px;top:57px;width:220px;height:19px;',
		},
	]
});