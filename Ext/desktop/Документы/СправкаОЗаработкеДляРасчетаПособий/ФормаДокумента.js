Ext.define('Документы.СправкаОЗаработкеДляРасчетаПособий.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 413,width: 682,
	iconCls: 'bogus',
	title: 'Справка о заработке для расчета пособий',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:454px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:554px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:454px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:113px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:361px;width:578px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодС',
			style: 'position:absolute;left:113px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодПо',
			style: 'position:absolute;left:224px;top:83px;width:80px;height:19px;',
		},
	]
});