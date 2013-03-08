Ext.define('Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 576,width: 900,
	iconCls: 'bogus',
	title: 'Реестр сведений в ФСС о пособиях при рождении ребенка',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:424px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:544px;top:33px;width:120px;height:19px;',
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
			style: 'position:absolute;left:96px;top:524px;width:796px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РеестрСоставил',
			style: 'position:absolute;left:424px;top:57px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:657px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыСоставителя',
			style: 'position:absolute;left:808px;top:57px;width:84px;height:19px;',
		},
	]
});