Ext.define('Справочники.Контрагенты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 454,width: 560,
	iconCls: 'bogus',
	title: 'Контрагенты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:472px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:338px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КомментарийСтрокой',
			style: 'position:absolute;left:94px;top:402px;width:458px;height:19px;',
		},
	]
});