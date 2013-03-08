Ext.define('Справочники.ЗанятияКурсовОбучения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 400,
	iconCls: 'bogus',
	title: 'Занятия курсов обучения',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеЗанятия',
			style: 'position:absolute;left:8px;top:75px;width:384px;height:82px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДлительностьЗанятия',
			style: 'position:absolute;left:170px;top:162px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЗанятия',
			style: 'position:absolute;left:170px;top:186px;width:222px;height:19px;',
		},
	]
});