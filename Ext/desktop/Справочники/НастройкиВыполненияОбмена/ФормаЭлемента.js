Ext.define('Справочники.НастройкиВыполненияОбмена.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 508,
	iconCls: 'bogus',
	title: 'Настройки выполнения обмена',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:446px;top:33px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:90px;top:33px;width:319px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:528px;width:398px;height:19px;',
		},
	]
});