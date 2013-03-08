Ext.define('Справочники.СтрокиФинансовогоРасчета.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 161,width: 406,
	iconCls: 'bogus',
	title: 'Строки финансового расчета',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:182px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСтроки',
			style: 'position:absolute;left:94px;top:61px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Измерение',
			style: 'position:absolute;left:94px;top:85px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Формула',
			style: 'position:absolute;left:94px;top:109px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:317px;top:33px;width:81px;height:19px;',
		},
	]
});