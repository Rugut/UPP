Ext.define('Документы.ПередачаОборудованияВМонтаж.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 413,width: 660,
	iconCls: 'bogus',
	title: 'Передача оборудования в монтаж',
	
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
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъектВнеоборотныхАктивов',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:416px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаБУОбъектаСтроительства',
			style: 'position:absolute;left:416px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУОбъектаСтроительства',
			style: 'position:absolute;left:416px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:337px;width:558px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:361px;width:558px;height:19px;',
		},
	]
});