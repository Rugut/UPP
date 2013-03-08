Ext.define('Справочники.СценарииПланирования.ФормаАвтозаполненияКурсов',
	{
	extend: 'Ext.window.Window',
	height: 180,width: 348,
	iconCls: 'bogus',
	title: '',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодовРаспределения',
			style: 'position:absolute;left:240px;top:32px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаУстановкиКурсов',
			style: 'position:absolute;left:240px;top:8px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсходныйКурс',
			style: 'position:absolute;left:240px;top:104px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПриращениеЗаПериод',
			style: 'position:absolute;left:240px;top:128px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КратностьНаИнтервал',
			style: 'position:absolute;left:240px;top:56px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособЗаполнения',
			style: 'position:absolute;left:240px;top:80px;width:100px;height:19px;',
		},
	]
});