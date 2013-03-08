Ext.define('Справочники.Регионы.ФормаВводаРегиона',
	{
	extend: 'Ext.window.Window',
	height: 272,width: 336,
	iconCls: 'bogus',
	title: 'Ввод региона',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Регион',
			style: 'position:absolute;left:102px;top:79px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Район',
			style: 'position:absolute;left:102px;top:103px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Город',
			style: 'position:absolute;left:102px;top:127px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаселенныйПункт',
			style: 'position:absolute;left:102px;top:151px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Представление',
			style: 'position:absolute;left:102px;top:179px;width:226px;height:60px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Страна',
			style: 'position:absolute;left:102px;top:33px;width:226px;height:19px;',
		},
	]
});