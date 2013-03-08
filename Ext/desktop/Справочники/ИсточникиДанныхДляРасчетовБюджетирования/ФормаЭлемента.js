Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 440,width: 601,
	iconCls: 'bogus',
	title: 'Элемент Источники данных для расчетов бюджетирования',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:370px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеРегистра',
			style: 'position:absolute;left:94px;top:57px;width:499px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:512px;top:33px;width:81px;height:19px;',
		},
	]
});