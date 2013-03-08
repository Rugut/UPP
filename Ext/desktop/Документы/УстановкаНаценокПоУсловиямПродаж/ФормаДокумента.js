Ext.define('Документы.УстановкаНаценокПоУсловиямПродаж.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 656,
	iconCls: 'bogus',
	title: 'Установка наценок по условиям продаж',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:354px;width:552px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:331px;width:552px;height:19px;',
		},
	]
});