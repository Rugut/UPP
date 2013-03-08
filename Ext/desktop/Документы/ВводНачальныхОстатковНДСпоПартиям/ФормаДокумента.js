Ext.define('Документы.ВводНачальныхОстатковНДСпоПартиям.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 484,width: 780,
	iconCls: 'bogus',
	title: 'Ввод начальных остатков НДС по партиям',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:103px;top:429px;width:669px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:426px;top:33px;width:346px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:103px;top:405px;width:669px;height:19px;',
		},
	]
});