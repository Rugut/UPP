Ext.define('Документы.ЗаявлениеОбОбменеДубликатеСтраховогоСвидетельства.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 464,width: 644,
	iconCls: 'bogus',
	title: 'Заявление об обмене, дубликате страхового свидетельства',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:412px;width:546px;height:19px;',
		},
	]
});