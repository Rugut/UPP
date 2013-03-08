Ext.define('Справочники.Мероприятия.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 425,width: 448,
	iconCls: 'bogus',
	title: 'Мероприятие предприятия',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:360px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:94px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:94px;top:105px;width:80px;height:19px;',
		},
	]
});