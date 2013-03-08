Ext.define('Справочники.НастройкиДопроведенияДокументов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 243,width: 458,
	iconCls: 'bogus',
	title: 'Настройка допроведения документов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:103px;top:33px;width:347px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:103px;top:191px;width:347px;height:19px;',
		},
	]
});