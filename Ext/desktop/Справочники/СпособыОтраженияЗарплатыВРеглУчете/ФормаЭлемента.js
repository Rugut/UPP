Ext.define('Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 408,width: 585,
	iconCls: 'bogus',
	title: 'Способы отражения зарплаты в регламентированном учете',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:33px;width:481px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:96px;top:56px;width:481px;height:19px;',
		},
	]
});