Ext.define('Документы.ПереоценкаВалютныхСтатейМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 186,width: 356,
	iconCls: 'bogus',
	title: '',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:51px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:175px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:91px;top:83px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:91px;top:108px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:91px;top:58px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОтнесенияКурсовыхРазниц',
			style: 'position:absolute;left:197px;top:134px;width:151px;height:19px;',
		},
	]
});