Ext.define('Справочники.КлючевыеРесурсыПредприятия.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 182,width: 430,
	iconCls: 'bogus',
	title: 'Ключевые ресурсы предприятия',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:58px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазоваяЕдиницаИзмерения',
			style: 'position:absolute;left:164px;top:106px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазаЗаданияПотребности',
			style: 'position:absolute;left:164px;top:130px;width:258px;height:19px;',
		},
	]
});