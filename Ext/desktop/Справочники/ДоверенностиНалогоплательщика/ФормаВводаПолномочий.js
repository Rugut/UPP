Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаВводаПолномочий',
	{
	extend: 'Ext.window.Window',
	height: 478,width: 863,
	iconCls: 'bogus',
	title: 'Редактирование полномочий представителя',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОКАТО',
			style: 'position:absolute;left:54px;top:10px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:195px;top:10px;width:90px;height:19px;',
		},
	]
});