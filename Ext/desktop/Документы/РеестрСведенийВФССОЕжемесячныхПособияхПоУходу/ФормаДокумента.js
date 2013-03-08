Ext.define('Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 991,
	iconCls: 'bogus',
	title: 'Реестр сведений в ФСС о ежемесячных пособиях по уходу',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:413px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:520px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:528px;width:887px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:704px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыСоставителя',
			style: 'position:absolute;left:864px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РеестрСоставил',
			style: 'position:absolute;left:464px;top:57px;width:176px;height:19px;',
		},
	]
});