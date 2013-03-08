Ext.define('Документы.РассылкаАнкет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 458,width: 449,
	iconCls: 'bogus',
	title: 'Рассылка анкет',
	
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Анкета',
			style: 'position:absolute;left:96px;top:57px;width:345px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервичнаяРассылка',
			style: 'position:absolute;left:96px;top:356px;width:345px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:381px;width:345px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:406px;width:345px;height:19px;',
		},
	]
});