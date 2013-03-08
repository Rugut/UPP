Ext.define('Справочники.ФизическиеЛица.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 498,width: 608,
	iconCls: 'bogus',
	title: 'Физическое лицо',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:48px;top:33px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:48px;top:57px;width:182px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВызоваДанныхФИО',
			text: 'Смена ФИО',
			style: 'position:absolute;left:486px;top:57px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:520px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:236px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:362px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:98px;top:81px;width:502px;height:19px;',
		},
	]
});