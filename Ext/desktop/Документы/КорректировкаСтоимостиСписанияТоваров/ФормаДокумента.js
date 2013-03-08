Ext.define('Документы.КорректировкаСтоимостиСписанияТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 203,width: 399,
	iconCls: 'bogus',
	title: 'Корректировка стоимости списания товаров',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:111px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:249px;top:33px;width:142px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:80px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:96px;top:57px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:151px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:126px;width:295px;height:19px;',
		},
	]
});