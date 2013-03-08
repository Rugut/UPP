Ext.define('Документы.УстановкаЦенНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 313,width: 470,
	iconCls: 'bogus',
	title: 'Установка цен номенклатуры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:102px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:202px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:261px;width:360px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СписокТиповЦен',
			style: 'position:absolute;left:102px;top:57px;width:360px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:102px;top:237px;width:360px;height:19px;',
		},
	]
});