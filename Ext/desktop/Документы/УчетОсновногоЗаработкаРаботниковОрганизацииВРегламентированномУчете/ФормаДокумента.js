Ext.define('Документы.УчетОсновногоЗаработкаРаботниковОрганизацииВРегламентированномУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 643,
	iconCls: 'bogus',
	title: 'Учет основного заработка сотрудников организации в регламентированном учете',
	
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
			style: 'position:absolute;left:197px;top:33px;width:119px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:349px;width:539px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаДокумент',
			style: 'position:absolute;left:415px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтражаемыйДокумент',
			style: 'position:absolute;left:415px;top:33px;width:220px;height:19px;',
		},
	]
});