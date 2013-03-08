Ext.define('Документы.ПлатежноеПоручениеВходящее.ФормаНазначениеПлатежа',
	{
	extend: 'Ext.window.Window',
	height: 185,width: 444,
	iconCls: 'bogus',
	title: 'Платежное поручение (входящее): Назначение платежа',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеПлатежа',
			style: 'position:absolute;left:8px;top:31px;width:428px;height:121px;',
		},
	]
});