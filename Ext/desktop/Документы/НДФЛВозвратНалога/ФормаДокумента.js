Ext.define('Документы.НДФЛВозвратНалога.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 367,width: 668,
	iconCls: 'bogus',
	title: 'Возврат налога на доходы физических лиц',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:410px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:510px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:84px;top:314px;width:576px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:410px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцНалоговогоПериода',
			style: 'position:absolute;left:84px;top:57px;width:220px;height:19px;',
		},
	]
});