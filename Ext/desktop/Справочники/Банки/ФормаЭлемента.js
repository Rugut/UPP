Ext.define('Справочники.Банки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 219,width: 362,
	iconCls: 'bogus',
	title: 'Банк',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:274px;top:85px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:61px;width:260px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:260px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:94px;top:85px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Город',
			style: 'position:absolute;left:94px;top:117px;width:260px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Адрес',
			style: 'position:absolute;left:94px;top:142px;width:260px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефоны',
			style: 'position:absolute;left:94px;top:167px;width:260px;height:19px;',
		},
	]
});