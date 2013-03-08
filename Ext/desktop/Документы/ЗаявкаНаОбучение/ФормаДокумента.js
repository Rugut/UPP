Ext.define('Документы.ЗаявкаНаОбучение.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 396,width: 415,
	iconCls: 'bogus',
	title: 'Заявка на курс обучения',
	
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
			name: 'КурсОбучения',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:344px;width:313px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:320px;width:313px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗавершенияКурса',
			style: 'position:absolute;left:94px;top:101px;width:80px;height:19px;',
		},
	]
});