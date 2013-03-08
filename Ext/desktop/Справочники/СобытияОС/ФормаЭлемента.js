Ext.define('Справочники.СобытияОС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 236,width: 451,
	iconCls: 'bogus',
	title: 'События основного средства',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:403px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:110px;top:33px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:110px;top:93px;width:333px;height:110px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСобытияОС',
			style: 'position:absolute;left:110px;top:60px;width:333px;height:19px;',
		},
	]
});