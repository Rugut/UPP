Ext.define('Справочники.СтатьиОборотовПоБюджетам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 457,width: 495,
	iconCls: 'bogus',
	title: 'Статьи оборотов по бюджетам',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:407px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:130px;top:33px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:130px;top:57px;width:357px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:130px;top:405px;width:357px;height:19px;',
		},
	]
});