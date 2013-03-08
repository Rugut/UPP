Ext.define('Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 287,width: 384,
	iconCls: 'bogus',
	title: 'Регламентные операции налогового учета (по налогу на приб.)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:97px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:97px;top:81px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:97px;top:57px;width:119px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:97px;top:208px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:233px;width:279px;height:19px;',
		},
	]
});