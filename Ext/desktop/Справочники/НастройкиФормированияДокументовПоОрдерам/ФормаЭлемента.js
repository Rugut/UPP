Ext.define('Справочники.НастройкиФормированияДокументовПоОрдерам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 317,width: 561,
	iconCls: 'bogus',
	title: 'Настройка формирования документов по ордерам',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:57px;width:455px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:98px;top:33px;width:455px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:265px;width:455px;height:19px;',
		},
	]
});