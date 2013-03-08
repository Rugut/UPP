Ext.define('Справочники.СемейноеПоложениеФизЛиц.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 85,width: 406,
	iconCls: 'bogus',
	title: 'Семейное положение физических лиц',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
	]
});