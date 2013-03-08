Ext.define('Справочники.ГруппыПочтовойРассылки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 437,width: 406,
	iconCls: 'bogus',
	title: 'Группы почтовой рассылки',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:324px;top:33px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:189px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:57px;width:304px;height:19px;',
		},
	]
});