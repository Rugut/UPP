Ext.define('Справочники.ПроизвольныеОтчеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 323,width: 445,
	iconCls: 'bogus',
	title: 'Общая настройка отчета',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:33px;width:341px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Описание',
			style: 'position:absolute;left:8px;top:251px;width:429px;height:39px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:96px;top:58px;width:341px;height:19px;',
		},
	]
});