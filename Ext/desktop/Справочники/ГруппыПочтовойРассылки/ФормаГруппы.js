Ext.define('Справочники.ГруппыПочтовойРассылки.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 400,
	iconCls: 'bogus',
	title: 'Группа Группы почтовой рассылки',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:67px;top:58px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:213px;top:58px;width:179px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:67px;top:33px;width:325px;height:19px;',
		},
	]
});