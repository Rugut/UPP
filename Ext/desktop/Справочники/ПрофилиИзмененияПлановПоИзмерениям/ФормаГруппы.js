Ext.define('Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 113,width: 406,
	iconCls: 'bogus',
	title: 'Группа Профили изменения планов по измерениям',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:317px;top:61px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:61px;width:179px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:304px;height:19px;',
		},
	]
});