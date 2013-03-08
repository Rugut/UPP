Ext.define('Справочники.НастройкиОбменаССайтом.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 579,width: 690,
	iconCls: 'bogus',
	title: 'Настройки обмена с WEB-сайтом',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:269px;top:527px;width:413px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:642px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:276px;top:33px;width:323px;height:19px;',
		},
	]
});