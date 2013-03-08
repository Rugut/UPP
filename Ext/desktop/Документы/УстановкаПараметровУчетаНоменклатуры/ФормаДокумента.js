Ext.define('Документы.УстановкаПараметровУчетаНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 388,width: 800,
	iconCls: 'bogus',
	title: 'Установка параметров учета номенклатуры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:48px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:148px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:312px;width:696px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:336px;width:696px;height:19px;',
		},
	]
});