Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаИзображения',
	{
	extend: 'Ext.window.Window',
	height: 386,width: 400,
	iconCls: 'bogus',
	title: 'Форма данных об изображении',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:142px;top:58px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объект',
			style: 'position:absolute;left:142px;top:33px;width:250px;height:19px;',
		},
	]
});