Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 459,width: 644,
	iconCls: 'bogus',
	title: 'Восстановление НДС по объектам недвижимости',
	
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
			style: 'position:absolute;left:203px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:227px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:407px;width:540px;height:19px;',
		},
	]
});