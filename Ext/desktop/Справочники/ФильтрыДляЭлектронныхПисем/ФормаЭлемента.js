Ext.define('Справочники.ФильтрыДляЭлектронныхПисем.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 423,width: 714,
	iconCls: 'bogus',
	title: 'Фильтры для электронных писем',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:640px;top:57px;width:66px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:99px;top:33px;width:502px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:99px;top:57px;width:502px;height:19px;',
		},
	]
});