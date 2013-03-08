Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 751,
	iconCls: 'bogus',
	title: 'Расчет по модели бюджетирования',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасчета',
			style: 'position:absolute;left:121px;top:59px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:121px;top:84px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:191px;top:419px;width:209px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:526px;top:419px;width:217px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:121px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:221px;top:33px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойИсточникДанных',
			style: 'position:absolute;left:121px;top:108px;width:236px;height:19px;',
		},
	]
});