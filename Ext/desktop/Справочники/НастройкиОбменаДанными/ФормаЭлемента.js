Ext.define('Справочники.НастройкиОбменаДанными.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 551,width: 507,
	iconCls: 'bogus',
	title: 'Настройки обмена данными',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:460px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:323px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:500px;width:398px;height:19px;',
		},
	]
});