Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаВводаУдостоверения',
	{
	extend: 'Ext.window.Window',
	height: 160,width: 330,
	iconCls: 'bogus',
	title: 'Данные удостоверения физического лица',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументВид',
			style: 'position:absolute;left:118px;top:8px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументСерия',
			style: 'position:absolute;left:118px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументНомер',
			style: 'position:absolute;left:242px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументДатаВыдачи',
			style: 'position:absolute;left:118px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументКемВыдан',
			style: 'position:absolute;left:118px;top:83px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументКодПодразделения',
			style: 'position:absolute;left:118px;top:108px;width:80px;height:19px;',
		},
	]
});