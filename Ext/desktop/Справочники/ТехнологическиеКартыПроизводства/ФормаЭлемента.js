Ext.define('Справочники.ТехнологическиеКартыПроизводства.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 660,
	iconCls: 'bogus',
	title: 'Технологические карты производства',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:588px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:446px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:98px;top:57px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:98px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтверждения',
			style: 'position:absolute;left:322px;top:81px;width:80px;height:19px;',
		},
	]
});